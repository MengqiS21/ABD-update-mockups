## ABD-update-mockups
### E-commerce [concise prompt+realistic description]
#### concise prompt
```
Create a new subfolder called `ecommerce` inside the current working directory.
Inside this folder, build a multi-page mock e-commerce website.

Requirements:
- Use React + Tailwind CSS
- Each page should be a standalone HTML file
- All pages must share consistent styling
- Include a shared header and footer
- Pages should link to each other correctly

Minimum pages to include:
- Homepage
- Product listing page
- Product detail page
- Cart page
- Account page

Design direction:
Create a modern marketplace-style UI inspired by large global e-commerce platforms.
Focus on:
- Clear product hierarchy
- Promotional hero section
- Card-based product layout
- Search and navigation visibility
- Clean spacing and strong CTA buttons

Allow flexibility in layout, component naming, and structure.
```

#### Resalistic description #1
```
Realistic Content Reference:
Model this website after a mid-size online retail store called "NovaMart" —
a general merchandise marketplace selling electronics, home goods, and apparel.

Page-level content guidance:
- Homepage: Feature a rotating hero banner ("Flash Sale: Up to 50% off Electronics"),
  trending category tiles (Electronics, Kitchen, Clothing, Sports),
  a "Today's Deals" horizontal scroll section with product cards showing names,
  prices, star ratings, and discount badges.
- Product listing page: Show 20–30 products in a grid with filters on the left
  (Brand, Price Range, Rating, Availability). Include sort controls
  ("Best Match", "Price: Low to High", "Customer Rating").
- Product detail page: Show a product like "Sony WH-1000XM5 Headphones – $279.99",
  with image gallery, color/size selectors, "Add to Cart" and "Buy Now" buttons,
  a tabbed section (Description, Specs, Reviews), and related products.
- Cart page: Show 2–3 items in cart with quantity controls, item removal,
  order summary panel (subtotal, shipping estimate, promo code field, total),
  and a prominent "Proceed to Checkout" button.
- Account page: Show a user dashboard with sections: Order History,
  Saved Addresses, Payment Methods, Wishlist, and Account Settings.
```

#### realistic description #2
```
Realistic Content Reference:
Model this website after "ThreadHouse" — a fashion-focused online boutique
specializing in sustainable, independently designed clothing and accessories
for young adults aged 18–35.

Page-level content guidance:
- Homepage: Feature a full-screen editorial hero image with overlaid text
  ("Wear What You Stand For — New Spring Collection"), a "Shop by Mood" section
  with lifestyle-themed tiles (Minimalist, Streetwear, Workwear, Weekend),
  a "New Arrivals" horizontal scroll with product cards showing name, price,
  and a "Low Stock" badge, and a brand story blurb with a "Our Mission" CTA.
- Product listing page: Show 20–30 items in a grid. Filters include Clothing Type,
  Size (XS–XXL), Color swatch selector, Material (Organic Cotton, Recycled Polyester),
  and Price Range. Include a "Style Match" toggle to show outfits as curated sets.
- Product detail page: Show a product like "Oversized Linen Shirt — Sage Green – $89.00",
  with 4 lifestyle photos, size guide modal, material and care instructions tab,
  "Complete the Look" product suggestions, and a user-submitted photo review section.
- Cart page: Show 2–3 items with size/color summary, gift wrapping option (+$5),
  estimated delivery date, a loyalty points tracker ("You're 120 points away from
  a free tote"), and checkout CTA.
- Account page: Show sections for My Orders, Style Profile (saved preferences),
  Loyalty Rewards balance, Saved Outfits, and Referral Program with unique share link.
```

