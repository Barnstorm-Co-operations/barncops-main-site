// Generated verbatim from the D6 content pack (final copy, 27 Nov 2026). Edit the copy, not the markup.

export type InlineText = string;

export type ServiceBlock =
  | { kind: "p"; text: InlineText }
  | { kind: "ul"; items: readonly InlineText[] }
  | { kind: "ol"; items: readonly InlineText[] }
  | { kind: "steps"; items: readonly InlineText[] }
  | { kind: "table"; head: readonly InlineText[]; rows: readonly (readonly InlineText[])[] };

export type ServicePageCopy = {
  path: string;
  title: string;
  description: string;
  h1: string;
  hero: {
    paragraphs: readonly InlineText[];
    stats: string | null;
    ctas: readonly { label: string; href: string }[];
  };
  sections: readonly { title: string; blocks: readonly ServiceBlock[] }[];
  faqTitle: string;
  faqs: readonly { q: string; a: string }[];
  closing: readonly { label: string; href: string }[];
  breadcrumbs: readonly (readonly [name: string, path: string])[];
  service: {
    name: string;
    serviceType: string;
    description: string;
    audienceType: string;
    relatedSoftware: string;
  };
};

export const politicalConsulting: ServicePageCopy = {
  path: "/political-consulting",
  title: "Political Consulting Company in India | BarnCops",
  description:
    "Political consulting firm in India since 2019: strategy, booth intelligence and war rooms for candidates, MLAs and MPs across 10+ states. Bhopal · Delhi.",
  h1: "Political consulting company in India, built on booth-level data",
  hero: {
    paragraphs: [
      "BarnCops (Barnstorm Co-operations) is a political consulting firm based in Bhopal, with studios in New Delhi and Hyderabad. It is led by founder and director [Shubh Tiwari](/shubh-tiwari), who has 13+ years in elections and political communication. Since 2019 we have worked with candidates, sitting MLAs and MPs, and party units on political strategy, booth-level intelligence, digital perception and war-room management — and, after the result, on running the constituency.",
    ],
    stats:
      "Since 2019 · 10+ states · 35+ parliamentary constituencies · 200+ assembly segments · 90 million+ elector records processed",
    ctas: [
      {
        label: "Send a confidential brief",
        href: "/contact",
      },
      {
        label: "See the mandates",
        href: "/work",
      },
    ],
  },
  sections: [
    {
      title: "What a political consultant does for you",
      blocks: [
        {
          kind: "p",
          text: "A political consultant should not leave you with a forty-slide deck. You should get working answers to five questions:",
        },
        {
          kind: "ol",
          items: [
            "**Where do I stand today?** A seat diagnosis built from past results, booth-wise vote shares, turnout and the local issue map. Our [Election Atlas](https://atlas.barncops.in/) holds every Lok Sabha and Vidhan Sabha result since 1952, so the diagnosis starts from the full record of your seat.",
            "**Which voters and booths decide this seat?** Booth universes built against the actual electoral roll, and the set of booths where the margin is really decided.",
            "**What is the line?** The theory of the race — win number, contrast, and a message the field can repeat — written on one page so a principal can remember it and a booth agent can execute it.",
            "**Who does what, every day?** A war room with named decision rights, a rapid-response desk and a weekly decision memo for the principal.",
            "**What happens after counting day?** A plan to govern and stay visible, so the next election does not start from zero.",
          ],
        },
      ],
    },
    {
      title: "How we work: from intake to an embedded seat",
      blocks: [
        {
          kind: "steps",
          items: [
            "**1. Confidential intake.** You send a brief: geography, timeline, who is in the room and whether you need advisory, [Mandata AI](/mandata) or both.",
            "**2. Strategic diagnostic.** A director reads it. If there is no fit, we say so. If there is, we name the problem in operating terms.",
            "**3. Mandate definition.** A 30-minute principals-only call, then a one-page proposal.",
            "**4. Operating cadence.** Decision rights, the weekly memo, nightly booth write-back and — if licensed — a Mandata AI instance under named roles.",
            "**5. Embedded execution.** A named strategic chair sits in your war room for the length of the mandate. Principals get the next 72 hours, not an archive.",
          ],
        },
      ],
    },
    {
      title: "The six practices behind every engagement",
      blocks: [
        {
          kind: "ul",
          items: [
            "**Narrative strategy** — win-number architecture, coalition math, contrast and surrogate discipline.",
            "**Booth-level intelligence** — booth universes against the roll, walkable turf, persuasion sequenced before turnout, nightly reconciliation.",
            "**Digital perception and social command** — perception audits, opposition books, short-form testing and a rapid-response desk on a 72-hour clock. See [political social media management](/political-social-media-management).",
            "**Ground war room** — named decision rights, paid and earned media run as one channel, crisis protocols. See [election campaign management](/election-campaign-management).",
            "**Digital organizing** — outreach lists, creative and conversion that write back to the constituency file.",
            "**Officeholder operations** — Jan-Sunwai, presence and MPLADS / MLACDS tracking for sitting MPs and MLAs.",
          ],
        },
      ],
    },
    {
      title: "Who we work with",
      blocks: [
        {
          kind: "ul",
          items: [
            "**Candidates** in an active or coming campaign window, contesting an assembly or Lok Sabha seat",
            "**Sitting MPs and MLAs** who treat constituency work as a second campaign",
            "**Party units and caucuses** at state or national level that need research, a war room or a shared constituency file",
            "**Constituency offices** that need grievance and fund-tracking discipline",
          ],
        },
        {
          kind: "p",
          text: "We sit with parties and principals across the spectrum, and we will not sit both sides of the same race.",
        },
      ],
    },
    {
      title: "Where we have worked",
      blocks: [
        {
          kind: "p",
          text: "Our campaign, field and constituency footprint covers Madhya Pradesh, Delhi, Maharashtra, Rajasthan, Haryana, Assam, Odisha, Telangana, Goa, Puducherry and Jammu & Kashmir. In Madhya Pradesh alone it covers 6 Lok Sabha seats and 30 assembly segments across the 2018 and 2023 assembly elections and the 2019 and 2024 Lok Sabha elections.",
        },
        {
          kind: "p",
          text: "Named mandates on the public record include:",
        },
        {
          kind: "ul",
          items: [
            "**Bharatiya Janata Party** — campaign engineering partner; **BJP Madhya Pradesh** (ground war room and booth file) and **BJP Jammu & Kashmir** (strategic campaign architecture)",
            "**Indian Youth Congress** — the Haath Uthao national youth mobilisation in the 2019 Lok Sabha election",
            "**Shri Shivraj Singh Chouhan** — narrative command and high-frequency media sentiment analysis during critical electoral phases",
            "**Panipat City (Haryana)** — two-cycle urban campaign command with a tracking layer later productised as Mandata AI",
            "**Adarsh Nagar (Delhi)** — booth micro-targeting that tied social media to ground work",
            "**Jammu & Kashmir** — an opposition war room across 25 target assembly seats",
          ],
        },
        {
          kind: "p",
          text: "Read the full [mandates](/work) and the [track record](/track-record). Seat-level results are on the public record; methods stay confidential.",
        },
        {
          kind: "p",
          text: "Seats we have worked on include Panipat City, Haryana (two consecutive urban assembly cycles); Adarsh Nagar, Delhi; six Lok Sabha seats in Madhya Pradesh — Bhopal, Indore, Gwalior, Jabalpur, Guna and Vidisha — and selected assembly segments there, including Bhopal Dakshin-Paschim, Bhopal Madhya, Govindpura, Indore-1, Lashkar and Katangi, across the 2018 and 2023 assembly elections and the 2019 and 2024 Lok Sabha elections; and 25 target assembly seats in Jammu & Kashmir.",
        },
      ],
    },
    {
      title: "Why booth-level data matters",
      blocks: [
        {
          kind: "p",
          text: "Most seats are not won across the whole constituency. They are won in a set of booths where turnout, a small swing or one community moves the margin. That is why we built the [Barnstorm Election Atlas](https://atlas.barncops.in/) — every Lok Sabha and Vidhan Sabha result since 1952 — and [Ask Sarathi](https://atlas.barncops.in/ask/), which answers election questions in plain English or Hindi. Every recommendation we make starts from that evidence.",
        },
      ],
    },
    {
      title: "After the result: Mandata AI",
      blocks: [
        {
          kind: "p",
          text: "Politics does not end on counting day; governance begins the next morning. [Mandata AI](/mandata), our constituency management platform, keeps Jan-Sunwai grievances, citizen outreach, booth intelligence and MPLADS / MLACDS tracking in one permissioned system, with role-based access, activity history and human oversight. The household in the campaign file becomes the household in the grievance inbox.",
        },
      ],
    },
    {
      title: "How engagements are scoped",
      blocks: [
        {
          kind: "p",
          text: "There are three ways to work with us:",
        },
        {
          kind: "ul",
          items: [
            "**Race command (90–180 days)** — a full advisory seat for candidates and party units inside a live or coming cycle: narrative strategy, booth design, digital perception, war-room management, and a Mandata AI instance where the file must persist.",
            "**Governing retainer (12 months)** — for sitting MPs and MLAs: officeholder operations, Jan-Sunwai workflows, MPLADS / MLACDS tracking, citizen connect and the platform.",
            "**Platform only (annual licence)** — Mandata AI under your own team, for parties and large offices that already have a consulting bench.",
          ],
        },
        {
          kind: "p",
          text: "Fees depend on the seat, the timeline and the scope. Send a confidential brief and we will tell you whether there is a fit and what the work would involve.",
        },
      ],
    },
  ],
  faqTitle: "Frequently asked questions",
  faqs: [
    {
      q: "What does a political consulting company do?",
      a: "It helps a candidate, sitting representative or party win and keep public support. That covers seat research, strategy and messaging, booth and war-room operations, digital perception and social media, and constituency management after the election.",
    },
    {
      q: "Which parties do you work with?",
      a: "We have worked with parties and principals across the spectrum, including the BJP, the Indian Youth Congress and leaders from several parties. Every engagement starts with a confidential conversation about fit, and we will not sit both sides of the same race.",
    },
    {
      q: "Which states do you work in?",
      a: "Our footprint covers 10+ states, including Madhya Pradesh, Delhi, Maharashtra, Rajasthan, Haryana, Assam, Odisha, Telangana, Goa, Puducherry and Jammu & Kashmir. We work from Bhopal, New Delhi and Hyderabad and take on mandates across India.",
    },
    {
      q: "Which seats have you worked on?",
      a: "Seats we have worked on include Panipat City, Haryana (two consecutive urban assembly cycles); Adarsh Nagar, Delhi; six Lok Sabha seats in Madhya Pradesh — Bhopal, Indore, Gwalior, Jabalpur, Guna and Vidisha — and selected assembly segments there, including Bhopal Dakshin-Paschim, Bhopal Madhya, Govindpura, Indore-1, Lashkar and Katangi, across the 2018 and 2023 assembly elections and the 2019 and 2024 Lok Sabha elections; and 25 target assembly seats in Jammu & Kashmir. Seat-level results are on the public record.",
    },
    {
      q: "How early should a campaign hire a political consultant?",
      a: "A race command runs 90 to 180 days. Starting earlier gives time for the diagnosis, booth universes and message testing. Inside 90 days the work becomes mostly logistics, and we say so at intake if the clock is already against you.",
    },
    {
      q: "Do you guarantee a win?",
      a: "No. No honest political consultant can. What we commit to is the method: evidence-based strategy, named decision rights, daily accountability and transparent reporting to the principal.",
    },
    {
      q: "What is Mandata AI?",
      a: "Mandata AI is our constituency management platform for sitting MPs and MLAs. It brings Jan-Sunwai grievance workflows, citizen outreach, booth intelligence and MPLADS / MLACDS tracking into one system, with role-based access and human oversight.",
    },
  ],
  closing: [
    {
      label: "Send a confidential brief →",
      href: "/contact",
    },
    {
      label: "Explore Mandata AI",
      href: "/mandata",
    },
    {
      label: "Election Atlas",
      href: "https://atlas.barncops.in/",
    },
  ],
  breadcrumbs: [
    ["Services", "/advisory"],
    ["Political consulting", "/political-consulting"],
  ],
  service: {
    name: "Political consulting for candidates, MLAs, MPs and party units",
    serviceType: "Political consulting",
    description:
      "Political strategy, booth-level intelligence, digital perception, war-room management and constituency operations for candidates, sitting MPs and MLAs, and party units across India.",
    audienceType: "Election candidates, sitting MPs and MLAs, political party units",
    relatedSoftware: "Mandata AI",
  },
};

