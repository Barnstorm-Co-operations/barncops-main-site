import assert from "node:assert/strict";
import test from "node:test";
import { chooseAtlasReply, isAtlasQuestion, looksDataQuestion, readAtlasAskJson, sendWhatsAppDocument } from "./intake-engine.ts";

const HIJACK = /Noted — Election Atlas|consulting mandate|नोट किया — Election Atlas/;
const QUERIES = [
  "bhilwara 2023",
  "shivraj singh choouhan",
  "ujjain north 2018",
  "madhya pradesh",
  "bihar 2020",
  "भिलवाड़ा 2023",
  "शिवराज सिंह चौहान",
  "indore-2 2023",
  "ragjarh 2018",
  "kanker vidhan sabha",
];

test("data questions are atlas questions and never the consulting note", () => {
  for (const q of QUERIES) {
    assert.equal(looksDataQuestion(q), true, q);
    assert.equal(isAtlasQuestion(q), true, q);
    const missed = chooseAtlasReply(q, null, false);
    assert.equal(missed.handler, "atlas_miss", q);
    assert.equal(HIJACK.test(missed.text), false, missed.text);
    const answered = chooseAtlasReply(q, "Bhilwara 2023: sample result.", false);
    assert.equal(answered.handler, "engine", q);
    assert.equal(HIJACK.test(answered.text), false);
  }
});

test("quota text from Atlas is kept", () => {
  const q = "bhilwara 2023";
  const text = "Your 3 free answers are used. Ask 30 gives 30 days of answers.\nhttps://rzp.io/rzp/cRygO4N";
  const out = chooseAtlasReply(q, text, false);
  assert.equal(out.handler, "quota");
  assert.equal(HIJACK.test(out.text), false);
});

test("explicit consult with no Atlas text is the lead note", () => {
  const out = chooseAtlasReply("I need a consulting proposal", null, false);
  assert.equal(out.handler, "access_enquiry");
  assert.equal(HIJACK.test(out.text), true);
});

test("a scheduling reply is not stolen as a leader query", () => {
  assert.equal(looksDataQuestion("yes tomorrow"), false);
  assert.equal(looksDataQuestion("MLA"), false);
});

test("Atlas JSON keeps the WhatsApp document and all four report buttons", () => {
  const got = readAtlasAskJson({
    text: "Malwa-Punjab.pdf",
    handler: "writer",
    intent: "pdf",
    attach: true,
    document: { filename: "Malwa-Punjab.pdf", mime: "application/pdf", bytes: "JVBERi0x" },
    buttons: [
      { id: "step_depth", title: "More detail" },
      { id: "step_breadth", title: "Nearby" },
      { id: "step_money", title: "My plan" },
      { id: "step_pdf", title: "PDF" },
    ],
  });
  assert.equal(!!got, true);
  assert.equal(got && got.attach, true);
  assert.equal(got && got.document && got.document.filename, "Malwa-Punjab.pdf");
  assert.equal(got && got.text, "");
  assert.equal(got && got.buttons && got.buttons.length, 4);
  assert.equal(got && got.intent, "pdf");
  const byUrl = readAtlasAskJson({
    text: "",
    handler: "writer",
    intent: "pdf",
    attach: true,
    document: { filename: "Tirwa.pdf", mime: "application/pdf", url: "https://atlas.barncops.in/api/wa-ask/?t=abc" },
  });
  assert.equal(!!(byUrl && byUrl.document && byUrl.document.url), true);
  assert.equal(byUrl && byUrl.text, "");
  const ask = readAtlasAskJson({
    text: "A PDF in this chat costs from ₹49.",
    handler: "writer",
    intent: "pdf",
    attach: false,
    buttons: [{ id: "step_pdf", title: "PDF" }],
  });
  assert.equal(ask && ask.attach, false);
  assert.equal(ask && ask.document, undefined);
});

