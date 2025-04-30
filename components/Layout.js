import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-grayText font-sans">
      {/* Header */}
      <header className="bg-primary text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-heading">Hispanos Club</h1>
          <nav>
            <a href="#" className="hover:underline mr-4">Planes</a>
            <a href="#" className="hover:underline">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}