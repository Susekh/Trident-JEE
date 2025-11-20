import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import RegistrationForm from '@/components/forms/registration-form'

export default function FormPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  )
}
