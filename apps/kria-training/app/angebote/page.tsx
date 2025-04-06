import { client, angeboteQuery } from '../../lib/sanity'

export default async function AngebotePage() {
  const angebote = await client.fetch(angeboteQuery)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Unsere Angebote
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Entdecke unsere ganzheitlichen Trainings- und Coaching-Angebote für Körper, Geist und Seele.
          </p>
        </div>
      </section>

      {/* Angebote Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {angebote?.map((angebot: any) => (
              <div key={angebot._id} className="flex flex-col">
                {angebot.image && (
                  <div className="flex-shrink-0 mb-8">
                    <img
                      className="w-full h-64 object-cover rounded-lg"
                      src={angebot.image}
                      alt={angebot.title}
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {angebot.title}
                  </h2>
                  <p className="text-lg text-gray-500 mb-6">
                    {angebot.longDescription}
                  </p>
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Das erwartet dich:
                    </h3>
                    <ul className="space-y-3">
                      {angebot.benefits?.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="h-6 w-6 text-green-500 mr-2"
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
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {angebot.price} €
                      </p>
                      {angebot.duration && (
                        <p className="text-sm text-gray-500">
                          Dauer: {angebot.duration}
                        </p>
                      )}
                    </div>
                    <a
                      href={angebot.cta.link}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      {angebot.cta.text}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 