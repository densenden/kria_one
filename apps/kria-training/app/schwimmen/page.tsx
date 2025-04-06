export default function Schwimmen() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Schwimmen lernen</h1>
            <p className="text-xl md:text-2xl">Sicher und mit Spaß im Wasser</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg">
          <h2>Unser Konzept</h2>
          <p>
            Wir bieten Schwimmkurse für alle Altersgruppen und Niveaus. Unser 
            erfahrenes Team aus qualifizierten Schwimmlehrern begleitet Sie oder 
            Ihr Kind mit viel Geduld und Fachwissen auf dem Weg zum sicheren 
            Schwimmen.
          </p>

          <h2>Angebote</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Kinder</h3>
              <ul>
                <li>Wassergewöhnung (ab 3 Jahren)</li>
                <li>Seepferdchen-Kurs</li>
                <li>Bronze-Kurs</li>
                <li>Silber-Kurs</li>
                <li>Gold-Kurs</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Erwachsene</h3>
              <ul>
                <li>Anfängerkurse</li>
                <li>Fortgeschrittene</li>
                <li>Techniktraining</li>
                <li>Aquafitness</li>
              </ul>
            </div>
          </div>

          <h2>Kursstruktur</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Gruppengröße</h3>
              <ul>
                <li>Kleine Gruppen</li>
                <li>Individuelle Betreuung</li>
                <li>Altersgerechte Einteilung</li>
                <li>Max. 8 Teilnehmer</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Kursdauer</h3>
              <ul>
                <li>10-12 Einheiten</li>
                <li>45-60 Minuten</li>
                <li>Regelmäßige Termine</li>
                <li>Flexible Zeiten</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Kursziele</h3>
              <ul>
                <li>Sicheres Schwimmen</li>
                <li>Technikverbesserung</li>
                <li>Selbstvertrauen</li>
                <li>Freude am Wasser</li>
              </ul>
            </div>
          </div>

          <h2>Besondere Angebote</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Intensivkurse</h3>
              <ul>
                <li>Ferienkurse</li>
                <li>Wochenendkurse</li>
                <li>Crashkurse</li>
                <li>Einzeltraining</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Spezialkurse</h3>
              <ul>
                <li>Babyschwimmen</li>
                <li>Seniorenschwimmen</li>
                <li>Aquafitness</li>
                <li>Wassergymnastik</li>
              </ul>
            </div>
          </div>

          <h2>Vorteile</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Für Teilnehmer</h3>
              <ul>
                <li>Qualifizierte Lehrer</li>
                <li>Moderne Ausstattung</li>
                <li>Angenehme Wassertemperatur</li>
                <li>Positive Atmosphäre</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Für Eltern</h3>
              <ul>
                <li>Transparente Kommunikation</li>
                <li>Regelmäßige Updates</li>
                <li>Beobachtungsmöglichkeiten</li>
                <li>Flexible Termine</li>
              </ul>
            </div>
          </div>

          <h2>Kursorte</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Hallenbad</h3>
              <ul>
                <li>Ganzjährig geöffnet</li>
                <li>Angenehme Wassertemperatur</li>
                <li>Moderne Umkleiden</li>
                <li>Parkplätze vorhanden</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Freibad</h3>
              <ul>
                <li>Saisonale Kurse</li>
                <li>Natürliche Umgebung</li>
                <li>Großzügige Anlage</li>
                <li>Familienfreundlich</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Kostenlose Probestunde</h3>
            <p>
              Vereinbaren Sie eine kostenlose Probestunde, um uns und unsere 
              Methoden kennenzulernen.
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