import Link from 'next/link'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function SuccessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 text-center">
              {/* Icon */}
              <div className="text-6xl mb-6">🎉</div>

              {/* Heading */}
              <h1 className="text-4xl font-bold text-gray-800 mb-3">
                Registration Successful!
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-600 mb-2">
                Your registration has been recorded successfully.
              </p>
              <p className="text-gray-500 mb-8">
                We will contact you soon via Email and WhatsApp with further details.
              </p>

              {/* Highlight Box */}
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-8">
                <p className="font-medium text-indigo-700">
                  Stay tuned for updates on the <span className="font-semibold">TRIDENT JEE Main Challenge 2026</span>!
                </p>
              </div>

              {/* Button */}
              <Link
                href="/"
                className="inline-block px-10 py-3 bg-indigo-600 text-white rounded-full font-medium shadow-md hover:bg-indigo-700 transition"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
