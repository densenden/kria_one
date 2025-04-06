export default function Raeumlichkeiten() {
  const raeume = [
    {
      name: "Meditationsraum",
      description: "Ein ruhiger, lichtdurchfluteter Raum für Meditation und Achtsamkeitsübungen.",
      image: "/images/meditation-room.jpg",
      features: [
        "80m² Fläche",
        "Natürliches Licht",
        "Klimatisiert",
        "Meditationskissen und -matten",
        "Soundanlage"
      ]
    },
    {
      name: "Yogastudio",
      description: "Großzügiger Raum für Yogakurse und Bewegungstherapie.",
      image: "/images/yoga-studio.jpg",
      features: [
        "120m² Fläche",
        "Holzfußboden",
        "Yogamatten und Props",
        "Umkleiden",
        "Duschen"
      ]
    },
    {
      name: "Behandlungsräume",
      description: "Individuelle Räume für therapeutische Behandlungen und Einzelsitzungen.",
      image: "/images/treatment-rooms.jpg",
      features: [
        "4 separate Räume",
        "Behandlungsliegen",
        "Angenehme Atmosphäre",
        "Klimatisiert",
        "Schallisoliert"
      ]
    },
    {
      name: "Gemeinschaftsbereich",
      description: "Einladender Bereich zum Austausch und Entspannen.",
      image: "/images/community-area.jpg",
      features: [
        "Teeküche",
        "Sitzecken",
        "Bibliothek",
        "WLAN",
        "Wasserspender"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-[url('/images/spaces-hero.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unsere Räumlichkeiten</h1>
          <p className="text-xl max-w-3xl">
            Entdecken Sie unsere harmonisch gestalteten Räume, die Ruhe und Heilung ermöglichen.
          </p>
        </div>
      </div>

      {/* Räume Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {raeume.map((raum, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-96">
                  <img 
                    src={raum.image} 
                    alt={raum.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{raum.name}</h3>
                  <p className="text-gray-600 mb-6">{raum.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {raum.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vermietung Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Raumvermietung
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Unsere Räume können auch für eigene Veranstaltungen, Workshops oder Seminare gemietet werden. 
              Sprechen Sie uns an für individuelle Angebote.
            </p>
            <a 
              href="/kontakt"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Anfrage senden
            </a>
          </div>
        </div>
      </div>

      {/* Ausstattung Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Allgemeine Ausstattung
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-12 w-12 mx-auto mb-4">
                <svg className="h-full w-full text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Moderne Technik</h3>
              <p className="text-gray-600">
                WLAN, Soundsysteme und Beleuchtungskonzepte für optimale Atmosphäre.
              </p>
            </div>

            <div className="text-center">
              <div className="h-12 w-12 mx-auto mb-4">
                <svg className="h-full w-full text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Komfort</h3>
              <p className="text-gray-600">
                Klimaanlage, Heizung und erstklassige sanitäre Einrichtungen.
              </p>
            </div>

            <div className="text-center">
              <div className="h-12 w-12 mx-auto mb-4">
                <svg className="h-full w-full text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Atmosphäre</h3>
              <p className="text-gray-600">
                Harmonische Raumgestaltung und angenehmes Ambiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 