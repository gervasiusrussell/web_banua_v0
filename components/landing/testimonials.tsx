"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Banua Scholarship benar-benar mengubah perjalanan beasiswa saya. Dari yang awalnya bingung, sekarang saya sudah diterima di University of Melbourne dengan beasiswa AAS!",
    name: "Rizka Amalia",
    role: "Awardee AAS 2025",
    university: "University of Melbourne",
    avatar: "RA",
  },
  {
    quote: "Mentor-mentor di sini sangat supportive dan berpengalaman. Mereka membantu saya menyusun motivation letter yang kuat sampai akhirnya lolos LPDP!",
    name: "Ahmad Fauzan",
    role: "Awardee LPDP 2025",
    university: "University of Manchester",
    avatar: "AF",
  },
  {
    quote: "Mock interview preparation-nya luar biasa! Pertanyaan yang dilatih sangat mirip dengan yang keluar saat interview Chevening. Highly recommended!",
    name: "Siti Nurhaliza",
    role: "Awardee Chevening 2025",
    university: "King's College London",
    avatar: "SN",
  },
  {
    quote: "Sebagai anak Kalimantan, senang banget ada program yang dibuat oleh orang Kalimantan juga. Relate banget sama tantangan yang kita hadapi!",
    name: "Budi Santoso",
    role: "Awardee MEXT 2025",
    university: "Tokyo University",
    avatar: "BS",
  },
  {
    quote: "Program 5 fase ini sangat terstruktur. Setiap langkah jelas, dan saya selalu tahu apa yang harus dilakukan selanjutnya.",
    name: "Diana Putri",
    role: "Awardee LPDP 2024",
    university: "NUS Singapore",
    avatar: "DP",
  },
  {
    quote: "Komunitas alumni dan awardee-nya aktif banget! Bahkan setelah lulus program, mereka tetap support dan share info penting.",
    name: "Hendri Wijaya",
    role: "Awardee AAS 2024",
    university: "University of Sydney",
    avatar: "HW",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Testimoni Alumni</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 text-balance">
            Cerita Sukses dari <span className="text-primary">Alumni Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ratusan alumni telah berhasil meraih beasiswa impian. Sekarang giliran kamu!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-muted rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              {/* Quote Text */}
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.university}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
