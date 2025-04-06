import { client, angeboteQuery } from '../../lib/sanity'

export default function Angebote() {
  return (
    <div className="container section">
      <h1>Angebote</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card">
          <h2>Personal Training</h2>
          <p>
            Individuelles Einzeltraining, das genau auf Ihre Ziele und Bedürfnisse abgestimmt ist. 
            Perfekt für maximale Ergebnisse in kürzester Zeit.
          </p>
          <ul className="mt-4 space-y-2">
            <li>✓ Individueller Trainingsplan</li>
            <li>✓ Ernährungsberatung</li>
            <li>✓ Fortschrittskontrolle</li>
            <li>✓ Flexible Termine</li>
          </ul>
        </div>
        
        <div className="card">
          <h2>Gruppentraining</h2>
          <p>
            Trainieren Sie in kleinen Gruppen mit maximal 6 Teilnehmern. 
            Motivierende Atmosphäre und professionelle Betreuung.
          </p>
          <ul className="mt-4 space-y-2">
            <li>✓ Kleine Gruppen</li>
            <li>✓ Günstigere Preise</li>
            <li>✓ Gemeinsame Motivation</li>
            <li>✓ Regelmäßige Termine</li>
          </ul>
        </div>
        
        <div className="card">
          <h2>Online Training</h2>
          <p>
            Professionelles Training von überall aus. 
            Perfekt für flexible Menschen mit wenig Zeit.
          </p>
          <ul className="mt-4 space-y-2">
            <li>✓ Virtuelle Betreuung</li>
            <li>✓ Trainingsvideos</li>
            <li>✓ Ernährungspläne</li>
            <li>✓ Wöchentliche Check-ins</li>
          </ul>
        </div>
        
        <div className="card">
          <h2>Rückentraining</h2>
          <p>
            Spezielles Training zur Stärkung der Rückenmuskulatur und Verbesserung der Haltung. 
            Ideal bei Rückenschmerzen und Verspannungen.
          </p>
          <ul className="mt-4 space-y-2">
            <li>✓ Haltungsanalyse</li>
            <li>✓ Spezielle Übungen</li>
            <li>✓ Entspannungstechniken</li>
            <li>✓ Präventionsprogramm</li>
          </ul>
        </div>
        
        <div className="card">
          <h2>Ernährungsberatung</h2>
          <p>
            Individuelle Ernährungspläne und Beratung für Ihre Ziele. 
            Ob Abnehmen, Muskelaufbau oder allgemeine Gesundheit.
          </p>
          <ul className="mt-4 space-y-2">
            <li>✓ Ernährungsanalyse</li>
            <li>✓ Individuelle Pläne</li>
            <li>✓ Rezepte</li>
            <li>✓ Regelmäßige Anpassungen</li>
          </ul>
        </div>
        
        <div className="card">
          <h2>Stressmanagement</h2>
          <p>
            Lernen Sie, mit Stress umzugehen und Ihre mentale Gesundheit zu stärken. 
            Kombination aus Bewegung und Entspannungstechniken.
          </p>
          <ul className="mt-4 space-y-2">
            <li>✓ Atemübungen</li>
            <li>✓ Meditation</li>
            <li>✓ Progressive Muskelentspannung</li>
            <li>✓ Stressbewältigungsstrategien</li>
          </ul>
        </div>

        <div className="card">
          <h2>Schwimmtraining</h2>
          <p>
            Professionelles Schwimmtraining für alle Leistungsniveaus. 
            Von Technikverbesserung bis hin zu Wettkampfvorbereitung.
          </p>
          <ul className="mt-4 space-y-2">
            <li>✓ Technikanalyse</li>
            <li>✓ Individuelle Trainingspläne</li>
            <li>✓ Videoanalyse</li>
            <li>✓ Wettkampfvorbereitung</li>
          </ul>
        </div>

        <div className="card">
          <h2>Aqua Fitness</h2>
          <p>
            Gelenkschonendes Training im Wasser. 
            Ideal für Rehabilitation, Senioren und Menschen mit Gelenkproblemen.
          </p>
          <ul className="mt-4 space-y-2">
            <li>✓ Gelenkschonend</li>
            <li>✓ Effektives Ganzkörpertraining</li>
            <li>✓ Verbesserte Beweglichkeit</li>
            <li>✓ Spaß im Wasser</li>
          </ul>
        </div>

        <div className="card">
          <h2>Fitness Training</h2>
          <p>
            Modernes Fitness-Training mit Fokus auf funktionelle Bewegungen. 
            Steigern Sie Kraft, Ausdauer und Beweglichkeit.
          </p>
          <ul className="mt-4 space-y-2">
            <li>✓ Funktionelles Training</li>
            <li>✓ Kraft- und Ausdauer</li>
            <li>✓ Beweglichkeitstraining</li>
            <li>✓ Individuelle Betreuung</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 