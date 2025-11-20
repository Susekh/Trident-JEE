'use client'

import { Medal, Trophy, Award } from "lucide-react"

export default function Prizes() {
  const districtPrizes = [
    { position: '1st Prize', prize: '₹3,000', icon: <Medal className="h-8 w-8 text-indigo-600" /> },
    { position: '2nd Prize', prize: '₹2,000', icon: <Trophy className="h-8 w-8 text-indigo-600" /> },
    { position: '3rd Prize', prize: '₹1,000', icon: <Award className="h-8 w-8 text-indigo-600" /> },
  ]

  const finalPrizes = [
    { position: '1st Prize', prize: '₹30,000', icon: <Medal className="h-8 w-8 text-indigo-600" /> },
    { position: '2nd Prize', prize: '₹20,000', icon: <Trophy className="h-8 w-8 text-indigo-600" /> },
    { position: '3rd Prize', prize: '₹10,000', icon: <Award className="h-8 w-8 text-indigo-600" /> },
  ]

  return (
    <section id="prizes" className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Prize Pool
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mt-3">
            Over <span className="font-bold text-indigo-600">₹53,000</span> in rewards
          </p>
        </div>

        {/* Prize Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

          {/* District Level */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-8 text-center">
              District Level Prizes
            </h3>

            <div className="space-y-5">
              {districtPrizes.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-5 md:p-6 
                             flex flex-col sm:flex-row items-center sm:items-center justify-between 
                             gap-4 transition hover:border-indigo-500 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-50 rounded-xl">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-base md:text-lg">{item.position}</p>
                      <p className="text-xs md:text-sm text-gray-500 font-medium">+ Certificate</p>
                    </div>
                  </div>

                  <p className="text-2xl md:text-3xl font-extrabold text-indigo-600">
                    {item.prize}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Round */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-8 text-center">
              Final Round Prizes
            </h3>

            <div className="space-y-5">
              {finalPrizes.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-indigo-200 rounded-2xl p-5 md:p-6 
                             flex flex-col sm:flex-row items-center justify-between gap-4 
                             transition hover:border-indigo-500 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-100 rounded-xl">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-base md:text-lg">{item.position}</p>
                      <p className="text-xs md:text-sm text-gray-500 font-medium">+ Certificate</p>
                    </div>
                  </div>

                  <p className="text-2xl md:text-3xl font-extrabold text-indigo-600">
                    {item.prize}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 bg-indigo-600 rounded-3xl p-8 md:p-14 text-center shadow-xl">
          <p className="text-xl md:text-3xl font-extrabold text-white mb-3 md:mb-4">
            Ready to rise higher with Trident?
          </p>

          <p className="text-indigo-100 text-base md:text-lg mb-6 md:mb-8">
            Join thousands of students competing for excellence
          </p>

          <a
            href="/form"
            className="inline-block px-10 md:px-12 py-3 md:py-4 bg-white text-indigo-700 
                       rounded-2xl font-bold shadow-md hover:bg-gray-100 transition 
                       hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Register Today →
          </a>
        </div>

      </div>
    </section>
  )
}
