import React from "react";

const CourseCard = ({ title, points }) => (
  <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    <ul className="mt-3 list-disc pl-5 text-slate-700">
      {points.map((p, i) => <li key={i} className="leading-7">{p}</li>)}
    </ul>
  </article>
);

export default function CoursesPage() {
  return (
    <main className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900">View Courses</h1>
          <p className="mt-1 text-slate-600">Career-oriented programs designed by industry trainers</p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <CourseCard title="MS-CIT" points={["Fundamental computer skills","Internet & Email","Office tools & digital literacy"]} />
          <CourseCard title="Advanced Excel" points={["Custom formats, validation","Pivot Tables & Charts","HLOOKUP & VLOOKUP"]} />
          <CourseCard title="Tally Prime with GST" points={["Trading/Manufacturing","Display & Reporting","GST entries"]} />
          <CourseCard title="Diploma in Financial Accounting" points={["Office Assistance","Advanced Excel","Tally + GST","Banking & Insurance basics"]} />
          <CourseCard title="Share Market" points={["BSE/NSE basics","Chart patterns & TradingView","Strategies: SIP & Mutual Funds"]} />
          <CourseCard title="Work From Home Tools" points={["PAN card application","e-Seva center workflows","Affidavit & online services"]} />
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 p-5">
          <h2 className="text-xl font-semibold">Need counselling?</h2>
          <p className="mt-1 text-slate-600">Message us on WhatsApp and we’ll help you pick the right course.</p>
          <a
            href="https://wa.me/919552345061?text=Hello%20IT%20Professional%20Lab!%20I%E2%80%99m%20interested%20in%20your%20courses."
            target="_blank" rel="noreferrer"
            className="mt-3 inline-block rounded-xl bg-green-600 px-4 py-2 font-semibold text-white shadow hover:brightness-110"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </main>
  );
}
