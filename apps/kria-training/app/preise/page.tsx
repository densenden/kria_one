import { client, preiseQuery } from '../../lib/sanity'

export default async function PreisePage() {
  const preise = await client.fetch(preiseQuery)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Preise & Pakete
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Transparente Preise für dein individuelles Training. Starte mit einem kostenlosen Erstgespräch.
          </p>
        </div>
      </section>

      {/* Preise Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {preise?.map((preis: any) => (
              <div
                key={preis._id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  preis.isHighlighted ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <div className="px-6 py-12">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {preis.title}
                    </h3>
                    <p className="mt-4 text-gray-500">{preis.description}</p>
                    <p className="mt-8 text-4xl font-bold text-gray-900">
                      {preis.amount} €
                    </p>
                    {preis.duration && (
                      <p className="mt-2 text-sm text-gray-500">
                        Dauer: {preis.duration}
                      </p>
                    )}
                    {preis.details && (
                      <p className="mt-6 text-gray-500">{preis.details}</p>
                    )}
                  </div>
                  <div className="mt-8">
                    <a
                      href="#kontakt"
                      className={`block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md ${
                        preis.isHighlighted
                          ? 'text-white bg-blue-600 hover:bg-blue-700'
                          : 'text-blue-600 bg-blue-50 hover:bg-blue-100'
                      }`}
                    >
                      {preis.amount === 0 ? 'Jetzt anfragen' : 'Buchen'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Häufige Fragen
            </h2>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Wie läuft das Erstgespräch ab?
              </h3>
              <p className="mt-2 text-gray-500">
                Im kostenlosen Erstgespräch lernen wir uns kennen und besprechen deine Ziele und Wünsche. Wir schauen gemeinsam, ob wir zusammenpassen und welches Training für dich am besten geeignet ist.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Wie kann ich bezahlen?
              </h3>
              <p className="mt-2 text-gray-500">
                Du kannst bequem per Überweisung oder in bar bezahlen. Die Rechnung erhältst du direkt nach dem Training oder auf Wunsch auch monatlich.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Kann ich Termine absagen?
              </h3>
              <p className="mt-2 text-gray-500">
                Termine können bis 24 Stunden vorher kostenlos abgesagt werden. Bei späteren Absagen oder Nichterscheinen wird der volle Betrag berechnet.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Wie lange ist die 10er Karte gültig?
              </h3>
              <p className="mt-2 text-gray-500">
                Die 10er Karte ist 6 Monate ab Kaufdatum gültig. Die Termine können flexibel in diesem Zeitraum gebucht werden.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 