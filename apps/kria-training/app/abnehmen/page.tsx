import { client } from '../../lib/sanity'

export default function Abnehmen() {
  return (
    <div className="container section">
      <h1>Gewichtsreduktion & Abnehmen</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="card">
          <h2>Mein Ansatz</h2>
          <p>
            Ich helfe Ihnen, nachhaltig und gesund abzunehmen. 
            Mein ganzheitlicher Ansatz kombiniert:
          </p>
          <ul className="mt-4 space-y-2">
            <li>✓ Individuelles Training</li>
            <li>✓ Ernährungsberatung</li>
            <li>✓ Verhaltensänderung</li>
            <li>✓ Motivation & Support</li>
            <li>✓ Langfristige Erfolgsstrategien</li>
          </ul>
        </div>

        <div className="card">
          <h2>Ihr Vorteil</h2>
          <p>
            Mit meiner Betreuung profitieren Sie von:
          </p>
          <ul className="mt-4 space-y-2">
            <li>✓ Persönlicher Betreuung</li>
            <li>✓ Maßgeschneiderten Plänen</li>
            <li>✓ Regelmäßiger Erfolgskontrolle</li>
            <li>✓ Flexiblen Trainingszeiten</li>
            <li>✓ Nachhaltigen Ergebnissen</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2>Mein Programm</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="card">
            <h3>1. Analyse</h3>
            <ul className="mt-2 space-y-2">
              <li>✓ Körperanalyse</li>
              <li>✓ Ernährungsprotokoll</li>
              <li>✓ Zieldefinition</li>
            </ul>
          </div>
          
          <div className="card">
            <h3>2. Umsetzung</h3>
            <ul className="mt-2 space-y-2">
              <li>✓ Trainingsplan</li>
              <li>✓ Ernährungsplan</li>
              <li>✓ Verhaltensänderung</li>
            </ul>
          </div>
          
          <div className="card">
            <h3>3. Erfolg</h3>
            <ul className="mt-2 space-y-2">
              <li>✓ Regelmäßige Kontrolle</li>
              <li>✓ Anpassung der Pläne</li>
              <li>✓ Langfristige Strategie</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2>Kontakt</h2>
        <p className="mt-4">
          Starten Sie noch heute Ihren Weg zum Wunschgewicht. 
          Vereinbaren Sie ein unverbindliches Beratungsgespräch.
        </p>
        <a href="/kontakt" className="btn btn-primary mt-4">
          Jetzt Beratungstermin vereinbaren
        </a>
      </div>
    </div>
  );
} 