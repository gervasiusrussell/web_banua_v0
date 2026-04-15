"use client"

import Link from "next/link"
import { GraduationCap, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  program: [
    { label: "5 Fase Program", href: "#phases" },
    { label: "Harga & Paket", href: "#pricing" },
    { label: "Beasiswa Support", href: "#scholarships" },
    { label: "Testimoni", href: "#testimonials" },
  ],
  resources: [
    { label: "Blog & Tips", href: "#" },
    { label: "Free E-book", href: "#" },
    { label: "Webinar", href: "#" },
    { label: "Kalender Beasiswa", href: "#" },
  ],
  company: [
    { label: "Tentang Kami", href: "#" },
    { label: "Mentor Kami", href: "#" },
    { label: "Karir", href: "#" },
    { label: "Hubungi Kami", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-background leading-tight">
                  Banua <span className="text-primary">Scholarship</span>
                </span>
                <span className="text-xs text-background/60 -mt-0.5">by English Banua</span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6 max-w-sm">
              Program bimbingan beasiswa terpercaya dari Kalimantan. Membantu ratusan pelajar Indonesia meraih beasiswa impian ke universitas top dunia.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Program Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Program</h4>
            <ul className="space-y-3">
              {footerLinks.program.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-sm text-background/60">info@banuascholarship.id</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-sm text-background/60">+62 812-3456-7890</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-sm text-background/60">Banjarmasin, Kalimantan Selatan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © 2026 Banua Scholarship Launchpad. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-background/50 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-background/50 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
