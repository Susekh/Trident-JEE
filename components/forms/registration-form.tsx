'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

// Lucide Icons
import {
  AlertCircle,
  UserRound,
  Phone,
  School,
  MessageCircle,
  Loader2,
  Lock,
  ArrowRight
} from "lucide-react"

// Registration Form Component
export default function RegistrationForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    contactNo: "",
    whatsappNo: "",
    fatherContact: "",
    fatherWhatsapp: "",
    email: "",
    parentEmail: "",
    schoolCollege: "",
    knowAbout: "",
    otherKnowAbout: "",
    teacherName: "",
    teacherContact: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const payload = {
      ...formData,
      knowAbout:
        formData.knowAbout === "other"
          ? formData.otherKnowAbout
          : formData.knowAbout,
    }

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || "Something went wrong")
        setLoading(false)
        return
      }

      alert("Registration successful!")
      setFormData({
        firstName: "",
        lastName: "",
        fatherName: "",
        contactNo: "",
        whatsappNo: "",
        fatherContact: "",
        fatherWhatsapp: "",
        email: "",
        parentEmail: "",
        schoolCollege: "",
        knowAbout: "",
        otherKnowAbout: "",
        teacherName: "",
        teacherContact: "",
      });
      router.push("/success");
      setLoading(false)
    } catch (err) {
      console.log("Error in registration-form ::", err)
      setError("Failed to submit form. Please try again.")
      setLoading(false)
    }
  }

  return (
    <main className="bg-white text-slate-900">
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-indigo-600 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 mb-6">
              <div className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
              Registration Open
            </div>
            <h1 className="text-4xl md:text-5xl font-black">Register Now</h1>
            <p className="text-xl text-slate-600">
              Join TRIDENT JEE Main Challenge 2026
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-8 md:p-12 shadow-sm">
            {error && (
              <div className="bg-red-50 border-2 border-red-200 text-red-800 px-6 py-4 rounded-xl mb-8 font-medium flex items-start gap-3">
                <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Student Info */}
              <div>
                <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                  <UserRound className="w-6 h-6" />
                  Student Information
                </h2>

                {/* First & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-bold mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 rounded-xl bg-white"
                      placeholder="Enter first name"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-bold mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 rounded-xl bg-white"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                {/* Father Name */}
                <div className="mt-6">
                  <label className="block text-sm font-bold mb-2">Father&apos;s Name *</label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 rounded-xl bg-white"
                    placeholder="Enter father's name"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="pt-6 border-t-2 border-slate-200">
                <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                  <Phone className="w-6 h-6" />
                  Contact Information
                </h2>

                {/* Student Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Your Contact No. *</label>
                    <input
                      type="tel"
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 rounded-xl bg-white"
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">Your WhatsApp No. *</label>
                    <input
                      type="tel"
                      name="whatsappNo"
                      value={formData.whatsappNo}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 rounded-xl bg-white"
                      placeholder="10-digit WhatsApp number"
                    />
                  </div>
                </div>

                {/* Father Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Father&apos;s Contact No. *</label>
                    <input
                      type="tel"
                      name="fatherContact"
                      value={formData.fatherContact}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 rounded-xl bg-white"
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">Father&apos;s WhatsApp No. *</label>
                    <input
                      type="tel"
                      name="fatherWhatsapp"
                      value={formData.fatherWhatsapp}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 rounded-xl bg-white"
                      placeholder="10-digit WhatsApp number"
                    />
                  </div>
                </div>

                {/* Emails */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Your Email ID *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 rounded-xl bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">Parent&apos;s Email ID *</label>
                    <input
                      type="email"
                      name="parentEmail"
                      value={formData.parentEmail}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 rounded-xl bg-white"
                      placeholder="parent.email@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div className="pt-6 border-t-2 border-slate-200">
                <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                  <School className="w-6 h-6" />
                  Academic Information
                </h2>

                <label className="block text-sm font-bold mb-2">
                  Current School/College Name *
                </label>
                <input
                  type="text"
                  name="schoolCollege"
                  value={formData.schoolCollege}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 rounded-xl bg-white"
                  placeholder="Enter your school/college name"
                />

                {/* Know About */}
                <div className="mt-6">
                  <label className="block text-sm font-bold mb-2">
                    How did you know about us? *
                  </label>
                  <select
                    name="knowAbout"
                    value={formData.knowAbout}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 rounded-xl bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="coaching-center">Coaching Center</option>
                    <option value="social-media">Social Media</option>
                    <option value="email">Through Email</option>
                    <option value="whatsapp">WhatsApp Message</option>
                    <option value="school">Through School</option>
                    <option value="college">Through College</option>
                    <option value="other">Other (Please Specify)</option>
                  </select>

                  {formData.knowAbout === "other" && (
                    <input
                      type="text"
                      name="otherKnowAbout"
                      placeholder="Please specify"
                      required
                      value={formData.otherKnowAbout}
                      onChange={handleChange}
                      className="mt-4 w-full px-4 py-3 border-2 rounded-xl bg-white"
                    />
                  )}
                </div>
              </div>

              {/* Teacher Information */}
              <div className="pt-6 border-t-2 border-slate-200">
                <h2 className="text-xl font-black mb-2 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  Teacher Information
                </h2>
                <p className="text-sm text-slate-600 mb-4 font-medium">
                  Optional – if referred by a teacher
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Teacher&apos;s Name
                    </label>
                    <input
                      type="text"
                      name="teacherName"
                      value={formData.teacherName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 rounded-xl bg-white"
                      placeholder="Teacher's full name"
                    />
                  </div>

                  {/* Contact */}
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Teacher&apos;s Contact No.
                    </label>
                    <input
                      type="tel"
                      name="teacherContact"
                      value={formData.teacherContact}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 rounded-xl bg-white"
                      placeholder="10-digit mobile number"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-indigo-600 text-white rounded-xl text-lg font-bold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Complete Registration
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-600">
                  <Lock className="w-4 h-4 text-green-600" />
                  <span className="font-medium">
                    Your information is secure and will not be shared
                  </span>
                </div>
              </div>

            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
