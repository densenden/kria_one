export default function Angebote() {
  const angebote = [
    {
      title: "2-Wochen Amazonas Retreat",
      description: "Eine intensive zweiwöchige Reise zur Selbstfindung im Herzen des Amazonas. Inkl. Vor- und Nachbereitung in Deutschland.",
      image: "/images/2-weeks-retreat.jpg",
      price: "ab 2.900€",
      details: [
        "2 Vorbereitungstreffen in Deutschland",
        "14 Tage Aufenthalt im Amazonas",
        "Traditionelle Heilzeremonien",
        "Persönliche Begleitung",
        "1 Nachbereitungstreffen"
      ]
    },
    {
      title: "3-Wochen Transformation",
      description: "Eine tiefgreifende dreiwöchige Transformationsreise mit intensiver Vorbereitung und Nachbetreuung.",
      image: "/images/3-weeks-retreat.jpg",
      price: "ab 3.900€",
      details: [
        "3 Vorbereitungstreffen in Deutschland",
        "21 Tage Aufenthalt im Amazonas",
        "Erweiterte Heilzeremonien",
        "Intensive Einzelbetreuung",
        "2 Nachbereitungstreffen"
      ]
    },
    {
      title: "4-Wochen Intensive",
      description: "Die umfassendste Erfahrung für eine vollständige spirituelle und persönliche Transformation.",
      image: "/images/4-weeks-retreat.jpg",
      price: "ab 4.900€",
      details: [
        "4 Vorbereitungstreffen in Deutschland",
        "28 Tage Aufenthalt im Amazonas",
        "Komplettes Heilungsprogramm",
        "Tägliche Einzelbetreuung",
        "3 Nachbereitungstreffen"
      ]
    }
  ];

  const termine = [
    {
      zeitraum: "Frühling 2024",
      datum: "15. März - 15. April 2024",
      status: "Buchbar"
    },
    {
      zeitraum: "Sommer 2024",
      datum: "1. Juni - 1. Juli 2024",
      status: "Wenige Plätze"
    },
    {
      zeitraum: "Herbst 2024",
      datum: "15. September - 15. Oktober 2024",
      status: "Buchbar"
    },
    {
      zeitraum: "Winter 2024/25",
      datum: "1. Dezember - 1. Januar 2025",
      status: "Warteliste"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-[url('/images/amazon-hero.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Amazonas Retreats</h1>
          <p className="text-xl max-w-3xl">
            Erleben Sie transformative Heilung im Herzen des Amazonas mit professioneller Vor- und Nachbereitung in Deutschland.
          </p>
        </div>
      </div>

      {/* Angebote Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {angebote.map((angebot, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src={angebot.image} 
                    alt={angebot.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full">
                    {angebot.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{angebot.title}</h3>
                  <p className="text-gray-600 mb-6">{angebot.description}</p>
                  <ul className="space-y-2">
                    {angebot.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-600">
                        <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Termine Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Verfügbare Termine 2024</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {termine.map((termin, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{termin.zeitraum}</h3>
                <p className="text-gray-600 mb-4">{termin.datum}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  termin.status === 'Buchbar' ? 'bg-green-100 text-green-800' :
                  termin.status === 'Wenige Plätze' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {termin.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buchungs-CTA */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-700 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Bereit für Ihre transformative Reise?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Wählen Sie Ihren bevorzugten Zeitraum und beginnen Sie Ihre Reise zur Selbstfindung im Amazonas.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/buchung"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50"
                >
                  Jetzt Termin wählen
                </a>
                <a 
                  href="/kontakt"
                  className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white hover:bg-blue-600"
                >
                  Beratungsgespräch vereinbaren
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 