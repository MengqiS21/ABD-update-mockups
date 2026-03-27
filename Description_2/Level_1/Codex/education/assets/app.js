const { useMemo, useState, useEffect } = React;
const root = ReactDOM.createRoot(document.getElementById("root"));
const currentPage = window.SKILLFORGE_PAGE || "home";

const primaryNav = [
  { key: "home", label: "Home", href: "./index.html" },
  { key: "courses", label: "Programs", href: "./courses.html" },
  { key: "learning", label: "Classroom", href: "./learning.html" },
  { key: "pricing", label: "Pricing", href: "./pricing.html" },
  { key: "dashboard", label: "Dashboard", href: "./dashboard.html" },
];

const secondaryNav = [
  { label: "Career Quiz", href: "./index.html#find-path" },
  { label: "Funding Options", href: "./pricing.html#financing" },
  { label: "Live Cohorts", href: "./courses.html#live-cohorts" },
  { label: "Advisor Chat", href: "./pricing.html#advisor-chat" },
];

const employerLogos = ["Google", "Mayo Clinic", "Deloitte"];

const successStories = [
  {
    name: "Latoya Jenkins",
    outcome: "Retail supervisor to medical admin specialist",
    metric: "$9/hr wage increase in 12 weeks",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    alt: "Portrait of adult learner Latoya Jenkins smiling in a bright office",
    quote: "The cohort kept me accountable, and the mock interviews made the switch feel possible."
  },
  {
    name: "Ethan Cruz",
    outcome: "Warehouse lead to IT support technician",
    metric: "CompTIA-ready in 10 weeks",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    alt: "Portrait of Ethan Cruz in a casual work shirt seated near a laptop",
    quote: "SkillForge gave me a pathway, not just videos. I knew exactly what to do each week."
  },
  {
    name: "Janelle Morris",
    outcome: "Caregiver to billing and coding assistant",
    metric: "Hired by a partner clinic before graduation",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
    alt: "Portrait of Janelle Morris in a training center with notebooks on a desk",
    quote: "I needed a short program with real support. The live office hours changed everything."
  },
];

const courses = [
  {
    title: "Medical Administrative Assistant Certificate",
    slug: "medical-admin",
    field: "Healthcare Support",
    format: "Cohort",
    duration: "8 weeks",
    hours: "96 hours",
    cost: "$349",
    nextStart: "March 3",
    credential: "Certificate",
    level: "Beginner",
    description: "Front-office systems, EHR workflow, scheduling, and billing fundamentals for outpatient care teams.",
  },
  {
    title: "IT Support Technician Track",
    slug: "it-support",
    field: "Information Technology",
    format: "Live Online",
    duration: "10 weeks",
    hours: "120 hours",
    cost: "$499",
    nextStart: "March 10",
    credential: "Certificate",
    level: "Beginner",
    description: "Hardware, ticketing, troubleshooting, and customer support workflows aligned to entry-level help desk roles.",
  },
  {
    title: "Business Administration Foundations",
    slug: "business-admin",
    field: "Business Administration",
    format: "Self-Paced",
    duration: "6 weeks",
    hours: "52 hours",
    cost: "$199",
    nextStart: "Start anytime",
    credential: "Badge",
    level: "Beginner",
    description: "Office operations, spreadsheets, communication, and reporting for career-changers moving into admin roles.",
  },
  {
    title: "Residential Electrical Basics",
    slug: "electrical-basics",
    field: "Trades",
    format: "Cohort",
    duration: "12 weeks",
    hours: "140 hours",
    cost: "$650",
    nextStart: "April 7",
    credential: "CEU",
    level: "Intermediate",
    description: "Safety, circuits, blueprint reading, and jobsite workflows with guided labs and mentor check-ins.",
  },
  {
    title: "Pharmacy Support Essentials",
    slug: "pharmacy-support",
    field: "Healthcare Support",
    format: "Self-Paced",
    duration: "5 weeks",
    hours: "38 hours",
    cost: "Free",
    nextStart: "Start anytime",
    credential: "Badge",
    level: "Beginner",
    description: "Medication terminology, inventory basics, and pharmacy operations readiness for support staff roles.",
  },
  {
    title: "Bookkeeping for Small Business",
    slug: "bookkeeping",
    field: "Business Administration",
    format: "Live Online",
    duration: "7 weeks",
    hours: "64 hours",
    cost: "$420",
    nextStart: "March 17",
    credential: "Certificate",
    level: "Intermediate",
    description: "AP/AR workflows, payroll fundamentals, reconciliations, and software practice with instructor feedback.",
  },
];

const learningModules = [
  { week: "Week 1", topic: "Healthcare communication and systems", status: "Complete" },
  { week: "Week 2", topic: "Scheduling, referrals, and patient intake", status: "Complete" },
  { week: "Week 3", topic: "Medical Billing Fundamentals", status: "Current" },
  { week: "Week 4", topic: "Claims workflows and reimbursement", status: "Upcoming" },
  { week: "Week 5", topic: "Insurance verification and compliance", status: "Upcoming" },
];

const discussionThreads = [
  { title: "Best way to verify secondary insurance?", replies: 14, activity: "6 min ago" },
  { title: "Template for intake correction notes", replies: 9, activity: "18 min ago" },
  { title: "Practice set: CPT modifier examples", replies: 21, activity: "34 min ago" },
];

const upcomingAssignments = [
  { title: "Submit intake workflow worksheet", due: "Mar 6", type: "Worksheet" },
  { title: "Discussion response: billing accuracy", due: "Mar 7", type: "Discussion" },
  { title: "Quiz: payer terminology", due: "Mar 9", type: "Quiz" },
];

const cohortMembers = ["AM", "JR", "TC", "LS", "PK"];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function countdownParts(targetDate) {
  const remaining = Math.max(0, targetDate.getTime() - Date.now());
  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remaining / (1000 * 60)) % 60);
  return { days, hours, minutes };
}

