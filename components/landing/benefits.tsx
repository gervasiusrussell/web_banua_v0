"use client"

import { 
  GraduationCap, 
  Users, 
  Clock, 
  Award,
  MessageCircle,
  FileCheck,
  Target,
  Shield
} from "lucide-react"

const benefits = [
  {
    icon: GraduationCap,
    title: "Mentor Awardee Berpengalaman",
    description: "Dibimbing langsung oleh penerima beasiswa LPDP, Chevening, MEXT, dan AAS yang berasal dari Kalimantan.",
  },
  {
    icon: Users,
    title: "Komunitas Eksklusif",
    description: "Akses ke jaringan alumni dan awardee untuk berbagi pengalaman dan dukungan selama perjalanan beasiswa.",
  },
  {
    icon: Clock,
    title: "Jadwal Fleksibel",
    description: "Sesi bimbingan dapat disesuaikan dengan waktu kamu. Weekend dan malam hari tersedia.",
  },
  {
    icon: Award,
    title: "Track Record Terbukti",
    description: "Tingkat keberhasilan 85%+ dengan ratusan alumni yang sudah berhasil meraih beasiswa impian.",
  },
  {
    icon: MessageCircle,
    title: "Support 24/7",
    description: "Tim support yang siap membantu menjawab pertanyaan dan memberikan motivasi kapanpun dibutuhkan.",
  },
  {
    icon: FileCheck,
    title: "Review Dokumen Unlimited",
    description: "Revisi dokumen tanpa batas sampai kamu puas dan siap submit aplikasi beasiswa.",
  },
  {
    icon: Target,
    title: "Personalized Strategy",
    description: "Strategi yang disesuaikan dengan profil, kekuatan, dan target beasiswa spesifik kamu.",
  },
  {
    icon: Shield,
    title: "Garansi Kepuasan",
    description: "Jaminan uang kembali jika tidak puas dengan kualitas bimbingan yang diberikan.",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-20 lg:py-28 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 rounded-full mb-6">
            <span className="text-sm font-medium text-background/90">Mengapa Kami?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-background mb-6 text-balance">
            Keuntungan Bergabung dengan <span className="text-primary">Banua Scholarship</span>
          </h2>
          <p className="text-lg text-background/70 leading-relaxed">
            Lebih dari sekedar bimbingan beasiswa. Kami adalah partner yang akan menemani perjalananmu menuju kampus impian.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-5">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-background mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-background/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
