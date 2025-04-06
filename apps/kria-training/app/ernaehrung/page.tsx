export default function Ernaehrung() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Ernährungsberatung</h1>
            <p className="text-xl md:text-2xl">Gesunde Ernährung für ein besseres Leben</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg">
          <h2>Unsere Ernährungsphilosophie</h2>
          <p>
            Wir glauben an eine ganzheitliche Herangehensweise an Ernährung, die 
            Körper, Geist und Seele in Einklang bringt. Unsere Beratung basiert 
            auf wissenschaftlichen Erkenntnissen und jahrelanger Erfahrung.
          </p>

          <h2>Angebote</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Individuelle Beratung</h3>
              <ul>
                <li>Persönliche Ernährungsanalyse</li>
                <li>Individueller Ernährungsplan</li>
                <li>Regelmäßige Betreuung</li>
                <li>Anpassung an Ihre Ziele</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Gruppenkurse</h3>
              <ul>
                <li>Ernährungsworkshops</li>
                <li>Kochkurse</li>
                <li>Ernährungsvorträge</li>
                <li>Gruppendiskussionen</li>
              </ul>
            </div>
          </div>

          <h2>Schwerpunkte</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Gewichtsmanagement</h3>
              <ul>
                <li>Gewichtsreduktion</li>
                <li>Gewichtszunahme</li>
                <li>Gewichtserhaltung</li>
                <li>Stoffwechseloptimierung</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Sport & Performance</h3>
              <ul>
                <li>Sporternährung</li>
                <li>Muskelaufbau</li>
                <li>Regeneration</li>
                <li>Energieoptimierung</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Gesundheit</h3>
              <ul>
                <li>Prävention</li>
                <li>Chronische Erkrankungen</li>
                <li>Allergien & Unverträglichkeiten</li>
                <li>Verdauungsprobleme</li>
              </ul>
            </div>
          </div>

          <h2>Unser Ansatz</h2>
          <p>
            Wir arbeiten nach einem ganzheitlichen Konzept:
          </p>
          <ul>
            <li>Individuelle Analyse</li>
            <li>Realistische Zielsetzung</li>
            <li>Praktische Umsetzung</li>
            <li>Langfristige Betreuung</li>
            <li>Regelmäßige Anpassung</li>
          </ul>

          <h2>Vorteile</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Für Sie</h3>
              <ul>
                <li>Mehr Energie</li>
                <li>Besseres Wohlbefinden</li>
                <li>Optimale Leistungsfähigkeit</li>
                <li>Nachhaltige Ergebnisse</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Unser Service</h3>
              <ul>
                <li>Individuelle Betreuung</li>
                <li>Flexible Termine</li>
                <li>Online-Beratung möglich</li>
                <li>Praxisnahe Tipps</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Kostenloses Erstgespräch</h3>
            <p>
              Vereinbaren Sie ein kostenloses Erstgespräch, um Ihre Ziele zu besprechen 
              und zu erfahren, wie wir Sie unterstützen können.
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