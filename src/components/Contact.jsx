import { useState } from 'react'
import { Send, MapPin, Phone, Mail } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    perusahaan: '',
    layanan: '',
    pesan: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)
    alert('Terima kasih! Pesan Anda telah diterima. Tim kami akan segera menghubungi Anda.')
    setFormData({
      nama: '',
      email: '',
      telepon: '',
      perusahaan: '',
      layanan: '',
      pesan: ''
    })
  }

  const services = [
    'Medis & Healthcare',
    'Pendidikan & Training',
    'Fashion & Apparel',
    'Wedding & Event',
    'Creative & Interior Design',
    'Technology & Digital'
  ]

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Alamat',
      content: 'Jakarta, Indonesia'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telepon',
      content: '+62 21 1234 5678'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'info@esta.co.id'
    }
  ]

  return (
    <section id="kontak" className="relative py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      
      <div className="absolute top-1/4 right-0 w-64 h-64 md:w-96 md:h-96 bg-esta-500/10 rounded-full blur-3xl animate-pulseSlow"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-esta-400 to-esta-600 bg-clip-text text-transparent">
            Hubungi Kami
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-esta-400 to-esta-600 mx-auto mb-4 md:mb-8 animate-scaleIn" style={{ animationDelay: '0.2s' }}></div>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto px-4 sm:px-0">
            Mari berdiskusi bagaimana kami dapat membantu mewujudkan visi bisnis Anda
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-1 space-y-4 md:space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-5 md:p-6 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 animate-slideInLeft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2.5 md:p-3 rounded-lg bg-esta-500/20 text-esta-400">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 text-sm md:text-base">{info.title}</h3>
                    <p className="text-slate-400 text-sm md:text-base">{info.content}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="glass-card rounded-xl p-5 md:p-6 animate-slideInLeft hover:bg-white/10 transition-all duration-300" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-semibold text-white mb-3 md:mb-4 text-sm md:text-base">Jam Operasional</h3>
              <div className="space-y-2 text-slate-400 text-sm md:text-base">
                <p>Senin - Jumat: 09:00 - 18:00</p>
                <p>Sabtu: 09:00 - 14:00</p>
                <p>Minggu: Tutup</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass-card rounded-xl md:rounded-2xl p-6 md:p-10 animate-slideInRight hover:shadow-lg hover:shadow-esta-500/10 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nama" className="block text-sm font-medium text-slate-300 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-esta-500 focus:border-transparent transition-all"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-esta-500 focus:border-transparent transition-all"
                    placeholder="nama@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="telepon" className="block text-sm font-medium text-slate-300 mb-2">
                    Telepon *
                  </label>
                  <input
                    type="tel"
                    id="telepon"
                    name="telepon"
                    value={formData.telepon}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-esta-500 focus:border-transparent transition-all"
                    placeholder="+62 812 3456 7890"
                  />
                </div>

                <div>
                  <label htmlFor="perusahaan" className="block text-sm font-medium text-slate-300 mb-2">
                    Perusahaan
                  </label>
                  <input
                    type="text"
                    id="perusahaan"
                    name="perusahaan"
                    value={formData.perusahaan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-esta-500 focus:border-transparent transition-all"
                    placeholder="Nama perusahaan (opsional)"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="layanan" className="block text-sm font-medium text-slate-300 mb-2">
                  Pilih Layanan *
                </label>
                <select
                  id="layanan"
                  name="layanan"
                  value={formData.layanan}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-esta-500 focus:border-transparent transition-all"
                >
                  <option value="" className="bg-slate-900">Pilih layanan yang diminati</option>
                  {services.map((service, index) => (
                    <option key={index} value={service} className="bg-slate-900">
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="pesan" className="block text-sm font-medium text-slate-300 mb-2">
                  Pesan *
                </label>
                <textarea
                  id="pesan"
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-esta-500 focus:border-transparent transition-all resize-none"
                  placeholder="Ceritakan kebutuhan Anda..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-esta-500 to-esta-600 hover:from-esta-600 hover:to-esta-700 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg shadow-esta-500/30 hover:shadow-esta-500/50 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
