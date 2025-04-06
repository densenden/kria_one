export default function Athletenbetreuung() {
  return (
    <div className="container section">
      <h1>Athletenbetreuung & Leistungssport</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="card">
          <h2>Individuelle Betreuung</h2>
          <p>
            Als erfahrener Trainer biete ich maßgeschneiderte Betreuung für Leistungssportler. 
            Mein Fokus liegt auf:
          </p>
          <ul className="mt-4 space-y-2">
            <li>✓ Leistungsdiagnostik</li>
            <li>✓ Individuelle Trainingspläne</li>
            <li>✓ Wettkampfvorbereitung</li>
            <li>✓ Regenerationsmanagement</li>
            <li>✓ Ernährungsoptimierung</li>
          </ul>
        </div>

        <div className="card">
          <h2>Mein Ansatz</h2>
          <p>
            Ich kombiniere wissenschaftlich fundierte Methoden mit jahrelanger Erfahrung 
            im Leistungssport. Meine Betreuung umfasst:
          </p>
          <ul className="mt-4 space-y-2">
            <li>✓ Regelmäßige Leistungstests</li>
            <li>✓ Technikanalyse und Optimierung</li>
            <li>✓ Mentales Training</li>
            <li>✓ Verletzungsprävention</li>
            <li>✓ Wettkampfplanung</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2>Meine Erfahrung</h2>
        <p className="mt-4">
          Mit über 10 Jahren Erfahrung in der Betreuung von Leistungssportlern habe ich 
          Athleten in verschiedenen Disziplinen zu ihren Zielen begleitet. Mein Netzwerk 
          umfasst Experten aus den Bereichen Physiotherapie, Sportmedizin und Ernährung.
        </p>
      </div>

      <div className="mt-8">
        <h2>Kontakt</h2>
        <p className="mt-4">
          Sie sind Leistungssportler und suchen professionelle Betreuung? 
          Kontaktieren Sie mich für ein unverbindliches Beratungsgespräch.
        </p>
        <a href="/kontakt" className="btn btn-primary mt-4">
          Jetzt Beratungstermin vereinbaren
        </a>
      </div>
    </div>
  );
} 