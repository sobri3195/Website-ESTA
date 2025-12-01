import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Unit Bisnis', href: '#unit-bisnis' },
    { label: 'Nilai', href: '#nilai' },
    { label: 'Klien & Mitra', href: '#klien' },
    { label: 'Kontak', href: '#kontak' }
  ]

  const handleMenuClick = (href) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'nav-scrolled backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-20">
          <div className="flex items-center">
            <a href="#beranda" onClick={(e) => { e.preventDefault(); handleMenuClick('#beranda'); }} className="text-xl md:text-3xl font-bold bg-gradient-to-r from-esta-400 to-esta-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              ESTA
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleMenuClick(item.href); }}
                className="text-sm lg:text-base text-slate-300 hover:text-esta-400 transition-all duration-200 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-esta-400 to-esta-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            {isMobileMenuOpen ? <X size={20} className="animate-rotateIn" /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10 animate-slideInUp shadow-xl shadow-black/50">
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleMenuClick(item.href); }}
                className="block px-4 py-3 rounded-lg text-slate-300 hover:text-esta-400 hover:bg-white/5 transition-all duration-200 font-medium animate-slideInLeft"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
