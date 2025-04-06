import Image from 'next/image';
import Link from 'next/link';
import { client, homepageQuery, angeboteQuery, preiseQuery } from '../lib/sanity';

export default async function Home() {
  // Daten von Sanity abrufen
  const homepage = await client.fetch(homepageQuery);
  const angebote = await client.fetch(angeboteQuery);
  const preise = await client.fetch(preiseQuery);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white hero-section">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          {/* Hier könnte ein Hintergrundbild eingefügt werden */}
        </div>
        
        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {homepage?.title || "Ganzheitliches Personal Training für Körper und Geist"}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8">
            {homepage?.description || "Individuell angepasstes Training und Beratung für deine persönlichen Fitness- und Gesundheitsziele. Entdecke den Weg zu mehr Wohlbefinden und Vitalität."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/kontakt" className="btn btn-secondary px-8 py-3 text-lg">
              Kostenlose Beratung
            </Link>
            <Link href="/angebote" className="btn btn-outline border-white text-white px-8 py-3 text-lg">
              Alle Angebote
            </Link>
          </div>
        </div>
      </section>

      {/* Über uns Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Willkommen bei Kria Training</h2>
            <p className="text-lg text-gray-600">
              Wir bieten ein umfassendes Trainingskonzept, das sich an deinen individuellen Bedürfnissen orientiert und dich ganzheitlich unterstützt.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              {/* Hier später ein echtes Bild einfügen */}
              <div className="bg-gray-300 w-full h-96 flex items-center justify-center">
                <span className="text-gray-600">Trainer-Bild</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Persönliche & professionelle Betreuung</h3>
              <p className="text-gray-600 mb-6">
                Bei uns steht der Mensch im Mittelpunkt. Durch eine ausführliche Anamnese und Zielsetzung entwickeln wir ein maßgeschneidertes Konzept, das optimal auf dich abgestimmt ist.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Individuelles Trainingskonzept nach deinen Zielen</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ganzheitliche Betreuung mit Fokus auf Nachhaltigkeit</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Regelmäßige Fortschrittskontrolle und Anpassungen</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Persönliche Betreuung auch außerhalb der Trainingszeiten</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link href="/ueber-mich" className="btn btn-primary">
                  Mehr über mich erfahren
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Unsere Leistungen</h2>
            <p className="text-lg text-gray-600">
              Entdecke unsere vielfältigen Angebote für dein persönliches Wohlbefinden und optimale Gesundheit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {angebote && angebote.length > 0 ? (
              angebote.slice(0, 3).map((angebot: any) => (
                <div key={angebot._id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="bg-blue-600 h-2"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{angebot.title}</h3>
                    <p className="text-gray-600 mb-4">
                      {angebot.description}
                    </p>
                    <Link href="/angebote" className="text-blue-600 font-medium inline-flex items-center">
                      Mehr erfahren
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <>
                {/* Fallback-Angebote, falls keine Daten aus Sanity vorhanden sind */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="bg-blue-600 h-2"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Personal Training</h3>
                    <p className="text-gray-600 mb-4">
                      Individuelles Training, das genau auf deine Bedürfnisse und Ziele abgestimmt ist.
                    </p>
                    <Link href="/angebote" className="text-blue-600 font-medium inline-flex items-center">
                      Mehr erfahren
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="bg-blue-600 h-2"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Massage & Entspannung</h3>
                    <p className="text-gray-600 mb-4">
                      Regeneration und Entspannung mit verschiedenen Massagetechniken für Körper und Geist.
                    </p>
                    <Link href="/massage" className="text-blue-600 font-medium inline-flex items-center">
                      Mehr erfahren
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="bg-blue-600 h-2"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Spezielle Programme</h3>
                    <p className="text-gray-600 mb-4">
                      Maßgeschneiderte Programme für bestimmte Ziele wie Rückengesundheit oder Gewichtsmanagement.
                    </p>
                    <div className="flex flex-col space-y-2">
                      <Link href="/rueckengesundheit" className="text-blue-600 font-medium inline-flex items-center">
                        Rückengesundheit
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                      <Link href="/abnehmen" className="text-blue-600 font-medium inline-flex items-center">
                        Abnehmen
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/angebote" className="btn btn-primary">
              Alle Angebote entdecken
            </Link>
          </div>
        </div>
      </section>

      {/* Preise Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Unsere Preise</h2>
            <p className="text-lg text-gray-600">
              Transparente Preisgestaltung für alle unsere Angebote und Leistungen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {preise && preise.length > 0 ? preise.slice(0, 3).map((preis: any) => (
              <div key={preis._id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{preis.title}</h3>
                  <p className="text-gray-600 mb-6">{preis.description}</p>
                  <div className="text-3xl font-bold text-blue-600 mb-6">{preis.amount} €</div>
                  <Link href="/preise" className="btn btn-primary w-full text-center">
                    Details anzeigen
                  </Link>
                </div>
              </div>
            )) : (
              <>
                {/* Fallback-Preise */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Einzelstunde</h3>
                    <p className="text-gray-600 mb-6">Eine einzelne Trainingsstunde mit persönlicher Betreuung.</p>
                    <div className="text-3xl font-bold text-blue-600 mb-6">80 €</div>
                    <Link href="/preise" className="btn btn-primary w-full text-center">
                      Details anzeigen
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">10er Karte</h3>
                    <p className="text-gray-600 mb-6">Zehn Trainingseinheiten zum Vorteilspreis.</p>
                    <div className="text-3xl font-bold text-blue-600 mb-6">720 €</div>
                    <Link href="/preise" className="btn btn-primary w-full text-center">
                      Details anzeigen
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Monatspaket</h3>
                    <p className="text-gray-600 mb-6">Regelmäßiges Training mit 2 Einheiten pro Woche.</p>
                    <div className="text-3xl font-bold text-blue-600 mb-6">320 €</div>
                    <Link href="/preise" className="btn btn-primary w-full text-center">
                      Details anzeigen
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/preise" className="btn btn-outline border-blue-600 text-blue-600">
              Alle Preise anzeigen
            </Link>
          </div>
        </div>
      </section>

      {/* Erfolgsgeschichten Teaser */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Erfolgsgeschichten</h2>
            <p className="text-lg">
              Entdecke die Erfahrungen und Erfolge unserer zufriedenen Kunden.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hier würden in einem echten Projekt Testimonials eingefügt */}
            <div className="bg-white text-gray-800 rounded-lg p-6 shadow-md">
              <p className="italic mb-4">
                "Das Training bei Kria hat mein Leben verändert. Nach Jahren mit Rückenschmerzen bin ich endlich schmerzfrei und fitter als je zuvor."
              </p>
              <div className="font-bold">- Maria S.</div>
            </div>
            
            <div className="bg-white text-gray-800 rounded-lg p-6 shadow-md">
              <p className="italic mb-4">
                "Der ganzheitliche Ansatz hat mich überzeugt. Nicht nur meine Fitness hat sich verbessert, sondern auch meine Lebensqualität insgesamt."
              </p>
              <div className="font-bold">- Thomas K.</div>
            </div>
            
            <div className="bg-white text-gray-800 rounded-lg p-6 shadow-md">
              <p className="italic mb-4">
                "Die individuelle Betreuung ist einzigartig. Meine Ziele wurden ernst genommen und gemeinsam haben wir sie sogar übertroffen."
              </p>
              <div className="font-bold">- Julia M.</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/erfolge" className="btn btn-outline border-white text-white">
              Alle Erfolgsgeschichten lesen
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit für den ersten Schritt?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Starte jetzt deine persönliche Reise zu mehr Gesundheit und Wohlbefinden. Vereinbare ein kostenfreies Erstgespräch.
          </p>
          <Link href="/kontakt" className="btn btn-secondary px-8 py-3 text-lg">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  );
}
