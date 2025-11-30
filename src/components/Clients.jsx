import { Star, Quote } from 'lucide-react'

const Clients = () => {
  const logos = [
    { name: 'Partner A', initial: 'PA' },
    { name: 'Partner B', initial: 'PB' },
    { name: 'Partner C', initial: 'PC' },
    { name: 'Partner D', initial: 'PD' },
    { name: 'Partner E', initial: 'PE' },
    { name: 'Partner F', initial: 'PF' },
    { name: 'Partner G', initial: 'PG' },
    { name: 'Partner H', initial: 'PH' }
  ]

  const testimonials = [
    {
      name: 'Dr. Andi Setiawan',
      position: 'CEO Healthcare Group',
      company: 'Rumah Sakit Sejahtera',
      text: 'ESTA telah menjadi mitra strategis kami dalam mengembangkan layanan kesehatan yang lebih inovatif dan terjangkau. Profesionalisme dan dedikasi tim mereka sangat luar biasa.',
      rating: 5
    },
    {
      name: 'Sarah Wijaya',
      position: 'Founder & Creative Director',
      company: 'Elegan Wedding Planner',
      text: 'Kolaborasi dengan ESTA membuka peluang baru dalam industri wedding organizer. Ekosistem bisnis mereka yang terintegrasi memberikan nilai tambah yang signifikan bagi klien kami.',
      rating: 5
    }
  ]

  return (
    <section id="klien" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-esta-400 to-esta-600 bg-clip-text text-transparent">
            Klien & Mitra
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-esta-400 to-esta-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Dipercaya oleh berbagai organisasi terkemuka untuk menciptakan nilai bersama
          </p>
        </div>

        <div className="mb-20">
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-5xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-esta-400 to-esta-600 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                      {logo.initial}
                    </div>
                    <p className="text-xs text-slate-400 group-hover:text-esta-400 transition-colors">
                      {logo.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-200 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Testimoni
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-esta-500/20 text-esta-400">
                    <Quote className="w-6 h-6" />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-esta-400 to-esta-600 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.position}</p>
                    <p className="text-sm text-esta-400">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <p className="text-lg text-slate-400 mb-6">
            Tertarik untuk bermitra dengan kami?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#kontak')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 bg-gradient-to-r from-esta-500 to-esta-600 hover:from-esta-600 hover:to-esta-700 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg shadow-esta-500/30 hover:shadow-esta-500/50 hover:scale-105"
          >
            Mulai Kolaborasi
          </button>
        </div>
      </div>
    </section>
  )
}

export default Clients
