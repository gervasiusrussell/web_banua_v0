"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Award, Users, Globe, BookOpen } from "lucide-react"

const stats = [
  { number: "500+", label: "Alumni Lolos", icon: Users },
  { number: "50+", label: "Negara Tujuan", icon: Globe },
  { number: "98%", label: "Tingkat Kepuasan", icon: Award },
]

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 lg:pt-0 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 min-h-screen items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center py-12 lg:py-20 z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full w-fit mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">Program Baru 2026</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6 text-balance">
              Wujudkan Mimpi{" "}
              <span className="text-primary">Beasiswa</span>{" "}
              Luar Negerimu
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Program bimbingan komprehensif 5 fase untuk persiapan beasiswa S2 ke luar negeri. 
              Dibimbing langsung oleh <span className="font-semibold text-foreground">awardee LPDP, Chevening, MEXT, dan AAS</span> dari Kalimantan.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="rounded-full px-8 gap-2">
                Mulai Sekarang
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 gap-2">
                <Play className="w-4 h-4" />
                Lihat Video
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.number}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block h-screen">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/Backgnd.jpg"
                alt="Decorative background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Student Image */}
            <div className="absolute inset-0 flex items-center justify-center z-10 px-8">
              <div className="relative w-full max-w-[760px] h-[85vh]">
                <Image
                  src="/images/student.png"
                  alt="Student celebrating graduation"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-primary/20" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/40" /> */}

            {/* Floating Cards */}
            <div className="absolute bottom-32 left-0 bg-card rounded-2xl p-4 shadow-xl border border-border max-w-[280px] animate-float">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground text-sm">Beasiswa Tercapai!</p>
                  <p className="text-xs text-muted-foreground">LPDP 2026</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                &quot;Terima kasih Banua Scholarship, impianku tercapai!&quot;
              </p>
            </div>

            <div className="absolute top-40 right-8 bg-card rounded-2xl p-4 shadow-xl border border-border animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground text-sm">5 Fase Lengkap</p>
                  <p className="text-xs text-muted-foreground">Assessment → Acceptance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 4s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}
