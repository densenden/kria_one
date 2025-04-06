import { client } from '../../lib/sanity'

export default async function ErfolgePage() {
  const erfolge = await client.fetch(`*[_type == "erfolg"] | order(date desc)`)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Erfolgsgeschichten
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Echte Menschen, echte Transformationen. Entdecke die inspirierenden Geschichten unserer Klienten.
          </p>
        </div>
      </section>

      {/* Featured Success Story */}
      {erfolge?.[0] && (
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                {erfolge[0].beforeAfterImage && (
                  <img
                    src={erfolge[0].beforeAfterImage}
                    alt={`${erfolge[0].name} Transformation`}
                    className="rounded-lg shadow-lg"
                  />
                )}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {erfolge[0].name}
                </h2>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{erfolge[0].duration}</span>
                  <span className="mx-2">·</span>
                  <span>{erfolge[0].type}</span>
                </div>
                <div className="prose prose-lg text-gray-500 mb-8">
                  {erfolge[0].story}
                </div>
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Vorher
                    </h3>
                    <ul className="space-y-2 text-gray-500">
                      {erfolge[0].before.map((item: string, index: number) => (
                        <li key={index} className="flex items-center">
                          <svg
                            className="h-5 w-5 text-red-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Nachher
                    </h3>
                    <ul className="space-y-2 text-gray-500">
                      {erfolge[0].after.map((item: string, index: number) => (
                        <li key={index} className="flex items-center">
                          <svg
                            className="h-5 w-5 text-green-500 mr-2"
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
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <blockquote className="italic text-gray-600 border-l-4 border-blue-500 pl-4">
                  "{erfolge[0].quote}"
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* More Success Stories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {erfolge?.slice(1).map((erfolg: any) => (
              <article key={erfolg._id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                {erfolg.beforeAfterImage && (
                  <img
                    src={erfolg.beforeAfterImage}
                    alt={`${erfolg.name} Transformation`}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {erfolg.name}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{erfolg.duration}</span>
                    <span className="mx-2">·</span>
                    <span>{erfolg.type}</span>
                  </div>
                  <p className="text-gray-500 mb-4 line-clamp-3">
                    {erfolg.story}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Erreichte Ziele:</h4>
                      <ul className="space-y-1 text-gray-500">
                        {erfolg.achievements?.slice(0, 3).map((achievement: string, index: number) => (
                          <li key={index} className="flex items-center">
                            <svg
                              className="h-4 w-4 text-green-500 mr-1"
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
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Methoden:</h4>
                      <ul className="space-y-1 text-gray-500">
                        {erfolg.methods?.slice(0, 3).map((method: string, index: number) => (
                          <li key={index}>{method}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <blockquote className="text-sm italic text-gray-600 border-l-2 border-blue-500 pl-3 mb-4">
                    "{erfolg.quote}"
                  </blockquote>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Bereit für deine eigene Erfolgsgeschichte?
          </h2>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            Starte jetzt deine persönliche Transformation mit einem kostenlosen Erstgespräch.
          </p>
          <a
            href="/preise#erstgespraech"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Jetzt Erstgespräch vereinbaren
          </a>
        </div>
      </section>
    </main>
  )
} 