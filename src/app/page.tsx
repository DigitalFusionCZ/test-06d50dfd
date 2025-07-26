'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.title = "VŠE PRO STAVBY.CZ - stavební práce, rekonstrukce, zateplení";

    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#374151" /><stop offset="100%" stop-color="#1F2937" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      document.head.appendChild(faviconLink);
    }
    faviconLink.setAttribute('href', faviconUrl);
    
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-gray-900 to-gray-700 p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#hero" className="text-white text-2xl font-bold tracking-wide transition-all duration-300 hover:text-yellow-400">
            VŠE PRO STAVBY.CZ
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-300 hover:text-white transition duration-300">O nás</a>
            <a href="#services" className="text-gray-300 hover:text-white transition duration-300">Služby</a>
            <a href="#gallery" className="text-gray-300 hover:text-white transition duration-300">Reference</a>
            <a href="#contact" className="text-yellow-400 hover:text-white transition duration-300 font-semibold border border-yellow-400 px-4 py-2 rounded-full">Kontakt</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 absolute top-full left-0 w-full shadow-md py-4 space-y-2 text-center">
            <a href="#about" onClick={toggleMenu} className="block text-gray-300 hover:text-white py-2 transition duration-300">O nás</a>
            <a href="#services" onClick={toggleMenu} className="block text-gray-300 hover:text-white py-2 transition duration-300">Služby</a>
            <a href="#gallery" onClick={toggleMenu} className="block text-gray-300 hover:text-white py-2 transition duration-300">Reference</a>
            <a href="#contact" onClick={toggleMenu} className="block text-yellow-400 hover:text-white py-2 transition duration-300 font-semibold">Kontakt</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="hero" className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banner-homepage-desktop.webp"
            alt="Staveniště - abstraktní banner"
            layout="fill"
            objectFit="cover"
            quality={80}
            className="opacity-30"
          />
        </div>
        <div className="container mx-auto relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg animate-fade-in-down">
            VŠE PRO STAVBY.CZ
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in-up">
            Kvalitní stavební práce, rekonstrukce a zateplení pro Váš domov a podnikání.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-gray-900 bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            ZÁKLADY PRO BUDOUCNOST
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 relative">
            <span className="relative pb-3">
              O NÁS
              <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-yellow-400 transform -translate-x-1/2"></span>
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="md:w-1/2 text-lg leading-relaxed text-gray-700 space-y-4">
              <p>
                Jsme <strong>stavební společnost VŠE PRO STAVBY.CZ</strong>, váš spolehlivý partner pro veškeré stavební projekty.
                Specializujeme se na širokou škálu stavebních prací, od kompletních rekonstrukcí a novostaveb až po zateplování budov a realizaci fasád.
              </p>
              <p>
                Naším cílem je poskytovat vysoce kvalitní služby s důrazem na detail, efektivitu a spokojenost zákazníka.
                Využíváme moderní stavební postupy a materiály nejvyšší kvality, abychom zajistili dlouhodobou životnost a estetickou hodnotu našich projektů.
              </p>
              <p>
                S týmem zkušených profesionálů jsme připraveni realizovat vaše vize a přetvořit je v realitu.
                Ceníme si otevřené komunikace a transparentnosti v každé fázi projektu, od plánování až po dokončení.
                Díky našim dlouholetým zkušenostem a individuálnímu přístupu ke každému klientovi, jsme si získali důvěru mnoha spokojených zákazníků.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/images/content-family-house-reconstruction.jpg"
                  alt="Rekonstrukce rodinného domu"
                  layout="fill"
                  objectFit="cover"
                  className="filter grayscale hover:grayscale-0 transition-filter duration-500"
                />
                <div className="absolute inset-0 bg-yellow-400 opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 relative">
            <span className="relative pb-3">
              NAŠE SLUŽBY
              <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-yellow-400 transform -translate-x-1/2"></span>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-yellow-400 text-center">
              <div className="text-yellow-400 mb-4 inline-block">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7v10l10 5l10-5V7L12 2zm0 2.22l8 4v7.56l-8 4l-8-4V6.22l8-4zM12 7a2 2 0 100 4a2 2 0 000-4zm0 2a.5.5 0 110 1a.5.5 0 010-1z"/>
                  <path d="M12 12c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5zM12 14.5c2.76 0 5 2.24 5 5h-10c0-2.76 2.24-5 5-5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Domy a základy</h3>
              <p className="text-gray-300 leading-relaxed">Zajišťujeme kompletní výstavbu rodinných domů od základů po střechu. Od prvotního projektu po finální dokončení, s důrazem na kvalitu a energetickou účinnost.</p>
            </div>

            <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-yellow-400 text-center">
              <div className="text-yellow-400 mb-4 inline-block">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 11.5c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-9c0-.55.45-1 1-1h1V8h2v3.5h10V8h2v3.5h1zM8 13.5H6V11h2v2.5zM12 13.5h-2V11h2v2.5zM16 13.5h-2V11h2v2.5z"/>
                  <path d="M12 2L4.5 7.5L12 13l7.5-5.5L12 2zM12 4.16L16.34 7.5L12 10.84L7.66 7.5L12 4.16z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Fasády a zateplení</h3>
              <p className="text-gray-300 leading-relaxed">Provádíme profesionální fasádní práce a komplexní zateplení budov, které výrazně sníží vaše náklady na vytápění a zvýší komfort bydlení.</p>
            </div>

            <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-yellow-400 text-center">
              <div className="text-yellow-400 mb-4 inline-block">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 19h2v-2h-2v2zm0-6h2v-2h-2v2zm0-6h2V5h-2v2zm-4 12h2v-2h-2v2zm0-6h2v-2h-2v2zm0-6h2V5h-2v2zM9 19h2v-2H9v2zm0-6h2v-2H9v2zm0-6h2V5H9v2zM6 19h2v-2H6v2zm0-6h2v-2H6v2zm0-6h2V5H6v2zM2 22h20V2H2v20zM4 4h16v16H4V4zm2 2v12h12V6H6z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Rekonstrukce a úpravy</h3>
              <p className="text-gray-300 leading-relaxed">Nabízíme komplexní rekonstrukce bytových i nebytových prostor, včetně modernizace interiérů, koupelen a kuchyní. Proměníme vaše staré prostory ve svěží a moderní domov.</p>
            </div>

            <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-yellow-400 text-center">
              <div className="text-yellow-400 mb-4 inline-block">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12h-2V7h-4V3H9l-2 3c-1.57-.46-3.13-.5-4.59-.14L2 8c1.37-1.12 3.16-2.02 5-2.58V3h2v4h4V3h2v4h2v5zm-5 4c0-2.21-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4zm-4 2c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Ostatní stavební práce</h3>
              <p className="text-gray-300 leading-relaxed">Poskytujeme široké portfolio dalších stavebních služeb, včetně zemních prací, demolic a dalších úprav, dle individuálních požadavků našich klientů.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects/Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 relative">
            <span className="relative pb-3">
              NAŠE REFERENCE
              <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-yellow-400 transform -translate-x-1/2"></span>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg group hover:scale-[1.02] transition-transform duration-300">
              <Image
                src="/images/gallery-tanvald-project.jpg"
                alt="Projekt v Tanvaldu"
                layout="fill"
                objectFit="cover"
                className="transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">Projekt Tanvald</h3>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg group hover:scale-[1.02] transition-transform duration-300">
              <Image
                src="/images/content-family-house-reconstruction.jpg"
                alt="Rodinný dům rekonstrukce"
                layout="fill"
                objectFit="cover"
                className="transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">Rekonstrukce RD</h3>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg group hover:scale-[1.02] transition-transform duration-300">
              <Image
                src="/images/banner-homepage-desktop.webp"
                alt="Stavební práce"
                layout="fill"
                objectFit="cover"
                className="transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">Zateplení budovy</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 relative">
            <span className="relative pb-3">
              KONTAKTUJTE NÁS
              <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-yellow-400 transform -translate-x-1/2"></span>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg tracking-wide">
              <p className="flex items-center"><span className="text-yellow-400 mr-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg></span> Email: <a href="mailto:info@vseprostavby.cz" className="underline hover:text-yellow-400">info@vseprostavby.cz</a></p>
              <p className="flex items-center"><span className="text-yellow-400 mr-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.32.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1h-4c-3.67 0-7.07-1.44-9.66-4.04C2.44 14.07 1 10.67 1 7V3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57.12.35.03.75-.25 1.02l-2.2 2.2z"/>
                </svg></span> Telefon: <a href="tel:+420777123456" className="underline hover:text-yellow-400">+420 777 123 456</a></p>
              <p className="flex items-center"><span className="text-yellow-400 mr-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg></span> Adresa: Stavební 123, 460 01 Liberec</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-inner">
              <p className="text-gray-300 text-center text-lg">
                Máte dotazy nebo zájem o nezávaznou cenovou nabídku? Neváhejte nás kontaktovat! Jsme připraveni prokonzultovat váš projekt a nabídnout nejlepší řešení. Těšíme se na spolupráci.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto text-center text-sm">
          &copy; {new Date().getFullYear()} VŠE PRO STAVBY.CZ. Všechna práva vyhrazena.
          <div className="mt-2">
            Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white transition duration-300">DigitalFusion</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
