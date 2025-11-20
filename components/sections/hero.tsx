'use client'

export default // Hero Component
function Hero() {
  return (
    <section className="bg-white pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-indigo-600 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 mb-8">
            <div className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
            TRIDENT JEE MAIN CHALLENGE 2026
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-slate-900 tracking-tight">
            Test Your Skills,
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10">Win Big!</span>
              <div className="absolute bottom-2 left-0 h-4 w-full bg-indigo-200 z-0" />
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Compete with +2 Science students across districts in our comprehensive JEE Main challenge series.
            <br />
            <span className="font-semibold text-slate-900">Master 10 full-length mock tests and claim amazing prizes.</span>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 hover:border-indigo-600 transition">
              <p className="text-4xl font-black text-indigo-600">10</p>
              <p className="text-sm text-slate-600 mt-2 font-medium">Full-Length Tests</p>
            </div>
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 hover:border-indigo-600 transition">
              <p className="text-4xl font-black text-indigo-600">₹53K+</p>
              <p className="text-sm text-slate-600 mt-2 font-medium">Total Prizes</p>
            </div>
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 col-span-2 md:col-span-1 hover:border-indigo-600 transition">
              <p className="text-4xl font-black text-indigo-600">Dec-Jan</p>
              <p className="text-sm text-slate-600 mt-2 font-medium">Campaign Period</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/form" 
              className="group px-10 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
            >
              Register Now
              <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href="#details" 
              className="px-10 py-4 border-2 border-slate-200 text-slate-900 rounded-xl font-bold hover:border-indigo-600 hover:bg-slate-50 transition"
            >
              Learn More
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Free registration</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-slate-300" />
          </div>
        </div>
      </div>
    </section>
  )
}