#### Level 2 Accessibility [More detailed, level0 and level1 are provided below]
```
Accessibility (Mandatory):

cat_1 · Missing or Incorrect Accessible Names
- All buttons, links, icons, and images must have descriptive accessible names
- Avoid redundant labels (e.g., "Click here", "Image")
- Product card CTAs must specify product name (e.g., "Add Sony Headphones to cart")

cat_2 · Structural and Semantic Grouping Failures
- Use semantic HTML: <nav>, <main>, <section>, <article>, <aside>, <footer>
- Product filters and sort controls must be grouped with <fieldset>/<legend>
- Reading order in DOM must match visual layout

cat_3 · Heading and Page Structure Deficiencies
- Each page must have a unique, descriptive <title>
- Use a logical heading hierarchy (h1 → h2 → h3); never skip levels
- Each page section (Hero, Deals, Categories) must be introduced by a heading

cat_4 · Pointer-Dependent or Keyboard-Inaccessible Interaction
- All interactions (add to cart, quantity change, filter toggle) must work via keyboard
- No functionality should depend solely on hover or mouse events
- Dropdown menus and modals must be keyboard-operable

cat_5 · Focus Traps and Incorrect Focus Management
- Modals and drawers must trap focus while open and return focus on close
- Cart sidebar or checkout overlay must manage focus correctly
- No focus loss after dynamic content updates

cat_6 · Visual Occlusion and Hidden Focus
- Sticky header must not obscure focused elements during keyboard navigation
- Focus indicator must always be visible and not hidden behind overlapping layers
- Product image carousels must not cover interactive elements

cat_7 · State or Status Changes Not Programmatically Exposed
- "Added to cart" confirmation must be announced via ARIA live region
- Loading spinners and filter result changes must use aria-live or aria-busy
- Wishlist toggle state (saved/unsaved) must be conveyed programmatically

cat_8 · Flashing or Seizure-Inducing Content
- Promotional banners and animations must not flash more than 3 times per second
- Auto-playing carousels must provide pause controls

cat_9 · Error Identification and Instruction Failures
- Form validation errors (checkout, promo code) must be text-based and programmatically associated
- Required fields must be marked with both visual indicator and aria-required
- Error messages must describe the issue and suggest correction

cat_10 · Meaningful Sequence and Reading Order Failures
- DOM order must reflect visual reading order across all pages
- Product card content (image → name → price → CTA) must follow logical tab order
- Filter panel must not interrupt the natural reading flow of product grid
```
---
### Government
#### concise prompt
```
Create a new subfolder called `government` in the current working directory.
Build a multi-page public service portal mockup.

Requirements:
- Use React + Tailwind CSS
- Standalone HTML pages
- Shared header and footer
- Consistent visual system across pages
- Working internal navigation

Minimum pages:
- Homepage
- Services overview page
- At least two detailed service pages
- About page
- Contact page

Design direction:
Create a modern, trustworthy government portal.
Focus on:
- Clarity and task-oriented design
- Strong information hierarchy
- Announcement or alert section
- Service navigation system
- Calm, neutral color palette

Leave layout details and components open for creative interpretation.
```

#### realistic description #1
```
Realistic Content Reference:
Model this website after "City of Lakewood — Official Government Portal",
a mid-sized U.S. municipal government serving approximately 160,000 residents.

Page-level content guidance:
- Homepage: Display an emergency alert banner ("Road Closure: Main St between 3rd and 5th Ave
  until Nov 30"), a "How Can We Help You?" task-based search bar, quick-access service tiles
  (Pay a Bill, Report an Issue, Apply for a Permit, Find a Park), 
  a news and announcements section, and upcoming city events.
- Services overview page: Organized categories — Utilities & Billing, Permits & Licenses,
  Public Safety, Transportation, Parks & Recreation, Social Services.
  Each category links to a dedicated detail page.
- Service detail page 1 (Permits & Licenses): Show an online permit application form with
  fields for applicant name, project type (dropdown), address, upload section for documents,
  submission confirmation message, and a status tracker for existing applications.
- Service detail page 2 (Pay a Bill): Show a utility bill payment flow with account number
  lookup, current balance display, payment method selection (credit card, bank transfer),
  and a payment confirmation screen.
- About page: City history, leadership team with photos and titles (Mayor, City Council members),
  mission statement, and annual report download link.
- Contact page: Department directory with phone numbers and hours, an inquiry form
  (Name, Email, Department, Message), embedded map showing City Hall location,
  and social media links.
```

