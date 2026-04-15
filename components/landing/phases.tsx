"use client"

import { 
  ClipboardCheck, 
  Languages, 
  FileText, 
  UserCheck, 
  Plane,
  ArrowRight
} from "lucide-react"

const phases = [
  {
    number: 1,
    title: "Phase 1",
    focus: "Readiness Assessment",
    icon: ClipboardCheck,
    color: "bg-primary",
    details: [
      "Konsultasi & pemetaan profil",
      "Rekomendasi beasiswa (LPDP, Chevening, MEXT, AAS)",
      "Personal roadmap & timeline",
    ],
  },
  {
    number: 2,
    title: "Phase 2",
    focus: "Language Preparation",
    icon: Languages,
    color: "bg-secondary",
    details: [
      "IELTS / TOEFL / JLPT / HSK",
      "Tutor: Mahasiswa S2 & Awardee Banua",
      "Latihan intensif & mock test",
    ],
  },
  {
    number: 3,
    title: "Phase 3",
    focus: "Document Preparation",
    icon: FileText,
    color: "bg-accent",
    details: [
      "Motivation Letter & Study Plan",
      "CV Akademik & Scholarship Essay",
      "Review oleh Awardee Mentor relevan",
    ],
  },
  {
    number: 4,
    title: "Phase 4",
    focus: "Selection Preparation",
    icon: UserCheck,
    color: "bg-chart-4",
    details: [
      "Mock Interview 1-on-1",
      "Psikotes Preparation (LPDP)",
      "Feedback & improvement plan",
    ],
  },
  {
    number: 5,
    title: "Phase 5",
    focus: "Post Acceptance",
    icon: Plane,
    color: "bg-chart-5",
    details: [
      "Pre-departure guidance",
      "Koneksi komunitas awardee",
      "Worst Case: Pivot Path & Action Plan",
    ],
  },
]

export function Phases() {
  return (
    <section id="phases" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">Metodologi Terstruktur</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 text-balance">
            5 Fase Menuju <span className="text-primary">Beasiswa Impian</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kurikulum komprehensif yang dirancang oleh para awardee berpengalaman untuk memaksimalkan peluang keberhasilan beasiswamu.
          </p>
        </div>

        {/* Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {phases.map((phase, index) => (
            <div
              key={phase.number}
              className="group relative bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Top Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${phase.color} rounded-t-2xl`} />
              
              {/* Phase Number */}
              <div className={`w-12 h-12 ${phase.color} rounded-xl flex items-center justify-center mb-4`}>
                <phase.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-muted-foreground mb-1">
                {phase.title}
              </h3>
              <h4 className="text-lg font-bold text-foreground mb-4">
                {phase.focus}
              </h4>

              {/* Details */}
              <ul className="space-y-2">
                {phase.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-accent mt-0.5">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Arrow connector (hidden on mobile and last item) */}
              {index < phases.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-border rounded-full flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-muted-foreground" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
