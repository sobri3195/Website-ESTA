import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-esta-500/20 rounded-full blur-3xl animate-glowPulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-esta-600/20 rounded-full blur-3xl animate-glowPulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-80 md:h-80 bg-esta-400/10 rounded-full blur-3xl animate-pulseSlow"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full glass-card mb-4 md:mb-6 animate-scaleIn">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-esta-400 animate-pulse" />
            <span className="text-xs md:text-sm text-esta-300 font-medium">Holding Company Modern Indonesia</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight animate-fadeInUp">
            ESTA
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 text-slate-200 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            PT. Bahagia Berkat Semesta
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            Menghubungkan ekosistem bisnis di sektor medis, pendidikan, fashion, wedding, desain interior, dan teknologi digital untuk menciptakan dampak berkelanjutan.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4 sm:px-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => scrollToSection('#tentang')}
              className="w-full sm:w-auto group px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-esta-500 to-esta-600 hover:from-esta-600 hover:to-esta-700 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg shadow-esta-500/30 hover:shadow-esta-500/50 hover:scale-105 flex items-center justify-center gap-2"
            >
              Pelajari Perusahaan
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection('#kontak')}
              className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 glass-card hover:bg-white/10 rounded-xl font-semibold text-slate-200 transition-all duration-300 hover:scale-105"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-esta-400/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-esta-400 rounded-full animate-pulseSlow"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
