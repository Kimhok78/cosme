import React from "react";
import { Link } from "react-router-dom";

// Import images properly
import AlexImg from "../image/ChatGPT Image Oct 3, 2025, 06_50_15 PM.png";
// You can add more images here like SamImg, RinaImg if available

export default function About() {
  return (
    <main className="max-w-5xl mx-auto p-6 text-gray-900">
      <section className="flex flex-col md:flex-row gap-7 items-center">
        <div className="flex-1 bg-white/80 backdrop-blur-md p-7 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold mb-2">
            About <span className="text-indigo-500">[GlowUp Store]</span>
          </h1>
          <p className="text-gray-600">
            We’re a small team with a big mission: to make everyday life more
            useful, beautiful, and joy-filled through thoughtful products and
            honest service. Founded in [2025], we blend modern design with
            practical solutions to help you get more done — and more beautiful.
          </p>

          <div className="grid grid-cols-3 gap-3 mt-5">
            <div className="bg-white p-3 rounded-xl text-center shadow">
              <strong className="block text-lg">5,000+</strong>
              <span className="text-sm text-gray-500">Customers served</span>
            </div>
            <div className="bg-white p-3 rounded-xl text-center shadow">
              <strong className="block text-lg">4.8/5</strong>
              <span className="text-sm text-gray-500">Average rating</span>
            </div>
            <div className="bg-white p-3 rounded-xl text-center shadow">
              <strong className="block text-lg">10+</strong>
              <span className="text-sm text-gray-500">Team members</span>
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <Link
              to="/contact"
              className="border border-indigo-200 text-white font-semibold px-4 py-2 rounded-xl flex items-center justify-center bg-black hover:bg-indigo-100"
            >
              Get in touch
            </Link>
            <Link
              to="/product"
              className="border border-indigo-200 text-white font-semibold px-4 py-2 rounded-xl flex items-center justify-center bg-black hover:bg-indigo-100"
            >
              Explore products
            </Link>
          </div>
        </div>

        <div className="w-full md:w-80 flex flex-col gap-3">
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              To create simple, reliable products that make everyday routines
              feel thoughtful and intentional.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Quick Facts</h3>
            <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
              <li>Based in [Phnom Penh, Cambodia]</li>
              <li>Founded in [2025]</li>
              <li>Sustainably sourced where possible</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-[1fr_320px] gap-5 mt-7">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Our Values</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="bg-indigo-500 text-white w-11 h-11 flex items-center justify-center rounded-lg font-semibold">
                1
              </div>
              <div>
                <strong>Customer-first</strong>
                <div className="text-gray-600 text-sm">
                  We listen, iterate, and treat feedback as fuel for
                  improvement.
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-indigo-500 text-white w-11 h-11 flex items-center justify-center rounded-lg font-semibold">
                2
              </div>
              <div>
                <strong>Quality over quantity</strong>
                <div className="text-gray-600 text-sm">
                  We focus on durability, clarity, and meaningful details.
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-indigo-500 text-white w-11 h-11 flex items-center justify-center rounded-lg font-semibold">
                3
              </div>
              <div>
                <strong>Responsible growth</strong>
                <div className="text-gray-600 text-sm">
                  We care about people and the planet in our choices.
                </div>
              </div>
            </div>
          </div>

          <h3 className="font-semibold mt-6">How we work</h3>
          <p className="text-gray-600 text-sm mt-1">
            Cross-functional teams, customer-driven roadmaps, and fast iteration
            cycles. We ship thoughtfully, measure what matters, and stay
            curious.
          </p>
        </div>

        <aside className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-3">Meet the Team</h3>
          <div className="space-y-3">
            {/* Team Member 1 */}
            <div className="flex items-center gap-3">
              <img
                src={AlexImg}
                alt="Alex Kim"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <strong>Alex Kim</strong>
                <div className="text-gray-500 text-sm">Founder & CEO</div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="flex items-center gap-3">
              <img
                src={AlexImg} // replace with Sam's image
                alt="Sam Lee"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <strong>Sam Lee</strong>
                <div className="text-gray-500 text-sm">Head of Design</div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="flex items-center gap-3">
              <img
                src={AlexImg} // replace with Rina's image
                alt="Rina Patel"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <strong>Rina Patel</strong>
                <div className="text-gray-500 text-sm">Operations</div>
              </div>
            </div>
          </div>

          <div className="mt-3 text-gray-500 text-sm">
            Want to join the team?{" "}
            <a href="#" className="text-indigo-500">
              See openings
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
}
