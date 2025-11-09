import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import logo from "./assets/logo.png";
import heroBannerSrc from "./assets/hero.jpg";
import courseBannerSrc from "./assets/courses.jpg";
import CoursesPage from "./pages/Courses";
import AboutPage from "./pages/about";    // ← rename file to About.jsx or adjust path
import Contact from "./pages/contact";    // ← rename file to Contact.jsx or adjust path

// contact helpers
const WHATSAPP_NUM = "917219243544"; // +91 7219243544
const WA_TEXT = encodeURIComponent("Hello IT Professional Lab! I’m interested in your courses.");

const Phone = ({ n }) => (
  <a href={`tel:${n.replace(/\s/g, "")}`} className="font-semibold tracking-wide hover:underline" aria-label={`Call ${n}`}>
    {n}
  </a>
);

// Auto-import all gallery images (CRA supports require.context)
const importAll = (r) => r.keys().map(r);
const galleryImages = importAll(
  require.context("./assets/gallery", false, /\.(png|jpe?g|webp|avif)$/i)
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/90 backdrop-blur">
    {children}
  </span>
);

// Rotating gallery with lightbox
const GallerySection = () => {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  const images = galleryImages;
  const hasImages = images && images.length > 0;

  useEffect(() => {
    if (hovered || open || !hasImages) return;
    const interval = setInterval(() => setIdx((i) => (i + 1) % images.length), 2000);
    return () => clearInterval(interval);
  }, [hovered, open, hasImages, images.length]);

  const openAt = (i) => { setIdx(i); setOpen(true); };
  const close = () => setOpen(false);
  const prev = (e) => { e?.stopPropagation(); setIdx((i) => (i - 1 + images.length) % images.length); };
  const next = (e) => { e?.stopPropagation(); setIdx((i) => (i + 1) % images.length); };

  if (!hasImages) return null;

  return (
    <section id="gallery" className="py-14 sm:py-16 bg-slate-50"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Gallery</h2>
            <p className="mt-1 text-slate-600">Snapshots from IT Professional Lab</p>
          </div>
          <p className="text-sm text-slate-500">(Auto-rotating slideshow)</p>
        </header>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <img
            src={images[idx]}
            alt={`Slide ${idx + 1}`}
            className="w-full h-[22rem] object-cover transition-all duration-700 ease-in-out"
            loading="lazy"
          />
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 shadow hover:scale-110">‹</button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 shadow hover:scale-110">›</button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-2 w-2 rounded-full transition-all ${i === idx ? "bg-[#DC2626] w-4" : "bg-white/60"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => openAt(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200"
              title="View photo"
            >
              <img
                src={src}
                alt={`Thumbnail ${i + 1}`}
                className={`h-full w-full object-cover transition-transform duration-300 ${i === idx ? "ring-4 ring-[#DC2626]" : "group-hover:scale-105"}`}
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {open && (
          <div onClick={close} className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative max-w-5xl w-full">
              <img src={images[idx]} alt={`Large ${idx + 1}`} className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl" />
              <button onClick={close} className="absolute -top-3 -right-3 rounded-full bg-white px-3 py-1 font-semibold shadow">✕</button>
              <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 shadow">‹</button>
              <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 shadow">›</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// HOME content only
function Home() {
  return (
    <>
      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-[#DC2626]">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_70%_10%,rgba(255,255,255,0.25),transparent)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:grid-cols-2 sm:py-16">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Pill>₹10,000 Scholarship*</Pill>
              <Pill>Government Authorized MKCL</Pill>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Launch your career with{" "}
              <span className="underline decoration-[#FACC15] decoration-4 underline-offset-4">professional computer courses</span>
            </h1>
            <p className="mt-3 max-w-xl text-white/90">
              MS-CIT • Advanced Excel • Tally Prime (GST) • Diploma in Financial Accounting • Share Market • Banking & Finance • Work From Home Tools
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/Courses" className="rounded-xl bg-white px-4 py-2 font-semibold text-[#DC2626] shadow hover:brightness-110">
                View Courses
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUM}?text=${WA_TEXT}`}
                target="_blank" rel="noreferrer"
                className="rounded-xl border border-white/40 px-4 py-2 font-semibold text-white hover:bg-white/10"
              >
                Chat on Wh  atsApp
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroBannerSrc}
              alt="Students and institute banner"
              className="w-full max-w-xl md:max-w-2xl rounded-2xl border-4 border-white/40 shadow-2xl object-cover"
              style={{ aspectRatio: "4 / 3" }}
            />
          </div>
        </div>
      </section>

      {/* Courses banner */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 mx-auto max-w-6xl px-4">
        <img
          src={courseBannerSrc}
          alt="Course collage"
          className="w-full object-cover"
          style={{ maxHeight: "24rem" }}
        />
      </div>

      {/* Rotating Gallery */}
      <GallerySection />
    </>
  );
}

// Simple 404
const NotFound = () => (
  <main className="min-h-[60vh] grid place-items-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold">404 — Page Not Found</h1>
      <p className="mt-2 text-slate-600">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="mt-4 inline-block rounded-xl bg-[#DC2626] px-4 py-2 font-semibold text-white">Go Home</Link>
    </div>
  </main>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 relative">
      {/* Top info bar */
      }
      <div className="bg-[#1E3A8A] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-sm">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-semibold">MKCL अधिकृत केंद्र (ALC 13210399)</span>
            <span className="hidden h-4 w-px bg-white/30 sm:inline-block" />
            <span>Journey of Excellence</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone n="9552345061" />
            <span className="opacity-60">|</span>
            <Phone n="7219243544" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            {logo ? (
              <img src={logo} alt="IT Professional Lab Logo" className="h-10 w-10 rounded-xl border border-[#DC2626] object-cover" />
            ) : (
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#DC2626] text-white font-extrabold">IT</div>
            )}
            <div>
              <p className="text-base font-extrabold leading-tight">आई. टी. प्रोफेशनल लॅब</p>
              <p className="text-xs text-slate-500">IT Professional Lab</p>
            </div>
          </Link>

          {/* SPA Nav with active styles */}
          <nav className="hidden items-center gap-6 sm:flex">
            {[
              { to: "/courses", label: "Courses" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `hover:text-[#DC2626] ${isActive ? "text-[#DC2626] font-semibold" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUM}?text=${WA_TEXT}`}
              target="_blank" rel="noreferrer"
              className="rounded-xl bg-green-600 px-3 py-2 font-semibold text-white shadow hover:brightness-110"
            >
              WhatsApp
            </a>
            <Link to="/contact" className="rounded-xl bg-[#DC2626] px-4 py-2 font-semibold text-white shadow hover:brightness-110">
              Enroll Now
            </Link>
          </div>
        </div>
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} IT Professional Lab. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/courses" className="hover:text-slate-900">Courses</Link>
            <Link to="/about" className="hover:text-slate-900">About</Link>
            <Link to="/contact" className="hover:text-slate-900">Contact</Link>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUM}?text=${WA_TEXT}`}
        target="_blank" rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-4 right-4 z-40 rounded-full bg-green-600 px-5 py-3 text-white font-semibold shadow-2xl hover:brightness-110"
      >
        WhatsApp
      </a>
    </div>
  );
}
