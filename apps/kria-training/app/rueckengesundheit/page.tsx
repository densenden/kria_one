import { client } from '../../lib/sanity'

export default async function RueckengesundheitPage() {
  const rueckenAngebote = await client.fetch(`*[_type == "angebot" && tags[0] == "ruecken"]`)
  const testimonials = await client.fetch(`*[_type == "testimonial" && tags[0] == "ruecken"]`)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90" />
        <div className="absolute inset-0">
          <img
            src="/images/ruecken-hero.jpg"
            alt="Rückengesundheit"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            Befreie dich von Rückenschmerzen
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-blue-100 sm:max-w-3xl">
            Ganzheitliches Training für eine starke Rückenmuskulatur, bessere Haltung und einen schmerzfreien Alltag.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <a
                href="#beratung"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 sm:px-8"
              >
                Kostenlose Beratung
              </a>
              <a
                href="#programme"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-900 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
              >
                Programme entdecken
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Rückenschmerzen verstehen
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p>
                  Etwa 80% aller Menschen leiden mindestens einmal in ihrem Leben unter Rückenschmerzen. Die häufigsten Ursachen sind:
                </p>
                <ul className="space-y-4">
                  <li className="flex">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Bewegungsmangel und zu viel Sitzen</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Muskuläre Dysbalancen</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Fehlhaltungen im Alltag und Beruf</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Stress und psychische Belastungen</span>
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
                  Wir behandeln nicht nur die Symptome, sondern finden gemeinsam die Ursachen deiner Beschwerden und lösen sie an der Wurzel.
                </p>
                <ul className="space-y-4">
                  <li className="flex">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Individuelle Bewegungsanalyse</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Gezielte Kräftigung der Tiefenmuskulatur</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mobilisation und Flexibilität verbessern</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Haltungsschulung und Alltagstransfer</span>
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
              Unsere Trainingsmethoden helfen dir, langfristig schmerzfrei zu leben.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Schmerzreduktion</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Bereits nach wenigen Einheiten erleben viele Klienten eine spürbare Linderung ihrer Beschwerden.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Wissen & Selbsthilfe</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Du lernst, wie dein Körper funktioniert und bekommst effektive Übungen für zuhause.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Langfristige Erfolge</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Nachhaltige Veränderungen statt kurzfristiger Symptombekämpfung für dauerhaft mehr Lebensqualität.
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
              Unsere Programme für Rückengesundheit
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Maßgeschneiderte Lösungen für deine individuellen Bedürfnisse
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {rueckenAngebote?.map((angebot: any) => (
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
                          <h4 className="text-lg font-medium text-gray-900 mb-4">Für wen geeignet:</h4>
                          <ul className="space-y-2">
                            {angebot.benefits?.map((benefit: string, index: number) => (
                              <li key={index} className="flex items-start">
                                <svg
                                  className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
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
                          <h4 className="text-lg font-medium text-gray-900 mb-4">Beinhaltet:</h4>
                          <ul className="space-y-2">
                            {angebot.includes?.map((item: string, index: number) => (
                              <li key={index} className="flex items-start">
                                <svg
                                  className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
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
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
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
              Erfahre, wie andere ihre Rückenprobleme überwunden haben
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
                <blockquote className="italic text-gray-500 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-sm text-gray-500">
                  Problem: <span className="font-medium">{testimonial.problem}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Ergebnis: <span className="font-medium text-green-600">{testimonial.result}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="beratung" className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Bereit für ein Leben ohne Rückenschmerzen?</span>
            <span className="block text-blue-200">Starte heute mit einer kostenlosen Beratung.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
              >
                Jetzt Kontakt aufnehmen
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/preise#erstgespraech"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800"
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