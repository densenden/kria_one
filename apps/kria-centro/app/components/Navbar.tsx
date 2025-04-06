'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when pathname changes
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: 'Startseite', href: '/' },
    { name: 'Über Uns', href: '/ueber-uns' },
    { name: 'Angebote', href: '/angebote' },
    { name: 'Räumlichkeiten', href: '/raeumlichkeiten' },
    { name: 'Events', href: '/events' },
    { name: 'Blog', href: '/blog' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  const specialServices = [
    { name: 'Meditation', href: '/meditation' },
    { name: 'Yoga', href: '/yoga' },
    { name: 'Heilarbeit', href: '/heilarbeit' },
    { name: 'Workshops', href: '/workshops' },
  ];

  return (
    <nav 
      className={`fixed w-full z-30 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className={`font-bold text-xl ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                KRIA CENTRO
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  pathname === item.href
                    ? 'text-blue-600'
                    : scrolled 
                      ? 'text-gray-600 hover:text-blue-600'
                      : 'text-white hover:text-blue-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Special Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center text-sm font-medium transition-colors duration-300 ${
                  scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-blue-100'
                }`}
              >
                Angebote
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-40"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {specialServices.map((service) => (
                    <Link 
                      key={service.href} 
                      href={service.href}
                      className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                        pathname === service.href ? 'text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-600' : 'text-white'} inline-flex items-center justify-center p-2 rounded-md focus:outline-none`}
            >
              <span className="sr-only">Menü öffnen</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Language Selector */}
          <div className="flex items-center">
            <LanguageSelector />
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              >
                <span>Angebote</span>
                <svg 
                  className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="pl-4">
                  {specialServices.map((service) => (
                    <Link 
                      key={service.href} 
                      href={service.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        pathname === service.href
                          ? 'text-blue-600'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 