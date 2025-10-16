import React, { useState } from "react";
import { Link } from "react-router-dom";
// Contact Us - single-file React component (Tailwind-ready)
// Default export a component ready to drop into a React app.
// - Client-side validation
// - Accessible labels
// - Honeypot anti-spam field
// - Optional `onSubmit` prop to handle form data (defaults to console.log)

export default function ContactUs({ onSubmit }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const defaultSubmit = async (data) => {
    // Example: send to an API endpoint
    // Replace with your real endpoint or pass an onSubmit prop
    console.log("Send form:", data);
    return { ok: true };
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setStatus(null);

    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length) return;

    setStatus("sending");

    try {
      const handler = onSubmit || defaultSubmit;
      const res = await handler(form);
      if (res && res.ok === false)
        throw new Error(res.error || "Submit failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  function validate(values) {
    const errs = {};
    if (!values.name.trim()) errs.name = "Please enter your name.";
    if (!values.email.trim()) errs.email = "Please enter your email.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email))
      errs.email = "Enter a valid email.";
    if (!values.message.trim()) errs.message = "Please enter a message.";
    else if (values.message.length < 10)
      errs.message = "Message must be at least 10 characters.";
    return errs;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: contact form */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-sm text-gray-600 mb-6">
            Have a question or want to work together? Send us a message and
            we'll reply within 1–2 business days.
          </p>

          <form onSubmit={submitHandler} noValidate>
            {/* Honeypot field (visually hidden) to catch bots */}
            <label className="sr-only" htmlFor="company">
              Company
            </label>
            <input
              id="company"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={""}
              readOnly
              className="hidden"
            />

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-400 ${
                  errors.name ? "border-rose-500" : "border-gray-200"
                }`}
                placeholder="Your full name"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-rose-600">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-400 ${
                  errors.email ? "border-rose-500" : "border-gray-200"
                }`}
                placeholder="you@example.com"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-rose-600">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-400 ${
                  errors.message ? "border-rose-500" : "border-gray-200"
                }`}
                placeholder="Tell us what's on your mind"
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-rose-600">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center rounded-lg px-4 py-2 bg-indigo-600 text-white font-medium hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>

              {status === "success" && (
                <p className="text-sm text-green-600">
                  Thanks — we'll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-rose-600">
                  Something went wrong. Try again later.
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Right: contact details / socials */}
        <aside className="space-y-4">
          <div className="p-4 rounded-lg bg-gray-50">
            <h3 className="text-lg font-medium">Quick contact</h3>
            <p className="text-sm text-gray-600 mt-2">
              Phone:{" "}
              <a href="tel:+1234567890" className="text-indigo-600">
                +1 (234) 567-890
              </a>
            </p>
            <p className="text-sm text-gray-600">
              Email:{" "}
              <a href="mailto:hello@example.com" className="text-indigo-600">
                hello@example.com
              </a>
            </p>
            <p className="text-sm text-gray-600">
              Address: 123 Main St, Example City
            </p>
          </div>

          <div className="p-4 rounded-lg bg-gray-50">
            <h4 className="font-medium">Follow us</h4>
            <div className="mt-3 flex gap-3">
              {/* Simple SVG icons */}
              <a
                aria-label="Twitter"
                href="#"
                className="inline-flex items-center justify-center p-2 rounded-full bg-white border"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.5v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                aria-label="Facebook"
                href="#"
                className="inline-flex items-center justify-center p-2 rounded-full bg-white border"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.75l-.44 2.9h-2.31v7.03C18.34 21.19 22 17.06 22 12.07z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="inline-flex items-center justify-center p-2 rounded-full bg-white border"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zM12 8.4a3.6 3.6 0 100 7.2 3.6 3.6 0 000-7.2zM18.2 6.1a.9.9 0 11-1.8 0 .9.9 0 011.8 0z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden">
            {/* Optional map placeholder (replace src with your embed) */}
            <iframe
              title="office-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019..."
              className="w-full h-40 border-0"
              loading="lazy"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
