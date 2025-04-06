export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="mb-2">Kurt Remo Icochea Alvarez</p>
            <p className="mb-2">Hagenstraße 46</p>
            <p className="mb-2">64297 Darmstadt</p>
            <p className="mb-2">Telefon: 01771637200</p>
            <p>E-Mail: info@kria-centro.de</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p>43 762 013 981</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Berufshaftpflichtversicherung</h2>
            <p className="mb-2">GVO Gegenseitigkeit Versicherung Oldenburg VVaG</p>
            <p className="mb-2">GVO-Platz 1</p>
            <p className="mb-2">26160 Bad Zwischenahn</p>
            <p>Geltungsraum: Deutschland</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">EU-Streitschlichtung</h2>
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a 
                href="https://ec.europa.eu/consumers/odr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Haftung für Inhalte</h2>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
              Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 