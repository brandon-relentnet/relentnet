export interface CaseStudyMetric {
  label: string
  value: string
  context?: string
}

export interface CaseStudyImage {
  src: string
  alt: string
  caption?: string
  width: number
  height: number
}

export interface CaseStudyQuote {
  text: string
  attribution: string
}

export type StoryBlock =
  | { type: 'p'; text: string }
  | { type: 'image'; image: CaseStudyImage }
  | { type: 'quote'; text: string; attribution?: string }

export interface CaseStudySummary {
  problem: string
  diagnosis: string
  build: string
  outcome: string
}

export interface CaseStudyHero {
  image?: CaseStudyImage
  tagline: string
}

export interface CaseStudyAtAGlance {
  engagementYear?: string
  duration?: string
  role?: string
  stack?: ReadonlyArray<string>
  metrics?: ReadonlyArray<CaseStudyMetric>
  quote?: CaseStudyQuote
}

export interface CaseStudyStory {
  problem: ReadonlyArray<StoryBlock>
  diagnosis: ReadonlyArray<StoryBlock>
  build: ReadonlyArray<StoryBlock>
  outcome: ReadonlyArray<StoryBlock>
  stewardship?: ReadonlyArray<StoryBlock>
}

export interface CaseStudyMeta {
  title: string
  description: string
}

export interface CaseStudy {
  slug: string
  name: string
  url: string
  industry: string
  systemType: string
  summary: CaseStudySummary
  hero: CaseStudyHero
  atAGlance: CaseStudyAtAGlance
  story: CaseStudyStory
  meta: CaseStudyMeta
}

const p = (text: string): StoryBlock => ({ type: 'p', text })

