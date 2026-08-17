export type Proficiency = "Familiar" | "Intermediate" | "Advanced" | "Currently Learning";

export interface Skill {
  name: string;
  level: Proficiency;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Cybersecurity",
    skills: [
      { name: "Vulnerability Assessment", level: "Intermediate" },
      { name: "Penetration Testing", level: "Intermediate" },
      { name: "Web Application Security", level: "Intermediate" },
      { name: "Network Security", level: "Intermediate" },
      { name: "Security Awareness", level: "Advanced" },
      { name: "Threat Modelling", level: "Familiar" },
      { name: "Authentication & Access Control", level: "Intermediate" },
      { name: "OWASP Concepts", level: "Intermediate" },
    ],
  },
  {
    category: "Digital Forensics",
    skills: [
      { name: "Digital Evidence Handling", level: "Intermediate" },
      { name: "Evidence Acquisition", level: "Intermediate" },
      { name: "Disk Image Analysis", level: "Intermediate" },
      { name: "File System Analysis", level: "Intermediate" },
      { name: "Windows Forensics", level: "Intermediate" },
      { name: "Forensic Reporting", level: "Advanced" },
      { name: "Chain of Custody", level: "Intermediate" },
      { name: "Investigation Methodology", level: "Intermediate" },
    ],
  },
  {
    category: "Programming",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "Java", level: "Intermediate" },
      { name: "C#", level: "Familiar" },
      { name: "SQL", level: "Intermediate" },
      { name: "Bash", level: "Intermediate" },
      { name: "PowerShell", level: "Familiar" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Kali Linux", level: "Intermediate" },
      { name: "Wireshark", level: "Intermediate" },
      { name: "OWASP ZAP", level: "Intermediate" },
      { name: "FTK Imager", level: "Intermediate" },
      { name: "EnCase", level: "Familiar" },
      { name: "Autopsy", level: "Intermediate" },
      { name: "John the Ripper", level: "Familiar" },
      { name: "KeePassXC", level: "Intermediate" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "SQLite", level: "Intermediate" },
      { name: "Oracle / SQL", level: "Familiar" },
      { name: "Database Design", level: "Intermediate" },
    ],
  },
  {
    category: "Other",
    skills: [
      { name: "Git / GitHub", level: "Intermediate" },
      { name: "Linux", level: "Intermediate" },
      { name: "Windows", level: "Advanced" },
      { name: "Networking", level: "Intermediate" },
      { name: "Artificial Intelligence", level: "Currently Learning" },
      { name: "Cloud Computing", level: "Currently Learning" },
    ],
  },
];
