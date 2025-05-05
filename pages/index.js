import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="relative h-[500px] text-white overflow-hidden">
        {/* Video background */}
        <video
  autoPlay
  loop
  muted
  playsInline
  poster="https://cdn.jsdelivr.net/gh/udipta-dev/geojson-host@main/Madrid%20background.png"
  className="absolute inset-0 w-full h-full object-cover z-0"
>
  <source
    src="https://cdn.jsdelivr.net/gh/udipta-dev/geojson-host@main/madrid-background-video_BvKycoGG.mp4"
    type="video/mp4"
  />
</video>

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Hero content */}
        <div className="relative z-20 flex flex-col justify-center items-start h-full max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading mb-4 leading-tight">
            El sueño de vivir en España, ahora más cerca que nunca.
          </h2>
          <p className="text-lg mb-6 max-w-md">
            Acompañamos tu proceso migratorio con asesoría, comunidad y apoyo experto.
          </p>
          <a
            href="#"
            className="inline-block bg-success text-white text-base px-5 py-3 rounded-lg shadow hover:bg-green-600"
          >
            Quiero empezar mi camino
          </a>
        </div>
      </section>

      <section className="py-12 bg-lightBg">
        <h3 className="text-3xl font-heading text-center mb-10 text-primary">
          Todo lo que recibirás al ser parte de Hispano Club
        </h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold mb-2">🕑 Consultoría personalizada</h4>
            <p>30 minutos al mes adaptados a tus necesidades: finanzas, cultura, empleo, y más.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold mb-2">💸 Descuentos exclusivos</h4>
            <p>Hasta 25% de descuento en trámites como NIE, empadronamiento y gestoría.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold mb-2">📅 Sesiones privadas</h4>
            <p>Reunión mensual para planificar tu próximo paso con un asesor de confianza.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold mb-2">📩 Soporte por email</h4>
            <p>Preguntas rápidas, dudas urgentes: siempre estamos disponibles para ayudarte.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <h3 className="text-3xl font-heading text-center text-primary mb-12">
          Elige tu plan 360
        </h3>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-4">
          {/* Plan STARTER */}
          <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h4 className="text-2xl font-semibold mb-2">STARTER</h4>
            <p className="text-3xl font-bold text-primary mb-4">49€/mes</p>
            <ul className="mb-6 space-y-2 text-sm">
              <li>✅ 30 minutos de consultoría</li>
              <li>✅ 10% de descuento en trámites</li>
              <li>✅ 1 sesión privada</li>
              <li>✉️ Soporte por email</li>
            </ul>
            <a href="#" className="block text-center bg-success text-white py-2 rounded-lg hover:bg-green-600">
              Empezar con Starter
            </a>
          </div>

          {/* Plan PRO */}
          <div className="border-2 border-primary rounded-xl p-6 shadow-md bg-lightBg hover:shadow-lg transition">
            <h4 className="text-2xl font-semibold mb-2">PRO</h4>
            <p className="text-3xl font-bold text-primary mb-4">99€/mes</p>
            <ul className="mb-6 space-y-2 text-sm">
              <li>✅ 90 minutos de consultoría</li>
              <li>✅ 15% de descuento</li>
              <li>✅ 3 sesiones privadas</li>
              <li>📞 Soporte telefónico</li>
            </ul>
            <a href="#" className="block text-center bg-primary text-white py-2 rounded-lg hover:bg-darkPrimary">
              Empezar con Pro
            </a>
          </div>

          {/* Plan PRIME */}
          <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h4 className="text-2xl font-semibold mb-2">PRIME</h4>
            <p className="text-3xl font-bold text-primary mb-4">199€/mes</p>
            <ul className="mb-6 space-y-2 text-sm">
              <li>✅ 200 minutos de consultoría</li>
              <li>✅ 25% de descuento</li>
              <li>✅ Sesiones ilimitadas</li>
              <li>💬 WhatsApp VIP 24/7</li>
            </ul>
            <a href="#" className="block text-center bg-success text-white py-2 rounded-lg hover:bg-green-600">
              Empezar con Prime
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-lightBg">
        <h3 className="text-3xl font-heading text-center text-primary mb-12">
          En 3 pasos, resuelve lo que te quita el sueño
        </h3>
        <div className="grid gap-10 md:grid-cols-3 max-w-5xl mx-auto px-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="text-4xl mb-4">🧭</div>
            <h4 className="text-xl font-semibold mb-2">1. Elige tu plan</h4>
            <p>Starter, Pro o Prime — selecciona el que más se ajuste a tus necesidades.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="text-4xl mb-4">📅</div>
            <h4 className="text-xl font-semibold mb-2">2. Agenda tu sesión</h4>
            <p>Usa nuestro calendario para coordinar tus asesorías con profesionales certificados.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="text-4xl mb-4">🚀</div>
            <h4 className="text-xl font-semibold mb-2">3. Ahorra y avanza</h4>
            <p>Recibe descuentos automáticos, asesoría mensual y más beneficios conforme creces.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h3 className="text-3xl font-heading text-primary mb-4">
            Únete y recibe nuestra Guía Esencial + 5% de descuento
          </h3>
          <p className="text-lg mb-8">
            Descarga gratis: “7 Errores al Empadronarse en España (y cómo evitarlos)” + descuento exclusivo en tu primer mes.
          </p>
          <form className="space-y-4 md:flex md:space-y-0 md:space-x-4 justify-center">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full md:w-1/3 px-4 py-3 border rounded-lg shadow-sm"
            />
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full md:w-1/3 px-4 py-3 border rounded-lg shadow-sm"
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-success text-white px-6 py-3 rounded-lg shadow hover:bg-green-600"
            >
              Obtener guía + 5% dto
            </button>
          </form>
        </div>
      </section>

      <section className="py-12 bg-lightBg text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-3xl font-heading text-primary mb-6">
            Solo 100 plazas disponibles: empieza tu vida en España con el pie derecho
          </h3>
          <p className="mb-8 text-lg">
            ¿Sigues perdiendo tiempo con trámites infinitos o entrevistas fallidas?
            Con tu membresía 360, tendrás acceso directo a expertos, ahorros garantizados y resultados reales.
          </p>
          <a
            href="#"
            className="inline-block bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-darkPrimary transition"
          >
            Comenzar Ahora →
          </a>
        </div>
      </section>

    </Layout>
  );
}