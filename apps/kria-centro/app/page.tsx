import { client, homepageQuery, retreatsQuery, heilbegleitungQuery } from '../lib/sanity'

export default async function Home() {
  const homepage = await client.fetch(homepageQuery)
  const retreats = await client.fetch(retreatsQuery)
  const heilbegleitung = await client.fetch(heilbegleitungQuery)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            {homepage?.title}
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {homepage?.description}
          </p>
        </div>
      </section>

      {/* Retreats Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Unsere Retreats
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {retreats?.map((retreat: any) => (
              <div
                key={retreat._id}
                className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {retreat.image && (
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={retreat.image}
                      alt={retreat.title}
                    />
                  </div>
                )}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {retreat.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {retreat.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <p className="text-lg font-medium text-gray-900">
                      {retreat.price} €
                    </p>
                    {retreat.duration && (
                      <p className="mt-1 text-sm text-gray-500">
                        Dauer: {retreat.duration}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heilbegleitung Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Heilbegleitung
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {heilbegleitung?.map((hb: any) => (
              <div
                key={hb._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="px-6 py-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {hb.title}
                    </h3>
                    <p className="mt-4 text-3xl font-bold text-gray-900">
                      {hb.price} €
                    </p>
                    {hb.description && (
                      <p className="mt-4 text-gray-500">{hb.description}</p>
                    )}
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
