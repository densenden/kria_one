export default function UeberUns() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-[url('/images/amazon-about-hero.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Über Kria Centro Amazonas</h1>
          <p className="text-xl max-w-3xl">
            Ihre Brücke zu traditioneller Heilung und Transformation im Herzen des Amazonas.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Unsere Vision</h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              Kria Centro verbindet die uralte Weisheit des Amazonas mit moderner Begleitung und 
              Vorbereitung. Wir schaffen einen sicheren Raum für tiefgreifende Transformation und 
              authentische Heilungserfahrungen.
            </p>
          </div>
        </div>
      </div>

      {/* Remo Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2">
              <img 
                src="/images/remo-portrait.jpg" 
                alt="Remo" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Remo - Ihr Begleiter</h2>
              <p className="text-lg text-gray-600 mb-6">
                Seit über 15 Jahren arbeite ich mit den traditionellen Heilmethoden des Amazonas. 
                Meine Erfahrung und tiefe Verbindung zur amazonischen Kultur ermöglicht es mir, 
                eine Brücke zwischen den Welten zu schaffen.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Als ausgebildeter Heiler und spiritueller Lehrer begleite ich Sie auf Ihrer 
                persönlichen Reise - von der ersten Vorbereitung in Deutschland bis zur 
                transformativen Erfahrung im Amazonas.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900">Ausbildung</h3>
                  <p className="text-gray-600">15+ Jahre Erfahrung mit traditioneller Heilarbeit</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900">Sprachen</h3>
                  <p className="text-gray-600">Deutsch, Englisch, Spanisch, Portugiesisch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Das Erwartet Sie Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Das erwartet Sie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-12 w-12 mx-auto mb-4">
                <svg className="h-full w-full text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Intensive Vorbereitung</h3>
              <p className="text-gray-600">
                Umfassende Vorbereitung in Deutschland für Ihre Reise in den Amazonas.
              </p>
            </div>

            <div className="text-center">
              <div className="h-12 w-12 mx-auto mb-4">
                <svg className="h-full w-full text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Authentische Erfahrung</h3>
              <p className="text-gray-600">
                Traditionelle Heilzeremonien im Herzen des Amazonas.
              </p>
            </div>

            <div className="text-center">
              <div className="h-12 w-12 mx-auto mb-4">
                <svg className="h-full w-full text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nachhaltige Integration</h3>
              <p className="text-gray-600">
                Professionelle Nachbereitung und Integration der Erfahrungen.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Standort Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Unser Standort im Amazonas</h2>
              <p className="text-lg text-gray-600 mb-6">
                Das Retreat-Center befindet sich in einer geschützten Region des Amazonas, 
                umgeben von ursprünglichem Regenwald. Hier verbinden sich traditionelle 
                Heilkunst mit der kraftvollen Energie des Amazonas.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Abgeschiedene, naturnahe Lage
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Traditionelle Zeremonienräume
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Komfortable Unterkünfte
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Heiliger Garten mit Medizinalpflanzen
                </li>
              </ul>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <img 
                src="/images/amazon-center.jpg" 
                alt="Kria Centro Amazonas" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 