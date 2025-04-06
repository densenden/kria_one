export default function Rueckentraining() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Rückentraining</h1>
            <p className="text-xl md:text-2xl">Starker Rücken - starkes Leben</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg">
          <h2>Unser Konzept</h2>
          <p>
            Wir bieten ein ganzheitliches Rückentraining, das auf wissenschaftlichen 
            Erkenntnissen und jahrelanger Erfahrung basiert. Unser Ziel ist es, 
            nicht nur Schmerzen zu lindern, sondern langfristig einen starken und 
            gesunden Rücken aufzubauen.
          </p>

          <h2>Angebote</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Einzeltraining</h3>
              <ul>
                <li>Individuelle Analyse</li>
                <li>Persönlicher Trainingsplan</li>
                <li>1:1 Betreuung</li>
                <li>Fortschrittskontrolle</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Gruppentraining</h3>
              <ul>
                <li>Kleine Gruppen</li>
                <li>Gezielte Übungen</li>
                <li>Motivierende Atmosphäre</li>
                <li>Regelmäßige Termine</li>
              </ul>
            </div>
          </div>

          <h2>Schwerpunkte</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Prävention</h3>
              <ul>
                <li>Haltungsschulung</li>
                <li>Beweglichkeitstraining</li>
                <li>Kraftaufbau</li>
                <li>Alltagsübungen</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Rehabilitation</h3>
              <ul>
                <li>Nach Verletzungen</li>
                <li>Nach Operationen</li>
                <li>Chronische Beschwerden</li>
                <li>Schmerzmanagement</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Performance</h3>
              <ul>
                <li>Sportartspezifisch</li>
                <li>Leistungssteigerung</li>
                <li>Verletzungsprävention</li>
                <li>Optimale Bewegungsabläufe</li>
              </ul>
            </div>
          </div>

          <h2>Unser Ansatz</h2>
          <p>
            Wir arbeiten nach einem ganzheitlichen Konzept:
          </p>
          <ul>
            <li>Genaue Analyse der Ursachen</li>
            <li>Individueller Trainingsplan</li>
            <li>Korrekte Ausführung</li>
            <li>Regelmäßige Anpassung</li>
            <li>Langfristige Betreuung</li>
          </ul>

          <h2>Vorteile</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Für Sie</h3>
              <ul>
                <li>Schmerzreduktion</li>
                <li>Bessere Haltung</li>
                <li>Mehr Beweglichkeit</li>
                <li>Höhere Lebensqualität</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Unser Service</h3>
              <ul>
                <li>Qualifizierte Trainer</li>
                <li>Moderne Ausstattung</li>
                <li>Flexible Termine</li>
                <li>Individuelle Betreuung</li>
              </ul>
            </div>
          </div>

          <h2>Zielgruppen</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Privatpersonen</h3>
              <ul>
                <li>Büroangestellte</li>
                <li>Schwangere</li>
                <li>Senioren</li>
                <li>Jugendliche</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Unternehmen</h3>
              <ul>
                <li>Betriebliches Gesundheitsmanagement</li>
                <li>Workshops</li>
                <li>Bewegungspausen</li>
                <li>Ergonomieberatung</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Kostenloses Probetraining</h3>
            <p>
              Vereinbaren Sie ein kostenloses Probetraining, um unsere Methoden 
              kennenzulernen und Ihre Ziele zu besprechen.
            </p>
            <a
              href="/kontakt"
              className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Termin vereinbaren
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 