function Icon({ name, className = "h-5 w-5" }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", viewBox: "0 0 24 24", className, "aria-hidden": "true" };
  if (name === "arrow") return <svg {...common}><path d="M5 12h14" /><path d="m13 5 7 7-7 7" /></svg>;
  if (name === "play") return <svg {...common}><path d="m8 6 10 6-10 6z" /></svg>;
  if (name === "clock") return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
  if (name === "book") return <svg {...common}><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20v15.5A1.5 1.5 0 0 0 18.5 18H6.5A2.5 2.5 0 0 0 4 20.5z" /><path d="M8 8h8" /><path d="M8 12h8" /></svg>;
  if (name === "chat") return <svg {...common}><path d="M7 10h10" /><path d="M7 14h6" /><path d="M6 19 3 21V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2z" /></svg>;
  if (name === "briefcase") return <svg {...common}><rect x="3" y="7" width="18" height="12" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 12h18" /></svg>;
  if (name === "check") return <svg {...common}><path d="m5 13 4 4L19 7" /></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="9" /></svg>;
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-slate-50/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-between gap-4">
              <a href="./index.html" className="focus-ring inline-flex items-center gap-3 rounded-2xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--sf-navy)] text-lg font-bold text-white">SF</div>
                <div>
                  <p className="font-display text-xl font-bold text-[var(--sf-navy)]">SkillForge</p>
                  <p className="text-sm text-slate-600">Career certificates for adult learners</p>
                </div>
              </a>
              <a href="./pricing.html#advisor-chat" className="focus-ring inline-flex rounded-full border border-[var(--sf-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--sf-navy)] lg:hidden">
                Talk to Advisor
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <label className="relative flex-1 min-w-[220px]" htmlFor="site-search">
                <span className="sr-only">Search programs</span>
                <input id="site-search" type="search" placeholder="Search programs, credentials, or careers" className="focus-ring h-11 w-full rounded-full border border-[var(--sf-border)] bg-white px-4 text-sm text-slate-900 placeholder:text-slate-500" />
              </label>
              <a href="./dashboard.html" className="focus-ring rounded-full border border-[var(--sf-border)] px-4 py-2 text-sm font-semibold text-[var(--sf-navy)]">Sign In</a>
              <a href="./pricing.html" className="focus-ring rounded-full bg-[var(--sf-blue)] px-5 py-2.5 text-sm font-semibold text-white">Try Free</a>
            </div>
          </div>
          <nav aria-label="Primary" className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-wrap gap-2">
              {primaryNav.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  aria-current={item.key === currentPage ? "page" : undefined}
                  className={cx(
                    "focus-ring rounded-full px-4 py-2 text-sm font-semibold transition",
                    item.key === currentPage ? "nav-active" : "border border-[var(--sf-border)] bg-white text-slate-700 hover:border-blue-200 hover:text-[var(--sf-blue)]"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {secondaryNav.map((item) => (
                <a key={item.label} href={item.href} className="focus-ring rounded-full bg-[var(--sf-sky)] px-3 py-2 text-sm font-medium text-[var(--sf-navy)] hover:bg-white">
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--sf-border)] bg-white/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-2xl font-bold text-[var(--sf-navy)]">SkillForge</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
            Stackable certificates, live cohorts, and career coaching built for working adults ready to pivot into higher-opportunity roles.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Explore</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a className="focus-ring text-slate-700 hover:text-[var(--sf-blue)]" href="./courses.html">Programs</a></li>
            <li><a className="focus-ring text-slate-700 hover:text-[var(--sf-blue)]" href="./learning.html">Learning Tools</a></li>
            <li><a className="focus-ring text-slate-700 hover:text-[var(--sf-blue)]" href="./pricing.html">Tuition & Aid</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Support</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a className="focus-ring text-slate-700 hover:text-[var(--sf-blue)]" href="./course-detail.html">Program Details</a></li>
            <li><a className="focus-ring text-slate-700 hover:text-[var(--sf-blue)]" href="./dashboard.html">Student Dashboard</a></li>
            <li><a className="focus-ring text-slate-700 hover:text-[var(--sf-blue)]" href="./pricing.html#advisor-chat">Advisor Chat</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Trust</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <p>Accreditation-aligned curricula</p>
            <p>Employer-reviewed competency maps</p>
            <p>Accessibility-first course delivery</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PageHeader({ eyebrow, title, intro, actions, breadcrumbs, tabs }) {
  return (
    <section className="surface-panel soft-shadow rounded-[2rem] border border-white/70 px-5 py-6 sm:px-8">
      {breadcrumbs ? (
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-2">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                <a href={crumb.href} className="focus-ring rounded-md hover:text-[var(--sf-blue)]">{crumb.label}</a>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}
      <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--sf-blue)]">{eyebrow}</p>
          <h1 className="font-display mt-3 text-4xl font-bold text-[var(--sf-navy)] sm:text-5xl">{title}</h1>
          <p className="mt-4 text-base leading-8 text-slate-600">{intro}</p>
        </div>
        {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
      </div>
      {tabs ? (
        <nav aria-label="Section" className="mt-6 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <a key={tab.label} href={tab.href} className={cx("focus-ring rounded-full border px-4 py-2 text-sm font-semibold", tab.active ? "subnav-active" : "border-[var(--sf-border)] bg-slate-50 text-slate-600 hover:bg-white")}>
              {tab.label}
            </a>
          ))}
        </nav>
      ) : null}
    </section>
  );
}

function CourseCard({ course }) {
  return (
    <article className="surface-panel soft-shadow flex h-full flex-col rounded-[1.75rem] border border-white/80 p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-[var(--sf-sky)] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--sf-blue)]">{course.field}</span>
        <span className="rounded-full bg-[var(--sf-mint)] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">{course.format}</span>
      </div>
      <h2 className="mt-4 text-2xl font-bold text-[var(--sf-navy)]">{course.title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">{course.description}</p>
      <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-2xl bg-slate-50 p-3">
          <dt className="text-slate-500">Next start</dt>
          <dd className="mt-1 font-semibold text-slate-900">{course.nextStart}</dd>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <dt className="text-slate-500">Total hours</dt>
          <dd className="mt-1 font-semibold text-slate-900">{course.hours}</dd>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <dt className="text-slate-500">Duration</dt>
          <dd className="mt-1 font-semibold text-slate-900">{course.duration}</dd>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <dt className="text-slate-500">Cost</dt>
          <dd className="mt-1 font-semibold text-slate-900">{course.cost}</dd>
        </div>
      </dl>
      <div className="mt-5 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-slate-500">{course.credential}</p>
        <a href="./course-detail.html" className="focus-ring inline-flex items-center gap-2 rounded-full bg-[var(--sf-blue)] px-4 py-2.5 text-sm font-semibold text-white">
          Enroll Now
          <Icon name="arrow" className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function HomePage() {
  const [storyIndex, setStoryIndex] = useState(0);
  const story = successStories[storyIndex];

  return (
    <main id="main-content" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="hero-grid soft-shadow overflow-hidden rounded-[2rem] px-6 py-8 text-white sm:px-10 lg:px-12 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-100">Career-ready certificates</p>
            <h1 className="font-display mt-4 max-w-3xl text-5xl font-bold leading-tight sm:text-6xl">Your Next Career Starts Here</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">
              Earn industry-recognized certificates in as little as 8 weeks through instructor-led cohorts and self-paced pathways built for working adults.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="./courses.html" className="focus-ring inline-flex items-center gap-2 rounded-full bg-[var(--sf-gold)] px-6 py-3 text-base font-bold text-[var(--sf-navy)]">
                Start Learning
                <Icon name="arrow" className="h-5 w-5" />
              </a>
              <a href="#find-path" className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white">
                Find Your Path
                <Icon name="play" className="h-5 w-5" />
              </a>
              <a href="./pricing.html" className="focus-ring inline-flex rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white">
                Sign Up
              </a>
            </div>
            <div className="warning-pill mt-8 inline-flex rounded-full px-4 py-2 text-sm font-bold text-amber-900">
              Cohort starting March 3 - 4 seats left
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] bg-white/10 p-4">
                <p className="text-sm text-blue-100">Job placement support</p>
                <p className="mt-2 text-2xl font-bold">92%</p>
              </div>
              <div className="rounded-[1.5rem] bg-white/10 p-4">
                <p className="text-sm text-blue-100">Average weekly study time</p>
                <p className="mt-2 text-2xl font-bold">8-10 hrs</p>
              </div>
              <div className="rounded-[1.5rem] bg-white/10 p-4">
                <p className="text-sm text-blue-100">Employer partners</p>
                <p className="mt-2 text-2xl font-bold">120+</p>
              </div>
            </div>
          </div>
          <aside className="surface-panel rounded-[1.75rem] border border-white/10 p-6 text-[var(--sf-ink)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--sf-blue)]">Live advisor queue</p>
                <h2 className="mt-2 text-2xl font-bold text-[var(--sf-navy)]">Compare pathways in 3 minutes</h2>
              </div>
              <div className="status-pill rounded-full px-3 py-1 text-sm font-bold text-emerald-900">12 advisors online</div>
            </div>
            <form id="find-path" className="mt-6 space-y-4" aria-label="Find your path quiz">
              <div>
                <label htmlFor="goal" className="mb-2 block text-sm font-semibold text-slate-700">Career goal</label>
                <select id="goal" className="focus-ring h-12 w-full rounded-2xl border border-[var(--sf-border)] bg-white px-4 text-sm">
                  <option>Move into healthcare support</option>
                  <option>Start in IT support</option>
                  <option>Upskill for office administration</option>
                  <option>Explore trade certifications</option>
                </select>
              </div>
              <div>
                <label htmlFor="availability" className="mb-2 block text-sm font-semibold text-slate-700">Weekly availability</label>
                <select id="availability" className="focus-ring h-12 w-full rounded-2xl border border-[var(--sf-border)] bg-white px-4 text-sm">
                  <option>5-8 hours</option>
                  <option>8-12 hours</option>
                  <option>12+ hours</option>
                </select>
              </div>
              <div>
                <label htmlFor="format" className="mb-2 block text-sm font-semibold text-slate-700">Preferred format</label>
                <select id="format" className="focus-ring h-12 w-full rounded-2xl border border-[var(--sf-border)] bg-white px-4 text-sm">
                  <option>Cohort with live instruction</option>
                  <option>Self-paced</option>
                  <option>Live online evenings</option>
                </select>
              </div>
              <button type="submit" className="focus-ring inline-flex w-full items-center justify-center rounded-full bg-[var(--sf-blue)] px-5 py-3 font-semibold text-white">
                Get My Recommended Path
              </button>
            </form>
          </aside>
        </div>
      </section>

      <section className="mt-8 surface-panel soft-shadow rounded-[2rem] border border-white/80 px-6 py-6 sm:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Trusted by hiring and training partners</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {employerLogos.map((logo) => (
            <div key={logo} className="rounded-[1.5rem] border border-[var(--sf-border)] bg-white px-5 py-5 text-center text-xl font-bold text-slate-700">{logo}</div>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-5">
          <div className="metric-card soft-shadow rounded-[2rem] border border-white/80 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--sf-blue)]">Learning discovery</p>
            <h2 className="font-display mt-3 text-3xl font-bold text-[var(--sf-navy)]">Clear pathways for busy adults</h2>
            <div className="mt-5 space-y-4">
              {[
                "Browse by career field, format, duration, and credential type.",
                "See next cohort dates, tuition, and expected outcomes before you enroll.",
                "Move from discovery to application with guided advisor support."
              ].map((line) => (
                <div key={line} className="flex items-start gap-3 rounded-[1.25rem] bg-white p-4">
                  <div className="mt-1 rounded-full bg-[var(--sf-mint)] p-2 text-emerald-800"><Icon name="check" className="h-4 w-4" /></div>
                  <p className="text-sm leading-7 text-slate-700">{line}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="surface-panel soft-shadow rounded-[2rem] border border-white/80 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Popular tracks</p>
            <div className="mt-4 grid gap-4">
              {courses.slice(0, 3).map((course) => (
                <a key={course.slug} href={course.slug === "medical-admin" ? "./course-detail.html" : "./courses.html"} className="focus-ring flex items-center justify-between gap-4 rounded-[1.5rem] border border-[var(--sf-border)] bg-white px-4 py-4 hover:border-blue-200">
                  <div>
                    <p className="font-semibold text-[var(--sf-navy)]">{course.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{course.format} · {course.duration} · {course.cost}</p>
                  </div>
                  <Icon name="arrow" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <section aria-labelledby="success-stories" className="surface-panel soft-shadow rounded-[2rem] border border-white/80 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--sf-blue)]">Success Stories</p>
              <h2 id="success-stories" className="font-display mt-3 text-3xl font-bold text-[var(--sf-navy)]">Real learners, visible outcomes</h2>
            </div>
            <div className="flex gap-2">
              {successStories.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Show story for ${item.name}`}
                  aria-pressed={storyIndex === index}
                  onClick={() => setStoryIndex(index)}
                  className={cx("focus-ring h-11 w-11 rounded-full border text-sm font-bold", storyIndex === index ? "border-[var(--sf-blue)] bg-[var(--sf-blue)] text-white" : "border-[var(--sf-border)] bg-white text-slate-700")}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 overflow-hidden rounded-[1.75rem] bg-slate-900 text-white">
            <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
              <img src={story.image} alt={story.alt} className="h-full min-h-[280px] w-full object-cover" />
              <div className="story-gradient p-6 sm:p-8">
                <p className="text-sm uppercase tracking-[0.18em] text-blue-100">{story.name}</p>
                <h3 className="mt-3 text-3xl font-bold">{story.outcome}</h3>
                <p className="mt-4 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-50 inline-flex">{story.metric}</p>
                <blockquote className="mt-6 text-lg leading-8 text-slate-100">"{story.quote}"</blockquote>
                <a href="./courses.html" className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-[var(--sf-navy)]">
                  Explore Matching Programs
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

function CoursesPage() {
  return (
    <main id="main-content" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Programs"
        title="Discover programs built around real job pathways"
        intro="Browse SkillForge offerings by field, delivery format, duration, cost, and credential type. Every program page clarifies time commitment, start dates, and next-step actions."
        actions={[
          <a key="path" href="./index.html#find-path" className="focus-ring rounded-full bg-[var(--sf-blue)] px-5 py-3 text-sm font-semibold text-white">Find Your Path</a>,
          <a key="pricing" href="./pricing.html" className="focus-ring rounded-full border border-[var(--sf-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--sf-navy)]">View Financing</a>,
        ]}
        breadcrumbs={[
          { label: "Home", href: "./index.html" },
          { label: "Programs", href: "./courses.html" },
        ]}
        tabs={[
          { label: "All Programs", href: "./courses.html", active: true },
          { label: "Featured Cohort", href: "./course-detail.html", active: false },
          { label: "Student Dashboard", href: "./dashboard.html", active: false },
        ]}
      />

      <div className="mt-8 grid gap-8 xl:grid-cols-[320px_1fr]">
        <aside className="surface-panel soft-shadow rounded-[2rem] border border-white/80 p-6">
          <h2 className="text-2xl font-bold text-[var(--sf-navy)]">Filter programs</h2>
          <form className="mt-6 space-y-5" aria-label="Course filters">
            <div>
              <label htmlFor="career-field" className="mb-2 block text-sm font-semibold text-slate-700">Career Field</label>
              <select id="career-field" className="focus-ring h-12 w-full rounded-2xl border border-[var(--sf-border)] bg-white px-4 text-sm">
                <option>All fields</option>
                <option>Trades</option>
                <option>Healthcare Support</option>
                <option>Information Technology</option>
                <option>Business Administration</option>
              </select>
            </div>
            <div>
              <label htmlFor="format-filter" className="mb-2 block text-sm font-semibold text-slate-700">Format</label>
              <select id="format-filter" className="focus-ring h-12 w-full rounded-2xl border border-[var(--sf-border)] bg-white px-4 text-sm">
                <option>All formats</option>
                <option>Self-Paced</option>
                <option>Cohort</option>
                <option>Live Online</option>
              </select>
            </div>
            <div>
              <label htmlFor="duration-filter" className="mb-2 block text-sm font-semibold text-slate-700">Duration</label>
              <select id="duration-filter" className="focus-ring h-12 w-full rounded-2xl border border-[var(--sf-border)] bg-white px-4 text-sm">
                <option>Any duration</option>
                <option>Under 6 weeks</option>
                <option>6-8 weeks</option>
                <option>9+ weeks</option>
              </select>
            </div>
            <div>
              <label htmlFor="cost-filter" className="mb-2 block text-sm font-semibold text-slate-700">Cost</label>
              <select id="cost-filter" className="focus-ring h-12 w-full rounded-2xl border border-[var(--sf-border)] bg-white px-4 text-sm">
                <option>All tuition levels</option>
                <option>Free</option>
                <option>Under $500</option>
                <option>$500+</option>
              </select>
            </div>
            <div>
              <label htmlFor="credential-filter" className="mb-2 block text-sm font-semibold text-slate-700">Credential Type</label>
              <select id="credential-filter" className="focus-ring h-12 w-full rounded-2xl border border-[var(--sf-border)] bg-white px-4 text-sm">
                <option>All credentials</option>
                <option>Certificate</option>
                <option>Badge</option>
                <option>CEU</option>
              </select>
            </div>
            <button type="button" className="focus-ring w-full rounded-full bg-[var(--sf-blue)] px-5 py-3 text-sm font-semibold text-white">Apply Filters</button>
          </form>
        </aside>

        <section id="live-cohorts">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Showing 6 programs</p>
              <h2 className="mt-2 text-3xl font-bold text-[var(--sf-navy)]">Programs for career changers</h2>
            </div>
            <a href="./course-detail.html" className="focus-ring rounded-full border border-[var(--sf-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--sf-navy)]">View featured cohort</a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {courses.map((course) => <CourseCard key={course.slug} course={course} />)}
          </div>
        </section>
      </div>
    </main>
  );
}

function CourseDetailPage() {
  return (
    <main id="main-content" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Featured Cohort"
        title="Medical Administrative Assistant Certificate"
        intro="8 weeks · Cohort · $349. Built for adult learners transitioning into outpatient front-office, scheduling, billing, and care coordination roles."
        actions={[
          <a key="enroll" href="./pricing.html" className="focus-ring rounded-full bg-[var(--sf-blue)] px-5 py-3 text-sm font-semibold text-white">Enroll Now</a>,
          <a key="classroom" href="./learning.html" className="focus-ring rounded-full border border-[var(--sf-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--sf-navy)]">Preview Classroom</a>,
        ]}
        breadcrumbs={[
          { label: "Home", href: "./index.html" },
          { label: "Programs", href: "./courses.html" },
          { label: "Medical Admin Certificate", href: "./course-detail.html" },
        ]}
        tabs={[
          { label: "Overview", href: "./course-detail.html", active: true },
          { label: "Weekly Classroom", href: "./learning.html", active: false },
          { label: "Pricing Options", href: "./pricing.html", active: false },
        ]}
      />

      <div className="mt-8 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <section className="surface-panel soft-shadow rounded-[2rem] border border-white/80 p-6">
            <h2 className="text-2xl font-bold text-[var(--sf-navy)]">What you will learn</h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                "Navigate patient scheduling, intake, referrals, and follow-up workflows.",
                "Use core medical terminology and EHR-ready documentation practices.",
                "Process claims basics, insurance verification, and front-desk billing tasks.",
                "Prepare for entry-level administrative roles with mock interviews and coaching."
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-[1.5rem] bg-slate-50 p-4">
                  <div className="mt-1 rounded-full bg-[var(--sf-mint)] p-2 text-emerald-800"><Icon name="check" className="h-4 w-4" /></div>
                  <span className="text-sm leading-7 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="surface-panel soft-shadow rounded-[2rem] border border-white/80 p-6">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-[var(--sf-navy)]">Weekly schedule breakdown</h2>
              <span className="rounded-full bg-[var(--sf-sky)] px-3 py-1 text-sm font-semibold text-[var(--sf-blue)]">Tuesday + Thursday live sessions</span>
            </div>
            <div className="mt-5 space-y-4">
              {learningModules.map((module) => (
                <div key={module.week} className="flex flex-col gap-3 rounded-[1.5rem] border border-[var(--sf-border)] bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">{module.week}</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">{module.topic}</p>
                  </div>
                  <span className={cx("rounded-full px-3 py-1 text-sm font-semibold", module.status === "Current" ? "bg-[var(--sf-gold)]/20 text-amber-900" : module.status === "Complete" ? "bg-[var(--sf-mint)] text-emerald-900" : "bg-slate-100 text-slate-600")}>
                    {module.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="surface-panel soft-shadow rounded-[2rem] border border-white/80 p-6">
              <h2 className="text-2xl font-bold text-[var(--sf-navy)]">Instructor profile</h2>
              <div className="mt-5 flex items-start gap-4">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80" alt="Instructor Dr. Alicia Warren wearing a navy blazer in a clinic setting" className="h-24 w-24 rounded-[1.5rem] object-cover" />
                <div>
                  <p className="text-lg font-bold text-slate-900">Dr. Alicia Warren, MHA, CPC</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">15 years in ambulatory care operations, former clinic administrator, certified professional coder, and lead curriculum advisor for allied health pathways.</p>
                </div>
              </div>
            </div>
            <div className="surface-panel soft-shadow rounded-[2rem] border border-white/80 p-6">
              <h2 className="text-2xl font-bold text-[var(--sf-navy)]">Required materials</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                <li>Reliable internet connection and webcam for live cohort sessions.</li>
                <li>Notebook or digital note-taking tool for workflow simulations.</li>
                <li>Access to browser-based EHR practice environment provided by SkillForge.</li>
              </ul>
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="surface-panel soft-shadow rounded-[2rem] border border-white/80 p-6">
            <h2 className="text-2xl font-bold text-[var(--sf-navy)]">Financing options</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
              <div className="rounded-[1.5rem] bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Payment plan</p>
                <p className="mt-1">$89 today, then 3 monthly payments of $87.</p>
              </div>
              <div className="rounded-[1.5rem] bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Employer reimbursement</p>
                <p className="mt-1">Download a sponsor-ready training summary and invoice.</p>
              </div>
              <a href="./pricing.html#financing" className="focus-ring inline-flex rounded-full bg-[var(--sf-blue)] px-5 py-3 font-semibold text-white">See all funding paths</a>
            </div>
          </section>

          <section className="metric-card soft-shadow rounded-[2rem] border border-white/80 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--sf-blue)]">Alumni outcomes</p>
            <p className="mt-3 text-4xl font-bold text-[var(--sf-navy)]">92%</p>
            <p className="mt-2 text-base text-slate-700">job placement within 3 months</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">Graduates report stronger confidence with scheduling, patient intake, and claims language during interviews.</p>
          </section>

          <section className="surface-panel soft-shadow rounded-[2rem] border border-white/80 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[var(--sf-sky)] p-3 text-[var(--sf-blue)]"><Icon name="chat" /></div>
              <div>
                <h2 className="text-xl font-bold text-[var(--sf-navy)]">Live Q&A schedule</h2>
                <p className="text-sm text-slate-600">Every Wednesday at 7:00 PM ET</p>
              </div>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              <li>March 5 - Course orientation and success planning</li>
              <li>March 12 - Billing workflows and practice cases</li>
              <li>March 19 - Career services and employer expectations</li>
            </ul>
            <a href="./learning.html" className="focus-ring mt-5 inline-flex rounded-full border border-[var(--sf-border)] bg-white px-5 py-3 font-semibold text-[var(--sf-navy)]">View classroom agenda</a>
          </section>
        </aside>
      </div>
    </main>
  );
}

function LearningPage() {
  const targetDate = useMemo(() => new Date(Date.now() + (2 * 24 * 60 * 60 * 1000) + (3 * 60 * 60 * 1000) + (25 * 60 * 1000)), []);
  const [countdown, setCountdown] = useState(countdownParts(targetDate));

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(countdownParts(targetDate)), 60000);
    return () => window.clearInterval(timer);
  }, [targetDate]);

  return (
    <main id="main-content" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Cohort Classroom"
        title="Week 3 of 8 - Medical Billing Fundamentals"
        intro="Track your live session countdown, weekly agenda, assignments, peer discussion, and course resources from one classroom view."
        actions={[
          <a key="submit" href="#assignment-submission" className="focus-ring rounded-full bg-[var(--sf-blue)] px-5 py-3 text-sm font-semibold text-white">Submit Assignment</a>,
          <a key="dashboard" href="./dashboard.html" className="focus-ring rounded-full border border-[var(--sf-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--sf-navy)]">Go to Dashboard</a>,
        ]}
        breadcrumbs={[
          { label: "Home", href: "./index.html" },
          { label: "Programs", href: "./courses.html" },
          { label: "Classroom", href: "./learning.html" },
        ]}
        tabs={[
          { label: "Agenda", href: "./learning.html", active: true },
          { label: "Program Detail", href: "./course-detail.html", active: false },
          { label: "Tuition Support", href: "./pricing.html", active: false },
        ]}
      />

      <div className="mt-8 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <section className="surface-panel soft-shadow rounded-[2rem] border border-white/80 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--sf-blue)]">Weekly agenda panel</p>
                <h2 className="mt-2 text-2xl font-bold text-[var(--sf-navy)]">This week in your cohort</h2>
              </div>
              <div className="warning-pill rounded-full px-4 py-2 text-sm font-bold text-amber-900">
                Live session in {countdown.days}d {countdown.hours}h {countdown.minutes}m
              </div>
            </div>
            <div className="mt-5 space-y-4">
              {[
                "Tuesday: Watch the billing lecture and complete coding worksheet",
                "Wednesday: Attend live case review and bring one insurance verification question",
                "Thursday: Peer discussion post due before 8:00 PM ET",
                "Friday: Submit assignment portal checklist and instructor reflection"
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-[1.5rem] bg-slate-50 p-4">
                  <div className="rounded-full bg-[var(--sf-sky)] p-2 text-[var(--sf-blue)]"><Icon name="book" className="h-4 w-4" /></div>
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="assignment-submission" className="surface-panel soft-shadow rounded-[2rem] border border-white/80 p-6">
            <h2 className="text-2xl font-bold text-[var(--sf-navy)]">Assignment submission portal</h2>
            <form className="mt-6 grid gap-5 lg:grid-cols-2" aria-label="Assignment submission">
              <div>
                <label htmlFor="assignment-name" className="mb-2 block text-sm font-semibold text-slate-700">Assignment name</label>
                <select id="assignment-name" className="focus-ring h-12 w-full rounded-2xl border border-[var(--sf-border)] bg-white px-4 text-sm">
                  <option>Week 3 billing workflow worksheet</option>
                  <option>Peer discussion response</option>
                  <option>Claims terminology quiz</option>
                </select>
              </div>
              <div>
                <label htmlFor="assignment-file" className="mb-2 block text-sm font-semibold text-slate-700">Upload file</label>
                <input id="assignment-file" type="file" className="focus-ring h-12 w-full rounded-2xl border border-[var(--sf-border)] bg-white px-4 py-3 text-sm" />
              </div>
              <div className="lg:col-span-2">
                <label htmlFor="assignment-notes" className="mb-2 block text-sm font-semibold text-slate-700">Notes for your instructor</label>
                <textarea id="assignment-notes" rows="5" className="focus-ring w-full rounded-[1.5rem] border border-[var(--sf-border)] bg-white px-4 py-3 text-sm" defaultValue="I included the optional payer workflow notes on page 2." />
              </div>
              <div className="lg:col-span-2 flex flex-wrap gap-3">
                <button type="submit" className="focus-ring rounded-full bg-[var(--sf-blue)] px-5 py-3 text-sm font-semibold text-white">Upload Assignment</button>
                <a href="./dashboard.html" className="focus-ring rounded-full border border-[var(--sf-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--sf-navy)]">Save and return to dashboard</a>
              </div>
            </form>
          </section>
        </div>

        <div className="space-y-8">
          <section className="surface-panel soft-shadow rounded-[2rem] border border-white/80 p-6">
            <h2 className="text-2xl font-bold text-[var(--sf-navy)]">Peer discussion board</h2>
            <div className="mt-5 space-y-4">
              {discussionThreads.map((thread) => (
                <a key={thread.title} href="./dashboard.html" className="focus-ring block rounded-[1.5rem] border border-[var(--sf-border)] bg-white p-4 hover:border-blue-200">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-slate-900">{thread.title}</p>
                      <p className="mt-2 text-sm text-slate-600">{thread.replies} replies</p>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{thread.activity}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="surface-panel soft-shadow rounded-[2rem] border border-white/80 p-6">
            <h2 className="text-2xl font-bold text-[var(--sf-navy)]">Resource library</h2>
            <div className="mt-5 grid gap-4">
              {[
                "Slides: Week 3 billing fundamentals",
                "Worksheet packet: intake-to-claim practice",
                "Reading links: payer terminology and reimbursement"
              ].map((resource) => (
                <a key={resource} href="./course-detail.html" className="focus-ring resource-card rounded-[1.5rem] border border-white/70 p-4 text-sm font-semibold text-[var(--sf-navy)] hover:border-blue-200">
                  {resource}
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function PricingPage() {
  const [tuition, setTuition] = useState(349);
  const [months, setMonths] = useState(4);
  const monthly = (tuition / months).toFixed(2);

  return (
    <main id="main-content" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Pricing"
        title="Choose the support model that matches how you learn or sponsor"
        intro="SkillForge supports individual learners, employer-funded reskilling, and nonprofit or government workforce programs with flexible pricing and coaching access."
        actions={[
          <a key="chat" href="#advisor-chat" className="focus-ring rounded-full bg-[var(--sf-blue)] px-5 py-3 text-sm font-semibold text-white">Talk to an Advisor</a>,
          <a key="scholarship" href="#scholarship" className="focus-ring rounded-full border border-[var(--sf-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--sf-navy)]">Scholarship Application</a>,
        ]}
        breadcrumbs={[
          { label: "Home", href: "./index.html" },
          { label: "Pricing", href: "./pricing.html" },
        ]}
        tabs={[
          { label: "Pricing Tracks", href: "./pricing.html", active: true },
          { label: "Program Detail", href: "./course-detail.html", active: false },
          { label: "Student Dashboard", href: "./dashboard.html", active: false },
        ]}
      />

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        {[
          { title: "Individual Enrollment", price: "From $199", details: "Self-paced or cohort pathways with financing, coaching, and milestone reminders." },
          { title: "Employer Sponsorship", price: "Custom seats", details: "Seat bundles, manager progress reporting, and workforce-aligned learning cohorts." },
          { title: "Non-profit / Government", price: "Grant-ready", details: "Community pricing, outcome dashboards, and advisor-led onboarding for funded programs." },
        ].map((plan, index) => (
          <article key={plan.title} className={cx("soft-shadow rounded-[2rem] border p-6", index === 1 ? "hero-grid text-white" : "surface-panel border-white/80")}>
            <p className={cx("text-sm font-bold uppercase tracking-[0.18em]", index === 1 ? "text-blue-100" : "text-[var(--sf-blue)]")}>{plan.title}</p>
            <p className={cx("mt-4 text-4xl font-bold", index === 1 ? "text-white" : "text-[var(--sf-navy)]")}>{plan.price}</p>
            <p className={cx("mt-4 text-sm leading-7", index === 1 ? "text-blue-50" : "text-slate-600")}>{plan.details}</p>
            <a href={index === 0 ? "./courses.html" : "#advisor-chat"} className={cx("focus-ring mt-6 inline-flex rounded-full px-5 py-3 text-sm font-semibold", index === 1 ? "bg-white text-[var(--sf-navy)]" : "bg-[var(--sf-blue)] text-white")}>
              {index === 0 ? "Start Learning" : "Request Consultation"}
            </a>
          </article>
        ))}
      </section>

      <div className="mt-8 grid gap-8 xl:grid-cols-[1fr_0.9fr]">
        <section id="financing" className="surface-panel soft-shadow rounded-[2rem] border border-white/80 p-6">
          <h2 className="text-2xl font-bold text-[var(--sf-navy)]">Financing calculator</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="tuition-range" className="mb-2 block text-sm font-semibold text-slate-700">Tuition amount</label>
              <input id="tuition-range" type="range" min="199" max="1500" step="50" value={tuition} onChange={(event) => setTuition(Number(event.target.value))} className="focus-ring w-full" />
              <p className="mt-2 text-sm text-slate-600">Selected tuition: <span className="font-semibold text-slate-900">${tuition}</span></p>
            </div>
            <div>
              <label htmlFor="months-range" className="mb-2 block text-sm font-semibold text-slate-700">Payment months</label>
              <input id="months-range" type="range" min="2" max="12" step="1" value={months} onChange={(event) => setMonths(Number(event.target.value))} className="focus-ring w-full" />
              <p className="mt-2 text-sm text-slate-600">Installments: <span className="font-semibold text-slate-900">{months} months</span></p>
            </div>
          </div>
          <div className="metric-card mt-6 rounded-[1.75rem] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--sf-blue)]">Estimated monthly payment</p>
            <p className="mt-3 text-5xl font-bold text-[var(--sf-navy)]">${monthly}</p>
            <p className="mt-3 text-sm text-slate-600">Illustrative only. Final financing terms depend on plan selection and scholarship eligibility.</p>
          </div>
          <div id="scholarship" className="mt-6 rounded-[1.5rem] bg-slate-50 p-5">
            <p className="text-lg font-bold text-slate-900">Scholarship application</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">Apply for workforce transition awards, nonprofit partner scholarships, or employer reskilling reimbursement.</p>
            <a href="./courses.html" className="focus-ring mt-4 inline-flex rounded-full bg-[var(--sf-blue)] px-5 py-3 text-sm font-semibold text-white">Open eligibility form</a>
          </div>
        </section>

        <aside className="space-y-6">
          <section id="advisor-chat" className="surface-panel soft-shadow rounded-[2rem] border border-white/80 p-6">
            <h2 className="text-2xl font-bold text-[var(--sf-navy)]">Talk to an Advisor</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Live chat is available for tuition planning, transfer questions, and pacing advice.</p>
            <div className="mt-5 rounded-[1.5rem] bg-[var(--sf-sky)] p-5">
              <p className="font-semibold text-[var(--sf-navy)]">Advisor Priya is online now</p>
              <p className="mt-2 text-sm text-slate-700">Average response time: under 2 minutes</p>
              <button type="button" className="focus-ring mt-4 rounded-full bg-[var(--sf-blue)] px-5 py-3 text-sm font-semibold text-white">Start Live Chat</button>
            </div>
          </section>

          <section className="surface-panel soft-shadow rounded-[2rem] border border-white/80 p-6">
            <h2 className="text-2xl font-bold text-[var(--sf-navy)]">Accreditation badges</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              {["Workforce Ready", "Employer Reviewed", "Accessible Delivery"].map((badge) => (
                <div key={badge} className="rounded-[1.5rem] border border-[var(--sf-border)] bg-white p-4 text-sm font-semibold text-slate-700">{badge}</div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}

function DashboardPage() {
  return (
    <main id="main-content" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Dashboard"
        title="Your Program: Medical Admin Certificate - Week 3 of 8"
        intro="Stay on top of your live session, upcoming assignments, cohort connections, and projected certificate completion from one student dashboard."
        actions={[
          <a key="join" href="./learning.html" className="focus-ring rounded-full bg-[var(--sf-blue)] px-5 py-3 text-sm font-semibold text-white">Join Classroom</a>,
          <a key="office-hours" href="./pricing.html#advisor-chat" className="focus-ring rounded-full border border-[var(--sf-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--sf-navy)]">Book Office Hours</a>,
        ]}
        breadcrumbs={[
          { label: "Home", href: "./index.html" },
          { label: "Dashboard", href: "./dashboard.html" },
        ]}
        tabs={[
          { label: "Overview", href: "./dashboard.html", active: true },
          { label: "Classroom", href: "./learning.html", active: false },
          { label: "Program Detail", href: "./course-detail.html", active: false },
        ]}
      />

      <div className="mt-8 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <section className="hero-grid soft-shadow rounded-[2rem] p-6 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">Upcoming live session reminder</p>
            <h2 className="mt-3 text-3xl font-bold">Wednesday, March 12 at 7:00 PM ET</h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-blue-50">Live case review: claims corrections and reimbursement workflow practice.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="./learning.html" className="focus-ring rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--sf-navy)]">Join Live Session</a>
              <a href="./course-detail.html" className="focus-ring rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">Review syllabus</a>
            </div>
          </section>

          <section className="surface-panel soft-shadow rounded-[2rem] border border-white/80 p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold text-[var(--sf-navy)]">Assignment due dates</h2>
              <a href="./learning.html#assignment-submission" className="focus-ring text-sm font-semibold text-[var(--sf-blue)]">Submit work</a>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {upcomingAssignments.map((assignment) => (
                <div key={assignment.title} className="calendar-cell rounded-[1.5rem] border border-[var(--sf-border)] bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{assignment.due}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">{assignment.title}</p>
                  <p className="mt-2 text-xs text-slate-500">{assignment.type}</p>
                </div>
              ))}
              <div className="calendar-cell rounded-[1.5rem] border border-dashed border-[var(--sf-border)] bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Apr 18</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">Projected completion</p>
                <p className="mt-2 text-xs text-slate-500">Certificate milestone</p>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="surface-panel soft-shadow rounded-[2rem] border border-white/80 p-6">
            <h2 className="text-2xl font-bold text-[var(--sf-navy)]">Peer cohort</h2>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {cohortMembers.map((member) => (
                <div key={member} className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--sf-sky)] text-sm font-bold text-[var(--sf-blue)]" aria-label={`Cohort member ${member}`}>
                  {member}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">Your small-group lab team meets after Thursday discussions to review intake workflow cases.</p>
          </section>

          <section className="surface-panel soft-shadow rounded-[2rem] border border-white/80 p-6">
            <h2 className="text-2xl font-bold text-[var(--sf-navy)]">Instructor office hours</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Reserve a 15-minute slot with Dr. Alicia Warren for assignment feedback or career coaching.</p>
            <a href="./pricing.html#advisor-chat" className="focus-ring mt-5 inline-flex rounded-full bg-[var(--sf-blue)] px-5 py-3 text-sm font-semibold text-white">Book Office Hours</a>
          </section>

          <section className="metric-card soft-shadow rounded-[2rem] border border-white/80 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--sf-blue)]">Certificate preview</p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--sf-navy)]">Projected completion: April 18</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Complete all assignments and attend 6 of 8 live sessions to unlock certificate generation and alumni career services.</p>
          </section>
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <div className="site-shell min-h-screen">
      <a href="#main-content" className="focus-ring sr-only rounded-full bg-white px-4 py-2 text-sm font-semibold focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50">
        Skip to content
      </a>
      <Header />
      {currentPage === "courses" ? <CoursesPage /> : null}
      {currentPage === "course-detail" ? <CourseDetailPage /> : null}
      {currentPage === "learning" ? <LearningPage /> : null}
      {currentPage === "pricing" ? <PricingPage /> : null}
      {currentPage === "dashboard" ? <DashboardPage /> : null}
      {currentPage === "home" ? <HomePage /> : null}
      <Footer />
    </div>
  );
}

root.render(<App />);
