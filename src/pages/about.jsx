import React from "react";

const Stat = ({ num, label }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
    <p className="text-3xl font-extrabold text-slate-900">{num}</p>
    <p className="mt-1 text-slate-600">{label}</p>
  </div>
);

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3 leading-7">
    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-[#DC2626]" />
    <span>{children}</span>
  </li>
);

export default function AboutPage() {
  return (
    <main className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">About IT Professional Lab</h1>
          <p className="mt-2 text-slate-600">
            MKCL Authorized Training Center (ALC 13210399) — empowering learners with practical,
            job-ready digital skills in Khandala.
          </p>
        </header>

        {/* Quick stats */}
        <section className="grid gap-5 sm:grid-cols-3">
          <Stat num="10+" label="Career-oriented courses" />
          <Stat num="1,000+" label="Learners guided" />
          <Stat num="ALC 13210399" label="MKCL Authorized" />
        </section>

        {/* Our story */}
        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">Our Mission</h2>
            <ul className="mt-3 space-y-2">
              <Bullet>Deliver hands-on computer education that leads to real jobs.</Bullet>
              <Bullet>Make students industry-ready with projects and practice labs.</Bullet>
              <Bullet>Provide fair guidance, scholarships, and interview preparation.</Bullet>
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">Why Choose Us</h2>
            <ul className="mt-3 space-y-2">
              <Bullet>Government Authorized MKCL Training Center.</Bullet>
              <Bullet>Experienced trainers, small batches, personal attention.</Bullet>
              <Bullet>Job assistance for deserving candidates.</Bullet>
              <Bullet>Transparent fees and flexible timings.</Bullet>
            </ul>
          </article>
        </section>

        {/* Faculty / Director */}
        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">Faculty</h2>
            <p className="mt-2 text-slate-700">
              <strong>Prof. Sagar Bhosale (Sir)</strong> — Lead Instructor & Center Head. Specializes in
              MS-CIT, Advanced Excel, Tally Prime (GST), Banking & Finance, and Share Market basics.
            </p>
            <p className="mt-2 text-slate-700">
              Focus on practical training, real-world case studies, and discipline.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">Facilities</h2>
            <ul className="mt-3 space-y-2">
              <Bullet>Modern lab with individual systems</Bullet>
              <Bullet>Practice assignments & mini-projects</Bullet>
              <Bullet>Printed notes + soft copies</Bullet>
              <Bullet>Scholarship up to ₹10,000*</Bullet>
            </ul>
          </article>
        </section>

        {/* Location */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Location</h2>
          <p className="mt-2 text-slate-700">
            Bhairavnath Plaza, oppo Civil Court, Khandala
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border">
            <iframe
              title="IT Professional Lab Map"
              className="h-64 w-full"
              src="https://www.google.com/maps/place/IT+Professional+Lab/@18.0579525,74.0210914,17.24z/data=!4m6!3m5!1s0x3bc259e7a282ebe7:0xd086f1b993c1f883!8m2!3d18.0587884!4d74.020609!16s%2Fg%2F11gg6cf2xc?entry=ttu"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold">Talk to us</h2>
          <p className="mt-1 text-slate-600">Unsure which course fits you? Message us and we’ll guide you.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://wa.me/917219243544?text=Hello%20IT%20Professional%20Lab!%20I%E2%80%99m%20interested%20in%20your%20courses."
              target="_blank" rel="noreferrer"
              className="rounded-xl bg-green-600 px-4 py-2 font-semibold text-white shadow hover:brightness-110"
            >
              WhatsApp Us
            </a>
            <a href="tel:+917219243544" className="rounded-xl border px-4 py-2 font-semibold hover:bg-gray-100">
              Call 7219243544
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