#### realistic description #2
```
Realistic Content Reference:
Model this website after "State of Vermont — Official Resident Services Portal",
a state-level government platform serving residents with access to
licensing, health, education, and benefits services.

Page-level content guidance:
- Homepage: A banner announcing a seasonal reminder ("Tax Filing Deadline:
  April 15 — File Online Now"), a "What Do You Need Today?" prompt with
  a prominent search bar, task-based quick links (Renew Driver's License,
  Apply for Benefits, Register to Vote, Find a School), a live updates feed
  from state departments, and an accessibility language selector (EN, ES, FR).
- Services overview page: Organized by resident life stage — New Residents,
  Families, Students, Seniors, Businesses. Each card links to relevant services
  with a short description and estimated completion time (e.g., "Driver's License
  Renewal — ~10 minutes online").
- Service detail page 1 (Driver's License Renewal): Step-by-step renewal wizard
  with eligibility checker, required documents checklist, fee breakdown ($35),
  appointment scheduler with calendar UI, and confirmation email summary.
- Service detail page 2 (Apply for Benefits): Benefit eligibility screener form
  (household size, income range, employment status), results page showing
  qualifying programs (SNAP, Medicaid, Heating Assistance), and a "Start
  Application" CTA per program.
- About page: Governor's welcome message with photo, state agency directory,
  open data and transparency reports, legislative news, and accessibility
  compliance statement.
- Contact page: Live chat widget ("Chat with a representative — Mon–Fri 8am–5pm"),
  helpline numbers by department, multilingual support notice, and a
  feedback form for website improvement suggestions.
```

#### Level 2 Accessibility [More detailed, level0 and level1 are provided below]
```
Accessibility (Mandatory):

cat_1 · Missing or Incorrect Accessible Names
- All service tiles, navigation links, and icon buttons must have descriptive accessible names
- Department icons must include alt text or aria-label describing their function
- Form submit buttons must clearly indicate action (e.g., "Submit Permit Application")

cat_2 · Structural and Semantic Grouping Failures
- Use semantic HTML: <nav>, <main>, <section>, <article>, <aside>, <footer>
- Service category groups must use <ul>/<li> or <nav> with descriptive aria-label
- Emergency alerts must use role="alert" or aria-live="assertive"

cat_3 · Heading and Page Structure Deficiencies
- Each page must have a unique, descriptive <title> (e.g., "Permits & Licenses | City of Lakewood")
- Heading hierarchy must be logical and unbroken across all pages
- Service detail pages must use section headings to separate steps or content blocks

cat_4 · Pointer-Dependent or Keyboard-Inaccessible Interaction
- All form controls, dropdowns, file uploads, and payment selectors must be keyboard-accessible
- Interactive map components must offer a keyboard-accessible alternative
- No interaction should rely solely on hover or mouse click

cat_5 · Focus Traps and Incorrect Focus Management
- Modal dialogs (e.g., payment confirmation) must trap focus and return it on close
- Multi-step form flows must move focus to the next step heading upon progression
- No focus loss after form submission or dynamic content load

cat_6 · Visual Occlusion and Hidden Focus
- Sticky alert banners must not overlap focused interactive elements
- Focus indicators must remain visible above all overlay layers
- Sidebar navigation must not clip or hide focused items

cat_7 · State or Status Changes Not Programmatically Exposed
- Form submission success or error messages must use aria-live regions
- Application status tracker updates must be announced to screen readers
- Payment processing state (loading, success, failed) must be programmatically conveyed

cat_8 · Flashing or Seizure-Inducing Content
- No animations or transitions should flash more than 3 times per second
- Any auto-rotating announcement banners must provide pause/stop controls

cat_9 · Error Identification and Instruction Failures
- All form validation errors must be associated with their input via aria-describedby
- Required fields must be marked visually and with aria-required="true"
- Error messages must clearly identify the field and describe the required correction

cat_10 · Meaningful Sequence and Reading Order Failures
- DOM order must match the visual top-to-bottom, left-to-right reading flow
- Multi-column service layouts must linearize correctly for screen readers
- Breadcrumb navigation must appear in DOM before main page content
```
---

###  Social Media
#### concise prompt
```
Create a new subfolder called `social-media`.
Build a multi-page social platform mockup.

Requirements:
- React + Tailwind CSS
- Standalone HTML pages
- Shared navigation system
- Consistent styling
- Working internal links

Minimum pages:
- Main feed page
- Explore page
- Notifications page
- Messages page
- Profile page
- Settings page

Design direction:
Create a modern feed-based interface with:
- Content composer
- Post cards
- Engagement actions (like, comment, share)
- Sidebar navigation (desktop)
- Responsive layout

You may define your own layout structure and UI system.
```

