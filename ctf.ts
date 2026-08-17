export type CtfCategory =
  | "Web"
  | "Cryptography"
  | "Forensics"
  | "OSINT"
  | "Networking"
  | "Linux"
  | "Privilege Escalation"
  | "Reverse Engineering";

export interface CtfWriteup {
  slug: string;
  challenge: string;
  platform: string;
  category: CtfCategory;
  difficulty: "Easy" | "Medium" | "Hard";
  date: string;
  technologies: string[];
  summary: string;
  placeholder?: boolean;
  writeup: {
    overview: string;
    objective: string;
    reconnaissance: string[];
    enumeration: string[];
    vector: string;
    exploitation: string[];
    evidence: string;
    flag: string;
    lessons: string[];
    mitigation: string[];
  };
}

export const ctfWriteups: CtfWriteup[] = [
  {
    slug: "insecure-upload",
    challenge: "Insecure Upload",
    platform: "TryHackMe",
    category: "Web",
    difficulty: "Easy",
    date: "July 2026",
    technologies: ["Burp Suite", "PHP", "Linux"],
    summary: "An unrestricted file upload leading to remote code execution on a small web application.",
    placeholder: true,
    writeup: {
      overview:
        "A basic content management portal allowed authenticated users to upload profile images. The upload handler validated only the client-supplied content type.",
      objective: "Obtain remote code execution on the web server and retrieve the user flag.",
      reconnaissance: [
        "Port scan identified HTTP on 80 and SSH on 22.",
        "Directory enumeration revealed /uploads/ with directory listing enabled.",
      ],
      enumeration: [
        "Registered a low-privilege account and mapped every form that accepted input.",
        "Observed that the upload endpoint checked the Content-Type header only.",
      ],
      vector: "Unrestricted file upload (OWASP A04 — Insecure Design / A03 — Injection chain).",
      exploitation: [
        "Uploaded a minimal PHP web shell with the Content-Type header rewritten to image/png in Burp.",
        "Browsed to the file in /uploads/ and confirmed command execution as the web user.",
        "Upgraded to an interactive shell and read the user flag.",
      ],
      evidence: "Screenshots are omitted or sanitised where the platform's rules require it.",
      flag: "Flag redacted — see the platform for the challenge itself.",
      lessons: [
        "Client-supplied metadata is never a security control.",
        "Directory listing on an upload path turns a weak validation bug into an easy win.",
      ],
      mitigation: [
        "Validate uploads server-side by inspecting file content, not headers.",
        "Store uploads outside the web root and serve them through a handler.",
        "Disable directory listing and strip execute permissions on upload directories.",
      ],
    },
  },
  {
    slug: "classic-cipher-chain",
    challenge: "Classic Cipher Chain",
    platform: "picoCTF",
    category: "Cryptography",
    difficulty: "Easy",
    date: "June 2026",
    technologies: ["Python", "CyberChef"],
    summary: "Layered classical ciphers requiring frequency analysis and scripted decoding.",
    placeholder: true,
    writeup: {
      overview: "The challenge supplied a block of ciphertext produced by chaining several classical ciphers.",
      objective: "Recover the plaintext flag.",
      reconnaissance: ["Inspected character distribution and encoding markers in the supplied file."],
      enumeration: ["Identified a Base64 layer, then a substitution layer with English-like frequency."],
      vector: "Weak classical cryptography with no key management.",
      exploitation: [
        "Decoded the Base64 layer with CyberChef.",
        "Wrote a short Python script to brute-force the shift and score candidates against English letter frequency.",
      ],
      evidence: "Script output sanitised to exclude the flag value.",
      flag: "Flag redacted.",
      lessons: ["Frequency analysis defeats substitution ciphers quickly.", "Scripting beats manual trial and error."],
      mitigation: ["Use vetted modern cryptography with proper key management; classical ciphers offer no security."],
    },
  },
  {
    slug: "usb-image-triage",
    challenge: "USB Image Triage",
    platform: "CyberDefenders",
    category: "Forensics",
    difficulty: "Medium",
    date: "June 2026",
    technologies: ["Autopsy", "FTK Imager", "Windows Registry"],
    summary: "Triage of a removable media image to establish what was copied and when.",
    placeholder: true,
    writeup: {
      overview: "A disk image of a USB device was supplied along with a host registry hive.",
      objective: "Determine which files were exfiltrated and reconstruct a timeline.",
      reconnaissance: ["Verified the image hash before analysis and documented it."],
      enumeration: ["Parsed the file system in Autopsy, recovering deleted entries from unallocated space."],
      vector: "Not applicable — investigative challenge rather than an exploit.",
      exploitation: [
        "Correlated USBSTOR registry keys with file MAC times to place the device on the host.",
        "Recovered deleted documents and matched them to the host's recent-items artefacts.",
      ],
      evidence: "All evidence shown is fictional and produced for training purposes.",
      flag: "Flag redacted.",
      lessons: ["Timeline correlation across sources is what turns artefacts into findings."],
      mitigation: ["Enforce removable media policies and endpoint device control with logging."],
    },
  },
  {
    slug: "open-source-footprint",
    challenge: "Open Source Footprint",
    platform: "TryHackMe",
    category: "OSINT",
    difficulty: "Easy",
    date: "May 2026",
    technologies: ["OSINT Framework", "Metadata Analysis"],
    summary: "Building a target profile from publicly available data and image metadata.",
    placeholder: true,
    writeup: {
      overview: "A single public image was the starting point for identifying an organisation's exposure.",
      objective: "Identify the location and associated accounts using only public sources.",
      reconnaissance: ["Extracted EXIF metadata and reverse-searched the image."],
      enumeration: ["Cross-referenced usernames across public platforms."],
      vector: "Excessive public information disclosure.",
      exploitation: ["Chained metadata and username reuse to confirm the target profile."],
      evidence: "Details sanitised — no real individuals are involved.",
      flag: "Flag redacted.",
      lessons: ["Metadata is the most commonly forgotten leak."],
      mitigation: ["Strip metadata before publishing images and avoid username reuse across services."],
    },
  },
  {
    slug: "pcap-under-pressure",
    challenge: "PCAP Under Pressure",
    platform: "CyberDefenders",
    category: "Networking",
    difficulty: "Medium",
    date: "April 2026",
    technologies: ["Wireshark", "tshark"],
    summary: "Analysing a packet capture to identify credential theft and data exfiltration.",
    placeholder: true,
    writeup: {
      overview: "A capture from a small office network contained both normal and malicious traffic.",
      objective: "Identify the compromised host and what left the network.",
      reconnaissance: ["Reviewed protocol hierarchy and conversation statistics in Wireshark."],
      enumeration: ["Filtered for cleartext protocols and unusual outbound destinations."],
      vector: "Cleartext credentials plus unmonitored outbound traffic.",
      exploitation: ["Followed the TCP stream to recover credentials and reassembled the transferred file."],
      evidence: "Capture is a training artefact; no real data is present.",
      flag: "Flag redacted.",
      lessons: ["Baseline traffic knowledge makes anomalies obvious."],
      mitigation: ["Enforce TLS everywhere and monitor egress with alerting on unusual destinations."],
    },
  },
  {
    slug: "sudo-misconfiguration",
    challenge: "Sudo Misconfiguration",
    platform: "HackTheBox",
    category: "Privilege Escalation",
    difficulty: "Medium",
    date: "March 2026",
    technologies: ["Linux", "Bash", "LinPEAS"],
    summary: "Escalating from a low-privilege shell to root via an over-permissive sudo rule.",
    placeholder: true,
    writeup: {
      overview: "A foothold as a service account was already established.",
      objective: "Escalate to root and read the root flag.",
      reconnaissance: ["Enumerated the host with LinPEAS and reviewed sudo -l output."],
      enumeration: ["Found a binary runnable as root with NOPASSWD that permitted shell escape."],
      vector: "Over-permissive sudo configuration.",
      exploitation: ["Used the documented GTFOBins escape for the binary to spawn a root shell."],
      evidence: "Output sanitised.",
      flag: "Flag redacted.",
      lessons: ["Privilege escalation is usually configuration, not exploitation."],
      mitigation: ["Grant sudo narrowly, avoid NOPASSWD, and audit rules against GTFOBins regularly."],
    },
  },
];

