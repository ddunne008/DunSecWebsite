export interface ExperienceEntry {
  role: string;
  organisation: string;
  period: string;
  type: string;
  points: string[];
  upcoming?: boolean;
  placeholder?: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    role: "Project Manager — AI Research Project",
    organisation: "Practera (AI-focused internship)",
    period: "2026",
    type: "Internship",
    points: [
      "Researched AI technologies and their practical organisational applications",
      "Compared AI platforms across capability, cost, integration effort and risk",
      "Communicated findings clearly to a non-technical client",
      "Managed project scope, timeline and deliverables",
      "Collaborated with a small cross-functional team",
      "Presented final recommendations to the client",
    ],
  },
  {
    role: "Cyber Security Lab Assistant (Sample)",
    organisation: "University — Cyber Security & Digital Forensics",
    period: "2025 — 2026",
    type: "Part-time / Academic",
    points: [
      "Supported practical lab sessions covering Linux, networking and security tooling",
      "Helped peers configure Kali Linux, Wireshark and vulnerable lab environments",
      "Produced short written guides documenting common lab tasks and pitfalls",
      "Assisted with lab equipment setup, imaging and reset between sessions",
    ],
    placeholder: true,
  },
  {
    role: "IT Support Assistant (Sample)",
    organisation: "Sample Employer, Lancaster",
    period: "2024 — 2025",
    type: "Part-time",
    points: [
      "Handled first-line support tickets for hardware, accounts and software issues",
      "Applied patching and account hygiene tasks under supervision",
      "Escalated suspected phishing reports and documented outcomes",
      "Communicated technical fixes clearly to non-technical colleagues",
    ],
    placeholder: true,
  },
  {
    role: "Volunteer — Security Awareness Sessions (Sample)",
    organisation: "Community / Student Society",
    period: "2024",
    type: "Volunteering",
    points: [
      "Delivered short awareness sessions on phishing, passwords and 2FA",
      "Created simple, jargon-free material for a general audience",
      "Collected feedback to improve later sessions",
    ],
    placeholder: true,
  },
  {
    role: "Open to graduate roles, placements and internships",
    organisation: "Cyber Security / Digital Forensics",
    period: "Available now",
    type: "Looking for opportunities",
    points: [
      "SOC analyst, digital forensics, incident response and defensive security roles",
      "Space reserved here for future internships, placements, volunteering and employment",
    ],
    upcoming: true,
    placeholder: true,
  },
];

export const timeline = [
  {
    title: "University",
    detail: "Cyber Security & Digital Forensics studies",
  },
  {
    title: "Technical Development",
    detail: "Python, Linux, networking, databases and security tooling",
  },
  {
    title: "AI Internship",
    detail:
      "Worked as a Project Manager during an AI-focused internship, researching AI technologies and communicating recommendations to a client",
  },
  {
    title: "Cybersecurity Development",
    detail: "CTF challenges, cybersecurity labs, digital forensic investigations and security projects",
  },
  {
    title: "Future Goal",
    detail: "Developing towards a professional cybersecurity / digital forensics career",
  },
];

export const interests = [
  "Cybersecurity",
  "Digital Forensics",
  "Penetration Testing",
  "Ethical Hacking",
  "Network Security",
  "Secure Software Development",
  "Cloud Security",
  "Artificial Intelligence",
  "Security Awareness",
  "Incident Investigation",
];
