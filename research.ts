export interface ResearchEntry {
  title: string;
  area: string;
  question: string;
  objective: string;
  methodology: string[];
  findings: string[];
  references: string[];
  reportUrl?: string;
  placeholder?: boolean;
}

export const research: ResearchEntry[] = [
  {
    title: "Social Engineering & Human Factors",
    area: "Human Factors",
    question: "How do social engineering attacks exploit human behaviour, and can awareness training measurably reduce risk?",
    objective:
      "Understand the psychological levers used in phishing and pretexting, and evaluate which awareness interventions change behaviour rather than just knowledge.",
    methodology: [
      "Literature review of social engineering and behavioural security research",
      "Analysis of publicly reported phishing campaign techniques",
      "Design of scenario-based awareness material tested in a small sample",
    ],
    findings: [
      "Urgency and authority remain the most effective pretexts.",
      "Scenario-based practice outperforms passive training content for recall.",
      "Reporting culture matters more than detection accuracy for containment speed.",
    ],
    references: [
      "Cialdini, R. — Influence: The Psychology of Persuasion",
      "ENISA Threat Landscape reports",
      "NCSC phishing guidance",
    ],
    placeholder: true,
  },
  {
    title: "Artificial Intelligence in Cybersecurity",
    area: "Emerging Technology",
    question: "Where can AI realistically improve cybersecurity and organisational workflows, and where does it introduce new risk?",
    objective:
      "Compare AI platform capabilities against practical security use cases and identify the governance controls organisations need before adoption.",
    methodology: [
      "Comparative evaluation of AI platforms across capability, cost and integration effort",
      "Mapping of use cases to risk categories including data protection",
      "Client-facing recommendation report",
    ],
    findings: [
      "Triage summarisation and enrichment are the strongest near-term wins.",
      "Data handling and prompt injection are the dominant adoption risks.",
      "Human review remains essential for any decision with consequence.",
    ],
    references: ["NIST AI Risk Management Framework", "OWASP Top 10 for LLM Applications"],
    placeholder: true,
  },
  {
    title: "Digital Forensics Methodology",
    area: "Digital Forensics",
    question: "What makes a digital forensic methodology defensible when evidence may be challenged?",
    objective:
      "Examine investigation methodologies, evidence handling standards and reporting practices that preserve evidential integrity.",
    methodology: [
      "Review of established forensic process models and good-practice guidance",
      "Practical application across lab disk images",
      "Comparison of tooling output for the same artefacts",
    ],
    findings: [
      "Documentation quality, not tooling, is usually the weakest link.",
      "Hash verification at every transfer point is non-negotiable.",
      "Cross-tool validation catches parser-specific errors.",
    ],
    references: ["ACPO Good Practice Guide for Digital Evidence", "NIST SP 800-86"],
    placeholder: true,
  },
];

/**
 * TEMPLATE — copy this object, change the values and add it to `research`
 * above to publish a new research entry.
 */
export const researchTemplate: ResearchEntry = {
  title: "Research title",
  area: "Subject area",
  question: "The research question being answered.",
  objective: "What the research set out to establish.",
  methodology: ["Method step 1", "Method step 2"],
  findings: ["Finding 1", "Finding 2"],
  references: ["Reference 1", "Reference 2"],
  reportUrl: "https://example.com/report.pdf",
  placeholder: true,
};
