import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-gray-300">
              Kria Centro<br />
              Musterstraße 123<br />
              12345 Musterstadt<br />
              Tel: +49 123 456789<br />
              Email: info@kria-centro.de
            </p>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Öffnungszeiten</h3>
            <p className="text-gray-300">
              Montag - Freitag: 9:00 - 20:00<br />
              Samstag: 10:00 - 18:00<br />
              Sonntag: Nach Vereinbarung
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <a href="/impressum" className="text-gray-300 hover:text-white">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="text-gray-300 hover:text-white">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="/agb" className="text-gray-300 hover:text-white">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Kria Centro. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
} 