export default function Footer() {
    return (
      <footer className="bg-primary text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="text-lg font-heading mb-2">Hispanos Club</h4>
            <p>Tu comunidad de apoyo en España.</p>
            <p className="mt-4 text-xs text-white/70">© {new Date().getFullYear()} Hispanos Club</p>
          </div>
  
          <div>
            <h5 className="font-semibold mb-2">Enlaces</h5>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:underline">Términos de Servicio</a></li>
              <li><a href="#" className="hover:underline">Política de Privacidad</a></li>
              <li><a href="#" className="hover:underline">Contacto</a></li>
            </ul>
          </div>
  
          <div>
            <h5 className="font-semibold mb-2">Síguenos</h5>
            <div className="flex space-x-4">
              <a href="#"><span>📘</span></a>
              <a href="#"><span>📸</span></a>
              <a href="#"><span>🔗</span></a>
            </div>
            <p className="mt-4 text-xs text-white/70">Síguenos en redes sociales para más tips e historias.</p>
          </div>
        </div>
      </footer>
    );
  }