#### realistic description #1
```
Realistic Content Reference:
Model this platform after "Pulse" — a text-and-image social network
similar to a blend of Twitter/X and Instagram, used for sharing short posts,
photos, and trending topic discussions.

Page-level content guidance:
- Main feed page: Show a content composer ("What's on your mind, Alex?") at the top,
  followed by a scrollable feed of posts from followed users. Each post card includes
  avatar, username (@handle), timestamp, post text (1–3 sentences), optional image,
  and action bar (Like count, Comment count, Share, Bookmark). Include a trending
  topics sidebar ("🔥 #ClimateWeek — 84K posts", "#TechLayoffs", "#WorldCup2026").
- Explore page: Show a search bar, trending hashtag pills, a "Suggested for You"
  user grid with follow buttons, and a masonry or grid layout of popular posts
  and images from across the platform.
- Notifications page: Categorized tabs (All, Mentions, Likes, Follows).
  Each item shows avatar, action description
  ("Maya liked your post · 2h"), and a snippet of the referenced content.
- Messages page: Left panel with conversation list (avatar, name, last message preview,
  timestamp, unread badge). Right panel with active chat — message bubbles, timestamp
  grouping, and a message input with send button and emoji picker.
- Profile page: Cover photo, avatar, display name, bio, follower/following counts,
  "Edit Profile" button, and a tabbed post grid (Posts, Replies, Media, Likes).
- Settings page: Sections for Account (username, email, password), Privacy
  (who can see posts, DM permissions), Notifications (email and push toggles),
  Appearance (dark/light mode toggle), and Danger Zone (Deactivate/Delete Account).
```

#### realistic description #2
```
Realistic Content Reference:
Model this platform after "Folia" — a niche creative community platform
for artists, illustrators, photographers, and designers to share work-in-progress
posts, get feedback, and discover inspiration, comparable in feel to
a blend of Behance and Tumblr.

Page-level content guidance:
- Main feed page: A "Share Your Work" composer with image upload, caption field,
  and tag input ("Add skills: #illustration #procreate"). Feed displays project
  posts with large image previews, creator name, discipline tag, and engagement
  bar (Appreciate, Collect, Comment). A "For You" / "Following" feed toggle
  appears at the top.
- Explore page: A visual discovery grid sorted by medium (Digital Art,
  Photography, Typography, 3D, Motion). Hovering a tile reveals creator name
  and appreciate count. Include a "Rising Creators" spotlight row and
  a "Trending Palettes" color swatch section.
- Notifications page: Tabs for Activity, Feedback Requests, and Collections.
  Items show "Hana appreciated your piece 'Solstice III' · 4h" with
  a thumbnail of the referenced work.
- Messages page: Left panel shows active creative collaborations and DM threads.
  Right panel shows conversation with inline image sharing, a "Share a Project"
  shortcut button, and a read receipt indicator.
- Profile page: Full-width portfolio header, creator bio with medium and tools
  listed ("Works in: Procreate, Figma, Film Photography"), a curated
  "Featured Work" pinned section, and a scrollable project grid with
  view counts and appreciation totals.
- Settings page: Sections for Profile & Portfolio, Creative Tools (listed skills/software),
  Visibility (public/private portfolio toggle), Commission Status
  ("Open for Work" badge toggle), Notifications, and Account Security.
```

