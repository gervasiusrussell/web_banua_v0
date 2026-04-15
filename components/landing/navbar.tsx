"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image";
import { Menu, X, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

const navLinks = [
  { href: "#program", label: "Program" },
  { href: "#phases", label: "5 Fase" },
  { href: "#pricing", label: "Harga" },
  { href: "#testimonials", label: "Testimoni" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
                src="/ENGLISH BANUA LOGO.png" // Ganti dengan path lokasi file gambar Anda di folder public
                alt="Banua Scholarship Logo"
                width={90}
                height={90}
                className="object-contain rounded-xl" // Hapus rounded-xl jika logo Anda sudah bulat/transparan dan tidak butuh sudut melengkung
                priority
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight">
                Banua <span className="text-primary">Scholarship</span>
              </span>
              <span className="text-xs text-muted-foreground -mt-0.5">by English Banua</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Masuk
            </Button>
            <Button size="sm" className="rounded-full px-6">
              Konsultasi Gratis
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
              <div className="flex flex-col gap-6 mt-8">
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3 pt-4 border-t">
                  <Button variant="outline" className="w-full">
                    Masuk
                  </Button>
                  <Button className="w-full rounded-full">
                    Konsultasi Gratis
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
