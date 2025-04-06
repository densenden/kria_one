import { client } from '../../lib/sanity'

export default async function FAQPage() {
  const faqCategories = await client.fetch(`*[_type == "faqCategory"] | order(order asc)`)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Häufig gestellte Fragen
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Hier findest du Antworten auf die häufigsten Fragen zu unserem Training und Coaching.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories?.map((category: any) => (
            <div key={category._id} className="mb-16 last:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {category.title}
              </h2>
              <div className="grid gap-6">
                {category.questions?.map((faq: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        {faq.question}
                      </h3>
                      <div className="prose prose-lg text-gray-500">
                        {faq.answer}
                      </div>
                      {faq.links && faq.links.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-4">
                          {faq.links.map((link: any, linkIndex: number) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              className="text-blue-600 hover:text-blue-700 font-medium"
                            >
                              {link.text} →
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Noch Fragen?
          </h2>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            Wenn du weitere Fragen hast, kontaktiere uns gerne direkt. Wir sind für dich da.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/kontakt"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Kontakt aufnehmen
            </a>
            <a
              href="/preise#erstgespraech"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50"
            >
              Kostenloses Erstgespräch
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 