export const caseStudies: ReadonlyArray<CaseStudy> = [
  {
    slug: 'scrollr',
    name: 'Scrollr',
    url: 'https://myscrollr.relentnet.dev',
    industry: 'Trading & Analytics',
    systemType: 'Workflow Platform',
    summary: {
      problem:
        'Market signals, ticker behavior, and user preferences were scattered across disconnected surfaces instead of one operational product experience.',
      diagnosis:
        'The product needed a configurable signal workflow that could serve analysts and traders without forcing every user into the same dashboard.',
      build:
        'A SaaS-style signal ticker with personalized dashboards, real-time data presentation, and extension-ready product architecture.',
      outcome:
        'Scrollr became a sharper product system: easier to explain, easier to demo, and better aligned with how traders actually consume signals.',
    },
    hero: {
      tagline:
        'A configurable signal workflow that fits how traders and analysts actually consume the market.',
      image: {
        src: '/scrollr_portfolio.png',
        alt: 'Scrollr dashboard preview',
        width: 1440,
        height: 810,
      },
    },
    atAGlance: {
      role: 'Product design, build, hosting',
    },
    story: {
      problem: [
        p(
          'Scrollr started life as a collection of useful surfaces — a signal ticker here, a watchlist there, a settings panel somewhere else — without a workflow holding them together. Users had to assemble the product in their heads each time they opened it.',
        ),
        p(
          'For an audience that lives inside fast-moving market data, fragmented surfaces are not just inelegant. They make it harder to trust the data, harder to compare signals over time, and harder to explain to a new user what Scrollr actually is.',
        ),
      ],
      diagnosis: [
        p(
          'The workflow diagnostic showed that traders and analysts were not looking for more features. They were looking for one place where their preferred signals lived, behaved consistently, and could be reconfigured without losing context.',
        ),
        p(
          'The right move was not to add more dashboards. It was to make a single, configurable signal workflow the spine of the product and let everything else reorganize around it.',
        ),
      ],
      build: [
        p(
          'We rebuilt Scrollr around personalized dashboards, real-time signal presentation, and an extension-ready product architecture so new signal types could be added without disturbing the workflow users had already shaped.',
        ),
        p(
          'Ticker behavior, preferences, and data presentation were unified under one configuration model. The product began behaving like an operational tool rather than a collection of widgets.',
        ),
      ],
      outcome: [
        p(
          'Scrollr is easier to explain in a sentence, easier to demo, and easier to extend. The product reads as a coherent system instead of a feature inventory, which is the version of the product that actually compounds value for the people using it.',
        ),
      ],
    },
    meta: {
      title: 'Scrollr Case Study | RelentNet',
      description:
        'How RelentNet rebuilt Scrollr around a configurable signal workflow that fits how traders actually consume market data.',
    },
  },
  {
    slug: 'cambridge-building-group',
    name: 'Cambridge Building Group',
    url: 'https://cambridgebg.com',
    industry: 'Commercial Construction',
    systemType: 'Sales Enablement System',
    summary: {
      problem:
        'A high-trust construction firm needed a digital presence that matched the quality of its work and helped serious prospects understand capability quickly.',
      diagnosis:
        'The site needed to reduce sales friction by making credibility, project quality, and company positioning immediately clear.',
      build:
        'A commanding marketing system with streamlined messaging, professional visual hierarchy, and conversion-focused inquiry paths.',
      outcome:
        'The company gained a more credible front door for high-value commercial opportunities and a cleaner way to support sales conversations.',
    },
    hero: {
      tagline:
        'A commanding front door for high-value commercial construction opportunities.',
      image: {
        src: '/cbg_portfolio.png',
        alt: 'Cambridge Building Group homepage preview',
        width: 1440,
        height: 810,
      },
    },
    atAGlance: {
      role: 'Marketing site, messaging, hosting',
    },
    story: {
      problem: [
        p(
          'Cambridge Building Group does high-trust commercial work, but the previous web presence did not communicate that. Prospects landed on a site that under-represented the company and gave sales conversations nothing to lean on.',
        ),
        p(
          'In commercial construction, the website is not a brochure — it is a stage in the buying process. A weak stage costs the firm conversations it should be having.',
        ),
      ],
      diagnosis: [
        p(
          'The diagnostic showed the real problem was sales friction, not visual design. Serious prospects needed to understand capability, credibility, and positioning within a few seconds of arriving on the site.',
        ),
        p(
          'Everything else — typography, project imagery, contact paths — needed to serve that one job.',
        ),
      ],
      build: [
        p(
          'We built a marketing system with deliberate visual hierarchy, streamlined messaging, and conversion-focused inquiry paths. The structure was designed so that a prospect at the top of the funnel and a prospect ready to talk both find the right next step.',
        ),
        p(
          'The result reads as a commercial firm that takes itself seriously, which is the version of the firm we wanted serious prospects to meet first.',
        ),
      ],
      outcome: [
        p(
          'Cambridge gained a cleaner front door for high-value commercial opportunities. Sales conversations have more to lean on, and the brand is no longer underselling the work behind it.',
        ),
      ],
    },
    meta: {
      title: 'Cambridge Building Group Case Study | RelentNet',
      description:
        'How RelentNet built a sales-enablement marketing system for a high-trust commercial construction firm.',
    },
  },
  {
    slug: 'courtcommand',
    name: 'CourtCommand',
    url: 'https://courtcommand.app',
    industry: 'Sports Technology',
    systemType: 'Real-Time Operations Engine',
    summary: {
      problem:
        'Broadcast-style sports environments cannot tolerate lag, unclear state, or fragile manual scorekeeping workflows.',
      diagnosis:
        'The system needed to behave like operational infrastructure: fast, multi-tenant, synchronized, and simple under pressure.',
      build:
        'A low-latency referee engine and sports ticker designed around real-time score synchronization and live event workflows.',
      outcome:
        'CourtCommand became a purpose-built operating layer for sports presentation instead of another generic scoreboard interface.',
    },
    hero: {
      tagline:
        'A low-latency operating layer for live sports, designed for the people running the room.',
    },
    atAGlance: {
      role: 'Product design, build, hosting',
    },
    story: {
      problem: [
        p(
          'Live sports environments do not forgive sluggish software. A referee, a scorekeeper, and a broadcast operator are all making decisions in seconds, and the tools they reach for need to behave like infrastructure, not like apps.',
        ),
        p(
          'Generic scoreboard interfaces and manual scorekeeping workflows leave too much room for desynchronization, ambiguous state, and the small frictions that compound on game day.',
        ),
      ],
      diagnosis: [
        p(
          'The diagnostic framed CourtCommand as an operations problem first and a product problem second. The system needed to be fast, multi-tenant, synchronized across every surface, and simple to operate under pressure.',
        ),
        p(
          'Everything else — UI, theming, configuration — had to defer to those operational requirements.',
        ),
      ],
      build: [
        p(
          'We built a low-latency referee engine and sports ticker around real-time score synchronization. Game state lives in one place, every connected surface stays consistent, and the operator interface is simple enough to run during a live event.',
        ),
      ],
      outcome: [
        p(
          'CourtCommand reads as a purpose-built operating layer for live sports, not another scoreboard skin. The product is shaped by the demands of a real game-day room.',
        ),
      ],
    },
    meta: {
      title: 'CourtCommand Case Study | RelentNet',
      description:
        'How RelentNet built CourtCommand as a low-latency operating layer for live sports presentation.',
    },
  },
  {
    slug: 'vm-homes',
    name: 'VM Homes',
    url: 'https://vm-homes.com',
    industry: 'Real Estate',
    systemType: 'Client Experience Platform',
    summary: {
      problem:
        'The team needed more than a polished website; they needed a premium buyer experience that could support property search and neighborhood trust.',
      diagnosis:
        'Real estate prospects need clarity, confidence, and fast access to relevant inventory before they are ready to start a conversation.',
      build:
        'A premium digital storefront with MLS-integrated property search, neighborhood guidance, and client-first conversion paths.',
      outcome:
        'The site now works as both a brand asset and a practical client acquisition tool for buyers evaluating the St. Pete Beach market.',
    },
    hero: {
      tagline:
        'A premium client experience for buyers evaluating the St. Pete Beach market.',
      image: {
        src: '/vmh_portfolio.png',
        alt: 'VM Homes site preview',
        width: 1440,
        height: 810,
      },
    },
    atAGlance: {
      role: 'Product design, build, hosting',
    },
    story: {
      problem: [
        p(
          'VM Homes did not need a brochure site. The team needed an experience their buyers could trust before reaching out — one that respected the price point of the homes and supported the trust the team had already built in the neighborhood.',
        ),
        p(
          'A polished website on its own would not have moved the needle. The buyer experience needed to do work.',
        ),
      ],
      diagnosis: [
        p(
          'Buyers in this segment evaluate quietly. They want clarity, confidence, and fast access to relevant inventory before they ever introduce themselves. Anything friction-heavy in the early journey costs the team conversations that should have happened.',
        ),
        p(
          'The diagnostic pointed at a client experience platform, not a marketing site.',
        ),
      ],
      build: [
        p(
          'We built a premium digital storefront with MLS-integrated property search, neighborhood guidance, and client-first conversion paths. Buyers can move from browsing to a real conversation without ever feeling chased.',
        ),
      ],
      outcome: [
        p(
          'The site works as both a brand asset and a practical client acquisition tool. Buyers get clarity early; the team gets better conversations when those buyers raise their hand.',
        ),
      ],
    },
    meta: {
      title: 'VM Homes Case Study | RelentNet',
      description:
        'How RelentNet built a premium client experience platform for VM Homes, supporting trust-led real estate in the St. Pete Beach market.',
    },
  },
  {
    slug: 'star-kids',
    name: 'Star Kids',
    url: 'https://starkids.relentnet.dev',
    industry: 'Nonprofit',
    systemType: 'Mission Communication System',
    summary: {
      problem:
        'A mission-driven organization needed to explain programs, trust, and impact without overwhelming donors or families.',
      diagnosis:
        'The experience needed to simplify complex service areas into a story people could understand and act on quickly.',
      build:
        'A focused nonprofit presence for education, healthcare, nutrition, and mentorship programs with clear paths to learn and support.',
      outcome:
        'The organization gained a clearer digital home for communicating purpose, programs, and credibility.',
    },
    hero: {
      tagline:
        'A clearer digital home for a mission with too many things to say at once.',
    },
    atAGlance: {
      role: 'Marketing site, hosting',
    },
    story: {
      problem: [
        p(
          'Star Kids does meaningful work across several program areas — education, healthcare, nutrition, mentorship — and the previous web presence let all of that flatten into noise. Donors, families, and partners all had to dig to find the part that mattered to them.',
        ),
        p(
          'Mission-driven organizations live or die on clarity. Anything that asks the visitor to work too hard becomes a quiet barrier to support.',
        ),
      ],
      diagnosis: [
        p(
          'The diagnostic showed that the answer was not more content. It was a clearer story: which programs exist, who they serve, how to support them, and how to learn more without being asked to commit before understanding.',
        ),
      ],
      build: [
        p(
          'We built a focused presence that introduces each program area cleanly, surfaces the credibility behind the mission, and offers a direct path for donors and families to take the next step.',
        ),
      ],
      outcome: [
        p(
          'Star Kids has a clearer digital home for communicating purpose, programs, and credibility. The work the team does is no longer competing with its own website.',
        ),
      ],
    },
    meta: {
      title: 'Star Kids Case Study | RelentNet',
      description:
        'How RelentNet built a focused mission communication system for the Star Kids nonprofit.',
    },
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}

export function getAdjacentCaseStudies(slug: string): {
  prev: CaseStudy | null
  next: CaseStudy | null
} {
  const index = caseStudies.findIndex((study) => study.slug === slug)
  if (index === -1) {
    return { prev: null, next: null }
  }
  return {
    prev: index > 0 ? caseStudies[index - 1] : null,
    next: index < caseStudies.length - 1 ? caseStudies[index + 1] : null,
  }
}
