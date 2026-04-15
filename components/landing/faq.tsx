"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Apa itu Banua Scholarship Launchpad?",
    answer: "Banua Scholarship Launchpad adalah program bimbingan beasiswa komprehensif yang terdiri dari 5 fase untuk mempersiapkan kamu meraih beasiswa S2 ke luar negeri. Program ini dibuat oleh English Banua dan dibimbing oleh para awardee beasiswa ternama dari Kalimantan.",
  },
  {
    question: "Siapa mentor yang akan membimbing saya?",
    answer: "Mentor kami adalah para awardee beasiswa LPDP, Chevening, MEXT, dan AAS yang memiliki pengalaman langsung dalam proses seleksi beasiswa. Mereka adalah mahasiswa S2 dan alumni dari universitas top dunia yang berasal dari Kalimantan.",
  },
  {
    question: "Apakah bimbingan dilakukan secara online atau offline?",
    answer: "Semua sesi bimbingan dilakukan secara online via Zoom atau Google Meet, sehingga kamu bisa mengikuti dari mana saja. Untuk peserta di Kalimantan, kami juga menyediakan opsi sesi offline untuk event-event tertentu.",
  },
  {
    question: "Berapa lama durasi program ini?",
    answer: "Durasi program bervariasi tergantung paket yang dipilih dan target beasiswa kamu. Paket Starter berlaku 3 bulan, Essential 6 bulan, dan Complete 12 bulan. Timeline akan disesuaikan dengan deadline beasiswa targetmu.",
  },
  {
    question: "Apakah ada garansi kelulusan beasiswa?",
    answer: "Kami memberikan garansi uang kembali untuk paket Complete jika kamu tidak lolos beasiswa setelah mengikuti program dengan kehadiran 100% dan mengerjakan semua tugas yang diberikan. Syarat dan ketentuan berlaku.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer: "Kami menerima pembayaran via transfer bank dan e-wallet. Tersedia opsi cicilan hingga 6 bulan untuk semua paket. Hubungi tim kami untuk informasi lebih lanjut mengenai cicilan.",
  },
  {
    question: "Apakah program ini cocok untuk pemula yang belum pernah apply beasiswa?",
    answer: "Tentu! Program kami dirancang untuk semua level, termasuk pemula. Phase 1 (Readiness Assessment) akan membantu kamu memahami profil, memilih beasiswa yang cocok, dan menyusun roadmap yang jelas.",
  },
  {
    question: "Beasiswa apa saja yang di-support dalam program ini?",
    answer: "Kami fokus pada beasiswa-beasiswa populer seperti LPDP, Chevening (UK), MEXT (Japan), AAS (Australia), KGSP (Korea), dan beasiswa universitas lainnya. Mentor kami akan membantu menyesuaikan dengan target beasiswamu.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 text-balance">
            Pertanyaan yang Sering <span className="text-primary">Ditanyakan</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Masih punya pertanyaan? Hubungi tim kami untuk konsultasi gratis.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
