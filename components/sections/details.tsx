'use client'

import {
  FileText,
  CheckCircle2,
  Target,
  FlaskConical,
} from "lucide-react"

export default function Details() {
  const included = [
    { icon: <FileText className="h-12 w-12 text-indigo-600" />, title: 'Full-Length Tests', desc: '10 comprehensive JEE Main mock tests' },
    { icon: <CheckCircle2 className="h-12 w-12 text-indigo-600" />, title: 'Eligibility', desc: 'Attend all 10 tests for ranking qualification' },
    { icon: <Target className="h-12 w-12 text-indigo-600" />, title: 'District Rankings', desc: 'Performance-based ranking across all tests' },
    { icon: <FlaskConical className="h-12 w-12 text-indigo-600" />, title: 'Focused Practice', desc: 'JEE Main format with targeted difficulty' },
  ]

  return (
    <section id="details" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            What You Get
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mt-4">
            Everything you need to excel in your JEE Main preparation
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {included.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-indigo-500 transition"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 transition">
                  {item.icon}
                </div>
              </div>

              <h3 className="font-bold text-xl text-gray-900 mb-2 text-center">
                {item.title}
              </h3>

              <p className="text-gray-600 text-center leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Final Round Section */}
        <div className="bg-white border border-indigo-200 rounded-3xl p-10 md:p-14 shadow-md">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-10">
              Final Round
            </h3>

            <div className="space-y-8">
              {/* Item */}
              <div className="flex gap-5 items-start">
                <div className="w-3 h-3 rounded-full bg-indigo-600 mt-2"></div>
                <div>
                  <p className="font-semibold text-xl text-gray-900">Top Performers</p>
                  <p className="text-gray-600 mt-1">
                    Top 3 rank holders from each district qualify
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-3 h-3 rounded-full bg-indigo-600 mt-2"></div>
                <div>
                  <p className="font-semibold text-xl text-gray-900">Date: 21st March 2026</p>
                  <p className="text-gray-600 mt-1">
                    Offline examination scheduled
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-3 h-3 rounded-full bg-indigo-600 mt-2"></div>
                <div>
                  <p className="font-semibold text-xl text-gray-900">Location: Bhubaneswar</p>
                  <p className="text-gray-600 mt-1">
                    Trident Group of Institutions
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
