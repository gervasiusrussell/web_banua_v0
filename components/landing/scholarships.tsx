"use client"

const scholarships = [
  {
    name: "LPDP",
    country: "Indonesia",
    flag: "🇮🇩",
    description: "Beasiswa pemerintah Indonesia untuk S2 & S3",
  },
  {
    name: "Chevening",
    country: "United Kingdom",
    flag: "🇬🇧",
    description: "Beasiswa pemerintah Inggris untuk pemimpin masa depan",
  },
  {
    name: "MEXT",
    country: "Japan",
    flag: "🇯🇵",
    description: "Beasiswa pemerintah Jepang untuk studi di Jepang",
  },
  {
    name: "AAS",
    country: "Australia",
    flag: "🇦🇺",
    description: "Australia Awards Scholarship untuk Asia Pasifik",
  },
]

export function Scholarships() {
  return (
    <section className="py-16 lg:py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            Beasiswa yang Kami <span className="text-primary">Support</span>
          </h2>
          <p className="text-muted-foreground">
            Mentor kami telah berhasil membantu ratusan peserta lolos ke berbagai beasiswa bergengsi dunia
          </p>
        </div>

        {/* Scholarships Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {scholarships.map((scholarship) => (
            <div
              key={scholarship.name}
              className="group bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 text-4xl">
                {scholarship.flag}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                {scholarship.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {scholarship.country}
              </p>
              <p className="text-xs text-muted-foreground">
                {scholarship.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
