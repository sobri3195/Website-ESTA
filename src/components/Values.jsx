import { Shield, Heart, Lightbulb, Users, Globe } from 'lucide-react'

const Values = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Integritas',
      description: 'Berkomitmen pada kejujuran, transparansi, dan etika bisnis yang tinggi dalam setiap tindakan',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Empati',
      description: 'Memahami dan peduli terhadap kebutuhan pelanggan, karyawan, dan masyarakat',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Inovasi',
      description: 'Mendorong kreativitas dan terus berinovasi untuk solusi yang lebih baik',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Kolaborasi',
      description: 'Membangun kerjasama yang kuat untuk mencapai tujuan bersama',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Dampak Sosial',
      description: 'Menciptakan nilai positif dan berkontribusi pada kemajuan masyarakat',
      gradient: 'from-esta-500 to-esta-600'
    }
  ]

  return (
    <section id="nilai" className="relative py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-esta-400 to-esta-600 bg-clip-text text-transparent">
            Nilai-Nilai Perusahaan
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-esta-400 to-esta-600 mx-auto mb-4 md:mb-8 animate-scaleIn" style={{ animationDelay: '0.2s' }}></div>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto px-4 sm:px-0">
            Prinsip fundamental yang memandu setiap keputusan dan tindakan kami
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {values.slice(0, 3).map((value, index) => (
              <div
                key={index}
                className="glass-card rounded-xl md:rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:scale-[1.02] hover:shadow-lg hover:shadow-esta-500/10 transition-all duration-300 group animate-slideInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-3 md:p-4 rounded-xl bg-gradient-to-br ${value.gradient} mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {value.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-esta-400 transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-5 md:mt-6 max-w-3xl mx-auto">
            {values.slice(3).map((value, index) => (
              <div
                key={index + 3}
                className="glass-card rounded-xl md:rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:scale-[1.02] hover:shadow-lg hover:shadow-esta-500/10 transition-all duration-300 group animate-slideInUp"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className={`inline-flex p-3 md:p-4 rounded-xl bg-gradient-to-br ${value.gradient} mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {value.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-esta-400 transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="glass-card rounded-xl md:rounded-2xl p-6 md:p-12 max-w-4xl mx-auto animate-scaleIn hover:shadow-lg hover:shadow-esta-500/10 transition-all duration-300" style={{ animationDelay: '0.5s' }}>
            <p className="text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed">
              Nilai-nilai ini bukan hanya kata-kata di atas kertas, tetapi fondasi yang hidup dalam setiap aspek operasional kami. Kami percaya bahwa kesuksesan sejati diukur bukan hanya dari pencapaian finansial, tetapi dari <span className="text-esta-400 font-semibold">dampak positif yang kami ciptakan</span> bagi seluruh stakeholder.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values
