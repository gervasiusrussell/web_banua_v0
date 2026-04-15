"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6 text-balance">
            Siap Wujudkan Mimpi Beasiswamu?
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Jangan tunda lagi! Ratusan orang sudah memulai perjalanan mereka bersama Banua Scholarship. 
            Konsultasi gratis untuk mengetahui paket yang tepat untukmu.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="rounded-full px-8 bg-background text-primary hover:bg-background/90 gap-2"
            >
              Mulai Sekarang
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Konsultasi via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
