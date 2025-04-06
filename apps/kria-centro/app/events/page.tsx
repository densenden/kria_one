export default function Events() {
  const events = [
    {
      title: "Meditation & Achtsamkeit Workshop",
      date: "15. Mai 2024",
      time: "10:00 - 17:00",
      instructor: "Sarah Schmidt",
      description: "Ein Tag voller Ruhe und Achtsamkeit. Lernen Sie verschiedene Meditationstechniken kennen und finden Sie Ihren persönlichen Weg zur inneren Stille.",
      image: "/images/meditation-workshop.jpg",
      price: "120€",
      spots: "12 Plätze verfügbar"
    },
    {
      title: "Yoga Intensiv Wochenende",
      date: "22. - 23. Juni 2024",
      time: "9:00 - 18:00",
      instructor: "Michael Weber",
      description: "Vertiefen Sie Ihre Yogapraxis in diesem intensiven Wochenendkurs. Für Fortgeschrittene und ambitionierte Anfänger.",
      image: "/images/yoga-weekend.jpg",
      price: "240€",
      spots: "15 Plätze verfügbar"
    },
    {
      title: "Heilende Klänge - Klangmeditation",
      date: "7. Juli 2024",
      time: "19:00 - 21:00",
      instructor: "Lisa Müller",
      description: "Erleben Sie die heilende Kraft der Klänge in einer geführten Klangmeditation mit tibetischen Klangschalen.",
      image: "/images/sound-healing.jpg",
      price: "45€",
      spots: "20 Plätze verfügbar"
    },
    {
      title: "Spirituelles Retreat",
      date: "19. - 21. Juli 2024",
      time: "Ganztägig",
      instructor: "Team",
      description: "Ein Wochenende der Transformation mit Meditation, Yoga, Heilarbeit und spirituellen Lehren.",
      image: "/images/retreat.jpg",
      price: "390€",
      spots: "10 Plätze verfügbar"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-[url('/images/events-hero.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Workshops</h1>
          <p className="text-xl max-w-3xl">
            Entdecken Sie unsere besonderen Veranstaltungen und vertiefen Sie Ihre Praxis.
          </p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="h-48 w-full object-cover md:h-full md:w-48"
                    />
                  </div>
                  <div className="p-8 flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900">{event.title}</h3>
                        <p className="mt-2 text-gray-500">mit {event.instructor}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-blue-600 font-semibold">{event.price}</p>
                        <p className="text-sm text-gray-500">{event.spots}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center text-gray-600">
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mt-1">
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600">{event.description}</p>
                    <div className="mt-6">
                      <a 
                        href={`/events/${event.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Jetzt anmelden
                        <svg className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Bleiben Sie informiert
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Melden Sie sich für unseren Newsletter an und erfahren Sie als Erste/r von neuen Events und Workshops.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Anmelden
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 