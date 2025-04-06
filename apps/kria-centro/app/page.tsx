export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Amazonas Retreat in Peru
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Authentische Ayahuasca-Zeremonien mit erfahrenen Schamanen
            </p>
            <div className="space-x-4">
              <a
                href="/retreats"
                className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Retreats entdecken
              </a>
              <a
                href="/kontakt"
                className="inline-block px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100"
              >
                Kostenlose Beratung
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Deutschsprachige Betreuung</h2>
            <p>
              Unsere Retreats werden von erfahrenen deutschsprachigen Begleitern geleitet. 
              So können Sie sich voll und ganz auf Ihre Transformation konzentrieren.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Traditionelle Heilung</h2>
            <p>
              Erleben Sie authentische Ayahuasca-Zeremonien unter der Leitung 
              indigener Schamanen inmitten des peruanischen Regenwaldes.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Nachhaltiger Tourismus</h2>
            <p>
              Wir arbeiten eng mit lokalen Gemeinschaften zusammen und fördern 
              einen respektvollen Umgang mit der Natur und Kultur des Amazonas.
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Entdecken Sie den authentischen Amazonas</h2>
          <p>
            Willkommen bei unserem einzigartigen Amazonas-Retreat in Peru. Hier 
            verbinden wir traditionelle Heilmethoden mit modernem Komfort, um 
            Ihnen eine tiefgreifende Transformationserfahrung zu ermöglichen.
          </p>

          <h2>Warum ein Amazonas-Retreat?</h2>
          <p>
            Der peruanische Amazonas ist einer der letzten Orte auf der Erde, 
            an dem uraltes schamanisches Wissen noch lebendig ist. Unsere Retreats 
            bieten Ihnen die Möglichkeit, diese traditionellen Heilmethoden 
            kennenzulernen und für Ihre persönliche Entwicklung zu nutzen.
          </p>

          <h2>Unsere Schwerpunkte</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Traditionelle Heilung</h3>
              <ul>
                <li>Ayahuasca-Zeremonien</li>
                <li>Schamanische Heilrituale</li>
                <li>Pflanzenmedizin</li>
                <li>Spirituelle Reinigung</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Natur & Ernährung</h3>
              <ul>
                <li>Ursprüngliche Ernährung</li>
                <li>Heilpflanzenwissen</li>
                <li>Naturverbindung</li>
                <li>Nachhaltige Lebensweise</li>
              </ul>
            </div>
          </div>

          <h2>Ihre Vorteile</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Sicherheit</h3>
              <ul>
                <li>Deutschsprachige Betreuung</li>
                <li>Medizinische Versorgung</li>
                <li>Erfahrene Schamanen</li>
                <li>24/7 Begleitung</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Komfort</h3>
              <ul>
                <li>Moderne Unterkünfte</li>
                <li>Gesunde Verpflegung</li>
                <li>Sanitäre Anlagen</li>
                <li>WLAN-Verfügbarkeit</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Nachhaltigkeit</h3>
              <ul>
                <li>Faire Bezahlung</li>
                <li>Umweltschutz</li>
                <li>Kultureller Austausch</li>
                <li>Lokale Integration</li>
              </ul>
            </div>
          </div>

          <h2>Unsere Retreats</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Basis Retreat</h3>
              <ul>
                <li>2 Wochen Aufenthalt</li>
                <li>4 Ayahuasca-Zeremonien</li>
                <li>Einzelgespräche</li>
                <li>Gruppenaktivitäten</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Intensiv Retreat</h3>
              <ul>
                <li>3 Wochen Aufenthalt</li>
                <li>6 Ayahuasca-Zeremonien</li>
                <li>Vertiefte Integration</li>
                <li>Persönliche Betreuung</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Kostenlose Beratung</h3>
            <p>
              Lassen Sie sich unverbindlich beraten und finden Sie das passende 
              Retreat für Ihre Bedürfnisse.
            </p>
            <a
              href="/kontakt"
              className="inline-block mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Jetzt beraten lassen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
