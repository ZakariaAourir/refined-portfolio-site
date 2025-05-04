
import { ProjectData } from "@/types/project";

export const tontinaProject: ProjectData = {
  title: "Tontina",
  subtitle: "Redesigning Traditional African Lending for the Digital Student",
  category: "Fintech / Education",
  client: "FinEd Innovations",
  overViewImages: ["tontina/before-after.png"],
  researchDataImage: ["tontina/rx-cards.png"],
  uiDesignImages: ["tontina/font.png", "tontina/color.png", "tontina/components.png"],
  duration: "3 Months",
  role: "UX Research Lead & Design Strategy",
  tools: ["Figma", "Instagram", "User Interviews", "Questionnaires", "Heuristic Evaluation", "Journey Mapping"],
  image: "tontina/presentation-app.png",
  overview: "I led the UX research and design strategy for Tontina, a mobile application that reimagines the traditional African tontine (rotating savings and credit association) for university students. Using distributed ledger technology (DLT), we created a secure, transparent system that allows students to finance their projects without facing traditional banking barriers like credit history requirements or high interest rates.",
  mission: "My mission was to transform a valuable cultural financial practice into a modern digital solution specifically tailored to students' needs. Through comprehensive user research, I identified that students face significant challenges with traditional financing options while also having concerns about trust and transparency in informal lending circles. The key challenge was creating a platform that preserved the community-based strengths of traditional tontines while adding the security, transparency, and ease-of-use of modern technology.",
  opportunity: "I recognized the opportunity to combine the time-tested community financing model of tontines with the security and transparency of distributed ledger technology. This unique approach allowed us to create a financing solution that was both culturally relevant and technologically advanced, addressing students' specific needs for project and academic funding.",
  researchData: [
    "Designed and implemented a multi-faceted research approach featuring social media engagement, user questionnaires, and one-on-one interviews",
    "Created an Instagram account to build an initial community and recruited beta testers through targeted content about tontines and student financing",
    "Developed and distributed detailed questionnaires focusing on financial behaviors, tontine familiarity, and technology preferences",
    "Conducted in-depth interviews with participants to understand personal experiences with financial challenges and attitudes toward group commitments",
    "Identified that trust was the paramount concern—students worried primarily about other participants fulfilling their financial obligations",
    "Discovered the high value users placed on the community aspect of traditional tontines alongside the financial functionality"
  ],
  valueProps: [
    "Trustworthy platform with smart contracts ensuring contribution fulfillment and transparent payment verification",
    "Real-time visibility of payment status and timelines through interactive visualizations",
    "Simplified interface making complex financial concepts accessible to students with varying levels of financial literacy",
    "Community-building features that enhance the social aspects of group financing and preserve cultural context"
  ],
  designProcess: "I followed a structured user-centered design process beginning with comprehensive research. After gathering insights, I developed detailed user personas including 'Emma, the Entrepreneurial Student' and 'Leo, the Graduate Researcher' to guide our design decisions. I then created complete user journey maps to identify critical emotional touchpoints and potential friction points across five key stages: onboarding, discovering tontines, contract signing, automated payments, and final payout.\n\nMy initial design concepts focused on addressing key pain points around trust and transparency. I designed participant profiles with rating systems, payment status indicators, timeline visualizations, and simplified contract presentations. User testing revealed several usability challenges with our early prototypes, including a complex navigation structure and insufficient trust indicators. Based on this feedback, I implemented significant improvements including a streamlined tab-based interface, enhanced trust features with color-coded status indicators, and an interactive timeline showing payment sequences.",
  uiDesign: "I developed a comprehensive visual design system built around principles of trust, clarity, and accessibility. The color palette balanced professionalism with accessibility, using Bright Sky Blue (#04ACE5) and Mint Green (#5AEEC2) for active elements, with Deep Ocean Blue (#077C9F) and Forest Green (#449474) for trust-related actions.\n\nI selected Lato as the primary typeface for its clean, friendly appearance while still maintaining professionalism. The component library I created included specialized elements for this financial application: cards for tontine groups and user profiles, status indicators for payment tracking, timeline visualizations for payout schedules, and form elements optimized for mobile input.\n\nKey screens in the final UI included: a dashboard showing active tontines and contribution status; a tontine discovery interface with filtering capabilities and trust indicators; detailed tontine information screens with payment schedules and simplified contract terms; a streamlined payment process; and user profiles with participation history and rating systems.",
  results: "Our user-centered design approach yielded impressive results during beta testing. We achieved 89% task completion rate without assistance, demonstrating the intuitive nature of the interface. 92% of users reported feeling confident in the platform's security measures—a critical metric for a financial application. The educational components proved effective, with 85% of users correctly explaining how the tontine system works after using the app, and overall satisfaction was high with 90% indicating they would use the platform for their financial needs.",
  metrics: [
    "89% of users successfully completed key tasks without assistance",
    "92% reported feeling confident in the platform's security measures",
    "85% correctly explained how the tontine system works after using the app",
    "90% indicated they would use the platform for their financial needs",
    "95% preferred Tontina to traditional financial options for small-scale funding"
  ],
  testimonial: {
    quote: "The timeline visualization makes it so much easier to understand when I'll receive my payout and what my obligations are.",
    author: "Emma",
    title: "20, Business Administration Student",
    image: "tontina/emma.jpg"
  },
  reflection: "This project reinforced the critical importance of thorough user research in creating financial products that meet specific audience needs. The most impactful aspect of my design work was focusing on transparency and trust features, which proved to be non-negotiable elements in peer-to-peer financial systems.",
  reflectionPoints: [
    "Research-driven design yields better results: My investment in thorough user research from social media engagement to detailed interviews led to a product that genuinely addressed student-specific needs",
    "Trust features are essential in financial applications: The most appreciated design elements were those enhancing transparency and trust, confirming that security and reliability are fundamental requirements",
    "Simplicity outperforms feature richness: Users consistently preferred my cleaner, simpler interface designs over feature-rich but complex alternatives",
    "Educational components bridge knowledge gaps: For innovative technologies combining traditional practices with blockchain, the educational elements I designed were crucial for user adoption and comfort",
    "Community aspects enhance financial tools: My design preserved the social and community aspects of traditional tontines, which users valued almost as much as the financial functionality"
  ],
  nextProject: "telehealth",
  uiScreenshots: [
    {
      title: "Homepage",
      description: "Main homepage to create or find tontines, newsfeed, and quick some stats for the ongoing tontines",
      image: "tontina/tontine1.png"
    },
    {
      title: "Tontine Initialization",
      description: "Interfaces for creating a totnine, by choosing the cycle, contribution prices and relevace by city, univercity or friends",
      image: "tontina/cycle.png"
    },
    {
      title: "Payment Initialization",
      description: "Interactive visualization showing the selected tontine, making a first payment to validate the tontine.",
      image: "tontina/depo.png"
    },
    {
      title: "Tontine Dashboard",
      description: "Interactive visualization showing the the active tontine, payments timelines, and payouts.",
      image: "tontina/dash.png"
    }
  ]
};