#### Level 2 Accessibility [More detailed, level0 and level1 are provided below]
```
Accessibility (Mandatory):

cat_1 · Missing or Incorrect Accessible Names
- Icon-only action buttons (Like, Share, Bookmark) must have aria-label with action and context
  (e.g., "Like post by @maya — currently 42 likes")
- Avatar images must include alt text with the user's display name
- Composer input must have a visible or programmatic label

cat_2 · Structural and Semantic Grouping Failures
- Each post card must be wrapped in <article> with a logical internal heading structure
- Navigation tabs (All, Mentions, Likes) must use role="tablist" and role="tab"
- Conversation list and chat panel must be labelled as distinct landmark regions

cat_3 · Heading and Page Structure Deficiencies
- Each page must have a unique <title> (e.g., "Notifications | Pulse")
- Feed, Explore, and Profile sections must each begin with a descriptive heading
- Settings page sections must use h2-level headings per category

cat_4 · Pointer-Dependent or Keyboard-Inaccessible Interaction
- Like, comment, share, follow, and bookmark must all be operable via keyboard
- Emoji picker and media upload in composer must be keyboard-accessible
- Dropdown menus (post options "...") must open and close with keyboard

cat_5 · Focus Traps and Incorrect Focus Management
- Modal dialogs (delete post, report user) must trap focus and restore on close
- After sending a message, focus must remain in the message input field
- Opening a post detail overlay must move focus to the dialog content

cat_6 · Visual Occlusion and Hidden Focus
- Fixed top navigation bar must not obscure focused elements when scrolling
- Notification dropdown or tooltip overlays must not clip focus indicators
- Chat message input must not be hidden behind mobile keyboard without scroll adjustment

cat_7 · State or Status Changes Not Programmatically Exposed
- Like/unlike toggle must expose current state via aria-pressed
- Unread message and notification counts must be announced via aria-live when updated
- "Follow" button must reflect current state ("Following" vs "Follow") programmatically

cat_8 · Flashing or Seizure-Inducing Content
- Animated reactions or GIF previews in feed must not flash more than 3 times per second
- Auto-playing video posts must default to muted with visible play/pause controls

cat_9 · Error Identification and Instruction Failures
- Character limit warnings in composer must be programmatically announced
- Login and settings form errors must be associated to fields via aria-describedby
- Empty required fields (e.g., username change) must trigger accessible error messages

cat_10 · Meaningful Sequence and Reading Order Failures
- Feed post DOM order must match visual top-to-bottom display order
- Two-column layouts (feed + sidebar) must linearize logically for screen readers
- Message thread must present messages in chronological order in the DOM
```
---

### Mass Media
#### concise prompt
```
Create a new subfolder called `mass-media`.
Build a multi-page digital news portal mockup.

Requirements:
- React + Tailwind CSS
- Standalone HTML files
- Shared header/navigation/footer
- Consistent typography and layout system
- Functional inter-page navigation

Minimum pages:
- Homepage
- Category page (e.g., World or Politics)
- Article detail page
- Opinion page
- Subscription page

Design direction:
Create a contemporary editorial news experience.
Focus on:
- Strong headline hierarchy
- Hero editorial section
- Story grid layout
- Breaking news or highlight banner
- Mix of serif and sans-serif typography (optional)

Design structure is flexible.
```

#### realistic description #1
```
Realistic Content Reference:
Model this website after "The Meridian" — an independent digital news outlet
covering global affairs, politics, technology, and culture,
comparable in tone and structure to The Guardian or The Atlantic.

Page-level content guidance:
- Homepage: Top breaking news ticker ("BREAKING: UN Emergency Session Called Over
  Red Sea Tensions"), large hero story with full-width editorial image and headline,
  secondary story grid (3–4 stories), section strips for World, Politics, Tech, Culture,
  and a "Most Read" sidebar. Include newsletter signup in footer area.
- Category page (World): Section header with category label and description,
  lead story card (large image + headline + byline + 2-sentence summary),
  story grid of 6–8 articles with thumbnail, headline, byline, and timestamp.
  Include a topic filter bar (All, Asia, Europe, Americas, Middle East, Africa).
- Article detail page: Full article layout with headline, subheadline, author byline,
  publication date, estimated read time, hero image with caption, article body
  (4–6 paragraphs with a pull quote), inline related article links, tags,
  and a comments section. Show a "More from World" strip at the bottom.
- Opinion page: Editorial layout with columnist avatars and names, featured opinion
  essay with large byline treatment, and a grid of recent opinion pieces organized
  by columnist. Include a "Letters to the Editor" section.
- Subscription page: Pricing tiers (Free, Digital – $9.99/mo, All-Access – $19.99/mo),
  feature comparison table, testimonials, FAQ accordion, and a sign-up form.
```

