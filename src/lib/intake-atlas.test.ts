import assert from "node:assert/strict";
import test from "node:test";
import { chooseAtlasReply, isAtlasQuestion, looksDataQuestion, readAtlasAskJson } from "./intake-engine.ts";

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
