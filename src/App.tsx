import {
  Play,
  Target,
  Palette,
  TrendingUp,
  CheckCircle,
  Star,
  MessageCircle,
  Instagram,
  Facebook,
  Send
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-sm font-medium border border-blue-500/30">
                🔥 Marketing Digital para Streaming
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Impulsa tu negocio de streaming con publicidad que vende
              </h1>

              <p className="text-xl text-slate-300">
                Diseño, marketing y estrategia para revendedores y proveedores de streaming.
                Convierte visitas en ventas reales.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/51912688670?text=Hola,%20quiero%20información%20sobre%20sus%20servicios"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
                >
                  Comenzar ahora
                </a>
                <a
                  href="#servicios"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg font-semibold text-lg transition-all backdrop-blur-sm border border-white/20"
                >
                  Ver servicios
                </a>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-sm text-slate-400">Clientes activos</div>
                </div>
                <div className="w-px h-12 bg-slate-700"></div>
                <div>
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm text-slate-400">Satisfacción</div>
                </div>
                <div className="w-px h-12 bg-slate-700"></div>
                <div>
                  <div className="text-3xl font-bold">3x</div>
                  <div className="text-sm text-slate-400">ROI promedio</div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-700">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                    <MessageCircle className="w-8 h-8 text-green-400" />
                    <div>
                      <div className="font-semibold">+50 ventas hoy</div>
                      <div className="text-sm text-slate-400">WhatsApp Business</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                    <Target className="w-8 h-8 text-blue-400" />
                    <div>
                      <div className="font-semibold">10,589 clics</div>
                      <div className="text-sm text-slate-400">Campaña Facebook</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                    <TrendingUp className="w-8 h-8 text-blue-400" />
                    <div>
                      <div className="font-semibold">+280% conversión</div>
                      <div className="text-sm text-slate-400">Este mes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Resultados comprobados para hacer crecer tu negocio de streaming
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Campañas en Meta Ads sin riesgo de baneo
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Estrategias probadas que cumplen con las políticas de Facebook e Instagram.
                Tu inversión está protegida.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <Palette className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Diseños publicitarios listos para convertir
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Flyers, videos y banners diseñados específicamente para
                captar la atención y generar ventas.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Estrategia personalizada según tu público
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Analizamos tu mercado y creamos campañas adaptadas a tus clientes
                ideales para maximizar resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Todo lo que necesitas para hacer crecer tu negocio de streaming
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 hover:shadow-2xl transition-all border border-slate-200">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full"></div>
              <Play className="w-12 h-12 text-blue-600 mb-4 relative z-10" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Diseño de Flyers y Contenido Visual
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Diseños y videos profesionales para redes sociales, historias de Instagram,
                posts de Facebook y más.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Diseños ilimitados
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Formatos optimizados
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Entrega dentro del plazo acordado
                </li>
              </ul>
            </div>

            <div className="group relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 hover:shadow-2xl transition-all border border-slate-200">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-bl-full"></div>
              <Target className="w-12 h-12 text-cyan-600 mb-4 relative z-10" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Gestión de Campañas en Meta Ads
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Configuración, optimización y monitoreo de tus anuncios en
                Facebook e Instagram.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Segmentación avanzada
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Optimización diaria
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Reportes semanales
                </li>
              </ul>
            </div>

            <div className="group relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 hover:shadow-2xl transition-all border border-slate-200">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full"></div>
              <TrendingUp className="w-12 h-12 text-blue-600 mb-4 relative z-10" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Asesoría para Proveedores y Revendedores
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Consultoría especializada para escalar tu negocio y aumentar
                tus márgenes de ganancia.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Estrategia de ventas
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Automatización
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Soporte continuo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Resultados que hablan por sí solos
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Más de 500 proveedores y revendedores confían en nosotros
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                "Desde que trabajo con Stream Creativo Pro mis ventas aumentaron un 300%.
                Las campañas funcionan perfecto y nunca he tenido problemas con Facebook."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center font-bold">
                  JM
                </div>
                <div>
                  <div className="font-semibold">Juan Martínez</div>
                  <div className="text-sm text-slate-400">Revendedor en Lima</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                "El diseño de los flyers es increíble. Ahora recibo mensajes todos los días
                preguntando por mis servicios. Totalmente recomendado."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center font-bold">
                  MC
                </div>
                <div>
                  <div className="font-semibold">María Castillo</div>
                  <div className="text-sm text-slate-400">Proveedora en Arequipa</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                "Profesionales serios. Me ayudaron a estructurar todo mi negocio y
                ahora tengo un flujo constante de clientes nuevos cada semana."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center font-bold">
                  CR
                </div>
                <div>
                  <div className="font-semibold">Carlos Rojas</div>
                  <div className="text-sm text-slate-400">Revendedor en Trujillo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precios */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Planes diseñados para ti
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-4">
              Elige el plan que mejor se adapte a tu negocio
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-sm font-medium text-green-700">
              <CheckCircle className="w-4 h-4" />
              Aceptamos pagos por Binance (USDT TRC20)
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200 hover:border-blue-500 transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Plan Básico</h3>
                <div className="text-4xl font-bold text-slate-900 mb-1">S/. 99.90</div>
                <div className="text-sm text-slate-500">~26 USDT</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">1 flyer promocional para tu campaña</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Configuración de 1 campaña Meta Ads de duración 7 dias</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Segmentación dirigida a público objetivo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Reporte básico de resultados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Soporte via whatsapp durante la campaña</span>
                </li>
              </ul>

              <a href="https://wa.me/51912688670?text=Hola,%20quiero%20información%20sobre%20el%20plan%20basico" className="block w-full py-3 bg-slate-900 hover:bg-slate-800 text-white text-center rounded-lg font-semibold transition-colors">
                Comenzar
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-2xl border-2 border-blue-500 relative transform md:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-slate-900 text-sm font-bold rounded-full">
                MÁS POPULAR
              </div>

              <div className="text-center mb-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Plan Premium</h3>
                <div className="text-4xl font-bold mb-1">S/. 220.90</div>
                <div className="text-sm text-blue-100">~52 USDT</div>
              </div>

              <ul className="space-y-3 mb-8 text-white">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>6 flyers personalizados, 1 para tu campaña y 5 extras para tus redes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Configuración y optimización de 1 campaña por 25 dias</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Optimización constante</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Estrategia personalizada</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Soporte avanzado durante toda la campaña</span>
                </li>
              </ul>

              <a href="https://wa.me/51912688670?text=Hola,%20quiero%20información%20sobre%20el%20plan%20premium" className="block w-full py-3 bg-white hover:bg-slate-100 text-blue-600 text-center rounded-lg font-semibold transition-colors">
                Comenzar ahora
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200 hover:border-blue-500 transition-colors">
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Plan Pro</h3>
                <div className="text-4xl font-bold text-slate-900 mb-1">S/. 189.90</div>
                <div className="text-sm text-slate-500">~60 USDT</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">3 flyers personalizados, 1 para tu campaña y 2 extras para tus redes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Configuración y optimización de 1 campaña durante 15 dias</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Estrategia personalizada</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Soporte por whatsapp durante la campaña</span>
                </li>
              </ul>

              <a href="https://wa.me/51912688670?text=Hola,%20quiero%20información%20sobre%20el%20plan%20pro" className="block w-full py-3 bg-slate-900 hover:bg-slate-800 text-white text-center rounded-lg font-semibold transition-colors">
                Comenzar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para llevar tu marca al siguiente nivel?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Únete a más de 200 revendedores que ya están aumentando sus ventas con nosotros
          </p>

          <a
            href="https://wa.me/51912688670?text=Hola,%20quiero%20información%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg mb-12"
          >
            <MessageCircle className="w-6 h-6" />
            Contactar por WhatsApp
          </a>

          <div className="border-t border-blue-500/30 pt-10">
            <p className="text-lg mb-4 font-semibold">Síguenos en redes sociales</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/streamcreativopro99"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61582820547847"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm">
            © 2025 Stream Creativo Pro. Todos los derechos reservados.
          </p>
          <p className="text-xs mt-2">
            Marketing digital especializado para servicios de streaming
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
