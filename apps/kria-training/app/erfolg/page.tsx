export default function ErfolgPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-6">
            <svg className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Buchung erfolgreich!
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Vielen Dank für deine Buchung. Du erhältst in Kürze eine Bestätigung per E-Mail.
          </p>
          
          <div className="mt-12 bg-white shadow overflow-hidden sm:rounded-lg max-w-2xl mx-auto">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Buchungsdetails
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Übersicht deiner Buchung
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Buchungsnummer
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" id="booking-id">
                    #BKG-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Datum
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {new Date().toLocaleDateString('de-DE', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric'
                    })}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Status
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Bezahlt
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Was sind die nächsten Schritte?
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <svg className="h-8 w-8 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">1. Bestätigungs-E-Mail</h3>
                  </div>
                  <div className="mt-3 text-base text-gray-500">
                    Du erhältst in wenigen Minuten eine Bestätigungs-E-Mail mit allen Details deiner Buchung.
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <svg className="h-8 w-8 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">2. Terminwahl</h3>
                  </div>
                  <div className="mt-3 text-base text-gray-500">
                    Klicke auf den Link in der E-Mail, um deinen bevorzugten Termin auszuwählen oder kontaktiere uns direkt.
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <svg className="h-8 w-8 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">3. Vorbereitung</h3>
                  </div>
                  <div className="mt-3 text-base text-gray-500">
                    In unserer Vorbereitungs-E-Mail erfährst du, wie du dich optimal auf deinen Termin vorbereiten kannst.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Zurück zur Startseite
            </a>
          </div>
        </div>
      </div>
    </main>
  )
} 