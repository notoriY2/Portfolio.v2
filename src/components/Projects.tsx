import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  X, 
  Github, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  Terminal, 
  Code2, 
  Layers
} from 'lucide-react';

interface DocSection {
  heading: string;
  content: string[];
}

interface Project {
  id: string;
  title: string;
  category: 'apps' | 'websites' | 'branding';
  description: string;
  details: string;
  images: string[];
  tags: string[];
  github?: string;
  liveUrl?: string;
  status?: 'live' | 'offline';
  gridSpan?: 'small' | 'medium' | 'large';
  documentation: {
    overview: string;
    sections: DocSection[];
  };
}

const PROJECTS: Project[] = [
  // ==========================================
  // WIX WEBSITES (7 TOTAL)
  // ==========================================
  {
    id: 'notorious-y2',
    title: 'Notorious.Y2: AI-Powered Streetwear Commerce Platform',
    category: 'websites',
    description: 'Full-stack e-commerce platform for a premium streetwear label, with an AI-assisted admin back office running on Supabase and Stripe.',
    details: 'A production-grade retail platform, not just a storefront: a 20+ table PostgreSQL database with row-level security and triggers, a real Stripe payment pipeline, an AI-assisted admin suite (product descriptions, recovery emails, support chat, background removal), and a role-based admin dashboard covering analytics, inventory, orders, marketing, and content — all wired together with live, editable data instead of mock content.',
    images: ['22.png', '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png', '31.png', '32.png', '33.png', '34.png', '35.png', '36.png', '37.png', '38.png', '39.png', '40.png', '41.png', '42.png', '43.png', '44.png', '45.png', '46.png', '47.png', '48.png', '49.png', '50.png', '51.png', '52.png', '53.png', '54.png', '55.png', '56.png', '57.png', '58.png', '59.png', '60.png', '61.png', '62.png', '63.png', '64.png', '65.png', '66.png', '67.png'],
    tags: ['E-Commerce Platform', 'Supabase / PostgreSQL', 'Stripe Checkout', 'AI-Assisted Admin', 'Role-Based Dashboard'],
    liveUrl: 'https://notorious-y2-store.vercel.app/',
    gridSpan: 'large',
    documentation: {
      overview: 'Notorious.Y2 is a full commerce stack: a scattered-layout "product floor" storefront up front, and a real operational back office behind it. The database (Supabase/PostgreSQL) enforces access with row-level security, keeps stock and sales counters in sync via triggers, and drives every admin report from live views rather than static numbers. Payments run through Stripe. A set of serverless edge functions add AI assistance throughout the admin experience — from writing product copy to running the support chat,',
      sections: [
        {
          heading: '1. Storefront & Shopping Experience',
          content: [
            'Signature "Product Floor": an asymmetric, hand-tuned scattered layout (with a matching grid view toggle) that cycles through a repeating slot pattern so new products always drop into a position that matches the original design, on both desktop and mobile.',
            'Full shopping loop: product detail pages with image galleries and per-size stock (pulled live from inventory, not hardcoded), a slide-out cart drawer, a wishlist, a search overlay, and promotional banners and a rotating hero section — each independently editable from the admin panel.',
            'Multi-currency pricing (ZAR, USD, EUR, GBP, JPY, CAD, AUD) driven by a live exchange-rate table, plus guest checkout with an automatic cart merge into the customer\'s account the moment they sign in.',
            'A "My Account" area covering order history, invoices, returns, saved payment methods, coupons, store credit/refunds, and personal details — all reading from and writing to the same tables the admin dashboard uses.'
          ]
        },
        {
          heading: '2. Checkout, Payments & Order Pipeline',
          content: [
            'Real payment processing via Stripe\'s Payment Element and server-side Payment Intents (created by a dedicated edge function), alongside discount-code redemption with rate-limiting to prevent abuse.',
            'Orders are created through a single atomic database transaction (a Postgres RPC) that inserts the order, decrements inventory, bumps sales counters, generates an invoice, and fires an admin notification — so nothing can go out of sync partway through a purchase.',
            'Post-purchase, guest customers are offered a one-click account conversion that claims their just-placed order, and shipment tracking numbers can be refreshed live against a carrier-status edge function.'
          ]
        },
        {
          heading: '3. AI-Assisted Commerce Tools',
          content: [
            'An LLM-backed product-description generator in the admin product editor, which writes copy from the product\'s name, category, and features.',
            'AI-drafted abandoned-cart recovery emails: the marketing dashboard can generate subject lines and body copy tailored to the pending cart count, ready for the admin to review and send.',
            'A live AI customer-support chat widget on the storefront, answering questions about orders, shipping, returns, and sizing without leaving the page.',
            'Automated image handling on upload: server-side background removal (so product photos get a clean, consistent look without manual editing) and an AI consistency check that flags a new photo if its background doesn\'t match the product\'s main image.'
          ]
        },
        {
          heading: '4. Admin Command Center',
          content: [
            'A role-based dashboard (Owner, Admin, Manager, Support, Analyst, and read-only Viewer) with live analytics — revenue trends, traffic sources, device/country breakdowns, and product-level conversion rates.',
            'Full product management with per-size inventory, drag-and-drop floor positioning, and a "staged products" workflow that lets a team test a new product inside a single promotional banner before promoting it to the live storefront floor.',
            'Operational tooling for inventory alerts (low stock / out of stock, with a full change history), order fulfillment and refunds, customer profiles with lifetime value, discount codes, email campaigns, and abandoned-cart recovery with a tracked recovery rate.',
            'Real-time notifications (new orders, low stock, new signups) delivered live via Supabase Realtime, plus a full admin activity log and configurable store, notification, and payment-method settings.'
          ]
        },
        {
          heading: '5. Backend Architecture & Reliability',
          content: [
            'A PostgreSQL schema of 20+ tables with row-level security policies scoping every read/write to the right customer or admin role, and database triggers that keep stock, sales, and notification data automatically consistent.',
            'A shared caching and request-concurrency layer that protects the database connection pool from being overwhelmed when many admin panels or storefront sessions are active at once.',
            'Cookie-consent-gated analytics event tracking (page views, add-to-cart, checkout starts) batched client-side before being written to the database, feeding the traffic dashboards without hammering the backend on every click.'
          ]
        }
      ]
    }
},
  {
  id: 'the-lighthouse-guest-house',
  title: 'The Lighthouse Guest House: Heritage Hospitality Portal',
  category: 'websites',
  description: 'Heritage-styled guest house site with room comparison, rate estimation and WhatsApp-ready booking.',
  details: 'A single-page hospitality platform for a family-run B&B in Colesberg, built around its 24+ years of Karoo hospitality. The site combines an editorial vintage design language with practical booking tools: a natural-language booking copilot, a live rate estimator, filterable rooms with side-by-side comparison, and an enquiry flow that hands off to email or WhatsApp.',
  images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png'],
  tags: ['Hospitality UI', 'Booking Copilot', 'Heritage Branding'],
  liveUrl: 'https://your-lighthouse-guest-house-url.com', // TODO: replace with the deployed URL
  gridSpan: 'small',
  documentation: {
    overview: 'Experience-focused layout designed to turn road-trippers on the N1 into overnight bookings. Integrates heritage storytelling, a 13-room inventory with smart filtering, transparent seasonal pricing, and a synchronized enquiry pipeline, all wrapped in a warm parchment and brass identity with a switchable midnight theme.',
    sections: [
      {
        heading: '1. Brand Kit & Visual Identification',
        content: [
          'Adopted a vintage editorial profile pairing Playfair Display serif headings with Inter body text for a readable, heritage-inspired hospitality feel.',
          'Built a warm palette of Parchment Cream (#FAF8F5) backgrounds, Charcoal (#1A1A1A) text and structure, and Antique Brass (#D4AF37) accents, supported by sepia, amber and Karoo-sunset gradient tokens.',
          'Designed a custom SVG Lighthouse Emblem (tower, lantern room and light rays) that inherits its color from the surrounding theme and is reused in the navbar and footer.',
          'Introduced a switchable Parchment / Midnight theme persisted across visits via Zustand, with custom shadows (vintage and brass-glow), hairline borders, letterpress and plaque-style buttons, and fade/slide animations.'
        ]
      },
      {
        heading: '2. Site Architecture & Content Layout Routing',
        content: [
          'Engineered a sticky 6-link navigation (Aesthetics, Our Rooms, Rates & Policies, Dining, Discover Colesberg, Contact) with smooth-scroll anchors, a "Check Availability" call-to-action, a theme toggle and a responsive mobile menu.',
          'Hero Unit: Opens with "A Cozy Harbor in the Heart of the Historic Karoo", the location badge, a 24-years-of-hospitality banner, a "Reserve Your Stay" call-to-action and check-in/check-out pills.',
          'Legacy & Recognition: A horizontally scrollable guestbook-style timeline covering the AA Superior status, Four-Star Grading, Regional Finalist recognition, and 24+ years of family-run hospitality.',
          'Heritage Narrative: A book-style story panel with a philosophy pull-quote, alongside glass-case collectible cards such as Vintage Lighthouse Lanterns, Historic Colesberg Photographs and Antique Writing Desks.',
          'Karoo Sky Widget: Live Colesberg weather from the Open-Meteo API, a canvas-drawn sunset countdown dial, and a constellation overlay that appears in midnight mode.'
        ]
      },
      {
        heading: '3. Gallery, Rooms & Journey Planning',
        content: [
          'Fragments of the House: An asymmetrical scrapbook gallery of 75 catalogued plates with category filters (Spaces & Light, Details, Landscapes, Gardens, Culinary), shuffle, show more/less pagination and a full-size preview modal.',
          'Rooms & Suites: 13 distinct units, from the Honeymoon Suite to The Butterfly Cottage (sleeps 6), filterable by Honeymoon & Romance, Family, Solo & Business, and Private Garden categories.',
          'Room Comparison Drawer: Side-by-side comparison of up to 4 rooms covering capacity, bed configuration, layout, outdoor setting and an amenity matrix.',
          'N1 Route Planner: An interactive origin and destination tool (Johannesburg, Pretoria, Bloemfontein to Cape Town, Garden Route, Knysna and more) that totals distance and drive time, positioning Colesberg as the halfway stopover.'
        ]
      },
      {
        heading: '4. Booking Tools, Pricing & Policies',
        content: [
          'Booking Copilot: A natural-language parser that reads free-text trip descriptions to extract guest count, season, and preferences (family, honeymoon, garden, business), then ranks matching rooms with a confidence score and syncs the result to the global store.',
          'Smart Rate Estimator: Calculates accommodation and breakfast totals by season, occupancy, number of nights and guest count. Rates run at R290 per person sharing, R500 for single occupancy in low season, and R65 per person for breakfast.',
          'Itinerary Cart: A sticky "Your Karoo Journey" sidebar summarizing the chosen suite, breakfast, dining interests and suggested attractions.',
          'Policy Ledger: Check-in 2:00 PM to 9:00 PM, check-out 10:00 AM, a visual cancellation matrix from 100% refund (4+ weeks) down to non-refundable (under 1 week), plus secure parking, DSTV and air-conditioning highlights.'
        ]
      },
      {
        heading: '5. Local Discovery, Conversion & Contact',
        content: [
          'Nearby Dining: Four walkable restaurants (Die Platterlander, Bordeaux Restaurant, JC\'s Pizzeria & Pub, Horse and Mill Pub) with a tabbed Culinary Concierge that adds dining interests directly to the guest\'s enquiry.',
          'Discover Colesberg: Tabbed attraction categories covering history, archaeology, architecture, nature and water sports, including the Kemper Museum, Coleskop climb, Doornkloof Nature Reserve and the Gariep Dam.',
          'Reservation Enquiry Form: Validated fields for name, email, arrival and departure dates, party size, preferred suite, breakfast option and special requests, dispatched through the guest\'s native mail client.',
          'WhatsApp Closer: Auto-composes a formatted enquiry from the live booking state and opens it in WhatsApp. A mobile Express HUD offers tap-to-call, WhatsApp and copy-GPS shortcuts for travellers on the road.',
          'Find Us & Footer: Embedded map, N1 directions from both town entrances, and a footer carrying the physical address at 40A Church Street, Colesberg, 9795, phone +27(0)51-753 0043, email reservations@karoolighthouse.co.za, PO Box 15, and Facebook and Instagram links.'
        ]
      },
      {
        heading: '6. Technology Stack',
        content: [
          'Built with React 18, TypeScript and Vite, styled with Tailwind CSS and a custom design-token configuration.',
          'Global state (theme, cart, comparison, filters, parsed season) is managed with Zustand and partially persisted to local storage.',
          'Icons from lucide-react, live weather from the Open-Meteo API, and canvas rendering for the sunset dial and star field.'
        ]
      }
    ]
  }
},
  
  {
  id: 'campus-care',
  title: 'Campus Care: Institutional Healthcare Management Platform',
  category: 'websites',
  description: 'Comprehensive full-stack clinical administration, patient data pipelines, and campus healthcare coordination system.',
  details: 'A sophisticated digital health platform designed specifically for educational institutions to streamline medical services for both students and staff. It unifies appointment scheduling, digital medical records, patient vitals tracking, and role-based administrative analytics into a secure, single-page dashboard application.',
  images: ["124.png", "132.png", "133.png", "125.png", "126.png", "127.png", "128.png", "129.png", "130.png", "131.png"],
  tags: [
    'React',
    'Supabase',
    'TypeScript',
    'Healthcare SaaS'
  ],
  liveUrl: 'https://campus-care.page.gd/',
  status: 'offline',
  gridSpan: 'medium',
  documentation: {
    overview: 'Campus Care provides an integrated web ecosystem for campus clinics, streamlining clinical administration, optimizing patient data pipelines, and bridging communication gaps between campus patients and institutional healthcare providers.',
    sections: [
      {
        heading: '1. Technical Architecture & Database Framework',
        content: [
          'Frontend Architecture: Built on React, TypeScript, and styled with Tailwind CSS for highly scannable, responsive dashboard layouts featuring instant theme toggling (Light/Dark mode).',
          'Backend Cloud Platform: Utilizes a relational database layer (Supabase/Postgres) to securely manage patient records, operational auditing, and real-time dashboard analytics updating.',
          'Dynamic Schema Management: Features a built-in Database Management utility enabling administrators to construct system tables, define unique column inputs, assign data types (e.g., INT, VARCHAR), set field sizing, and enforce auto-incrementing primary keys directly from the client interface.'
        ]
      },
      {
        heading: '2. Role-Based Access Control (RBAC) & Portal Views',
        content: [
          'Granular Security Layer: Implements strict role classifications linked directly to authenticated accounts, establishing clear compliance boundaries for clinical data privacy.',
          'Administrator Interface: Offers complete institutional oversight with a master metrics console mapping total platform users, active healthcare staff distributions, comprehensive system logs, and quick actions to onboard staff or register users.',
          'Healthcare Staff Workspace: Features advanced clinical tracking panels allowing medical professionals to manage incoming patient queues, process professional medical referrals, issue medical prescriptions, and review treatment history.',
          'Student & Staff Patient View: Provides a secure, confidential environment for campus members to book medical appointments, access health resources, configure personal profile information, and monitor ongoing historical logs.'
        ]
      },
      {
        heading: '3. Clinical Performance Logic & Medical Analytics',
        content: [
          'Vitals Tracking Engine: Houses a dynamic data collection component designed to document and track vital signs over time, logging physical parameters including height (cm), weight (kg), blood pressure (mmHg), heart rate/pulse (BPM), and body temperature (180°C).',
          'Patient Identity Mapping: Relies on an integrated mapping matrix that perfectly binds clinical medical logs, historical prescriptions, and past consulting visits to unique institutional Staff or Student Numbers.',
          'Centralized Practice Management: Coordinates critical healthcare sub-systems—including Patient Management, Appointment Scheduling, Medical Records tracking, Referral routing, and Medical Inventory Management—into a single, consolidated platform.'
        ]
      }
    ]
  }
},
  {
  "id": "trackademy",
  "title": "Trackademy: Full-Stack Academic Management Platform",
  "category": "websites",
  "description": "Comprehensive student academic performance, course management, and automated exam eligibility system[cite: 1].",
  "details": "A sophisticated, lightweight SaaS platform designed for tertiary institutions to eliminate administrative silos[cite: 1]. It centralizes student registration, grade book entries, automated exam eligibility calculations against a strict 50% performance benchmark, and secure role-based dashboard metrics[cite: 1].",
  "images": ['135.png', '136.png', '137.png', '138.png', '139.png', '140.png', '141.png', '145.png', '146.png', '147.png'],
  "tags": ["React", "Supabase", "TypeScript", "Academic SaaS"],
  "liveUrl": "https://trackademy-omega.vercel.app",
  "status": "offline",
  "gridSpan": "large",
  "documentation": {
    "overview": "Trackademy is a single-page client application powered by a Supabase backend and a Postgres database layer. The platform automates data synchronization across institutional hierarchies—encompassing faculties, departments, and programs—while securely handling academic records, transcript generation, and role-based permissions.",
    "sections": [
      {
        "heading": "1. Technical Architecture & Database Framework",
        "content": [
          "Frontend Architecture: Built on React 18, TypeScript 5, Vite 5, and styled with Tailwind CSS 3.4 for responsive, high-density dashboard layouts.",
          "Backend Cloud Platform: Utilizes Supabase (Postgres) to natively manage database relations, application authentication, storage buckets, and serverless edge functions.",
          "Relational Data Schema: Structured tables map critical dependencies across profiles, students, lecturers, courses, course schedules, assessment types, student enrollments, and raw marks.",
          "Real-time & Storage Pipelines: Leverages Supabase real-time subscriptions for instant grade and announcement updates, with secure storage buckets hosting file resources and transcript PDFs.",
          "Local Deployment Controls: Maintained via standard node package workflows, executing production previews natively through 'npm run build' and 'npm run preview' cycles."
        ]
      },
      {
        "heading": "2. Role-Based Access Control (RBAC) & Portals",
        "content": [
          "Granular Security Layer: Implements strict role classifications linked directly to Supabase Auth profiles, establishing clear data boundaries for four targeted institutional access levels.",
          "Administrator Interface: Full master system access to register students, configure courses, set up academic structures (faculties/departments), assign lecturers, track system-wide trends, and export records.",
          "Lecturer Dashboard: Streamlined academic workspaces allowing professors to create dynamic assessment weights, manage class materials, execute bulk grade updates, and generate performance reports.",
          "Student Portal: Empowering student views to track enrollment coursework totals, check ongoing eligibility status, view weekly class schedules, set personal study goals, and download official transcript PDFs.",
          "Exam Officer Configuration: Specialized workspace permissions designed to perform automated eligibility audits, audit compliance tracks, and manage final exam session schedules."
        ]
      },
      {
        "heading": "3. Academic Automation Logic & Eligibility Engines",
        "content": [
          "50% Eligibility Threshold: Features a built-in automated verification calculation engine that checks semester assessment averages against the mandatory 50% institution benchmark required for final exam qualification.",
          "Weighted Score System: Automatically processes disparate weights across multiple assessment types—such as quizzes, assignments, tests, and research projects—to yield accurate real-time coursework totals.",
          "Centralized Data Sync: Eliminates paper silos through instantaneous data sync, ensuring that updates to marks or attendance sheets instantly adjust a student's standing and GPA across portals.",
          "Serverless Export Engine: Utilizes the client-side environment and server-side secret keys to dynamically assemble and render administrative data matrices into clean, downloadable CSV or PDF documents."
        ]
      }
    ]
  }
},
  {
  "id": "buddy",
  "title": "Buddy: Campus Social & Academic Management Ecosystem",
  "category": "websites",
  "description": "A comprehensive one-stop web platform blending institutional academic tracking with integrated student community social layers.",
  "details": "A dynamic full-stack SaaS solution engineered for universities to manage academic lifecycles and peer interactions concurrently. The system unifies student and staff registration, course and department administration, real-time classroom attendance logging, grading metrics computation, and a rich social networking ecosystem featuring posts, groups, and real-time interaction feeds.",
  "images": [
    "68.png",
    "69.png",
    "70.png",
    "71.png",
    "72.png",
    "73.png",
    "74.png",
    "75.png",
    "76.png",
    "77.png",
    "78.png",
    "79.png",
    "80.png",
    "81.png",
    "82.png",
    "83.png",
    "84.png",
    "85.png",
    "86.png",
    "87.png",
    "88.png",
    "89.png",
    "90.png",
    "91.png",
    "92.png",
    "93.png",
    "94.png",
    "95.png",
    "96.png",
    "97.png",
    "98.png",
    "99.png",
    "100.png",
    "101.png",
    "102.png",
    "103.png",
    "104.png",
    "105.png",
    "106.png",
    "107.png",
    "108.png"
  ],
  "tags": [
    "React",
    "Node.js",
    "SQL/PostgreSQL",
    "Tailwind CSS",
    "Academic SaaS"
  ],
  "liveUrl": "https://buddysocials.page.gd/",
  "gridSpan": "medium",
  "documentation": {
    "overview": "Buddy bridges the gap between cold administrative systems and active student life by running dual operational hubs—an Academics Management Portal and an interactive Social Media Feed—served from a centralized database architecture to ensure unified user profiles across all interfaces.",
    "sections": [
      {
        "heading": "1. Landing Interface & Public Gateway",
        "content": [
          "Brand Concept: The platform acts as a consolidated digital ecosystem with the foundational motto: 'It's not just Social Media, It's Buddy'.",
          "Public Portal Access: Features clear routing split pathways designed to separate standard student workflows from dedicated administrative/faculty system gateways.",
          "Custom Theme Brand Assets: Showcases a high-contrast design containing contextual brand variations and dynamic asset configurations built around a distinct owl mascot emblem."
        ]
      },
      {
        "heading": "2. Social Media Network & Community Layer",
        "content": [
          "Interactive Social Feed: The interface provides students with a personal social space to publish media-rich updates, share thoughts, and communicate with peers.",
          "Peer Relations Engine: Incorporates a comprehensive network request pipeline enabling mutual friend discoveries, profile updates, and inbound connection approvals or declines.",
          "Group & Sub-Community Spaces: Empowers campus members to form dedicated collaborative spaces, manage independent group page feeds, join interests (e.g., 'Red Devils'), and share chronological timeline stories."
        ]
      },
      {
        "heading": "3. Faculty & Student Management Dashboards",
        "content": [
          "Master Administrative View: The master metrics console displays aggregate institutional KPIs—including Total Users, active Students, Staff members, running Courses, and created Departments.",
          "Course Directory Logs: Offers a scaled dashboard matrix tracking course distribution parameters across standard internal structural branches.",
          "Dynamic Directory Registries: Houses searchable tabular structures mapping verified student parameters—encompassing full legal names, assigned student numbers, academic levels, registered faculties, and department majors (e.g., Advanced ICT Diploma, Data Science, Applications Development)."
        ]
      },
      {
        "heading": "4. Academic Automation & Analytics Tools",
        "content": [
          "Automated GPA Compute Engine: Contains a specialized processing panel that filters specific academic years, program sessions, levels, and faculties to compute clean cumulative grade point averages directly.",
          "Official Grade Book Transcripts: Generates historical semester score matrices mapping course codes (e.g., NAAA732), academic weights, achieved raw scores, letter grades, and total grade point computations.",
          "Real-Time Attendance Monitoring: Integrates an automated classroom attendance tracker displaying graphical donut chart distributions that break down percentage ratios of 'Present' versus 'Absent' status.",
          "Institutional Scheduling System: Features an interactive monthly calendar framework tied to a custom schedule form where users input class titles, descriptors, and accurate start/end timestamps."
        ]
      }
    ]
  }
},

  {
    id: 'spu-sportswear',
    title: 'SPU UTD: Fan Merchandise Portal',
    category: 'websites',
    description: 'High-contrast e-commerce storefront for sports merchandise and casual fan apparel.',
    details: 'A specialized lifestyle retail portal matching digital storefront mechanics with sports culture aesthetics. The site incorporates high-impact sports hero imagery, a clean responsive product grid with interactive cart shortcuts, and unified club branding.',
    images: ['109.png', '110.png', '111.png', '112.png', '113.png', '114.png', '115.png', '116.png', '117.png', '118.png', '119.png', '120.png', '121.png', '122.png', '123.png'],
    tags: ['E-Commerce Grid', 'Merchandise UI', 'Sports Branding'],
    liveUrl: 'https://spu-united.netlify.app/',
    gridSpan: 'small', // Swapped from medium to small
    documentation: {
      overview: 'A conversion-focused merchandise layout built to capture fan engagement and translate club loyalty into retail sales. Combines striking atmospheric branding with a highly legible catalog structure.',
      sections: [
        {
          heading: '1. Brand Kit & Identity Deployment',
          content: [
            'Adopted a bold corporate layout featuring a solid black header menu container paired with high-visibility crimson red navigation links.',
            'Integrated the primary team emblem lockup across all views, displaying a high-contrast shield graphic that encloses a stylized athlete silhouette against an orange and yellow sunset gradient.',
            'Mapped layout interface configurations directly from design files: file 55.png records the immersive landing hero display featuring a crowded stadium backdrop and bold orange typography ("You\'ll Never Walk Alone").',
            'Allocated active e-commerce storefront tracking via file 54.png, preserving the structured product collection view and card interface components.'
          ]
        },
        {
          heading: '2. Site Architecture & Navigation Paths',
          content: [
            'Engineered a lightweight 5-tier header menu system directing traffic to core modules: Home, Shop, Matches, About, and Contact.',
            'Integrated an isolated shopping bag icon utility at the right side of the navigation bar to allow rapid access to active customer carts.',
            'Structured an editorial lifestyle presentation that connects team identity directly with the apparel catalog to drive higher cross-selling opportunities.'
          ]
        },
        {
          heading: '3. Product Grid & Retail Mechanics',
          content: [
            'Implemented a highly structured 4-column responsive product card grid optimized for desktop and mobile displays.',
            'Configured unified metadata layouts for individual catalog items displaying stock keeping descriptors ("SPU"), explicit item names, aggregate 5-star customer review rating rows, and high-visibility price tags fixed at R700.',
            'Mapped specific active merchandise variants across the main storefront catalog: "White Hug Dealer", "Black Hug Dealer", "Navy T-Shirt.v1", and "Black T-Shirt.v2".',
            'Deployed individual, floating blue-accented shopping cart button triggers on every product card to facilitate quick, single-click additions without forcing page redirection.'
          ]
        }
      ]
    }
  }
];