export const electionCampaignManagement: ServicePageCopy = {
  path: "/election-campaign-management",
  title: "Election Campaign Management Company in India | BarnCops",
  description:
    "End-to-end election campaign management: surveys, war room, booth management, narrative, digital and polling-day operations. 10+ states since 2019.",
  h1: "Election campaign management, from the first booth file to the last vote",
  hero: {
    paragraphs: [
      "BarnCops (Barnstorm Co-operations) runs election campaigns end to end for candidates, sitting representatives and party units. One team owns the seat diagnosis, the narrative, the war room, booth operations and digital command, so nothing falls between three vendors with three files. The work is led by [Shubh Tiwari](/shubh-tiwari), who has 13+ years in elections and political communication.",
    ],
    stats: "Since 2019 · 10+ states · 35+ parliamentary constituencies · 200+ assembly segments",
    ctas: [
      {
        label: "Send a confidential brief",
        href: "/contact",
      },
    ],
  },
  sections: [
    {
      title: "What end-to-end campaign management includes",
      blocks: [
        {
          kind: "table",
          head: ["Module", "What you get"],
          rows: [
            [
              "Seat diagnosis",
              "Results since 1952 from our [Election Atlas](https://atlas.barncops.in/), booth-wise swing, turnout and opposition mapping",
            ],
            [
              "Field research",
              "A named service: surveys and focus groups, from booth-level surveys down to household and cluster level, plus issue mapping and voter feedback from the ground",
            ],
            [
              "Narrative strategy",
              "Win number, contrast, coalition math and a one-page theory of the race",
            ],
            [
              "War room",
              "A command centre with named decision rights, a rapid-response desk and a weekly decision memo",
            ],
            [
              "Booth management",
              "Booth universes against the electoral roll, walkable turf and nightly reconciliation",
            ],
            [
              "Volunteers and ground",
              "Volunteer and field tracking on one live file, not spreadsheets",
            ],
            [
              "Digital and social media",
              "Perception audits, short-form content, rapid response — see [political social media management](/political-social-media-management)",
            ],
            [
              "Polling day",
              "Booth agents; our own app to monitor voting at the booth on polling day and generate voter slips (a voter ID lookup for the booth team, not an official ID); and a polling-day war room / control room",
            ],
          ],
        },
        {
          kind: "p",
          text: "You can engage the whole campaign or single modules.",
        },
      ],
    },
    {
      title: "Field research: surveys and focus groups",
      blocks: [
        {
          kind: "p",
          text: "Surveys and focus groups are a separate, named service. We run them from booth-level surveys down to household and cluster level, and use the findings for issue mapping and voter feedback — so the war room is deciding from field data, not folklore.",
        },
      ],
    },
    {
      title: "Polling day",
      blocks: [
        {
          kind: "p",
          text: "On polling day we put booth agents on the ground, run a polling-day war room (control room), and give the team our own app to monitor voting at the booth and generate voter slips — a voter ID lookup for the booth team, not an official voter ID.",
        },
      ],
    },
    {
      title: "The election war room",
      blocks: [
        {
          kind: "p",
          text: "The war room is where the campaign actually runs. We set it up with named decision rights, paid and earned media run as one channel, crisis protocols and a rapid-response desk. Every morning it answers three questions: what changed yesterday, which booths are behind plan, and what each team does today. Principals get a one-page decision memo each week. The field gets a sentence it can execute.",
        },
        {
          kind: "p",
          text: "In the last thirty days the war room decides whether the campaign runs on logistics or on panic. That is the part we are hired to own.",
        },
      ],
    },
    {
      title: "Booth management: universes, turf and nightly write-back",
      blocks: [
        {
          kind: "p",
          text: "Booth management starts with booth universes built against the actual electoral roll, not a ground-team rumour. Turf is given a quality rule so walk lists stay clean, persuasion is sequenced before turnout, and contacts and IDs reconcile every night. By morning the file shows which booths moved and what to do before noon.",
        },
        {
          kind: "p",
          text: "In Adarsh Nagar, Delhi, this meant writing social media output onto booth maps so the ground team could walk the same turf the digital desk was producing. Read the [mandate](/work).",
        },
      ],
    },
    {
      title: "One file for media, booths and volunteers",
      blocks: [
        {
          kind: "p",
          text: "Many campaigns buy media, booth work and volunteer tracking as three separate vendor problems. Nothing writes back, and the next cycle starts from folklore. In Panipat City, Haryana, we ran two consecutive urban cycles as one room: integrated media and social command, booth management against the roll, and a real-time voter and volunteer tracking application. That tracking layer was later productised as [Mandata AI](/mandata).",
        },
      ],
    },
    {
      title: "Campaigns we have run",
      blocks: [
        {
          kind: "ul",
          items: [
            "**Indian Youth Congress, 2019 Lok Sabha** — the Haath Uthao national youth mobilisation, with a data structure usable at parliamentary-constituency level",
            "**BJP Madhya Pradesh** — ground war room and booth file",
            "**Jammu & Kashmir** — an opposition war room across 25 target assembly seats: counter-narrative, media disruption and booth mobilisation as one file",
            "**Madhya Pradesh** — 6 Lok Sabha seats and 30 assembly segments across the 2018 and 2023 assembly and the 2019 and 2024 Lok Sabha elections",
          ],
        },
        {
          kind: "p",
          text: "See the full [track record](/track-record).",
        },
      ],
    },
    {
      title: "A typical timeline",
      blocks: [
        {
          kind: "ul",
          items: [
            "**Intake and diagnosis:** confidential brief, a director's review, a 30-minute principals-only call, then a one-page proposal",
            "**Set-up:** theory of the race, booth universes, war-room cadence and decision rights",
            "**Race command (90–180 days):** the war room is live, booth and volunteer operations run on nightly write-back, rapid response is on a 72-hour clock",
            "**Last 30 days:** daily war-room rhythm and polling-day planning",
            "**After counting:** the campaign file moves into Mandata AI for constituency management",
          ],
        },
      ],
    },
    {
      title: "After the result",
      blocks: [
        {
          kind: "p",
          text: "The booth file should not reset on counting day. With [Mandata AI](/mandata), the same households and booths carry Jan-Sunwai grievances, citizen outreach and MPLADS / MLACDS tracking once the seat is won. Want to understand a seat's history first? Explore it on the [Election Atlas](https://atlas.barncops.in/) or [Ask Sarathi](https://atlas.barncops.in/ask/).",
        },
      ],
    },
  ],
  faqTitle: "Frequently asked questions",
  faqs: [
    {
      q: "What is election campaign management?",
      a: "It is the planning and day-to-day running of an election campaign: seat research, surveys and focus groups, strategy and narrative, the war room, booth and volunteer operations, digital and media, and polling-day logistics.",
    },
    {
      q: "What is an election war room?",
      a: "A central command team with named decision rights. It tracks every part of the campaign daily, fixes gaps booth by booth, runs rapid response and briefs the candidate with a short decision memo.",
    },
    {
      q: "How is booth management done in an election?",
      a: "Booths are mapped against the electoral roll and past results, turf is assigned with a quality rule, and contacts are reconciled every night so the war room knows which booths moved and where to act next.",
    },
    {
      q: "Do you offer surveys and focus groups?",
      a: "Yes. Surveys and focus groups are a named service, run from booth-level surveys down to household and cluster level, alongside issue mapping and voter feedback from the ground.",
    },
    {
      q: "What do you do on polling day?",
      a: "We deploy booth agents, run a polling-day war room (control room), and use our own app to monitor voting at the booth and generate voter slips for the booth team (a voter ID lookup, not an official ID).",
    },
    {
      q: "Can you manage only one part of a campaign, such as surveys or the war room?",
      a: "Yes. Modules such as surveys and focus groups, the war room, booth management or digital command can be engaged on their own or together.",
    },
    {
      q: "How long does a campaign engagement last?",
      a: "A race command typically runs 90 to 180 days. Inside 90 days the work is mostly logistics, and we tell you at intake if the clock is already against the campaign.",
    },
    {
      q: "What happens to campaign data after the election?",
      a: "With Mandata AI the booth and household file carries on after counting day, so a sitting representative can run Jan-Sunwai, citizen outreach and MPLADS / MLACDS tracking on the same data.",
    },
  ],
  closing: [
    {
      label: "Send a confidential brief →",
      href: "/contact",
    },
    {
      label: "Explore Mandata AI",
      href: "/mandata",
    },
    {
      label: "Election Atlas",
      href: "https://atlas.barncops.in/",
    },
  ],
  breadcrumbs: [
    ["Services", "/advisory"],
    ["Election campaign management", "/election-campaign-management"],
  ],
  service: {
    name: "Election campaign management and war-room operations",
    serviceType: "Election campaign management",
    description:
      "End-to-end election campaign management for candidates and party units: seat diagnosis, surveys and focus groups, narrative strategy, war room, booth management, digital command, volunteers, booth agents, a polling-day app for voter-slip lookup, and a polling-day war room.",
    audienceType: "Election candidates, sitting MPs and MLAs, political party units",
    relatedSoftware: "Mandata AI",
  },
};

