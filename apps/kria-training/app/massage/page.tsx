import { client } from '../../lib/sanity'

export default async function MassagePage() {
  const massageAngebote = await client.fetch(`*[_type == "angebot" && tags[0] == "massage"]`)
  const testimonials = await client.fetch(`*[_type == "testimonial" && tags[0] == "massage"]`)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-90" />
        <div className="absolute inset-0">
          <img
            src="/images/massage-hero.jpg"
            alt="Professionelle Massage"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            Professionelle Massage für Körper und Geist
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-purple-100 sm:max-w-3xl">
            Entspannung, Regeneration und gezielte Behandlung für maximales Wohlbefinden.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <a
                href="#angebote"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-purple-700 bg-white hover:bg-purple-50 sm:px-8"
              >
                Angebote entdecken
              </a>
              <a
                href="#buchen"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-900 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
              >
                Direkt buchen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Die Vorteile regelmäßiger Massage
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Eine professionelle Massage bietet weit mehr als nur Entspannung
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-purple-600 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Stressabbau & Entspannung</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Reduziert Stresshormone und aktiviert das parasympathische Nervensystem für tiefe Entspannung.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-purple-600 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Schmerzlinderung</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Effektive Hilfe bei Verspannungen, Muskelbeschwerden und chronischen Schmerzen.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-purple-600 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Verbesserte Regeneration</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Beschleunigt die Erholung nach sportlicher Aktivität und steigert die Leistungsfähigkeit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Massage Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Unsere Massage-Techniken
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Jede Technik hat ihre eigenen Vorteile und Anwendungsgebiete
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative">
              <div className="w-full min-h-80 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
                <img
                  src="/images/massage-klassisch.jpg"
                  alt="Klassische Massage"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Klassische Massage
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Ideal für Entspannung und Lockerung verspannter Muskeln. Kombiniert verschiedene Grifftechniken zur Verbesserung der Durchblutung.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="w-full min-h-80 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
                <img
                  src="/images/massage-tiefengewebe.jpg"
                  alt="Tiefengewebsmassage"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Tiefengewebsmassage
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Intensive Behandlung tiefer Muskelschichten zur Lösung chronischer Verspannungen und Triggerpunkte.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="w-full min-h-80 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
                <img
                  src="/images/massage-sport.jpg"
                  alt="Sportmassage"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Sportmassage
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Speziell für Athleten und aktive Menschen. Beschleunigt die Regeneration und beugt Verletzungen vor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Options Section */}
      <section id="angebote" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Massage-Angebote
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Wähle das passende Angebot für deine Bedürfnisse
            </p>
          </div>

          <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {massageAngebote?.map((angebot: any) => (
              <div key={angebot._id} className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{angebot.title}</h3>
                  {angebot.badge && (
                    <p className="absolute top-0 py-1.5 px-4 bg-purple-600 text-white rounded-full transform -translate-y-1/2">
                      {angebot.badge}
                    </p>
                  )}
                  <p className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-5xl font-extrabold tracking-tight">{angebot.price}</span>
                    <span className="ml-1 text-xl font-semibold">{angebot.currency || '€'}</span>
                  </p>
                  <p className="mt-6 text-gray-500">{angebot.description}</p>

                  <ul role="list" className="mt-6 space-y-6">
                    {angebot.includes?.map((feature: string, index: number) => (
                      <li key={index} className="flex">
                        <svg className="flex-shrink-0 w-6 h-6 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`/api/create-checkout-session?product=${encodeURIComponent(angebot.title)}&price=${encodeURIComponent(angebot.priceId)}`}
                  className="mt-8 block w-full bg-purple-600 border border-transparent rounded-md py-3 px-6 text-center font-medium text-white hover:bg-purple-700"
                >
                  Jetzt buchen
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Booking Section */}
      <section id="buchen" className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Schnellbuchung
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Wähle Dauer und Massageart für deine nächste Session
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-purple-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">30</span>
                </div>
                <div className="flex-1 min-w-0">
                  <a href="/api/create-checkout-session?product=Klassische%20Massage%2030min&price=price_123" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">Klassische Massage 30 Min.</p>
                    <p className="text-sm text-gray-500 truncate">45 €</p>
                  </a>
                </div>
              </div>

              <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-purple-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">60</span>
                </div>
                <div className="flex-1 min-w-0">
                  <a href="/api/create-checkout-session?product=Klassische%20Massage%2060min&price=price_456" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">Klassische Massage 60 Min.</p>
                    <p className="text-sm text-gray-500 truncate">75 €</p>
                  </a>
                </div>
              </div>

              <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-purple-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">90</span>
                </div>
                <div className="flex-1 min-w-0">
                  <a href="/api/create-checkout-session?product=Klassische%20Massage%2090min&price=price_789" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">Klassische Massage 90 Min.</p>
                    <p className="text-sm text-gray-500 truncate">105 €</p>
                  </a>
                </div>
              </div>

              <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-purple-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">30</span>
                </div>
                <div className="flex-1 min-w-0">
                  <a href="/api/create-checkout-session?product=Tiefengewebsmassage%2030min&price=price_321" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">Tiefengewebsmassage 30 Min.</p>
                    <p className="text-sm text-gray-500 truncate">55 €</p>
                  </a>
                </div>
              </div>

              <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-purple-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">60</span>
                </div>
                <div className="flex-1 min-w-0">
                  <a href="/api/create-checkout-session?product=Tiefengewebsmassage%2060min&price=price_654" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">Tiefengewebsmassage 60 Min.</p>
                    <p className="text-sm text-gray-500 truncate">85 €</p>
                  </a>
                </div>
              </div>

              <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-purple-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">60</span>
                </div>
                <div className="flex-1 min-w-0">
                  <a href="/api/create-checkout-session?product=Sportmassage%2060min&price=price_987" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">Sportmassage 60 Min.</p>
                    <p className="text-sm text-gray-500 truncate">85 €</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Was unsere Kunden sagen
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Erfahrungen echter Klienten
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials?.map((testimonial: any) => (
              <div key={testimonial._id} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {testimonial.image && (
                    <img
                      className="h-12 w-12 rounded-full mr-4"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.service}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="italic text-gray-500 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-sm text-gray-500">
                  Massage-Typ: <span className="font-medium">{testimonial.type}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Häufig gestellte Fragen
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Antworten auf die wichtigsten Fragen rund um unsere Massageangebote
            </p>
          </div>
          <div className="mt-12 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Wie bereite ich mich auf eine Massage vor?</h3>
              <p className="text-gray-500">
                Komme bitte 10 Minuten vor deinem Termin. Trage bequeme Kleidung und vermeide schwere Mahlzeiten oder Alkohol vor der Behandlung. Es ist hilfreich, wenn du vorher gut hydriert bist.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Wie oft sollte ich eine Massage bekommen?</h3>
              <p className="text-gray-500">
                Das hängt von deinen individuellen Bedürfnissen ab. Bei akuten Beschwerden können wöchentliche Termine sinnvoll sein, zur Entspannung und Prävention reicht oft eine monatliche Behandlung.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Gibt es Kontraindikationen für Massagen?</h3>
              <p className="text-gray-500">
                Ja, bei bestimmten gesundheitlichen Zuständen wie Fieber, akuten Entzündungen, Thrombosen oder bestimmten Hauterkrankungen solltest du keine Massage erhalten. Sprich vor der Buchung mit uns, wenn du gesundheitliche Bedenken hast.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Kann ich meinen Termin stornieren?</h3>
              <p className="text-gray-500">
                Ja, Termine können bis zu 24 Stunden vorher kostenlos storniert werden. Bei späterer Absage oder Nichterscheinen müssen wir leider den vollen Betrag berechnen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Bereit für deine Massage?</span>
            <span className="block text-purple-200">Buche jetzt deinen Termin online.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#angebote"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50"
              >
                Angebote ansehen
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#buchen"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-900 hover:bg-purple-800"
              >
                Direkt buchen
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 