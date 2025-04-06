export default function Impressum() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>
        
        <div className="prose prose-lg">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Kria Training GmbH<br />
            Musterstraße 123<br />
            12345 Musterstadt<br />
            Deutschland
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +49 (0) 123 456789<br />
            E-Mail: info@kria-training.de<br />
            Website: www.kria-training.de
          </p>

          <h2>Vertreten durch</h2>
          <p>
            Geschäftsführer: Max Mustermann
          </p>

          <h2>Registereintrag</h2>
          <p>
            Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht Musterstadt<br />
            Registernummer: HRB 12345
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE123456789
          </p>

          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Max Mustermann<br />
            Musterstraße 123<br />
            12345 Musterstadt
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
            Tätigkeit hinweisen.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          </p>
        </div>
      </div>
    </div>
  );
} 