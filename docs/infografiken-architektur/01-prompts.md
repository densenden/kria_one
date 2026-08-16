# Kria Centro — Infographic Prompts (Architecture)

**Concept for learners:** These prompts describe two layers of one product.
1. **Marketing site** = public pages that explain the offer and build trust.
2. **Booking portal** = the conversion path where a visitor picks a package, dates, and personal data, then pays (Stripe) or sends an inquiry.

Use these prompts in Midjourney, Ideogram, ChatGPT Image, or similar. Style notes are shared below so all five visuals feel like one series.

## Shared style (append to every prompt)

```
Clean educational software architecture infographic, flat vector, clear hierarchy,
soft earth-green and warm sand palette (no purple neon), white background with subtle
paper texture, labeled boxes and arrows, readable sans-serif labels in English,
professional SaaS explainer poster, 16:9 landscape, high contrast text, no photorealism,
no cluttered dashboard UI, no glossy 3D.
```

---

## Prompt 1 — Big picture: Marketing site + Booking portal

**File name later:** `01-system-overview.png`

```
Create a horizontal architecture infographic titled "Kria Centro: Marketing Site + Booking Portal".

Left zone labeled MARKETING SITE (public discovery):
- Homepage hero (Amazonas Retreat)
- Offer pages: Angebote, Yoga, Meditation, Heilarbeit, Workshops, Events
- Trust pages: Über uns, Erfahrungsberichte, FAQ, Blog
- Contact / Beratung CTA

Right zone labeled BOOKING PORTAL (conversion):
- /buchung package selection
- Date range calendar with available seasons
- Personal info form
- Checkout with Stripe
- Success page /zahlung-erfolgreich

Center connector arrow: "CTA: Retreat buchen / Beratung"

Bottom strip: Monorepo apps/kria-centro (Next.js App Router) + content JSON/Sanity + Stripe payments.

Show clear user entry from marketing into booking. Include small icons for pages, calendar, form, payment card. Keep labels short.
```

**What this teaches:** One Next.js app can host both “brochure” pages and a booking funnel. Marketing brings attention; booking turns attention into a request or payment.

---

## Prompt 2 — Marketing site structure (information architecture)

**File name later:** `02-marketing-sitemap.png`

```
Create a sitemap-style infographic titled "Marketing Site Structure — Kria Centro".

Top root node: Homepage (/)

Branch 1 EXPERIENCE: Yoga, Meditation, Heilarbeit, Workshops, Ayahuasca / Peru Amazonas, Schamanen, Räumlichkeiten
Branch 2 OFFERS & EVENTS: Angebote, Events, Blog
Branch 3 TRUST & LEGAL: Über uns, Erfahrungsberichte, FAQ, Kontakt, Impressum, AGB, Datenschutz
Branch 4 CONVERSION EXITS: big highlighted arrows to /buchung and /kontakt

Annotate each branch with one function word:
- Experience = educate
- Offers = compare
- Trust = reduce risk
- Conversion = take action

Use tree layout with soft green nodes, thicker arrows for primary CTAs. Subtitle: "Content-first pages, one job per section".
```

**What this teaches:** A marketing site is an **information tree**. Each page has one job. CTAs are “exits” from content into booking or contact.

---

## Prompt 3 — Booking portal functionality (step machine)

**File name later:** `03-booking-steps.png`

```
Create a step-by-step product infographic titled "Booking Portal Functionality — /buchung".

Show four numbered vertical stages connected by arrows:

Step 1 PACKAGE SELECT
- Cards: 2-weeks / 3-weeks / 4-weeks retreats
- State: selectedPackage

Step 2 DATE RANGE
- Calendar (DayPicker range mode)
- Available seasons highlighted (Frühling, Sommer, Herbst, Winter)
- State: range.from + range.to

Step 3 PERSONAL DATA
- Fields: Vorname, Nachname, E-Mail, Telefon, optional Nachricht
- Appears only after package AND dates are chosen (conditional UI)

Step 4 NEXT ACTIONS
- Primary: Unverbindlich anfragen (inquiry)
- Parallel path: Checkout / Stripe payment → Zahlung erfolgreich

Side callout box: "Client-side React state gates the form — user must complete steps 1+2 before step 3 shows."

Style like a boarding-pass / process strip, calm greens, large step numbers.
```

