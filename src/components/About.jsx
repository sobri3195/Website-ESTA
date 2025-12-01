import { CheckCircle2, Target, Eye, Heart } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Inovatif',
      description: 'Menghadirkan solusi kreatif dan terobosan baru di setiap unit bisnis'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Human-Centered',
      description: 'Menempatkan manusia dan kebutuhan mereka di pusat setiap keputusan'
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Kolaboratif',
      description: 'Membangun sinergi antar unit bisnis untuk hasil yang optimal'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Terintegrasi',
      description: 'Ekosistem bisnis yang saling mendukung dan memperkuat'
    }
  ]

  return (
    <section id="tentang" className="relative py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-esta-400 to-esta-600 bg-clip-text text-transparent">
              Tentang ESTA
            </h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-esta-400 to-esta-600 mx-auto mb-4 md:mb-8 animate-scaleIn" style={{ animationDelay: '0.2s' }}></div>
          </div>

          <div className="glass-card rounded-xl md:rounded-2xl p-6 md:p-12 mb-8 md:mb-12 animate-slideInUp hover:shadow-lg hover:shadow-esta-500/10 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
            <p className="text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed mb-4 md:mb-6">
              <span className="text-esta-400 font-semibold">ESTA — PT. Bahagia Berkat Semesta</span> adalah holding company modern yang mengelola berbagai unit bisnis strategis di Indonesia. Kami percaya bahwa kesuksesan sejati lahir dari kolaborasi lintas sektor dan dedikasi untuk memberikan nilai lebih kepada masyarakat.
            </p>
            
            <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-4 md:mb-6">
              Dengan portofolio bisnis yang mencakup layanan medis & kesehatan, pendidikan & pelatihan, fashion & apparel, wedding & event organizer, creative & interior design, hingga technology & digital solutions, kami menciptakan ekosistem bisnis yang saling mendukung dan berkelanjutan.
            </p>

            <p className="text-base md:text-lg text-slate-400 leading-relaxed">
              Visi kami adalah menjadi holding company terdepan yang memberdayakan komunitas dan menciptakan dampak positif melalui inovasi, integritas, dan komitmen terhadap keunggulan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-5 md:p-6 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 group animate-slideInUp cursor-pointer"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2.5 md:p-3 rounded-lg bg-esta-500/20 text-esta-400 group-hover:bg-esta-500/30 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1.5 md:mb-2 group-hover:text-esta-400 transition-colors">{item.title}</h3>
                    <p className="text-sm md:text-base text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
