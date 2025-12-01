import { Heart, GraduationCap, Shirt, PartyPopper, Palette, Code } from 'lucide-react'

const BusinessUnits = () => {
  const units = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Medis & Healthcare',
      description: 'Layanan kesehatan berkualitas dengan teknologi terkini dan tenaga profesional berpengalaman untuk kesejahteraan masyarakat.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Pendidikan & Training',
      description: 'Program pendidikan dan pelatihan profesional yang dirancang untuk mengembangkan talenta dan skill masa depan.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      title: 'Fashion & Apparel',
      description: 'Koleksi fashion modern dan berkualitas tinggi yang menggabungkan gaya, kenyamanan, dan tren terkini.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <PartyPopper className="w-8 h-8" />,
      title: 'Wedding & Event',
      description: 'Layanan pernikahan dan event organizer premium yang mewujudkan momen spesial menjadi kenangan tak terlupakan.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Creative & Interior Design',
      description: 'Desain interior inovatif dan solusi kreatif yang menghadirkan ruang yang fungsional, estetis, dan inspiratif.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Technology & Digital',
      description: 'Solusi teknologi digital terdepan untuk transformasi bisnis dan pengalaman digital yang lebih baik.',
      color: 'from-esta-500 to-esta-600'
    }
  ]

  return (
    <section id="unit-bisnis" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-esta-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-esta-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-esta-400 to-esta-600 bg-clip-text text-transparent">
            Unit Bisnis Kami
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-esta-400 to-esta-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Portofolio bisnis yang beragam dan terintegrasi untuk melayani berbagai kebutuhan pasar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {units.map((unit, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:scale-105 hover:bg-white/10 transition-all duration-300 group cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${unit.color} bg-opacity-20 text-white mb-6 group-hover:scale-110 transition-transform`}>
                {unit.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-esta-400 transition-colors">
                {unit.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed">
                {unit.description}
              </p>

              <div className="mt-6 flex items-center text-esta-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm">Pelajari Lebih Lanjut</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BusinessUnits
