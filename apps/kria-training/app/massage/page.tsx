import { client } from '../../lib/sanity'

export default function Massage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Massage</h1>
            <p className="text-xl md:text-2xl">Entspannung und Wohlbefinden</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg">
          <h2>Unser Angebot</h2>
          <p>
            Wir bieten verschiedene Massagearten an, die auf Ihre individuellen 
            Bedürfnisse abgestimmt sind. Unsere erfahrenen Masseure begleiten Sie 
            auf dem Weg zu mehr Entspannung und Wohlbefinden.
          </p>

          <h2>Massagearten</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Klassische Massage</h3>
              <ul>
                <li>Ganzkörpermassage</li>
                <li>Teilmassage</li>
                <li>Sportmassage</li>
                <li>Entspannungsmassage</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Spezialmassagen</h3>
              <ul>
                <li>Hot Stone Massage</li>
                <li>Aromamassage</li>
                <li>Lomi Lomi Massage</li>
                <li>Thai-Massage</li>
              </ul>
            </div>
          </div>

          <h2>Behandlungsbereiche</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Rücken & Nacken</h3>
              <ul>
                <li>Verspannungen</li>
                <li>Blockaden</li>
                <li>Schmerzen</li>
                <li>Beweglichkeit</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Beine & Füße</h3>
              <ul>
                <li>Fußreflexzonen</li>
                <li>Durchblutung</li>
                <li>Muskelentspannung</li>
                <li>Lymphfluss</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Kopf & Gesicht</h3>
              <ul>
                <li>Kopfschmerzen</li>
                <li>Stressabbau</li>
                <li>Gesichtsmassage</li>
                <li>Entspannung</li>
              </ul>
            </div>
          </div>

          <h2>Vorteile</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Körperlich</h3>
              <ul>
                <li>Muskelentspannung</li>
                <li>Verbesserte Durchblutung</li>
                <li>Schmerzlinderung</li>
                <li>Bessere Beweglichkeit</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Psychisch</h3>
              <ul>
                <li>Stressabbau</li>
                <li>Entspannung</li>
                <li>Wohlbefinden</li>
                <li>Bessere Schlafqualität</li>
              </ul>
            </div>
          </div>

          <h2>Besondere Angebote</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Pakete</h3>
              <ul>
                <li>5er-Karte</li>
                <li>10er-Karte</li>
                <li>Monatspaket</li>
                <li>Geschenkgutscheine</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Kombinationen</h3>
              <ul>
                <li>Massage & Sauna</li>
                <li>Massage & Training</li>
                <li>Massage & Ernährung</li>
                <li>Massage & Coaching</li>
              </ul>
            </div>
          </div>

          <h2>Unser Service</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Räumlichkeiten</h3>
              <ul>
                <li>Angenehme Atmosphäre</li>
                <li>Moderne Ausstattung</li>
                <li>Hygienische Standards</li>
                <li>Entspannungsmusik</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Betreuung</h3>
              <ul>
                <li>Qualifizierte Masseure</li>
                <li>Individuelle Beratung</li>
                <li>Flexible Termine</li>
                <li>Diskrete Behandlung</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Kostenlose Beratung</h3>
            <p>
              Vereinbaren Sie ein kostenloses Beratungsgespräch, um die für Sie 
              passende Massageart zu finden.
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