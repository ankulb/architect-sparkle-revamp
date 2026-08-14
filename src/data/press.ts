// Curated press coverage index, Oct 2025 - Jul 2026.
// Sourced from the TOA coverage index; deduplicated by headline, keeping the
// most notable outlet for each story. Syndicated aggregator repeats omitted.

export type PressItem = {
  publication: string;
  headline: string;
  edition: string;
  date: string;
};

export type PressMonth = {
  month: string;
  count: number;
  items: PressItem[];
};

export const pressCoverage: PressMonth[] = [
  {
    "month": "July 2026",
    "count": 8,
    "items": [
      {
        "publication": "The Economic Times",
        "headline": "Scaling an SME? Your workspace may be your next big decision",
        "edition": "Online",
        "date": "13th July, 2026"
      },
      {
        "publication": "The Times of India",
        "headline": "How rising tempeature are changing commercial architecture",
        "edition": "Online",
        "date": "1st July, 2026"
      },
      {
        "publication": "Hindustan Times",
        "headline": "Goodbye, cubicles! 6 Gen Z office design trends transforming workplaces with dopamine decor, warm lighting and open desk",
        "edition": "Online",
        "date": "16th July, 2026"
      },
      {
        "publication": "Realty+",
        "headline": "How AI is Reshaping Architecture: From Concept to Construction",
        "edition": "Online",
        "date": "24th July, 2026"
      },
      {
        "publication": "ET Edge Insight",
        "headline": "The more intelligent AI becomes, the more human workplaces must be",
        "edition": "Online",
        "date": "10th July, 2026"
      },
      {
        "publication": "Interior & Decor Magaine",
        "headline": "The Evolution of Space: Architecture & Interiors in a New Era",
        "edition": "Print",
        "date": "June- July 2026"
      },
      {
        "publication": "Interior & Decor",
        "headline": "Reimagining Commercial Interiors: Designing Offices for Experience, Not Just Efficiency",
        "edition": "Online",
        "date": "28th July, 2026"
      },
      {
        "publication": "Design Sence Magazine",
        "headline": "The human side of digital design",
        "edition": "Online",
        "date": "6st July, 2026"
      }
    ]
  },
  {
    "month": "June 2026",
    "count": 12,
    "items": [
      {
        "publication": "Times Of India Daily",
        "headline": "How Indian Brands Are Embedding Sustainability at the Core",
        "edition": "Online",
        "date": "5th June, 2026"
      },
      {
        "publication": "Realty+",
        "headline": "Generac Expands India Presence with Purpose-Built GCC in Pune",
        "edition": "Online",
        "date": "12th June 2026"
      },
      {
        "publication": "Realty+",
        "headline": "Regulated Yet Risky: The Homebuyer's Dilemma",
        "edition": "Online",
        "date": "25th June, 2026"
      },
      {
        "publication": "Manufacturing Today",
        "headline": "Why data centres are India’s defining infrastructure bet",
        "edition": "Online",
        "date": "1st June, 2026"
      },
      {
        "publication": "Construction World",
        "headline": "Generac Opens First India GCC in Pune",
        "edition": "Online",
        "date": "10th June 2026"
      },
      {
        "publication": "Construction Week",
        "headline": "Generac opens capability centre in Pune",
        "edition": "Online",
        "date": "11th June 2026"
      },
      {
        "publication": "Construction Times",
        "headline": "Generac expands India presence with a purpose-built GCC in Pune",
        "edition": "Online",
        "date": "11th June 2026"
      },
      {
        "publication": "Commercial Design",
        "headline": "Generac opens its first India GCC in Pune",
        "edition": "Online",
        "date": "12th June 2026"
      },
      {
        "publication": "Times Property",
        "headline": "Abodes That work",
        "edition": "Print",
        "date": "17th June, 2026"
      },
      {
        "publication": "Responsible Us",
        "headline": "Climate Risk Is Not a Future Scenario, It Is the Present Situation'",
        "edition": "Online",
        "date": "4th June, 2026"
      }
    ]
  },
  {
    "month": "May 2026",
    "count": 2,
    "items": [
      {
        "publication": "India Shorts",
        "headline": "The Gen Z Workplace Playbook: 5 Culture Shifts Reshaping Offices in 2026",
        "edition": "Online",
        "date": "27th May 2026"
      },
      {
        "publication": "Business News This Week",
        "headline": "5 Design Elements That Truly Make a Grade A Office",
        "edition": "Online",
        "date": "30th May 2026"
      }
    ]
  },
  {
    "month": "April 2026",
    "count": 7,
    "items": [
      {
        "publication": "Construction Week",
        "headline": "TOA unveils medical campus master plan in Maharashtra",
        "edition": "Online",
        "date": "15th April 2026"
      },
      {
        "publication": "Commercial Design",
        "headline": "Gen Z office design is changing what workspaces need to be",
        "edition": "Online",
        "date": "15th April 2026"
      },
      {
        "publication": "Ace Update",
        "headline": "Rethinking the tower through the lens of climate intelligence",
        "edition": "Print",
        "date": "April -May 2026"
      },
      {
        "publication": "ACE Update",
        "headline": "TOA launches a dedicated campus on its 26th Foundation Day",
        "edition": "Online",
        "date": "14th April 2026"
      },
      {
        "publication": "Society Interior Design",
        "headline": "Team One Architects Unveils Master Plan for LFU University Campus in Dharashiv",
        "edition": "Online",
        "date": "14th April 2026"
      },
      {
        "publication": "Business News this Week",
        "headline": "TOA Marks 26 Years of Foundation; Unveils Master Plan University Campus Designed to Train Medical (NEET) Aspirant Students",
        "edition": "Online",
        "date": "1st April 2026"
      },
      {
        "publication": "Business News for Profit",
        "headline": "TOA Celebrates 26 Years, Launches Medical NEET Training Campus",
        "edition": "Online",
        "date": "1st April 2026"
      }
    ]
  },
  {
    "month": "March 2026",
    "count": 5,
    "items": [
      {
        "publication": "Realty+",
        "headline": "What Raigad’s Land Market Reveals About Mumbai’s Expansion",
        "edition": "Online",
        "date": "12th March 2026"
      },
      {
        "publication": "Realty+",
        "headline": "Architecture Today is as Much Business as it is Design",
        "edition": "Online",
        "date": "13th March 2026"
      },
      {
        "publication": "Realty+",
        "headline": "How Offices are Changing to Meet the Demands of Hybrid Work",
        "edition": "Online",
        "date": "17th March 2026"
      },
      {
        "publication": "MGS Architecture",
        "headline": "How Architecture design shapes culture performance and user experience",
        "edition": "Print",
        "date": "1st March 2026"
      },
      {
        "publication": "MSG Architecture",
        "headline": "Aditya Yamsanwar, Team One Architects: How Architectural Design Shapes Culture, Performance & User Experience",
        "edition": "Online",
        "date": "1st March 2026"
      }
    ]
  },
  {
    "month": "February 2026",
    "count": 4,
    "items": [
      {
        "publication": "Forbes India",
        "headline": "Reinforcing Infrastructure-led Urban growth",
        "edition": "Online",
        "date": "1st February 2026"
      },
      {
        "publication": "Times Now",
        "headline": "Union Budget 2026 Highlights: India’s Inflation Has Come Down and Remains Stable, Says Finance Minister After Budget",
        "edition": "Online",
        "date": "1st February 2026"
      },
      {
        "publication": "India.com",
        "headline": "Union Budget 2026: FM announces Customs duty exemptions, new biopharma initiatives",
        "edition": "Online",
        "date": "1st February 2026"
      },
      {
        "publication": "Startup Magazine",
        "headline": "Budget 2026 Reinforces India’s Infrastructure-Led, Tech-Enabled Growth Story: Industry Leaders Welcome Bold Reforms",
        "edition": "Online",
        "date": "3rd February 2026"
      }
    ]
  },
  {
    "month": "January 2026",
    "count": 13,
    "items": [
      {
        "publication": "The Economic Times",
        "headline": "Budget 2026: The GCC capital of the world needs more brains to bank its $100-billion dream",
        "edition": "Online",
        "date": "26th January 2026"
      },
      {
        "publication": "Times Of India Daily",
        "headline": "Budget 2026: Industry leaders call for execution certainty, policy stability, and targeted capital to sustain India’s growth momentum",
        "edition": "Online",
        "date": "29th January 2026"
      },
      {
        "publication": "Mint",
        "headline": "Budget 2026 Expectations Highlights: Policy and govt reforms in high demand ahead of Fin Min Sitharaman's speech",
        "edition": "Online",
        "date": "19th January 2026"
      },
      {
        "publication": "Construction World",
        "headline": "Deploying 3D Printing",
        "edition": "Print",
        "date": "January, 2026"
      },
      {
        "publication": "Ace Update",
        "headline": "Impact – resistant fenestration, a leap towards high performance buildings",
        "edition": "Print",
        "date": "January, 2026"
      },
      {
        "publication": "BW Businessworld",
        "headline": "Budget FY27: GCCs Seek Concessional Tax Regime, Clarity On Secondments & Talent Sops",
        "edition": "Online",
        "date": "15th January 2026"
      },
      {
        "publication": "CNBCTV18",
        "headline": "Urban Infrastructure: Building Future-Ready Cities",
        "edition": "Online",
        "date": "17th January 2026"
      },
      {
        "publication": "The Hindu Business Line",
        "headline": "Stock Market Highlights 22 January 2026: Markets break 3-day losing streak as global optimism drives Sensex, Nifty higher",
        "edition": "Online",
        "date": "22nd January 2026"
      },
      {
        "publication": "Republic Post",
        "headline": "Union Budget 2026: GCC Leaders Seek Tax Incentives and Talent Push While Circular Economy Players Demand GST Relief for Recycling",
        "edition": "Online",
        "date": "22nd January 2026"
      },
      {
        "publication": "Times Now",
        "headline": "Union Budget Expectations 2026 Live Updates: India-EU FTA Will Push Manufacturing Sector's Growth, Says President Droupadi Murmu",
        "edition": "Online",
        "date": "24th January 2026"
      }
    ]
  },
  {
    "month": "December 2025",
    "count": 1,
    "items": [
      {
        "publication": "Right Column Media",
        "headline": "TOA Experts Predict 2026 Workspaces to Be Sustainable, Smart, and Future-Ready",
        "edition": "Online",
        "date": "26th December 2025"
      }
    ]
  },
  {
    "month": "November 2025",
    "count": 3,
    "items": [
      {
        "publication": "Sugermint",
        "headline": "Designing for Tomorrow: A Conversation with Aditya Yamsanwar of TOA (Team One Architects)",
        "edition": "Online",
        "date": "18th November 2025"
      },
      {
        "publication": "Magic Bricks",
        "headline": "The Property Show I Teaser I Investing in Real Estate Property Vs",
        "edition": "Electronic",
        "date": "21st November 2025"
      },
      {
        "publication": "Magic Bricks",
        "headline": "Investing in Real Estate Property Vs REIT",
        "edition": "Electronic",
        "date": "23rd November 2025"
      }
    ]
  },
  {
    "month": "October 2025",
    "count": 1,
    "items": [
      {
        "publication": "Construction Times",
        "headline": "Our focus is on merging design creativity with technological innovation and customer focus",
        "edition": "Print",
        "date": "October, 2025"
      }
    ]
  }
];

export const pressTotal = 56;
