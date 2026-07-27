# Google Business Profile Checklist

Off-site work to pair with the on-site schema/entity changes. This is the highest-leverage lever for the "near me" pumping queries (they're won in the map pack, not organic).

> **Status July 2026:** Profile setup is complete (all items below verified done). The ongoing work — reviews, posts, photos, citations — is now the entire game. GSC shows "near me" queries at position 11–20 organically; the map pack above those results is won by profile activity and review velocity, not the website.

## Profile setup — ✅ DONE
- [ ] Primary category: **Septic system service**
- [ ] Secondary categories (as applicable): Septic tank plumber, Excavating contractor, Drainage service, Grading contractor
- [ ] Business name matches site exactly: **Redline Site Services** (do not add keywords to the GBP name — against Google guidelines and risks suspension)
- [ ] Add all 12 services to the GBP "Services" section, matching the site's service names:
  Septic Tank Pumping, Emergency Septic Repair, Septic System Installation, Septic Inspections, Drain Field Repair, Septic Tank Cleaning, Septic Tank Replacement, Septic Maintenance, Septic Line Repair, Drainage & Excavation, Porta John Rental
- [ ] Service area set to the 17 city pages + 4 counties (match `locations/` exactly): Monroe, Charlotte, Indian Trail, Waxhaw, Matthews, Mint Hill, Wesley Chapel, Stallings, Concord, Kannapolis, Harrisburg, Huntersville, Midland, Lake Park, Mineral Springs, Weddington, Marvin, Unionville; Union/Cabarrus/Mecklenburg/Anson Counties
- [ ] Website link → https://redlinesiteservices.com/
- [ ] Phone matches exactly: (704) 562-9922
- [ ] Address matches exactly: 7322 Pleasant Hill Church Road, Monroe, NC 28112
- [ ] Hours set to 24/7 (matches site's `openingHours: Mo-Su 00:00-24:00`)

## Review velocity
- [ ] Ask every completed job for a review (text/email link) — target 2–4 new reviews/week
- [ ] Current: 19 reviews at 5.0 (per site's aggregateRating schema — keep in sync as GBP review count grows)
- [ ] Respond to every review within 48 hours (signals activity to Google)

## GBP Q&A seeding
Seed the Q&A section with the same questions already answered in the site's FAQPage schema (keeps GBP and site answers consistent, which helps entity matching):
- How often should I have my septic tank pumped?
- What are the warning signs of a failing septic system?
- Do I need a septic inspection when buying a home in Union County?
- What's the difference between septic pumping and tank cleaning?
- What should I do during a septic emergency?

## Ongoing
- [ ] Weekly GBP Posts — repurpose blog content (14 existing posts at `/blog/`) into short GBP updates with a link back to the matching post/service page
- [ ] Add photos regularly (trucks, crew, before/after job photos) — GBP rewards profile activity
- [ ] Verify NAP matches across major directories (Yelp, BBB, Angi, Nextdoor, Facebook) — the site's Facebook (facebook.com/profile.php?id=100083018242700) should show identical name/address/phone

## Weekly cadence (the part that moves map-pack rank now)

1. **Monday:** publish one GBP post repurposed from a blog article (15 posts available at `/blog/` — rotate through them), linking to the matching service or blog page.
2. **After every completed job:** send the review link by text before leaving the driveway. Target 2–4 new reviews/week; respond to each within 48 hours.
3. **Monthly:** upload 3–5 fresh job photos (trucks on site, tank installs, before/after drainage work).
4. **Quarterly:** re-verify NAP consistency on Yelp, BBB, Angi, Nextdoor, and Facebook, and update the site's `aggregateRating` schema to match the live GBP review count.

## Why this matters
The GSC data shows "near me" pumping queries (860, 727, 716 impressions/week) ranking position 50–86 despite the site's organic content being solid. These terms are dominated by the Google Maps 3-pack, which is driven by GBP proximity, relevance, and prominence signals — not by the website's on-page SEO. The site-side schema changes (sameAs, geo, NAP consistency) help Google connect the website to this profile, but the profile itself — categories, reviews, service list, posting activity — is what actually moves map-pack position.
