'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' }
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = async (langCode: string) => {
    setIsOpen(false);
    
    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: document.documentElement.innerText,
          targetLang: langCode
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Hier können wir die übersetzten Inhalte in den DOM einfügen
        // oder einen State aktualisieren, der die Übersetzungen speichert
        document.documentElement.lang = langCode;
      }
    } catch (error) {
      console.error('Übersetzungsfehler:', error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-gray-900"
      >
        <span>🌐</span>
        <span>Sprache</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 