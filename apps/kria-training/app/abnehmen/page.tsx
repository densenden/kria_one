import { client } from '../../lib/sanity'

export default async function AbnehmenPage() {
  const abnehmenAngebote = await client.fetch(`*[_type == "angebot" && tags[0] == "abnehmen"]`)
  const testimonials = await client.fetch(`*[_type == "testimonial" && tags[0] == "abnehmen"]`)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 opacity-90" />
        <div className="absolute inset-0">
          <img
            src="/images/abnehmen-hero.jpg"
            alt="Gesundes Abnehmen"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            Gesund abnehmen mit nachhaltigem Erfolg
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-green-100 sm:max-w-3xl">
            Entdecke ein ganzheitliches Coaching, das deinen Stoffwechsel aktiviert und dir hilft, dein Wohlfühlgewicht langfristig zu erreichen.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <a
                href="#beratung"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-green-700 bg-white hover:bg-green-50 sm:px-8"
              >
                Kostenlose Beratung
              </a>
              <a
                href="#programme"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-900 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
              >
                Programme entdecken
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Warum traditionelle Diäten scheitern
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p>
                  85% aller Diäten führen zum Jo-Jo-Effekt. Die Gründe hierfür sind:
                </p>
                <ul className="space-y-4">
                  <li className="flex">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Drastische Kalorienreduktion bremst den Stoffwechsel</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Einseitige Ernährungsformen führen zu Nährstoffmängeln</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Verzicht und Verbote sind psychologisch nicht nachhaltig</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Keine Berücksichtigung individueller Stoffwechseltypen</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Unser ganzheitlicher Ansatz
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p>
                  Wir setzen auf ein individuelles, wissenschaftlich fundiertes Konzept, das langfristige Erfolge ermöglicht.
                </p>
                <ul className="space-y-4">
                  <li className="flex">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Stoffwechsel-Analyse und Typbestimmung</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ausgewogene Ernährung statt strengen Diäten</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Effektives Training zur Steigerung des Grundumsatzes</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mentale Strategien für langfristige Verhaltensänderungen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Deine Vorteile
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Was du von unserem Abnehm-Coaching erwarten kannst
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-green-600 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Nachhaltiger Gewichtsverlust</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Kein Jo-Jo-Effekt, sondern langfristige Veränderung durch individuelle Stoffwechseloptimierung.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-green-600 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Mehr Energie & Vitalität</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Optimierte Ernährung und gezieltes Training sorgen für mehr Energie im Alltag und besseres Wohlbefinden.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-green-600 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Flexible Umsetzung</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Keine starren Pläne, sondern alltagstaugliche Strategien, die zu deinem Leben passen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programme" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Unsere Abnehm-Programme
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Für jeden Typ und jedes Ziel das passende Programm
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {abnehmenAngebote?.map((angebot: any) => (
              <div key={angebot._id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {angebot.image && (
                    <div className="lg:col-span-1">
                      <img
                        className="h-full w-full object-cover"
                        src={angebot.image}
                        alt={angebot.title}
                      />
                    </div>
                  )}
                  <div className="p-6 lg:col-span-2 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{angebot.title}</h3>
                      <p className="text-gray-500 mb-6">{angebot.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="text-lg font-medium text-gray-900 mb-4">Dieses Programm ist für dich, wenn:</h4>
                          <ul className="space-y-2">
                            {angebot.benefits?.map((benefit: string, index: number) => (
                              <li key={index} className="flex items-start">
                                <svg
                                  className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span className="text-gray-500">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-900 mb-4">Das ist enthalten:</h4>
                          <ul className="space-y-2">
                            {angebot.includes?.map((item: string, index: number) => (
                              <li key={index} className="flex items-start">
                                <svg
                                  className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <span className="text-gray-500">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-bold text-gray-900">{angebot.price}</p>
                      <a
                        href={`/angebote/${angebot.slug?.current}`}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                      >
                        Mehr erfahren
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Erfolgsgeschichten
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Klienten berichten von ihren Erfahrungen
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
                    <p className="text-sm text-gray-500">{testimonial.age} Jahre</p>
                  </div>
                </div>
                <div className="flex space-x-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Start</p>
                    <p className="font-bold text-xl">{testimonial.weightBefore} kg</p>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Heute</p>
                    <p className="font-bold text-xl text-green-600">{testimonial.weightAfter} kg</p>
                  </div>
                </div>
                <blockquote className="italic text-gray-500 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-sm text-gray-500">
                  Programm: <span className="font-medium">{testimonial.program}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Zeitraum: <span className="font-medium">{testimonial.duration}</span>
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
              Antworten auf die wichtigsten Fragen rund ums Abnehmen
            </p>
          </div>
          <div className="mt-12 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Wie unterscheidet sich euer Ansatz von herkömmlichen Diäten?</h3>
              <p className="text-gray-500">
                Anstelle von restriktiven Diäten setzen wir auf eine individuell angepasste Ernährungsweise, die zu deinem Stoffwechseltyp passt. Wir verbinden Ernährungsoptimierung mit gezieltem Training und mentalen Strategien für langfristige Erfolge ohne Jo-Jo-Effekt.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Wie schnell kann ich Ergebnisse erwarten?</h3>
              <p className="text-gray-500">
                Die ersten Ergebnisse sind meist nach 2-3 Wochen sichtbar. Wir fokussieren uns jedoch auf nachhaltige Veränderungen, nicht auf kurzfristige Erfolge. Ein gesundes Tempo beim Abnehmen liegt bei 0,5-1 kg pro Woche.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Muss ich auf alles verzichten, was mir schmeckt?</h3>
              <p className="text-gray-500">
                Nein! Wir arbeiten nach dem 80/20-Prinzip, bei dem auch Genuss seinen Platz hat. Unser Ziel ist es, eine ausgewogene Ernährung zu etablieren, die du langfristig beibehalten kannst und die dir schmeckt.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Ich habe noch nie trainiert. Ist das Programm trotzdem für mich geeignet?</h3>
              <p className="text-gray-500">
                Absolut! Alle unsere Programme werden individuell an deinen Fitnessstand angepasst. Wir beginnen dort, wo du stehst, und steigern langsam und kontinuierlich die Intensität, sodass du dich nie überfordert fühlst.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="beratung" className="bg-green-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Bereit für einen neuen Ansatz zum Abnehmen?</span>
            <span className="block text-green-200">Starte heute mit einer kostenlosen Beratung.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50"
              >
                Jetzt Kontakt aufnehmen
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/preise#erstgespraech"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-900 hover:bg-green-800"
              >
                Kostenlose Beratung
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 