import type { RosterRole } from "@/lib/content/roster";

/** Open roles only. The HOLD role (Political Strategist, Narrative Building) has no page or JobPosting. */
export const ROSTER_ROLES: readonly RosterRole[] = [
  {
    "slug": "political-research-analyst",
    "unit": "Political Intelligence Unit",
    "job": "Political Research Analyst",
    "title": "Political Research Analyst Jobs (PIU), Bhopal | BarnCops",
    "description": "Political research analyst job in BarnCops' Political Intelligence Unit: seat profiles, opposition research and issue mapping. Bhopal office plus field travel.",
    "intro": "The Political Intelligence Unit (PIU) knows a constituency before the campaign does. You will build seat profiles, opposition books and issue maps from public records, past results, local media and field reports, and hand the strategists a clear picture of who decides the seat and why.",
    "resp": [
      "Build constituency profiles: past results since 1952 (from the Election Atlas), caste and community mix from public sources, local issues and power centres.",
      "Prepare opposition research from public records: affidavits, assets, criminal cases, past statements and voting record.",
      "Track local and regional news daily and file a short morning brief for each active mandate.",
      "Design and supervise field listening exercises and small surveys with the Cluster Managers.",
      "Fact-check every claim that goes out from the Narrative and Creative teams."
    ],
    "must": [
      "Degree in political science, journalism, sociology, economics or similar, or equivalent experience.",
      "Strong reading of Hindi and English sources; clear written briefs.",
      "Careful with facts: every claim has a source.",
      "Comfortable with spreadsheets (Excel or Google Sheets)."
    ],
    "good": [
      "Experience with election affidavits, ECI data or RTI research.",
      "A regional language.",
      "Basic SQL or Python."
    ],
    "loc": "bhopal_field",
    "employmentType": "FULL_TIME",
    "track": "exp"
  },
  {
    "slug": "political-data-analyst",
    "unit": "Data Analysis Unit",
    "job": "Political Data Analyst",
    "title": "Data Analysis Unit — Political Data Analyst Jobs | BarnCops",
    "description": "Political data analyst job at BarnCops: booth-wise results, electoral rolls, swing models and dashboards for live campaigns. Bhopal office or work from home.",
    "intro": "The Data Analysis Unit turns raw election data into decisions. You will work with booth-wise results, electoral roll data, survey data and the Election Atlas to build win numbers, swing models and target booth lists for live campaigns.",
    "resp": [
      "Clean and join booth-wise results, electoral roll data and survey data for each mandate.",
      "Build win-number models, swing scenarios and booth targeting lists.",
      "Maintain dashboards that the war room reads every morning.",
      "Check data quality on every field report and flag gaps fast.",
      "Work with the AI Backend team to turn repeat analysis into features in mandata.ai and the Election Atlas."
    ],
    "must": [
      "Strong SQL and Python (pandas) or R; strong Excel.",
      "Experience in data analysis (any domain).",
      "Can explain a chart to a non-technical candidate in two sentences.",
      "Reads Hindi well enough to work with Hindi-language data."
    ],
    "good": [
      "Prior work with Indian election data (ECI, TCPD or similar).",
      "Statistics: regression, survey weighting, MRP.",
      "Mapping/GIS (QGIS, PostGIS)."
    ],
    "loc": "remote_or_bhopal",
    "employmentType": "FULL_TIME",
    "track": "exp"
  },
  {
    "slug": "ai-backend-engineer",
    "unit": "AI Backend Engineering",
    "job": "AI Backend Engineer (Python)",
    "title": "AI Backend Engineer Jobs (Python) — mandata.ai & Atlas | BarnCops",
    "description": "AI backend engineer job at BarnCops: build Python APIs, data pipelines and LLM features for mandata.ai and the Election Atlas. Work from home in India or Bhopal.",
    "intro": "You will build the systems behind mandata.ai, our constituency operating platform, and the Barnstorm Election Atlas, which holds every Lok Sabha and Vidhan Sabha result since 1952. The work covers data pipelines, APIs, search and AI features such as Ask Sarathi, used by campaigns and elected representatives.",
    "resp": [
      "Design and run Python backend services and APIs for mandata.ai and the Election Atlas.",
      "Build data pipelines for election results, electoral roll data and constituency records.",
      "Build and evaluate LLM features (retrieval, structured answers, Hindi and English) for Ask Sarathi.",
      "Own reliability, security and access control for sensitive political data.",
      "Work with the Data Analysis Unit to ship analysis as product features."
    ],
    "must": [
      "Professional experience building production Python backends.",
      "Strong SQL (PostgreSQL) and API design.",
      "Experience shipping at least one LLM feature to real users (RAG, evaluation, prompt and cost control).",
      "Good security habits for personal and sensitive data."
    ],
    "good": [
      "Cloud deployment and CI/CD.",
      "Search (full-text or vector).",
      "Hindi NLP.",
      "Interest in elections and governance."
    ],
    "loc": "remote_or_bhopal",
    "employmentType": "FULL_TIME",
    "track": "exp"
  },
  {
    "slug": "cluster-manager-election-field",
    "unit": "Cluster Managers (Field)",
    "job": "Cluster Manager (Election Field Operations)",
    "title": "Cluster Manager — Election Campaign Field Jobs | BarnCops",
    "description": "Cluster manager job at BarnCops: run election field operations across a cluster of assembly seats. Ongoing hiring for specific states; field-based.",
    "intro": "Cluster Managers run the ground campaign across a group of assembly segments. We have hired for this role already, and hiring stays open because we still need the right people in specific geographies. If you know a campaign region well and can lead a field team there, write to us. You will lead booth teams, run daily reporting into the war room, and make sure the plan on paper happens in every village and ward.",
    "resp": [
      "Manage field operations across a cluster of assembly segments.",
      "Recruit, train and manage booth-level coordinators and volunteers.",
      "Send nightly reports into mandata.ai and fix gaps the data team flags.",
      "Run voter outreach, events and local listening exercises to plan.",
      "Be the campaign's eyes on the ground: report local issues and risks the same day."
    ],
    "must": [
      "Field experience in elections, NGOs, sales or operations.",
      "Willing to travel and stay in the field during the campaign.",
      "Fluent spoken Hindi; basic smartphone and app skills.",
      "Calm under pressure; can manage a team."
    ],
    "good": [
      "Prior election campaign experience.",
      "Two-wheeler and driving licence.",
      "Knowledge of the assigned region."
    ],
    "loc": "field",
    "employmentType": "FULL_TIME",
    "track": "exp"
  },
  {
    "slug": "political-social-media-manager",
    "unit": "Narrative Team (Social Media)",
    "job": "Political Social Media Manager",
    "title": "Narrative Team — Political Social Media Manager Jobs | BarnCops",
    "description": "Political social media manager job at BarnCops' Narrative Team: run candidate pages, rapid response and short-form content on a 72-hour clock.",
    "intro": "The Narrative Team runs the campaign online. You will plan and publish across our clients' social channels, run rapid response, and measure what moves people, working on a 72-hour clock with the Narrative Building Unit and the Creative Team.",
    "resp": [
      "Plan and publish daily content for candidate and campaign pages.",
      "Run the rapid-response desk: track trends and opposition posts, and respond within agreed timelines.",
      "Brief the Creative Team; review every post against the campaign line.",
      "Report weekly on reach, engagement and what is working.",
      "Manage paid promotion budgets where the client approves."
    ],
    "must": [
      "Experience managing social media for brands, media or campaigns.",
      "Excellent Hindi and English writing for social media.",
      "Knows platform analytics and scheduling tools.",
      "Good judgement: you know what not to post."
    ],
    "good": [
      "Political campaign experience.",
      "Basic Canva or video editing.",
      "Experience with WhatsApp channels and communities."
    ],
    "loc": "bhopal",
    "employmentType": "FULL_TIME",
    "track": "exp"
  },
  {
    "slug": "political-graphic-designer",
    "unit": "Creative Team",
    "job": "Graphic Designer (Political Campaigns)",
    "title": "Creative Team — Political Graphic Designer Jobs | BarnCops",
    "description": "Graphic designer job in BarnCops' Creative Team: social posts, posters and campaign identity for election campaigns, in Hindi and English.",
    "intro": "The Creative Team makes everything voters see. As a graphic designer you will create social posts, posters, banners and campaign identities, fast and in Hindi and English, for live election campaigns.",
    "resp": [
      "Design daily social media creatives, posters and print material.",
      "Build and keep campaign identity systems (colours, type, templates).",
      "Turn data and research into clear infographics.",
      "Meet tight turnarounds during rapid response."
    ],
    "must": [
      "Portfolio showing social and print work.",
      "Adobe Photoshop and Illustrator (or Figma) skills.",
      "Hindi typography (Devanagari) skills."
    ],
    "good": [
      "Motion graphics.",
      "Political or advocacy campaign work."
    ],
    "loc": "remote_or_bhopal",
    "employmentType": "FULL_TIME",
    "track": "exp"
  },
  {
    "slug": "political-video-editor",
    "unit": "Creative Team",
    "job": "Video Editor (Political Campaigns)",
    "title": "Creative Team — Political Video Editor Jobs | BarnCops",
    "description": "Video editor job in BarnCops' Creative Team: short-form reels, speeches and campaign films for election campaigns, edited fast.",
    "intro": "As a video editor in the Creative Team you will cut reels, speech clips and campaign films for live election campaigns, often the same day the footage is shot.",
    "resp": [
      "Edit short-form reels and long-form videos for social media and events.",
      "Cut speech highlights and rapid-response clips on tight deadlines.",
      "Add subtitles in Hindi and English; keep brand templates consistent.",
      "Manage footage library and versions."
    ],
    "must": [
      "Portfolio of short-form and long-form edits.",
      "Premiere Pro, Final Cut or DaVinci Resolve.",
      "Hindi subtitling."
    ],
    "good": [
      "After Effects/motion graphics.",
      "Shooting on phone or camera.",
      "Political or news video experience."
    ],
    "loc": "remote_or_bhopal",
    "employmentType": "FULL_TIME",
    "track": "exp"
  },
  {
    "slug": "political-content-writer",
    "unit": "Creative Team",
    "job": "Political Content Writer (Hindi and English)",
    "title": "Creative Team — Political Content Writer Jobs | BarnCops",
    "description": "Political content writer job in BarnCops' Creative Team: scripts, posts, speeches and Election Atlas explainers in Hindi and English.",
    "intro": "As a content writer in the Creative Team you will write scripts, posts, speech drafts and explainers in Hindi and English, for campaigns and for the Barnstorm Election Atlas.",
    "resp": [
      "Write social posts, reel scripts and campaign copy in Hindi and English.",
      "Draft speeches and talking points from the Narrative Building Unit's line.",
      "Write data-led explainers for the Election Atlas.",
      "Check facts with the Political Intelligence Unit before anything goes out."
    ],
    "must": [
      "Excellent written Hindi and English.",
      "Writing samples (published or portfolio).",
      "Careful with facts and sources."
    ],
    "good": [
      "Journalism background.",
      "SEO writing.",
      "A regional language."
    ],
    "loc": "remote_or_bhopal",
    "employmentType": "FULL_TIME",
    "track": "exp"
  },
  {
    "slug": "political-research-intern",
    "unit": "Political Intelligence Unit",
    "job": "Political Research Intern",
    "title": "Political Research Internship (PIU), Bhopal | BarnCops",
    "description": "Political research internship in BarnCops' Political Intelligence Unit, Bhopal: seat profiles, news tracking and affidavit research on live campaigns.",
    "intro": "The internship track is how most of our analysts join. As a Political Research Intern in the Political Intelligence Unit you will help build constituency profiles, track local news and check facts for live campaigns, with a senior analyst reviewing your work every day.",
    "resp": [
      "Compile constituency profiles from the Election Atlas, public records and local media.",
      "Track Hindi and English news for assigned seats and file a short daily note.",
      "Pull candidate affidavit data (assets, cases, education) into clean sheets.",
      "Fact-check claims for the Narrative and Creative teams."
    ],
    "must": [
      "Final-year student or recent graduate in political science, journalism, sociology, economics or similar.",
      "Good reading of Hindi and English; clear, short writing.",
      "Comfortable with Excel or Google Sheets.",
      "Available full-time for the internship period."
    ],
    "good": [
      "A regional language.",
      "Any campus politics, NGO or survey fieldwork.",
      "Basic SQL or Python."
    ],
    "loc": "bhopal",
    "employmentType": "INTERN",
    "track": "intern"
  },
  {
    "slug": "election-data-analyst-intern",
    "unit": "Data Analysis Unit",
    "job": "Election Data Analyst Intern",
    "title": "Election Data Analyst Internship, Bhopal or Remote | BarnCops",
    "description": "Election data analyst internship at BarnCops: clean booth-wise results, build swing tables and charts for live campaigns. Bhopal office or work from home.",
    "intro": "The internship track is how most of our analysts join. As an Election Data Analyst Intern you will clean booth-wise results and roll data, build swing tables and charts, and learn how a war room actually uses numbers.",
    "resp": [
      "Clean and join booth-wise results and constituency data.",
      "Build swing tables, margin lists and simple charts for each mandate.",
      "Check field data for gaps and errors.",
      "Help keep Election Atlas data accurate."
    ],
    "must": [
      "Student or recent graduate in statistics, economics, computer science, engineering or similar.",
      "Python (pandas) or R, and strong Excel.",
      "Can explain a chart in two plain sentences.",
      "Available full-time for the internship period."
    ],
    "good": [
      "Any project with Indian election or census data.",
      "SQL.",
      "Mapping (QGIS)."
    ],
    "loc": "remote_or_bhopal",
    "employmentType": "INTERN",
    "track": "intern"
  }
];
