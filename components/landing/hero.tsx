"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Award, Users, Globe, Shield, Laptop, UserCog } from "lucide-react"

const stats = [
  { number: "500+", label: "Alumni Lolos", icon: Users },
  { number: "50+", label: "Negara Tujuan", icon: Globe },
  { number: "98%", label: "Tingkat Kepuasan", icon: Award },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      
      {/* GLOBAL BACKGROUND & GRADIENT - Sekarang di belakang semua elemen */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Backgnd.png" // Ganti dengan path gambar background kota/London
          alt="Study Abroad Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradasi: Solid background (putih/gelap tergantung tema) di kiri, pelan-pelan transparan ke kanan */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent lg:via-background/80 lg:to-black/30" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full py-20 lg:py-0">
        {/* 1. Ubah grid ke 12 kolom untuk kontrol lebih presisi */}
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-80px)]">
          
          {/* 2. Sisi Kiri: Beri ruang lebih besar (col-span-7) agar teks tidak terhimpit */}
          <div className="lg:col-span-7 flex flex-col justify-center py-10 z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full w-fit mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">Program Baru 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6 text-balance">
              Wujudkan Mimpi{" "}
              <span className="text-primary">Beasiswa</span>{" "}
              Luar Negerimu
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Program bimbingan komprehensif 5 fase untuk persiapan beasiswa S2 ke luar negeri. 
              Dibimbing langsung oleh <span className="font-semibold text-foreground">awardee LPDP, Chevening, MEXT, dan AAS</span> dari Kalimantan.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="rounded-full px-8 gap-2">
                Mulai Sekarang
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 gap-2 bg-background/50 backdrop-blur-sm">
                <Play className="w-4 h-4" />
                Lihat Video
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
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

          {/* 3. Sisi Kanan: Beri col-span-5 dan batasi lebar container-nya */}
          <div className="lg:col-span-5 relative w-full h-[60vh] lg:h-[85vh] flex items-end justify-center z-10 hidden lg:flex">
            
            {/* Container Murid: max-width diperkecil sedikit agar tidak 'tumpah' ke kiri */}
            <div className="absolute bottom-0 w-full max-w-[1000px] h-full origin-bottom">
              <Image
                src="/images/student.png"
                alt="Students ready to study abroad"
                fill
                className="object-contain object-bottom drop-shadow-2xl scale-110 xl:scale-125" 
                priority
              />
            </div>

            {/* Floating Cards: Atur ulang posisi agar tidak menabrak teks */}
            {/* 100% Personalized */}
            <div className="absolute top-[30%] left-[-10%] bg-[#f97316] rounded-2xl px-5 py-3 shadow-2xl border-2 border-white/20 animate-float z-20">
              <div className="flex items-center gap-3">
                <UserCog className="w-7 h-7 text-white" />
                <div className="leading-tight">
                  <p className="font-extrabold text-white text-lg">100%</p>
                  <p className="font-semibold text-white/90 text-sm">Personalized</p>
                </div>
              </div>
            </div>

            {/* Private Session */}
            <div className="absolute top-[15%] right-0 bg-[#f97316] rounded-2xl px-5 py-3 shadow-2xl border-2 border-white/20 animate-float-delayed z-20">
              <div className="flex items-center gap-3">
                <Shield className="w-7 h-7 text-blue-900 fill-blue-100" />
                <div className="leading-tight text-left">
                  <p className="font-bold text-white text-sm">Private</p>
                  <p className="font-bold text-white text-sm">Session</p>
                </div>
              </div>
            </div>

            {/* Expert Tutor */}
            <div className="absolute bottom-[25%] right-[-5%] bg-[#f97316] rounded-2xl px-5 py-3 shadow-2xl border-2 border-white/20 z-20" style={{ animation: 'float 5s ease-in-out infinite' }}>
              <div className="flex items-center gap-3">
                <Laptop className="w-7 h-7 text-white" />
                <div className="leading-tight text-left">
                  <p className="font-bold text-white text-sm">Expert</p>
                  <p className="font-bold text-white text-sm">Tutor</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 4s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  )
}