test("WhatsApp document uses a PDF URL and never a .pdf line", async () => {
  const prevTok = process.env.WHATSAPP_BUSINESS_TOKEN;
  const prevId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  process.env.WHATSAPP_BUSINESS_TOKEN = "tok";
  process.env.WHATSAPP_PHONE_NUMBER_ID = "111";
  const sent: { link?: string; id?: string }[] = [];
  const orig = globalThis.fetch;
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input);
    const method = String((init && init.method) || "GET").toUpperCase();
    if (url.includes("/api/wa-ask/") && method === "HEAD") {
      return new Response(null, { status: 200, headers: { "content-type": "application/pdf" } });
    }
    if (url.includes("graph.facebook.com") && url.includes("/messages")) {
      const body = JSON.parse(String((init && init.body) || "{}")) as { document?: { link?: string; id?: string } };
      sent.push(body.document || {});
      return new Response("{}", { status: 200 });
    }
    return new Response("no", { status: 500 });
  }) as typeof fetch;
  try {
    const r = await sendWhatsAppDocument("91", {
      filename: "Tirwa.pdf",
      mime: "application/pdf",
      url: "https://atlas.barncops.in/api/wa-ask/?t=abc",
    });
    assert.equal(r.ok, true);
    assert.equal(sent[0] && sent[0].link, "https://atlas.barncops.in/api/wa-ask/?t=abc");
    assert.equal(sent[0] && sent[0].id, undefined);
  } finally {
    globalThis.fetch = orig;
    if (prevTok == null) delete process.env.WHATSAPP_BUSINESS_TOKEN;
    else process.env.WHATSAPP_BUSINESS_TOKEN = prevTok;
    if (prevId == null) delete process.env.WHATSAPP_PHONE_NUMBER_ID;
    else process.env.WHATSAPP_PHONE_NUMBER_ID = prevId;
  }
});

test("a URL that is not a PDF sends the built file, or says the file was not built", async () => {
  const prevTok = process.env.WHATSAPP_BUSINESS_TOKEN;
  const prevId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  process.env.WHATSAPP_BUSINESS_TOKEN = "tok";
  process.env.WHATSAPP_PHONE_NUMBER_ID = "111";
  const sent: { link?: string; id?: string }[] = [];
  const orig = globalThis.fetch;
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input);
    if (url.includes("/api/wa-ask/")) {
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "content-type": "application/json" } });
    }
    if (url.includes("/media")) {
      return new Response(JSON.stringify({ id: "media-1" }), { status: 200 });
    }
    if (url.includes("graph.facebook.com") && url.includes("/messages")) {
      const body = JSON.parse(String((init && init.body) || "{}")) as { document?: { link?: string; id?: string } };
      sent.push(body.document || {});
      return new Response("{}", { status: 200 });
    }
    return new Response("no", { status: 500 });
  }) as typeof fetch;
  try {
    const missing = await sendWhatsAppDocument("91", {
      filename: "Tirwa.pdf",
      mime: "application/pdf",
      url: "https://atlas.barncops.in/api/wa-ask/?t=abc",
    });
    assert.equal(missing.ok, false);
    assert.match(String(missing.error || ""), /file was not built/i);
    const built = await sendWhatsAppDocument("91", {
      filename: "Tirwa.pdf",
      mime: "application/pdf",
      url: "https://atlas.barncops.in/api/wa-ask/?t=abc",
      bytes: Buffer.from("%PDF-1.4 built").toString("base64"),
    });
    assert.equal(built.ok, true);
    assert.equal(sent[0] && sent[0].id, "media-1");
    assert.equal(sent[0] && sent[0].link, undefined);
  } finally {
    globalThis.fetch = orig;
    if (prevTok == null) delete process.env.WHATSAPP_BUSINESS_TOKEN;
    else process.env.WHATSAPP_BUSINESS_TOKEN = prevTok;
    if (prevId == null) delete process.env.WHATSAPP_PHONE_NUMBER_ID;
    else process.env.WHATSAPP_PHONE_NUMBER_ID = prevId;
  }
});
