import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white p-6">
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-extrabold text-blue-700 mb-2">
          Contact & Course Enquiry
        </h1>
        <p className="text-gray-600 text-lg">
          Fill out the form below with your details — we’ll get back to you soon.
        </p>
      </motion.div>

      {/* Info card */}
      <motion.div
        className="w-full max-w-4xl bg-white shadow-lg rounded-2xl mb-10 p-6 border border-gray-200"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
          Our Contact Details
        </h2>
        <p className="text-gray-700 leading-relaxed">
          📍 <strong>Address:</strong> 3rd floor,Bhairavnath plaza,main road, oppo civil court,Khandala <br />
          📞 <strong>Phone:</strong> +91 7219243544<br />
          ✉️ <strong>Email:</strong> pawansingh3760@gmail.com
        </p>
      </motion.div>

      {/* Google Form */}
      <motion.div
        className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.4 }}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfeulvC39x5pLNodSQsdmZmxWbk2nJsZJy8f4YeMpLbg7ipFw/viewform?embedded=true"
          title="Course Enquiry Form"
          className="w-full"
          style={{
            height: "90vh",
            border: "none",
          }}
        >
          Loading…
        </iframe>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="mt-10 text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        © {new Date().getFullYear()} IT Professional Lab — All rights reserved.
      </motion.footer>
    </div>
  );
}
