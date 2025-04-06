export default function AbbruchPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-red-100 mb-6">
            <svg className="h-16 w-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Buchung abgebrochen
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Deine Buchung wurde nicht abgeschlossen. Keine Sorge, es wurden keine Kosten berechnet.
          </p>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Häufige Gründe für Abbrüche
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <svg className="h-8 w-8 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Sicherheitsbedenken</h3>
                  </div>
                  <div className="mt-3 text-base text-gray-500">
                    Wir nutzen eine sichere SSL-Verbindung und Stripe als zertifizierten Zahlungsanbieter. Deine Daten sind sicher.
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <svg className="h-8 w-8 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Offene Fragen</h3>
                  </div>
                  <div className="mt-3 text-base text-gray-500">
                    Du hast noch Fragen zu unseren Angeboten? Kontaktiere uns gerne und wir helfen dir weiter.
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <svg className="h-8 w-8 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Ungünstiger Zeitpunkt</h3>
                  </div>
                  <div className="mt-3 text-base text-gray-500">
                    Kein Problem, du kannst jederzeit zurückkommen und deine Buchung abschließen, wenn es dir besser passt.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 max-w-xl mx-auto">
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Zurück zur Startseite
            </a>
            <a
              href="/massage#angebote"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Angebote erneut ansehen
            </a>
          </div>
          
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="rounded-md bg-blue-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                  <p className="text-sm text-blue-700">
                    Möchtest du lieber persönlich buchen? Ruf uns an unter <span className="font-medium">+49 123 456789</span> oder schreibe uns eine E-Mail an <span className="font-medium">info@kria-training.de</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 