export default function Showcase() {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [documentationProject, setDocumentationProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showAll, setShowAll] = useState<boolean>(false);
  // Track whether the expanded lightbox view is open
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProject]);

  const getAssetUrl = (filename: string) => {
    return new URL(`../assets/${filename}`, import.meta.url).href;
  };

  const filteredProjects = PROJECTS;
const INITIAL_COUNT = 6;
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_COUNT);

  const getGridClass = (span?: string) => {
    if (span === 'large') return 'col-span-1 md:col-span-2 lg:col-span-3 row-span-2 md:row-span-2';
    if (span === 'medium') return 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2 md:row-span-1';
    return 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1';
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section 
      id="projects" 
      className="pt-20 sm:pt-28 lg:pt-32 pb-20 transition-colors duration-300" 
      style={{ backgroundColor: isDark ? '#000000' : '#ffffff' , marginTop: '-10px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p 
            className="text-sm tracking-widest uppercase text-[#CE9635] mb-4" 
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            // CASE STUDIES
          </p>
          <h2 
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-950'}`} 
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Featured Projects
          </h2>
        </div>

        {/* Masonry Grid */}
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-max gap-4 lg:gap-6">
  {visibleProjects.map(project => {
    // Dynamically assign aspect ratio based on category
    const aspectClass = project.category === 'websites' ? 'aspect-video' : 'aspect-square';

    return (
      <div 
        key={project.id} 
        className={`group relative overflow-hidden cursor-pointer transition-all duration-300 rounded-xl hover:shadow-[0_0_30px_rgba(206,150,53,0.3)] hover:-translate-y-1 ${getGridClass(project.gridSpan)} ${aspectClass}`} 
        onClick={() => setSelectedProject(project)} 
        style={{ backgroundColor: isDark ? '#121212' : '#ffffff' }} 
      >
        <img 
          src={getAssetUrl(project.images[0])} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />

        {/* Deployment Status Badge - always visible, not just on hover */}
        {project.status === 'offline' && (
          <div 
            className="absolute top-2 right-2 sm:top-3 sm:right-3 flex items-center gap-1.5 px-2 py-1 rounded-full backdrop-blur-sm border font-mono text-[9px] uppercase tracking-widest"
            style={{
              backgroundColor: 'rgba(0,0,0,0.6)',
              borderColor: 'rgba(239,68,68,0.5)',
              color: '#f87171'
            }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
            </span>
            Redeploying
          </div>
        )}
        
        {/* Hover Overlay Text */}
{/* Determine if the container is small to apply tighter styling */}
<div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end ${project.gridSpan === 'small' ? 'p-3' : 'p-6'}`}>
  
  <p className={`font-mono text-[#CE9635] uppercase tracking-[0.2em] ${project.gridSpan === 'small' ? 'text-[8px] mb-0.5' : 'text-[10px] mb-2'}`}>
    // {project.category}
  </p>
  
  <h3 className={`font-bold text-white leading-tight ${project.gridSpan === 'small' ? 'text-xs mb-1' : 'text-lg mb-2'}`} style={{ fontFamily: "'Courier New', monospace" }}>
    {project.title}
  </h3>
  
  {/* Only show the description if the container is not 'small' to prevent overflow */}
  {project.gridSpan !== 'small' && (
    <p className="text-xs text-gray-300 leading-snug line-clamp-2">
      {project.description}
    </p>
  )}
</div>
      </div>
    );
  })}
</div>

        {/* Pagination Trigger */}
        {filteredProjects.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => setShowAll(!showAll)} 
              className={`px-8 py-3 rounded text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                isDark 
                  ? 'bg-transparent border border-[#CE9635] text-[#CE9635] hover:bg-[#CE9635] hover:text-black shadow-[0_0_15px_rgba(206,150,53,0.1)]' 
                  : 'bg-transparent border border-[#CE9635] text-gray-950 hover:bg-[#CE9635] hover:text-white'
              }`}
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              {showAll ? '// VIEW LESS' : '// VIEW ALL CONTRACTS'}
            </button>
          </div>
        )}
      </div>

      {/* Project Detail Popover Modal */}
{selectedProject && (
  <>
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl transition-all duration-300"
        style={{ backgroundColor: isDark ? '#0a0a0a' : '#ffffff' }}
      >
        {/* Header Control Panel */}
        <div 
          className="sticky top-0 z-10 px-6 py-4 flex justify-between items-center"
          style={{ backgroundColor: isDark ? '#0d0d0d' : '#f9f9f9' }}
        >
          <h3 
            className="text-md font-bold uppercase tracking-wider flex items-center gap-2"
            style={{ fontFamily: "'Courier New', monospace", color: isDark ? '#CE9635' : '#8a6323' }}
          >
            <Terminal size={16} /> COMPONENT_PREVIEW // {selectedProject.id}
          </h3>
          <button 
            onClick={() => setSelectedProject(null)}
            className={`p-1.5 rounded-full transition-colors cursor-pointer ${isDark ? 'text-gray-400 hover:bg-gray-900 hover:text-white' : 'text-gray-600 hover:bg-gray-200 hover:text-black'}`}
          >
            <X size={20} />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-72px)] p-6 sm:p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Immersive Image Rotator Container */}
            <div className="space-y-3">
              <div 
                className="relative rounded-xl overflow-hidden flex items-center justify-center w-full cursor-pointer group"
                style={{ backgroundColor: isDark ? '#121212' : '#ffffff' }}
                onClick={() => setIsLightboxOpen(true)}
              >
                <img 
                  src={getAssetUrl(selectedProject.images[currentImageIndex])} 
                  alt={`${selectedProject.title} view`} 
                  className="w-full h-auto object-contain" 
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <span className="text-white text-xs font-mono bg-black/50 px-3 py-1 rounded">CLICK TO EXPAND</span>
                </div>
                
                {selectedProject.images.length > 1 && (
                  <>
                    <button 
                      // FIX: Passing 'e' to the handler
                      onClick={(e) => handlePrevImage(e)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 text-white hover:bg-[#CE9635] hover:text-black transition-all cursor-pointer"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button 
                      // FIX: Passing 'e' to the handler
                      onClick={(e) => handleNextImage(e)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 text-white hover:bg-[#CE9635] hover:text-black transition-all cursor-pointer"
                    >
                      <ChevronRight size={16} />
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-black/80 text-[10px] font-mono text-gray-300 tracking-widest">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {selectedProject.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto py-1">
                  {selectedProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 transition-all ${currentImageIndex === idx ? 'ring-2 ring-[#CE9635] scale-95' : 'opacity-60 hover:opacity-100'}`}
                      style={{ backgroundColor: isDark ? '#121212' : '#ffffff' }}
                    >
                      <img src={getAssetUrl(img)} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details Panel */}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#CE9635]">[{selectedProject.category}]</span>
                <h4 className="text-2xl font-bold tracking-tight mt-1" style={{ fontFamily: "'Courier New', monospace", color: isDark ? '#ffffff' : '#000000' }}>
                  {selectedProject.title}
                </h4>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: isDark ? '#d1d5db' : '#222222' }}>{selectedProject.details}</p>
              
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded" style={{ backgroundColor: isDark ? 'rgba(206, 150, 53, 0.08)' : 'rgba(206, 150, 53, 0.12)', color: isDark ? '#CE9635' : '#8a6323' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                {selectedProject.liveUrl && (
                  selectedProject.status === 'offline' ? (
                    <div 
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded font-mono border border-dashed cursor-not-allowed select-none"
                      style={{ 
                        color: isDark ? '#9ca3af' : '#6b7280',
                        borderColor: 'rgba(239,68,68,0.4)',
                        backgroundColor: isDark ? 'rgba(239,68,68,0.06)' : 'rgba(239,68,68,0.05)'
                      }}
                      title="Redeploying — check back soon"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-60"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                      Deployment Offline
                    </div>
                  ) : (
                    <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded bg-[#CE9635] text-black hover:shadow-[0_0_15px_rgba(206,150,53,0.4)] transition-all font-mono">
                      <ExternalLink size={14} /> Launch Live Site
                    </a>
                  )
                )}
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded transition-all font-mono ${isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                    <Github size={14} /> Source Repository
                  </a>
                )}
                <button
                  onClick={() => { setDocumentationProject(selectedProject); setSelectedProject(null); }}
                  className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded transition-all font-mono cursor-pointer ${isDark ? 'text-[#CE9635] hover:bg-[#CE9635]/10' : 'text-[#8a6323] hover:bg-[#CE9635]/10'}`}
                >
                  <FileText size={14} /> Read Blueprint Docs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Lightbox Overlay */}
    {isLightboxOpen && (
      <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setIsLightboxOpen(false)}>
        <button className="absolute top-6 right-6 text-white p-2 hover:text-[#CE9635] z-10" onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}>
          <X size={32} />
        </button>

        {/* Lightbox Navigation */}
        {selectedProject.images.length > 1 && (
          <>
            <button 
              onClick={(e) => handlePrevImage(e)}
              className="absolute left-4 p-3 rounded-full bg-white/10 text-white hover:bg-[#CE9635] hover:text-black transition-all z-10"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={(e) => handleNextImage(e)}
              className="absolute right-4 p-3 rounded-full bg-white/10 text-white hover:bg-[#CE9635] hover:text-black transition-all z-10"
            >
              <ChevronRight size={32} />
            </button>
            <div className="absolute bottom-6 text-white font-mono text-sm bg-black/50 px-4 py-2 rounded-full pointer-events-none">
              {currentImageIndex + 1} / {selectedProject.images.length}
            </div>
          </>
        )}

        <img 
          key={currentImageIndex}
          src={getAssetUrl(selectedProject.images[currentImageIndex])} 
          alt="Expanded view" 
          className="max-w-full max-h-[90vh] object-contain shadow-2xl transition-all duration-300 rounded-2xl"
          onClick={(e) => e.stopPropagation()} 
        />
      </div>
    )}
  </>
)}

      {/* Structural Infrastructure System Documentation Overlay Sheet */}
      {documentationProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div 
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-lg shadow-2xl transition-all duration-300"
            style={{ 
              backgroundColor: isDark ? '#080808' : '#ffffff',
              border: `1px solid ${isDark ? 'rgba(206, 150, 53, 0.25)' : 'rgba(206, 150, 53, 0.4)'}`
            }}
          >
            {/* Modal Documentation Header Bar */}
            <div 
              className="sticky top-0 z-10 px-6 py-4 flex justify-between items-center border-b"
              style={{ 
                backgroundColor: isDark ? '#0c0c0c' : '#f9f9f9',
                borderColor: isDark ? 'rgba(206, 150, 53, 0.15)' : 'rgba(206, 150, 53, 0.25)'
              }}
            >
              <div className="flex items-center gap-2">
                <Code2 size={16} className="text-[#CE9635]" />
                <h3 
                  className="text-xs font-bold uppercase tracking-widest font-mono"
                  style={{ color: isDark ? '#ffffff' : '#000000' }}
                >
                  SYSTEM_DOCUMENTATION // {documentationProject.id}
                </h3>
              </div>
              <button 
                onClick={() => setDocumentationProject(null)}
                className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                  isDark ? 'text-gray-400 hover:bg-gray-900 hover:text-white' : 'text-gray-600 hover:bg-gray-200 hover:text-black'
                }`}
              >
                <X size={18} />
              </button>
            </div>

            {/* Document Content Block */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 
                  className="text-xl font-bold tracking-tight mb-2"
                  style={{ color: isDark ? '#ffffff' : '#000000' }}
                >
                  Architectural Overview
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: isDark ? '#9ca3af' : '#222222' }}>
                  {documentationProject.documentation.overview}
                </p>
              </div>

              {/* Sequential Details Split Iterations */}
              <div className="space-y-4 pt-4 border-t border-dashed border-gray-800 dark:border-gray-800/40">
                {documentationProject.documentation.sections.map((section, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded border space-y-3"
                    style={{ 
                      backgroundColor: isDark ? '#0e0e0e' : '#fcfcfc',
                      borderColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.06)'
                    }}
                  >
                    <h4 
                      className="text-sm font-bold tracking-wide font-mono flex items-center gap-2"
                      style={{ 
                        fontFamily: "'Courier New', monospace",
                        color: isDark ? '#ffffff' : '#000000'
                      }}
                    >
                      <Layers size={14} className="text-[#CE9635]" />
                      {section.heading}
                    </h4>
                    <ul className="space-y-2 pl-5 list-disc text-sm leading-relaxed" style={{ color: isDark ? '#d1d5db' : '#222222' }}>
                      {section.content.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Window Footer Control Bar */}
            <div 
              className="px-6 py-4 flex justify-end"
              style={{ 
                backgroundColor: isDark ? '#0d0d0d' : '#f9f9f9',
                borderTop: `1px solid ${isDark ? 'rgba(206, 150, 53, 0.15)' : 'rgba(206, 150, 53, 0.3)'}`
              }}
            >
              <button
                onClick={() => setDocumentationProject(null)}
                className="px-5 py-2 rounded font-bold text-xs uppercase tracking-wider text-black bg-[#CE9635] hover:shadow-[0_0_15px_rgba(206,150,53,0.3)] transition-all cursor-pointer font-mono"
              >
                Close Documentation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}