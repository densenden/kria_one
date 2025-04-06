export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-lg">
          <h2>1. Verantwortlicher</h2>
          <p>
            Kria Centro<br />
            Musterstraße 123<br />
            12345 Musterstadt<br />
            Deutschland<br />
            E-Mail: info@kria-centro.de
          </p>

          <h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <p>
            Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies für die Begründung, 
            inhaltliche Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich ist.
          </p>

          <h2>3. Zweck der Datenverarbeitung</h2>
          <p>
            Die Verarbeitung Ihrer personenbezogenen Daten erfolgt zur Durchführung unserer 
            Retreat-Angebote, zur Abwicklung von Buchungen und zur Kommunikation mit Ihnen.
          </p>

          <h2>4. Rechtsgrundlage der Datenverarbeitung</h2>
          <p>
            Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage von Art. 6 Abs. 1 
            lit. b DSGVO, soweit die Verarbeitung zur Erfüllung eines Vertrags oder zur Durchführung 
            vorvertraglicher Maßnahmen erforderlich ist.
          </p>

          <h2>5. Speicherdauer</h2>
          <p>
            Ihre personenbezogenen Daten werden gelöscht, sobald der Zweck der Speicherung entfällt 
            oder Sie uns zur Löschung auffordern.
          </p>

          <h2>6. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf:
          </p>
          <ul>
            <li>Auskunft über Ihre gespeicherten Daten</li>
            <li>Berichtigung unrichtiger Daten</li>
            <li>Löschung Ihrer Daten</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerspruch gegen die Verarbeitung</li>
          </ul>

          <h2>7. Zahlungsabwicklung</h2>
          <p>
            Für die Abwicklung von Zahlungen nutzen wir den Dienst Stripe. Die Zahlungsdaten werden 
            direkt an Stripe übermittelt und nicht auf unseren Servern gespeichert.
          </p>

          <h2>8. Kontakt</h2>
          <p>
            Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
            datenschutz@kria-centro.de
          </p>
        </div>
      </div>
    </div>
  );
} 