#### realistic description #2
```
Realistic Content Reference:
Model this website after "Groundwork" — a data-driven investigative journalism
outlet focused on climate, science, and environmental policy, with a tone
similar to Inside Climate News or ProPublica.

Page-level content guidance:
- Homepage: A full-width feature story with an immersive scrolling layout
  ("The Invisible Flood: How Groundwater Collapse Is Reshaping the American West"),
  a "Latest Investigations" strip with 3 story cards, topic category navigation
  (Climate, Energy, Policy, Science, Data), a "By the Numbers" data highlight
  section showing key statistics as large typographic callouts, and a
  reader-supported donation CTA banner.
- Category page (Climate): Lead investigation card with estimated read time
  and reporter name, story list with topic tags ("Sea Level", "Wildfire",
  "Carbon Markets"), a "Key Documents" sidebar linking to source PDFs,
  and a data visualization embed preview with "View Full Report" CTA.
- Article detail page: Long-form layout with a headline, deck (sub-headline),
  reporter byline and date, methodology note ("How We Reported This"),
  embedded charts and maps, pull quotes, footnotes, related investigations strip,
  and a "Support This Reporting" donation widget at the end.
- Opinion page: Titled "Perspectives" — features bylined essays from scientists,
  policymakers, and community voices. Each piece shows a contributor bio card,
  publication date, and a "Respond to This Piece" letter submission link.
- Subscription page: Framed as reader support — "Keep Groundwork Independent".
  Tiers: Free Reader, Supporter ($7/mo), Investigator ($20/mo with newsletter +
  data access). Includes impact metrics ("Your support funds X hours of reporting"),
  a recurring vs one-time toggle, and a secure payment form.
```

#### Level 2 Accessibility [More detailed, level0 and level1 are provided below]
```
Accessibility (Mandatory):

cat_1 · Missing or Incorrect Accessible Names
- All article cards must have linked headlines as the accessible name for the card link
- Author avatar images must include alt text with the author's name
- Social share buttons must have aria-label specifying platform and article title

cat_2 · Structural and Semantic Grouping Failures
- Each article card must use <article> element with internal heading structure
- Category filter bar must use role="group" or <fieldset> with a descriptive label
- Opinion columnist grid must be grouped as a list with semantic markup

cat_3 · Heading and Page Structure Deficiencies
- Each page must have a unique <title> (e.g., "World News | The Meridian")
- Article detail page must use h1 for the headline and h2 for subheadings within body
- Homepage section strips (World, Politics, Tech) must each begin with a labelled heading

cat_4 · Pointer-Dependent or Keyboard-Inaccessible Interaction
- FAQ accordion items on the subscription page must be keyboard-operable
- Newsletter signup and subscription form must be fully keyboard-navigable
- Breaking news ticker must offer keyboard control or a static alternative

cat_5 · Focus Traps and Incorrect Focus Management
- Subscription modal or paywall overlay must trap focus and restore it on close
- Cookie consent banner must be dismissible via keyboard and must not block page focus
- No focus loss when loading more articles (infinite scroll or "Load More" button)

cat_6 · Visual Occlusion and Hidden Focus
- Sticky navigation header must not cover focused links or article elements
- Breaking news ticker must not overlap or hide focusable elements beneath it
- Pull quotes or overlaid text on hero images must not obscure focus indicators

cat_7 · State or Status Changes Not Programmatically Exposed
- Subscription plan selection must expose selected state via aria-pressed or aria-selected
- Newsletter signup confirmation must be announced via aria-live region
- FAQ accordion open/closed state must be conveyed via aria-expanded

cat_8 · Flashing or Seizure-Inducing Content
- Animated breaking news ticker must scroll smoothly without flashing
- Any auto-playing media (video ads, story reels) must not exceed seizure safety thresholds
- Provide a mechanism to pause or stop auto-scrolling content

cat_9 · Error Identification and Instruction Failures
- Subscription form errors (invalid email, missing fields) must be programmatically linked
  to their inputs via aria-describedby
- Required form fields must be marked with aria-required="true" and a visible indicator
- Error messages must describe what is wrong and how to fix it

cat_10 · Meaningful Sequence and Reading Order Failures
- Article body DOM order must reflect the visual reading sequence (headline → byline →
  image → body → related links)
- Multi-column story grids must linearize in a logical reading order for screen readers
- Sidebar content (Most Read, Newsletter) must appear after main content in DOM order
```
---

