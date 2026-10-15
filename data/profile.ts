/**
 * All site copy lives here. Facts come from Sudipa's CV (2026).
 * Phone number and referee names are intentionally NOT published on the site.
 */
export const person = {
  name: "Sudipa Subedi",
  domain: "sudipasubedi.com.np",
  url: "https://sudipasubedi.com.np",
  role: "Accountant",
  pursuit: "MBA Candidate",
  /** Fill in the school when you're ready to publish it, e.g. "Kathmandu University School of Management". */
  school: "",
  location: "Bharatpur, Chitwan · Nepal",
  email: "sudipasubedi2024@gmail.com",
  linkedin: "https://www.linkedin.com/in/sudipa-subedi",
  resume: "/Sudipa_Subedi_CV.pdf",
  practiceSince: "2021-09-01",
  availability: "Open to roles in accounting, finance, banking, administration & management",
  /** WhatsApp number in international format, digits only. Set to "" to hide the floating button. */
  whatsapp: "9779867746750",
  headline: ["Precision in the ledger.", "Perspective in the boardroom."],
  intro:
    "An accountant with hands-on experience across five sectors — from a national cricket-stadium build to hospitality and co-operative finance — now pursuing an MBA to carry that discipline into finance, administration and management.",
};

export const mailto =
  `mailto:${person.email}?subject=` +
  encodeURIComponent("Introduction — via sudipasubedi.com.np") +
  "&body=" +
  encodeURIComponent(
    "Dear Sudipa,\n\nI came across your portfolio and would like to discuss:\n\n— Role / opportunity:\n— Organisation:\n— A convenient time to speak:\n\nKind regards,\n"
  );

/** Hero figures — every number is verifiable from the CV. */
export const figures = [
  { value: "4+", unit: "years", label: "in professional finance practice" },
  { value: "5", unit: "sectors", label: "construction · hospitality · co-operative · advisory · manufacturing" },
  { value: "1", unit: "national project", label: "Gautam Buddha International Cricket Stadium" },
];

export const thesis = {
  statement: ["Every figure tells a story.", "My work is making sure it is a true one."],
  principles: [
    { n: "I", title: "Precision is a form of respect.", body: "Clean books let everyone downstream — owners, auditors, lenders — decide with confidence." },
    { n: "II", title: "An audit trail is a promise.", body: "Every entry should be explainable months later, by someone who wasn't in the room." },
    { n: "III", title: "Reports should answer the next question.", body: "Numbers matter most when they help management see what to do on Monday morning." },
  ],
};

export type Engagement = {
  ref: string;
  entity: string;
  sector: string;
  role: string;
  period: string;
  scale: string; // hero figure
  scaleNote: string;
  mandate: string;
  vector: "Financial Control" | "Cost Control" | "Business Analysis" | "Governance" | "Bookkeeping";
  detail: string[];
  current?: boolean;
};