**What this teaches:** Booking UI is a **state machine**. React `useState` stores choices; the form only unlocks when required state exists. That is common UX: reduce empty forms and guide the user.

---

## Prompt 4 — End-to-end user flow

**File name later:** `04-user-flow.png`

```
Create a left-to-right user journey infographic titled "User Flow: Discovery → Booking → Payment".

Swimlane for Visitor (top) and System (bottom).

Visitor path:
1. Lands on marketing homepage
2. Explores Angebote / Yoga / FAQ
3. Clicks "Retreat buchen" or Angebot CTA
4. Chooses package + dates + personal data on /buchung
5. Either sends inquiry OR pays on /checkout
6. Sees /zahlung-erfolgreich confirmation

System path under each step:
1. Next.js serves marketing page
2. Content from page modules / CMS JSON
3. Route change to /buchung
4. Client state validation
5. Stripe Elements confirmPayment
6. return_url success page + email confirmation note

Mark decision diamond after step 4: "Inquiry vs Pay now".
Mark drop-off risk at FAQ and price moment with a small dashed exit arrow labeled "needs more trust → Kontakt".

Clean flowchart, rounded rectangles, one decision diamond, English labels.
```

**What this teaches:** **User flow** = steps a human takes. **System flow** = what the app does under each step. Decision points and drop-offs matter as much as the happy path.

---

## Prompt 5 — Technical architecture (layers)

**File name later:** `05-tech-layers.png`

```
Create a layered technical architecture infographic titled "Kria Centro Technical Layers".

Five horizontal layers from top to bottom:

Layer 1 PRESENTATION
- Next.js App Router pages (app/page.tsx, app/buchung, app/checkout, marketing routes)
- Tailwind CSS UI

Layer 2 INTERACTION
- React client components ('use client')
- Local state for booking wizard
- Stripe React Elements on checkout

Layer 3 APPLICATION / API
- Next.js route handlers under app/api
- Payment intent creation (concept)
- Form / contact handling (concept)

Layer 4 CONTENT & DATA
- Marketing copy in kria_content JSON / Sanity Studio
- Static page content for offers and FAQ
- Package and season metadata for booking

Layer 5 EXTERNAL SERVICES
- Stripe (payments)
- Email confirmation (after success)
- Hosting on Vercel (deploy target)

Vertical arrows labeled "request / response". Small note: "Marketing pages are mostly static content; booking is interactive + payment-sensitive."

Blueprint / layer-cake style, muted green and sand, lots of whitespace, English labels only.
```

**What this teaches:** Modern web apps are **layers**. UI talks to API, API talks to Stripe/CMS. Marketing is content-heavy; booking is state + payment-heavy. Same monorepo, different concerns.

---

## Screenshots (live marketing + booking site)

Source: production Hostinger site [https://kria-centro.de](https://kria-centro.de)  
(Note: this is the live brochure/shop site. The Next.js app under `apps/kria-centro` is the rebuild target with routes like `/buchung`.)

| # | File | Live URL | Matches prompt |
|---|------|----------|----------------|
| 1 | `screenshot-01-home.png` | https://kria-centro.de/ | Prompt 1 & 2 — marketing hero |
| 2 | `screenshot-02-angebote.png` | https://kria-centro.de/angebote | Prompt 2 & 4 — offers / discovery |
| 3 | `screenshot-03-online-buchung.png` | https://kria-centro.de/online-buchung | Prompt 3 — product/booking catalog |
| 4 | `screenshot-04-kontakt-faqs.png` | https://kria-centro.de/kontakt-and-faqs | Prompt 2 & 4 — trust / contact |
| 5 | `screenshot-05-anmeldung.png` | https://kria-centro.de/anmeldung | Prompt 4 — registration CTA / journey start |

`/checkout` on live site returned an error page at capture time, so Kontakt & FAQs is used as the trust/support step instead.

---

## Folder

`docs/infografiken-architektur/`

You create the 5 infographics from the prompts above; screenshots are reference material.
