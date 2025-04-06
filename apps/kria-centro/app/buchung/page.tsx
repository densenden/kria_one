'use client';

import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { de } from 'date-fns/locale';

export default function Buchung() {
  const [range, setRange] = useState<DateRange | undefined>();
  const [selectedPackage, setSelectedPackage] = useState('');
  
  const verfuegbareZeitraeume = [
    {
      id: 'fruehling2024',
      name: 'Frühling 2024',
      from: new Date(2024, 2, 15), // 15. März 2024
      to: new Date(2024, 3, 15),   // 15. April 2024
    },
    {
      id: 'sommer2024',
      name: 'Sommer 2024',
      from: new Date(2024, 5, 1),  // 1. Juni 2024
      to: new Date(2024, 6, 1),    // 1. Juli 2024
    },
    {
      id: 'herbst2024',
      name: 'Herbst 2024',
      from: new Date(2024, 8, 15), // 15. September 2024
      to: new Date(2024, 9, 15),   // 15. Oktober 2024
    },
    {
      id: 'winter2024',
      name: 'Winter 2024/25',
      from: new Date(2024, 11, 1), // 1. Dezember 2024
      to: new Date(2025, 0, 1),    // 1. Januar 2025
    },
  ];

  const packages = [
    {
      id: '2-weeks',
      name: '2-Wochen Retreat',
      duration: 14,
      price: '2.900€',
      description: 'Zweiwöchige Transformationsreise inkl. Vor- und Nachbereitung'
    },
    {
      id: '3-weeks',
      name: '3-Wochen Transformation',
      duration: 21,
      price: '3.900€',
      description: 'Intensive dreiwöchige Heilungsreise mit erweiterter Betreuung'
    },
    {
      id: '4-weeks',
      name: '4-Wochen Intensive',
      duration: 28,
      price: '4.900€',
      description: 'Umfassende vierwöchige Erfahrung für tiefgreifende Transformation'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-[url('/images/booking-hero.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Retreat buchen</h1>
          <p className="text-xl max-w-3xl">
            Wählen Sie Ihr Transformationspaket und Ihren bevorzugten Zeitraum.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Paketauswahl */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Wählen Sie Ihr Paket</h2>
            <div className="space-y-4">
              {packages.map((pkg) => (
                <div 
                  key={pkg.id}
                  className={`border rounded-lg p-6 cursor-pointer transition-all ${
                    selectedPackage === pkg.id 
                      ? 'border-blue-600 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{pkg.name}</h3>
                      <p className="text-gray-600 mt-1">{pkg.description}</p>
                    </div>
                    <span className="text-blue-600 font-semibold">{pkg.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kalendar */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Wählen Sie Ihren Zeitraum</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <DayPicker
                mode="range"
                selected={range}
                onSelect={setRange}
                locale={de}
                disabled={[
                  {
                    before: new Date(),
                  },
                  {
                    after: new Date(2025, 0, 1),
                  },
                ]}
                modifiers={{
                  available: verfuegbareZeitraeume.map(zeitraum => ({
                    from: zeitraum.from,
                    to: zeitraum.to,
                  })),
                }}
                modifiersStyles={{
                  available: {
                    backgroundColor: '#dbeafe',
                  },
                }}
                styles={{
                  caption: { color: '#1e40af' },
                }}
              />
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  Verfügbare Zeiträume sind blau markiert. Bitte wählen Sie ein Start- und Enddatum innerhalb der verfügbaren Zeiträume.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Buchungsformular */}
        {selectedPackage && range?.from && range?.to && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Persönliche Informationen</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="vorname" className="block text-sm font-medium text-gray-700">Vorname</label>
                <input
                  type="text"
                  id="vorname"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="nachname" className="block text-sm font-medium text-gray-700">Nachname</label>
                <input
                  type="text"
                  id="nachname"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="telefon" className="block text-sm font-medium text-gray-700">Telefon</label>
                <input
                  type="tel"
                  id="telefon"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="nachricht" className="block text-sm font-medium text-gray-700">Nachricht (optional)</label>
                <textarea
                  id="nachricht"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Unverbindlich anfragen
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
} 