export const ledger: Engagement[] = [
  {
    ref: "L-05",
    entity: "B.B.R Construction Pvt. Ltd.",
    sector: "Infrastructure",
    role: "Accountant · now part-time",
    period: "Jan 2025 — Present",
    scale: "National",
    scaleNote: "stadium-scale project accounts",
    mandate: "Cost and payment control for the Gautam Buddha International Cricket Stadium build.",
    vector: "Cost Control",
    detail: [
      "Daily records of labour salaries, material costs and project activity in Excel and Tally.",
      "Tracked construction expenditure and vendor payments against budget.",
      "Periodic financial reports supporting budget control and audit readiness.",
    ],
    current: true,
  },
  {
    ref: "L-04",
    entity: "Galaxy Garden Resort Pvt. Ltd.",
    sector: "Hospitality",
    role: "Accountant",
    period: "Jul 2025 — Apr 2026",
    scale: "Daily",
    scaleNote: "close of books, ten months",
    mandate: "Kept a resort's books current, reconciled and audit-ready.",
    vector: "Financial Control",
    detail: [
      "Maintained daily financial records in Microsoft Excel and Aegies accounting software.",
      "Tracked vendor payments and supported routine account reconciliation.",
      "Prepared regular reports for budget compliance and audit readiness.",
    ],
  },
  {
    ref: "L-03",
    entity: "Comprehensive Business Management Nepal",
    sector: "Advisory",
    role: "Intern",
    period: "Jul 2024 — Jan 2025",
    scale: "6 mo",
    scaleNote: "advisory exposure",
    mandate: "Financial documentation, market research and business analysis for an advisory firm.",
    vector: "Business Analysis",
    detail: [
      "Supported financial documentation and data entry.",
      "Assisted market research and basic business analysis.",
      "Learned how an advisory practice runs end to end.",
    ],
  },
  {
    ref: "L-02",
    entity: "Margadarshan SACCOS",
    sector: "Co-operative finance",
    role: "Intern",
    period: "Nov 2022 — Apr 2023",
    scale: "Co-op",
    scaleNote: "member-owned finance",
    mandate: "Record-keeping inside a savings & credit co-operative, close to its lending decisions.",
    vector: "Governance",
    detail: [
      "Assisted with record-keeping for co-operative financial activities.",
      "Observed financial decision-making and daily co-operative operations.",
      "Practised bookkeeping, teamwork and workplace communication.",
    ],
  },
  {
    ref: "L-01",
    entity: "Narayani Readymix Concrete Pvt. Ltd.",
    sector: "Manufacturing",
    role: "Assistant Accountant",
    period: "Sep 2021 — Oct 2022",
    scale: "First",
    scaleNote: "ledger — where it began",
    mandate: "Daily transactions and ledger updates for an industrial producer.",
    vector: "Bookkeeping",
    detail: [
      "Assisted in managing daily financial transactions and ledger updates.",
      "Supported interpretation and review of financial data under supervision.",
    ],
  },
];

export const expertise = [
  { title: "Bookkeeping & ledgers", body: "Daily entries, ledgers and supporting documents kept current and audit-ready in Tally, Aegies and Excel." },
  { title: "Reporting & budget control", body: "Periodic financial reports that compare spend with budget and flag what needs attention." },
  { title: "Payables & reconciliation", body: "Vendor payment tracking, statement matching and routine account reconciliation." },
  { title: "Project cost accounting", body: "Labour, material and contractor costs tracked against a live construction project." },
  { title: "Business & market analysis", body: "Research, data interpretation and clear written reports for decision-makers." },
  { title: "Office administration", body: "Documentation, records management, coordination and the day-to-day running of an office." },
];

export const industries = ["Construction & infrastructure", "Hospitality", "Co-operative finance", "Business advisory", "Manufacturing"];

export const education = [
  { title: "Master of Business Administration", where: "In progress", note: "Finance & management" },
  { title: "Bachelor of Business Administration", where: "Oxford College of Engineering & Management", note: "2021 — 2026" },
  { title: "+2 Management", where: "Parijat English Boarding School", note: "2020 — 2022" },
];

export const honours = [
  "Second Runner-up — Quiz, OCEM Sports Tournament 2079",
  "Second Runner-up — Hult Prize OnCampus, Oxford College of Engineering & Management",
  "College Ambassador — Idea Studio Nepal",
  "Executive Vice President — Geetanagar Junior Jaycees, 2024",
];

export const competencies = [
  { area: "Accounting & Finance", items: ["Financial accounting", "Managerial accounting", "Corporate finance", "Bookkeeping & reconciliation", "Financial reporting"] },
  { area: "Analysis", items: ["Financial analysis", "Budget control", "Market research", "Data interpretation", "Report writing"] },
  { area: "Systems", items: ["Microsoft Excel", "Tally", "Aegies", "Microsoft PowerPoint"] },
  { area: "Leadership", items: ["Presentation & emceeing", "Team leadership", "Time management", "Problem-solving"] },
];

export const coursework = [
  "Financial Accounting", "Financial Management", "Business Economics", "Business Law",
  "Organizational Behavior", "Human Resource Management", "Marketing Management", "Business Research Methods", "Entrepreneurship Development",
];

export const training = [
  "Office Package (78 hrs) — College of Software Engineering",
  "Emcee & LOM Officer training — Geetanagar Junior Jaycees",
  "First Aid training",
  "Painting & pencil art — Nepal Arts and Kollywood Kala Kendra",
];
