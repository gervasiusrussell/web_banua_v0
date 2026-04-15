"use client"

import { Button } from "@/components/ui/button"
import { Check, Star, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const pricingPlans = [
  {
    name: "Starter",
    description: "Untuk yang baru memulai perjalanan beasiswa",
    price: "2.500.000",
    period: "sekali bayar",
    phases: ["Phase 1"],
    features: [
      "Konsultasi profil 2x sesi",
      "Rekomendasi beasiswa personalized",
      "Personal roadmap & timeline",
      "Akses grup komunitas",
      "E-book panduan beasiswa",
    ],
    highlight: false,
    cta: "Pilih Starter",
  },
  {
    name: "Essential",
    description: "Persiapan lengkap dokumen & bahasa",
    price: "7.500.000",
    period: "sekali bayar",
    phases: ["Phase 1", "Phase 2", "Phase 3"],
    features: [
      "Semua fitur Starter",
      "Bimbingan IELTS/TOEFL 10 sesi",
      "Review dokumen 5x revisi",
      "Motivation Letter writing",
      "Study Plan development",
      "CV Akademik professional",
      "Scholarship Essay review",
      "Mentor 1-on-1 dedicated",
    ],
    highlight: true,
    badge: "Paling Populer",
    cta: "Pilih Essential",
  },
  {
    name: "Complete",
    description: "Bimbingan menyeluruh sampai keberangkatan",
    price: "12.000.000",
    period: "sekali bayar",
    phases: ["Phase 1", "Phase 2", "Phase 3", "Phase 4", "Phase 5"],
    features: [
      "Semua fitur Essential",
      "Mock Interview 5x sesi",
      "Psikotes preparation (LPDP)",
      "Pre-departure guidance",
      "Koneksi komunitas awardee",
      "Pivot Path consultation",
      "Priority support 24/7",
      "Garansi uang kembali*",
    ],
    highlight: false,
    cta: "Pilih Complete",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Investasi Masa Depan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 text-balance">
            Pilih Paket yang <span className="text-primary">Sesuai Kebutuhanmu</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fleksibel dan terjangkau. Tersedia cicilan hingga 6 bulan untuk semua paket.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-3xl p-8 border-2 transition-all duration-300",
                plan.highlight
                  ? "bg-primary text-primary-foreground border-primary scale-105 shadow-2xl shadow-primary/20"
                  : "bg-card text-card-foreground border-border hover:border-primary/50 hover:shadow-lg"
              )}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1 px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold shadow-lg">
                    <Star className="w-4 h-4" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Info */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={cn(
                  "text-sm",
                  plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                )}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm">Rp</span>
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                </div>
                <span className={cn(
                  "text-sm",
                  plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"
                )}>
                  {plan.period}
                </span>
              </div>

              {/* Phases Included */}
              <div className="flex flex-wrap gap-2 mb-6">
                {plan.phases.map((phase) => (
                  <span
                    key={phase}
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium",
                      plan.highlight
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {phase}
                  </span>
                ))}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                      plan.highlight ? "bg-primary-foreground/20" : "bg-accent/20"
                    )}>
                      <Check className={cn(
                        "w-3 h-3",
                        plan.highlight ? "text-primary-foreground" : "text-accent"
                      )} />
                    </div>
                    <span className={cn(
                      "text-sm",
                      plan.highlight ? "text-primary-foreground/90" : "text-foreground"
                    )}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                size="lg"
                className={cn(
                  "w-full rounded-full font-semibold",
                  plan.highlight
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : "bg-primary text-primary-foreground"
                )}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          *Garansi uang kembali berlaku jika tidak lolos setelah mengikuti program dengan kehadiran 100%. 
          <br className="hidden sm:block" />
          Syarat dan ketentuan berlaku. <a href="#" className="text-primary hover:underline">Pelajari lebih lanjut</a>
        </p>
      </div>
    </section>
  )
}