export const politicalSocialMediaManagement: ServicePageCopy = {
  path: "/political-social-media-management",
  title: "Political Social Media Management for Leaders | BarnCops",
  description:
    "Social media management for MLAs, MPs and candidates: content, rapid response, sentiment tracking and digital command, tied to booth data.",
  h1: "Political social media management for leaders and campaigns",
  hero: {
    paragraphs: [
      "BarnCops (Barnstorm Co-operations) manages social media and digital perception for MLAs, MPs, candidates and party units. The practice is led by [Shubh Tiwari](/shubh-tiwari), who has 13+ years in elections and political communication. Our content starts from the constituency — the work done, the issues raised, the booths that matter — and the results are written back to the booth file, not left in a monthly reach report.",
      "Shubh's research on social media management in politics started years ago, around 2013–14, when most campaigns had not yet begun using social media.",
    ],
    stats: null,
    ctas: [
      {
        label: "Send a confidential brief",
        href: "/contact",
      },
    ],
  },
  sections: [
    {
      title: "What we manage",
      blocks: [
        {
          kind: "ul",
          items: [
            "**Social platforms** — Facebook, Instagram, X and YouTube: daily content, short-form video, live coverage and comment management",
            "**Perception audits** — where the leader stands online today, and the opposition book",
            "**Sentiment and media monitoring** — high-frequency tracking of coverage, mentions and opposition narratives",
            "**Rapid response** — a desk that kills stale or false claims before they harden",
            "**Digital organizing** — outreach lists, creative and conversion that write back to the constituency file",
            "**WhatsApp** — messaging and narrative; we build and run WhatsApp channels and group networks for clients",
          ],
        },
      ],
    },
    {
      title: "Content that comes from the constituency",
      blocks: [
        {
          kind: "p",
          text: "Generic content calendars do not move votes. Every week we turn real constituency work into content: Jan-Sunwai cases resolved, works sanctioned or finished, visits and meetings. When the leader's office uses [Mandata AI](/mandata), this material is already recorded, so posts are accurate and quick to approve.",
        },
      ],
    },
    {
      title: "A 72-hour clock, not a weekly clip reel",
      blocks: [
        {
          kind: "p",
          text: "Political media moves faster than a monthly plan. We run digital perception on a 72-hour clock: the day's coverage and sentiment set the line for the next cycle of speeches, surrogates and short-form video. Short-form content is tested with a kill criterion, so what does not work is dropped quickly.",
        },
        {
          kind: "p",
          text: "For Shri Shivraj Singh Chouhan, Barnstorm Co-operations ran high-frequency media sentiment analysis and social-strategic alignment during critical electoral phases. The result was a standing 72-hour narrative cadence instead of waiting on a weekly reel. Read the [mandate](/work).",
        },
      ],
    },
    {
      title: "Social media that maps to booths",
      blocks: [
        {
          kind: "p",
          text: "Online reach that never reaches a booth is a second campaign with its own clock. In Adarsh Nagar, Delhi, we synchronised social media operations with ground campaigning and booth-level mapping, so field teams could walk the same turf the digital desk was producing. That is the standard we hold every social media mandate to. See [election campaign management](/election-campaign-management) for how the war room and the booth file work together.",
        },
      ],
    },
    {
      title: "Rapid response and reputation",
      blocks: [
        {
          kind: "p",
          text: "A false claim or a viral clip needs an answer within hours. Our response protocol is simple: verify, draft, approve, publish — using facts from the [Election Atlas](https://atlas.barncops.in/) and the leader's own record. Nothing is published without a named approver.",
        },
      ],
    },
    {
      title: "Ads, compliance and reporting",
      blocks: [
        {
          kind: "p",
          text: "Political ads must follow platform rules and Election Commission of India guidelines, including the Model Code of Conduct during elections. We run paid social for clients, including election ads, through valid, compliant options. We focus on organic reach first, and usually get a strong response that way; paid ads are used where they are needed. Clients receive regular reports.",
        },
      ],
    },
    {
      title: "Year-round or campaign mode",
      blocks: [
        {
          kind: "ul",
          items: [
            "**Year-round (governing retainer):** steady visibility for a sitting MP or MLA, built around constituency work and Jan-Sunwai",
            "**Campaign mode (race command):** higher frequency, war-room integration, rapid response and polling-day messaging",
          ],
        },
      ],
    },
    {
      title: "Language",
      blocks: [
        {
          kind: "p",
          text: "We write in Hindi, English and whatever regional languages the client needs.",
        },
      ],
    },
  ],
  faqTitle: "Frequently asked questions",
  faqs: [
    {
      q: "What does a political social media manager do?",
      a: "They plan and publish a leader's content on Facebook, Instagram, X, YouTube and WhatsApp, manage comments, track sentiment and coverage, run paid ads where needed, respond to attacks quickly and tie online activity back to the constituency and its booths.",
    },
    {
      q: "How is political social media different from brand social media?",
      a: "It runs on a faster clock and higher stakes. A false claim has to be answered within hours, content must come from real constituency work, and every message has to fit the campaign's narrative and the election rules.",
    },
    {
      q: "Can you run social media for a sitting MLA or MP between elections?",
      a: "Yes. A governing retainer keeps a sitting representative visible all year, built around Jan-Sunwai cases, development works and constituency visits.",
    },
    {
      q: "Do you handle WhatsApp campaigns?",
      a: "Yes. We build and run WhatsApp channels and group networks for clients, and we handle WhatsApp messaging and narrative as part of the social media mandate.",
    },
    {
      q: "Can you work in Hindi and regional languages?",
      a: "Yes. We write in Hindi, English and whatever regional languages the client needs.",
    },
    {
      q: "Is political advertising allowed during elections?",
      a: "Yes, within platform rules and Election Commission of India guidelines, including the Model Code of Conduct. Political ads need the required disclosures and, where applicable, pre-certification.",
    },
    {
      q: "Do you run paid ads for political campaigns?",
      a: "Yes. We run paid social, including election ads, through valid, compliant options. We focus on organic reach first and usually get a strong response that way; paid ads are used where they are needed. Clients receive regular reports.",
    },
    {
      q: "How do you handle a fake news attack or a viral clip?",
      a: "Through a rapid-response protocol: verify the facts, draft a reply, get a named approver's sign-off and publish, usually within hours.",
    },
    {
      q: "Do you work only during elections?",
      a: "No. Most leaders need year-round visibility. Campaign mode adds intensity, war-room integration and rapid response before polling.",
    },
  ],
  closing: [
    {
      label: "Send a confidential brief →",
      href: "/contact",
    },
    {
      label: "Explore Mandata AI",
      href: "/mandata",
    },
    {
      label: "Election Atlas",
      href: "https://atlas.barncops.in/",
    },
  ],
  breadcrumbs: [
    ["Services", "/advisory"],
    ["Political social media management", "/political-social-media-management"],
  ],
  service: {
    name: "Political social media management and digital perception",
    serviceType: "Political social media management",
    description:
      "Social media management on Facebook, Instagram, X, YouTube and WhatsApp, sentiment analysis, rapid response, paid ads and digital organizing for MLAs, MPs, candidates and party units, written back to booth-level data.",
    audienceType: "Election candidates, sitting MPs and MLAs, political party units",
    relatedSoftware: "Mandata AI",
  },
};
