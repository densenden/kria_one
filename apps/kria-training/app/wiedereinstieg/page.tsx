export default function Wiedereinstieg() {
  return (
    <div className="container section">
      <h1>Wiedereinstieg & Schwangerschaft</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="card">
          <h2>Wiedereinstieg nach Pause</h2>
          <p>
            Sie möchten nach einer längeren Pause wieder mit dem Training beginnen? 
            Ich unterstütze Sie dabei, sicher und effektiv wieder einzusteigen.
          </p>
          <ul className="mt-4 space-y-2">
            <li>✓ Individuelle Belastungsanalyse</li>
            <li>✓ Sanfter Wiedereinstieg</li>
            <li>✓ Angepasste Trainingsintensität</li>
            <li>✓ Verletzungsprävention</li>
            <li>✓ Motivation & Support</li>
          </ul>
        </div>

        <div className="card">
          <h2>Training nach Schwangerschaft</h2>
          <p>
            Spezielles Training für junge Mütter, das auf die besonderen Bedürfnisse 
            nach der Schwangerschaft eingeht.
          </p>
          <ul className="mt-4 space-y-2">
            <li>✓ Beckenbodentraining</li>
            <li>✓ Rückbildungsgymnastik</li>
            <li>✓ Sanfte Kräftigung</li>
            <li>✓ Zeitlich flexible Termine</li>
            <li>✓ Babyfreundliche Umgebung</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2>Mein Programm</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="card">
            <h3>1. Analyse</h3>
            <ul className="mt-2 space-y-2">
              <li>✓ Gesundheitscheck</li>
              <li>✓ Bewegungsanalyse</li>
              <li>✓ Zieldefinition</li>
            </ul>
          </div>
          
          <div className="card">
            <h3>2. Training</h3>
            <ul className="mt-2 space-y-2">
              <li>✓ Individueller Plan</li>
              <li>✓ Sanfte Steigerung</li>
              <li>✓ Regelmäßige Anpassung</li>
            </ul>
          </div>
          
          <div className="card">
            <h3>3. Erfolg</h3>
            <ul className="mt-2 space-y-2">
              <li>✓ Fortschrittskontrolle</li>
              <li>✓ Motivation</li>
              <li>✓ Langfristige Ziele</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2>Besondere Vorteile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="card">
            <h3>Flexibilität</h3>
            <ul className="mt-2 space-y-2">
              <li>✓ Individuelle Termine</li>
              <li>✓ Online-Training möglich</li>
              <li>✓ Babyfreundliche Zeiten</li>
            </ul>
          </div>
          
          <div className="card">
            <h3>Fachwissen</h3>
            <ul className="mt-2 space-y-2">
              <li>✓ Spezielle Ausbildung</li>
              <li>✓ Regelmäßige Fortbildung</li>
              <li>✓ Netzwerk von Experten</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2>Kontakt</h2>
        <p className="mt-4">
          Starten Sie Ihren Weg zurück zum Training. 
          Vereinbaren Sie ein unverbindliches Beratungsgespräch.
        </p>
        <a href="/kontakt" className="btn btn-primary mt-4">
          Jetzt Beratungstermin vereinbaren
        </a>
      </div>
    </div>
  );
} 