export function getWriteup(slug: string) {
  return ctfWriteups.find((c) => c.slug === slug);
}

/**
 * TEMPLATE — copy this object, change the values and add it to `ctfWriteups`
 * above to publish a new write-up. Keep `slug` unique (it becomes the URL).
 */
export const ctfTemplate: CtfWriteup = {
  slug: "new-challenge-slug",
  challenge: "Challenge name",
  platform: "TryHackMe / HackTheBox / Other",
  category: "Web",
  difficulty: "Easy",
  date: "Month Year",
  technologies: ["Tool 1", "Tool 2"],
  summary: "One or two sentences describing the challenge and the outcome.",
  placeholder: true,
  writeup: {
    overview: "Background on the target and what it exposed.",
    objective: "What had to be achieved (e.g. retrieve the user flag).",
    reconnaissance: ["Scan or discovery step 1", "Scan or discovery step 2"],
    enumeration: ["Enumeration step 1", "Enumeration step 2"],
    vector: "The vulnerability class exploited.",
    exploitation: ["Exploitation step 1", "Exploitation step 2"],
    evidence: "What proved the exploit worked (screenshots, output, artefacts).",
    flag: "flag{redacted}",
    lessons: ["Lesson 1", "Lesson 2"],
    mitigation: ["Fix 1", "Fix 2"],
  },
};
