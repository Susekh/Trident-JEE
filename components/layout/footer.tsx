export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t-2 border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Logo + Text */}
          <div className="flex justify-center flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg">T</span>
              </div>
              <div>
                <h3 className="font-black text-lg text-slate-900">TRIDENT</h3>
                <p className="text-xs text-slate-600 font-medium">
                  Group of Institutions
                </p>
              </div>
            </div>
{/* 
            <p className="text-slate-600 text-sm font-medium">
              www.trident.ac.in
            </p> */}
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-slate-900 mb-2">Contact</h4>
            <p className="text-sm text-slate-600 font-medium">
              Bhubaneswar, Odisha
            </p>
            <p className="text-sm text-slate-600 font-medium">
              support@trident.ac.in
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-slate-200 pt-8 text-center">
          <p className="text-slate-600 font-medium">
            © {currentYear} TRIDENT Group of Institutions. Built for 2026 aspirants.
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Empowering students to achieve their dreams
          </p>
        </div>
      </div>
    </footer>
  );
}