### Education Platform
#### concise prompt
```
Create a new subfolder called `edu-portal`.
Build a multi-page education platform mockup with layered navigation.

Requirements:
- React + Tailwind CSS
- Standalone HTML pages
- Shared global header and footer
- Consistent design system
- Working internal links

Minimum pages:
- Homepage
- Courses listing page
- Course detail page
- Study or learning tool page
- Plans or pricing page
- Dashboard page

Design direction:
Create a scalable education platform inspired by modern learning platforms.
Focus on:
- Learning discovery
- Structured content hierarchy
- Clear learning pathways
- Trust and institutional credibility
- Action-driven CTAs (Start Learning, Sign Up, Try Free)

You are free to define components and layout system.
```

#### realistic description #1
```
Realistic Content Reference:
Model this platform after "LearnPath" — an online education platform offering
structured courses in technology, business, design, and personal development,
comparable in feel to Coursera or LinkedIn Learning.

Page-level content guidance:
- Homepage: Hero section with headline ("Unlock Your Potential. Learn at Your Own Pace."),
  subtext, and dual CTAs ("Browse Courses" / "Start Free Trial"). Below: category tiles
  (Web Development, Data Science, UX Design, Business, Photography), featured courses
  section with instructor name, rating, enrolled count, and price, social proof strip
  ("Join 2M+ learners worldwide"), and a "How It Works" 3-step explainer section.
- Courses listing page: Left sidebar filters (Category, Level: Beginner/Intermediate/Advanced,
  Duration, Rating, Price: Free/Paid). Course grid with card per course showing thumbnail,
  title, instructor, star rating (e.g., 4.7 ★), duration, level badge, and price.
  Sort options: "Most Popular", "Highest Rated", "Newest".
- Course detail page: Show course "Python for Data Science — Intermediate · 24 hours".
  Sections: course headline and description, instructor bio with avatar, course includes
  (video lectures, downloadable resources, certificate), curriculum accordion
  (5 sections, 32 lessons), student reviews (aggregate rating + individual review cards),
  and sticky sidebar with price, enroll CTA, and course highlights.
- Study/learning tool page: Active lesson view with video player (left/main), lesson
  sidebar (right) listing module sections with checkmarks for completed lessons.
  Below video: tabs for Overview, Notes, Q&A, Resources. Progress bar at top showing
  "Lesson 4 of 12 — Module 2: Data Structures".
- Plans/pricing page: Three tiers — Free (limited course access), Pro ($19/mo, full library),
  Teams ($49/seat/mo, admin dashboard). Feature comparison table, FAQ accordion,
  money-back guarantee badge, and a testimonials strip.
- Dashboard page: Personalized greeting ("Welcome back, Jordan"), progress rings for
  enrolled courses, "Continue Learning" section with resume buttons, achievement badges,
  learning streak tracker, and a "Recommended for You" course strip.
```

#### realistic description #2
```
Realistic Content Reference:
Model this platform after "SkillForge" — a vocational and professional
certification platform targeting adult learners and career-changers,
offering instructor-led cohort programs and self-paced skill tracks
in trades, healthcare support, IT, and business administration.

Page-level content guidance:
- Homepage: Hero with headline ("Your Next Career Starts Here") and a
  credential-focused sub-message ("Earn industry-recognized certificates
  in as little as 8 weeks"). Feature a "Find Your Path" quiz CTA,
  employer partner logos (Google, Mayo Clinic, Deloitte), a "Success Stories"
  carousel with learner photos and before/after career outcomes, and
  a urgency nudge ("Cohort starting March 3 — 4 seats left").
- Courses listing page: Filters by Career Field, Format (Self-Paced / Cohort /
  Live Online), Duration, Cost (Free / Under $500 / $500+), and
  Credential Type (Certificate, Badge, CEU). Each course card shows title,
  format badge, next start date, total hours, cost, and an "Enroll Now" CTA.
- Course detail page: Show "Medical Administrative Assistant Certificate —
  8 weeks · Cohort · $349". Sections include what you will learn (bulleted
  outcomes), weekly schedule breakdown, instructor profile with credentials,
  required materials, financing options (payment plan, employer reimbursement),
  alumni outcome stats ("92% job placement within 3 months"), and
  a live Q&A session schedule.
- Study/learning tool page: Cohort classroom view with a weekly agenda panel,
  live session countdown timer, assignment submission portal, peer discussion
  board per module, and a resource library (slides, worksheets, reading links).
  Progress shown as "Week 3 of 8 — Medical Billing Fundamentals".
- Plans/pricing page: Individual enrollment vs Employer Sponsorship vs
  Non-profit/Government pricing tracks. Includes a "Talk to an Advisor" live
  chat CTA, scholarship application link, financing calculator
  (monthly payment estimator), and accreditation badges.
- Dashboard page: Shows "Your Program: Medical Admin Certificate — Week 3 of 8",
  upcoming live session reminder with join link, assignment due dates in
  a mini calendar, peer cohort member avatars, instructor office hours
  booking button, and a certificate preview ("Projected completion: April 18").
```

