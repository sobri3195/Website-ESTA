import { Instagram, Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' }
  ]

  const quickLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Unit Bisnis', href: '#unit-bisnis' },
    { label: 'Nilai', href: '#nilai' },
    { label: 'Klien & Mitra', href: '#klien' },
    { label: 'Kontak', href: '#kontak' }
  ]

  const businessUnits = [
    'Medis & Healthcare',
    'Pendidikan & Training',
    'Fashion & Apparel',
    'Wedding & Event',
    'Creative & Interior Design',
    'Technology & Digital'
  ]

  const handleLinkClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-slate-950 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-esta-400 to-esta-600 bg-clip-text text-transparent mb-4 animate-fadeInUp">
              ESTA
            </h3>
            <p className="text-sm md:text-base text-slate-400 mb-4 md:mb-6 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              PT. Bahagia Berkat Semesta - Holding company modern yang menghubungkan berbagai sektor bisnis untuk menciptakan dampak berkelanjutan.
            </p>
            
            <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
              <div className="flex items-center gap-2 md:gap-3 text-slate-400 hover:text-esta-400 transition-colors cursor-pointer animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm">Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-slate-400 hover:text-esta-400 transition-colors cursor-pointer animate-slideInLeft" style={{ animationDelay: '0.25s' }}>
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-slate-400 hover:text-esta-400 transition-colors cursor-pointer animate-slideInLeft" style={{ animationDelay: '0.3s' }}>
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm">info@esta.co.id</span>
              </div>
            </div>

            <div className="flex gap-2 md:gap-3 animate-scaleIn" style={{ animationDelay: '0.4s' }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2.5 md:p-3 rounded-lg glass-card hover:bg-esta-500/20 text-slate-400 hover:text-esta-400 transition-all duration-300 hover:scale-110 hover:rotate-6"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Navigasi</h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                    className="text-sm md:text-base text-slate-400 hover:text-esta-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-esta-400 group-hover:w-3 md:group-hover:w-4 transition-all duration-200"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Unit Bisnis</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
              {businessUnits.map((unit, index) => (
                <div
                  key={index}
                  className="text-slate-400 hover:text-esta-400 transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-esta-500 group-hover:scale-150 transition-transform"></div>
                  <span className="text-xs md:text-sm">{unit}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 md:mt-8 glass-card rounded-xl p-5 md:p-6 hover:bg-white/10 transition-all duration-300">
              <h5 className="text-white font-semibold mb-2 md:mb-3 text-sm md:text-base">Newsletter</h5>
              <p className="text-xs md:text-sm text-slate-400 mb-3 md:mb-4">
                Dapatkan update terbaru tentang layanan dan kegiatan kami
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 px-3 py-2 md:px-4 md:py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-esta-500 text-xs md:text-sm transition-all"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-esta-500 to-esta-600 hover:from-esta-600 hover:to-esta-700 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 text-xs md:text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <p className="text-slate-400 text-xs md:text-sm text-center md:text-left">
              © {currentYear} ESTA — PT. Bahagia Berkat Semesta. All rights reserved.
            </p>
            
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
              <a href="#" className="text-slate-400 hover:text-esta-400 transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-slate-400 hover:text-esta-400 transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
