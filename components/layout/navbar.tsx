"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-white border-b-2 border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div onClick={() => router.push("/")} className="flex items-center gap-3">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-xl">T</span>
            </div>
            <div>
              <h1 className="font-black text-xl text-slate-900">TRIDENT</h1>
              <p className="text-xs text-slate-600 font-medium">Group of Institutions</p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/form"
              className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl active:scale-95"
            >
              Register
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setOpen(!open)}
          >
            <span className={`h-0.5 w-6 bg-slate-800 transition ${open ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`h-0.5 w-6 bg-slate-800 transition ${open ? "opacity-0" : ""}`}></span>
            <span className={`h-0.5 w-6 bg-slate-800 transition ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-60 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 mt-4">
            {/* <a
              href="#details"
              className="text-sm font-semibold text-slate-700 hover:text-indigo-600 transition"
              onClick={() => setOpen(false)}
            >
              About
            </a>
            <a
              href="#prizes"
              className="text-sm font-semibold text-slate-700 hover:text-indigo-600 transition"
              onClick={() => setOpen(false)}
            >
              Prizes
            </a> */}
            <a
              href="/form"
              className="px-5 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition shadow-md"
              onClick={() => setOpen(false)}
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