#### Level 2 Accessibility [More detailed, level0 and level1 are provided below]
```
Accessibility (Mandatory):

cat_1 · Missing or Incorrect Accessible Names
- Course cards must have descriptive link names including course title and instructor
- Video player controls (Play, Pause, Volume, Fullscreen) must each have aria-label
- Progress indicators and badge icons must convey meaning via alt text or aria-label

cat_2 · Structural and Semantic Grouping Failures
- Course filter options must be grouped with <fieldset>/<legend> per filter category
- Curriculum accordion sections must use a list structure with semantic heading per module
- Dashboard sections (In Progress, Recommended, Achievements) must use landmark regions

cat_3 · Heading and Page Structure Deficiencies
- Each page must have a unique <title> (e.g., "Python for Data Science | LearnPath")
- Course detail page must use h1 for course title, h2 for major sections (Curriculum,
  Reviews), h3 for module names within the accordion
- Dashboard page sections must each be introduced with a descriptive heading

cat_4 · Pointer-Dependent or Keyboard-Inaccessible Interaction
- Curriculum accordion must be fully keyboard-operable (expand/collapse via Enter/Space)
- Video player must support keyboard shortcuts (Space to play/pause, arrow keys for seek)
- All filter controls, sort dropdowns, and tab panels must be keyboard-accessible

cat_5 · Focus Traps and Incorrect Focus Management
- Enrollment modal or sign-up overlay must trap focus and return it on close
- After completing a lesson and auto-advancing, focus must move to the next lesson item
- No focus loss when switching between dashboard tabs or course detail tabs

cat_6 · Visual Occlusion and Hidden Focus
- Sticky course sidebar on detail page must not obscure focused elements in main content
- Floating progress bar must not cover keyboard-focused lesson items
- Video player overlay controls must not permanently hide focus indicators

cat_7 · State or Status Changes Not Programmatically Exposed
- Lesson completion checkmarks must be conveyed programmatically via aria-checked or
  updated aria-label (e.g., "Lesson 3: Variables — Completed")
- Course enrollment confirmation must be announced via aria-live region
- Loading state between lessons must use aria-busy on the content region

cat_8 · Flashing or Seizure-Inducing Content
- Achievement unlock animations and badge reveals must not flash more than 3 times per second
- Video content thumbnails with motion preview on hover must be pauseable or avoidable

cat_9 · Error Identification and Instruction Failures
- Sign-up and payment form errors must be linked to inputs via aria-describedby
- Required fields on enrollment and checkout forms must use aria-required="true"
- Empty search results on course listing must provide a descriptive text message,
  not only a visual illustration

cat_10 · Meaningful Sequence and Reading Order Failures
- Lesson sidebar must appear after the main video content in DOM order for screen readers
- Course card content (thumbnail → title → instructor → rating → price) must follow
  logical tab sequence
- Dashboard layout must linearize in a meaningful order: greeting → in-progress →
  recommended → achievements
```

## Accessiblity requirment (Level 0 and Level 1)
### Level 0 Null
```
(No accessibility requirements — omit entirely.)
```

### Level 1 General
```
Accessibility (Mandatory):
- Full keyboard navigation across all interactive elements
- Visible focus states on all focusable elements
- WCAG AA color contrast on all text and UI components
- Semantic HTML structure with appropriate ARIA labels
- All images include descriptive alt text
- Form inputs have associated labels
```