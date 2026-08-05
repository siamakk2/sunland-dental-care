// City pages — each genuinely distinct (route, local context, own FAQs).
// Never duplicate copy across cities: Google treats that as doorway pages.
export const CITIES = [
  {
    slug: "dentist-tujunga", city: "Tujunga", short: "Tujunga",
    drive: "about 5 minutes up Foothill Boulevard",
    title: "Dentist in Tujunga, CA — Implants, Invisalign & Family Dentistry",
    lead: "Sunland and Tujunga have shared one main street and one community for a century. Our office sits a few minutes down Foothill Blvd — the same dentist, the same address, since 1991.",
    body: [
      ["Your actual neighborhood dentist", "Sunland-Tujunga is one community with one main road, and Sunland Dental Care has been on it since 1991. For Tujunga residents that means no freeway, no parking structures, no crosstown appointment — just a short drive down Foothill Blvd to a practice where the same doctor has treated three generations of local families."],
      ["Implants placed and restored in one office", "Tujunga patients who need an implant are often referred out to an oral surgeon in Glendale or Burbank, then back again for the crown. Dr. Emami does all of it here — consultation, 3D-guided placement, and the final restoration — for a fixed $2,000 on a complete single implant."],
      ["Everything else, too", "Cleanings and periodontal hygiene, fillings and crowns, Invisalign, whitening, dentures, root canals, and urgent care when a tooth breaks on a Tuesday. One office, one record, one doctor who knows your history."],
    ],
    faqs: [
      ["Is there a dentist in Tujunga who places implants in-house?", "Sunland Dental Care, minutes from Tujunga on Foothill Blvd, performs the entire implant process in-office — consultation, 3D imaging, guided surgery, and the final crown — with Dr. Mahvash Emami, DDS doing every stage herself. A complete single implant is $2,000 fixed."],
      ["Do you take new patients from Tujunga?", "Yes. New patients from Tujunga, Sunland, and the surrounding foothills are welcome, and Dr. Emami personally reviews every new-patient consultation."],
    ],
  },
  {
    slug: "dentist-la-crescenta", city: "La Crescenta-Montrose", short: "La Crescenta",
    drive: "about 10 minutes east on Foothill Boulevard — no freeway required",
    title: "Dentist for La Crescenta & Montrose — Dental Implants in the Foothills",
    lead: "A straight run down Foothill Boulevard from La Crescenta and Montrose brings you to a practice that has served Crescenta Valley families since 1991 — with implant surgery and restoration handled in one place.",
    body: [
      ["A straight shot down Foothill", "La Crescenta and Montrose sit on the same Foothill corridor we do. Most patients make the drive in about ten minutes without touching the 210 — easier than crossing Glendale for the same care, and considerably easier to reschedule when life happens."],
      ["Why Crescenta Valley families make the drive", "Crescenta Valley has plenty of good general dentists. What's harder to find locally is one office that handles the whole implant journey — imaging, surgery, and the crown — at a published fixed price. That's the specific reason most La Crescenta patients end up here."],
      ["Care that holds up over decades", "Families who move to CV tend to stay, and a dentist who has been at the same address for 35 years fits that. Records don't get lost in a practice sale, and treatment decisions get made by someone who expects to see your kids' kids."],
    ],
    faqs: [
      ["How far is Sunland Dental Care from La Crescenta?", "About ten minutes west along Foothill Boulevard — a direct surface-street drive from La Crescenta or Montrose, with free parking at the office at 7902 Foothill Blvd."],
      ["Where can I get affordable dental implants near La Crescenta?", "Sunland Dental Care offers a complete single dental implant — consultation, 3D imaging, guided surgery, and crown — for $2,000 fixed, well below the $5,000+ typical of Los Angeles implant pricing, with every stage performed by Dr. Emami in-house."],
    ],
  },
  {
    slug: "dentist-la-canada-flintridge", city: "La Cañada Flintridge", short: "La Cañada",
    drive: "about 12 minutes west on the 210",
    title: "Dentist Near La Cañada Flintridge — Unhurried, Implant-Focused Care",
    lead: "A short run west on the 210 from La Cañada Flintridge to a practice built on the opposite of assembly-line dentistry: one doctor, unhurried visits, and treatment recommended only when it's genuinely needed.",
    body: [
      ["Twelve minutes, and a different kind of office", "La Cañada patients are usually not shopping on price — they're shopping for judgment. Sunland Dental Care is a single-doctor practice where Dr. Emami performs the work herself, appointments aren't stacked three deep, and no treatment coordinator sells you anything."],
      ["Conservative by conviction", "The practice's defining habit is talking patients out of work they don't need. High-magnification diagnostics catch problems early so they can be handled small, and healthy tooth structure never gets sacrificed for convenience. For patients who have been over-treated elsewhere, that's the entire appeal."],
      ["Implantology with four decades behind it", "Dr. Emami has placed thousands of implants over 40 years, plans every case in 3D before surgery, and restores them herself. Complex cases — full-arch, difficult bone, failed work from another office — are the ones she finds most interesting."],
    ],
    faqs: [
      ["Is there an implant dentist near La Cañada Flintridge?", "Sunland Dental Care is about twelve minutes west of La Cañada Flintridge at 7902 Foothill Blvd, Sunland. Dr. Mahvash Emami, DDS has 40 years of implantology experience and performs planning, placement, and restoration in the same office."],
      ["Do you offer second opinions?", "Yes, and they're a meaningful share of the practice. Bring your treatment plan and any imaging you have; you'll get a straight assessment of what's necessary, what can wait, and what you don't need at all."],
    ],
  },
  {
    slug: "dentist-glendale", city: "Glendale", short: "Glendale",
    drive: "about 15–20 minutes via the 210",
    title: "Dental Implants Near Glendale, CA — $2,000 Complete, One Doctor",
    lead: "Glendale is full of implant advertising. What's rare is one dentist who does the imaging, the surgery, and the crown herself — and publishes the price. That's a short drive up the 210.",
    body: [
      ["Why Glendale patients drive to Sunland", "Implant quotes in Glendale routinely land north of $5,000 per tooth, and often split across a general dentist, an oral surgeon, and a restorative visit. At Sunland Dental Care one doctor performs every stage in one office, and a complete single implant is $2,000 — fixed, in writing, before anything begins."],
      ["The same drive you already make", "The 210 puts the office roughly fifteen to twenty minutes from most of Glendale — comparable to crossing Glendale itself at rush hour, with free parking and no medical-building elevator at the other end."],
      ["A practice, not a chain", "Sunland Dental Care has had the same owner-dentist at the same address since 1991. Nobody rotates in from another location, your file doesn't get transferred when a group practice is sold, and the person who plans your treatment is the person who performs it."],
    ],
    faqs: [
      ["Where can I find cheaper dental implants near Glendale?", "Sunland Dental Care, about fifteen minutes from Glendale via the 210, offers a complete single dental implant for $2,000 fixed — including consultation, 3D imaging, guided surgery, and the final crown, all performed in-house by Dr. Mahvash Emami, DDS."],
      ["Is it worth leaving Glendale for a dentist?", "For routine cleanings, probably not. For implants, full-arch work, or a second opinion on an expensive treatment plan, patients regularly find the fifteen-minute drive worth several thousand dollars and a simpler process under one doctor."],
    ],
  },
  {
    slug: "dentist-burbank", city: "Burbank", short: "Burbank",
    drive: "about 20 minutes via the 210 or Sunland Boulevard",
    title: "Dentist Near Burbank, CA — Implants, Invisalign & Cosmetic Dentistry",
    lead: "Twenty minutes from Burbank sits a practice where cosmetic work is designed around your face rather than a template, and implant pricing is published instead of quoted behind a closed door.",
    body: [
      ["Cosmetic dentistry that doesn't look done", "Burbank has no shortage of cosmetic dentistry, and plenty of it announces itself. Dr. Emami designs veneers, crowns, and whitening around your facial features and smile line, with the most conservative preparation the case allows — the goal is that nobody can tell."],
      ["Invisalign for adults who can't wear brackets", "Clear aligners suit patients whose work puts them in front of people all day. Treatment is planned digitally so you can see the projected result first, and check-ins are brief and scheduled around your calendar."],
      ["Implants without the three-office runaround", "A single implant in Burbank commonly exceeds $5,000 once the surgeon, the restorative dentist, and the imaging are all billed. Here it's $2,000 complete, performed start to finish by one dentist with 40 years and thousands of implants behind her."],
    ],
    faqs: [
      ["How long does it take to drive to Sunland Dental Care from Burbank?", "Roughly twenty minutes via the 210 or up Sunland Boulevard, depending on traffic. The office is at 7902 Foothill Blvd in Sunland with free parking."],
      ["Do you offer Invisalign near Burbank?", "Yes. Sunland Dental Care provides Invisalign clear aligner therapy about twenty minutes from Burbank, overseen personally by Dr. Emami, with digital treatment planning so you see the projected outcome before starting."],
    ],
  },
  {
    slug: "dentist-sun-valley", city: "Sun Valley", short: "Sun Valley",
    drive: "about 10 minutes via Sunland Boulevard",
    title: "Dentist Near Sun Valley, CA — Family Dentistry & Affordable Implants",
    lead: "Ten minutes up Sunland Boulevard from Sun Valley: a family practice where prices are published, coverage is checked before treatment, and patients are welcomed in English, Español, and Farsi.",
    body: [
      ["Family dentistry for every age", "Cleanings, fillings, crowns, extractions, and periodontal care for the whole household — including the grandparents. Sunland Dental Care has been a family practice since 1991, and many Sun Valley families now bring a third generation through the door."],
      ["Prices you can see before you commit", "Cost anxiety keeps more people out of the dentist's chair than fear of the drill. Every treatment plan here comes with an exact number in writing before it's scheduled, insurance is verified up front, and the flagship implant price — $2,000 complete — is published rather than quoted case by case."],
      ["Se habla español · فارسی", "The office welcomes patients in English, Spanish, and Farsi, which matters when you're trying to understand a treatment plan rather than just nod along to one."],
    ],
    faqs: [
      ["Is there a Spanish-speaking dentist near Sun Valley?", "Sunland Dental Care, about ten minutes from Sun Valley on Foothill Blvd, welcomes patients in English, Spanish, and Farsi, and provides family dentistry, implants, and cosmetic care in one office."],
      ["Do you offer payment options for larger treatment?", "Every plan comes with exact written pricing before scheduling, insurance is verified in advance, and the front desk can discuss payment arrangements for larger treatment — call (818) 353-5520 to talk through your specific case."],
    ],
  },
];
