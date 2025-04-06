export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-semibold mb-2">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Hosting</h2>
            <p className="mb-4">
              Unser Hoster erhebt in sog. Logfiles folgende Daten, die Ihr Browser übermittelt:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
              <li>Inhalt der Anforderung</li>
              <li>Zugriffsstatus/HTTP-Statuscode</li>
              <li>jeweils übertragene Datenmenge</li>
              <li>Website, von der die Anforderung kommt</li>
              <li>Browser</li>
              <li>Betriebssystem und dessen Oberfläche</li>
              <li>Sprache und Version der Browsersoftware</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-xl font-semibold mb-2">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der 
              gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Datenerfassung auf unserer Website</h2>
            <h3 className="text-xl font-semibold mb-2">Kontaktformular</h3>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
              dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Rechte der betroffenen Person</h2>
            <p className="mb-4">
              Sie haben das Recht:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen</li>
              <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen</li>
              <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
} 