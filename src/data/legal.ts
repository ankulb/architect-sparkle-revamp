export type LegalDoc = { slug: "privacy" | "terms" | "cookies"; title: string; intro: string; sections: { heading: string; body: string[] }[] };

const contact =
  "Team One Architects, Laxmi Towers, B Wing, 3B Second Floor, G Block, Bandra Kurla Complex, Mumbai-400051, Maharashtra, India. Email: communications@toa.org.in. Phone: 022 66223344.";

export const legalUpdated = "Last updated October 2026";

export const legalDocs: Record<LegalDoc["slug"], LegalDoc> = {
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    intro:
      "This policy explains how Team One Architects (“TOA”, “we”, “us”) collects, uses and protects personal information when you visit this website or contact us.",
    sections: [
      { heading: "Information we collect", body: [
        "Information you give us: when you use our contact form, email us or apply for a role, we receive details such as your name, email address, phone number, the type of enquiry and your message or CV.",
        "Information collected automatically: like most websites, we may record basic, non-identifying usage information such as pages visited, browser type and approximate location, to understand how the site is used.",
      ] },
      { heading: "How we use your information", body: [
        "To respond to enquiries, discuss projects, process job applications and communicate with vendors and partners.",
        "To maintain, secure and improve this website.",
        "We do not sell your personal information.",
      ] },
      { heading: "Sharing", body: [
        "We share information only with service providers who help us operate the website and our business, when required by law, or with your consent.",
        "Some pages embed content from third parties such as YouTube and link to news publications. These services have their own privacy policies.",
      ] },
      { heading: "Retention and security", body: [
        "We keep personal information only as long as needed for the purposes above or as required by law, and use reasonable safeguards to protect it.",
      ] },
      { heading: "Your choices", body: [
        "You may ask us to access, correct or delete the personal information we hold about you by contacting us using the details below.",
      ] },
      { heading: "Contact", body: [contact] },
    ],
  },
  terms: {
    slug: "terms",
    title: "Terms of Use",
    intro: "By using this website you agree to these terms. If you do not agree, please do not use the site.",
    sections: [
      { heading: "About this website", body: [
        "This website presents the work, services and news of Team One Architects. Content is provided for general information and does not form an offer or a contract for services.",
      ] },
      { heading: "Intellectual property", body: [
        "All designs, drawings, photographs, text, logos and other content on this site belong to Team One Architects or its clients and licensors. You may not copy, reproduce or reuse them without our written permission.",
        "Client names, logos and publication marks are the property of their respective owners and are shown for identification only.",
      ] },
      { heading: "Acceptable use", body: [
        "Do not use the site in any way that is unlawful, harmful, or that interferes with its operation or security.",
      ] },
      { heading: "External links", body: [
        "The site links to third-party websites such as news publications and job listings. We are not responsible for their content or practices.",
      ] },
      { heading: "Accuracy and liability", body: [
        "We aim to keep information accurate and up to date but make no guarantees. To the extent permitted by law, we are not liable for any loss arising from use of this website.",
      ] },
      { heading: "Governing law", body: ["These terms are governed by the laws of India, and the courts of Mumbai shall have jurisdiction."] },
      { heading: "Contact", body: [contact] },
    ],
  },
  cookies: {
    slug: "cookies",
    title: "Cookie Policy",
    intro: "This policy explains how this website uses cookies and similar technologies.",
    sections: [
      { heading: "What are cookies?", body: [
        "Cookies are small text files stored on your device when you visit a website. Similar technologies include local storage in your browser.",
      ] },
      { heading: "How we use them", body: [
        "Essential: to remember preferences such as your light or dark theme choice and keep the site working properly.",
        "Analytics: to understand, in aggregate, how visitors use the site so we can improve it.",
        "Third-party content: embedded videos (for example YouTube, in privacy-enhanced mode) may set their own cookies when you play them.",
      ] },
      { heading: "Managing cookies", body: [
        "You can block or delete cookies in your browser settings. Some parts of the site may not work as intended if you do.",
      ] },
      { heading: "Contact", body: [contact] },
    ],
  },
};
