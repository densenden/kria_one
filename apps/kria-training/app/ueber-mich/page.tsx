import { client } from '../../lib/sanity'

export default function UeberMich() {
  return (
    <div className="container section">
      <h1>Über Mich</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card">
          <h2>Meine Geschichte</h2>
          <p>
            Als zertifizierter Personal Trainer und Ernährungsberater habe ich mich auf ganzheitliches Training spezialisiert. 
            Meine Leidenschaft für Gesundheit und Fitness begann vor über 10 Jahren, als ich selbst eine persönliche Transformation durchlebte.
          </p>
          <p>
            Nach meiner Ausbildung zum Personal Trainer und verschiedenen Weiterbildungen in den Bereichen Ernährung, 
            Rückengesundheit und Stressmanagement, gründete ich KRIA Training. Mein Ziel ist es, Menschen dabei zu helfen, 
            ihre Gesundheit und ihr Wohlbefinden nachhaltig zu verbessern.
          </p>
        </div>
        
        <div className="card">
          <h2>Meine Qualifikationen</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold">Zertifizierter Personal Trainer</h3>
              <p>Deutsche Hochschule für Prävention und Gesundheitsmanagement</p>
            </li>
            <li>
              <h3 className="font-semibold">Ernährungsberater</h3>
              <p>Deutsche Gesellschaft für Ernährung</p>
            </li>
            <li>
              <h3 className="font-semibold">Rückentrainer</h3>
              <p>Deutsche Sporthochschule Köln</p>
            </li>
            <li>
              <h3 className="font-semibold">Stressmanagement Coach</h3>
              <p>Institut für Stressmanagement</p>
            </li>
          </ul>
        </div>
        
        <div className="card md:col-span-2">
          <h2>Mein Ansatz</h2>
          <p>
            Bei KRIA Training steht der Mensch im Mittelpunkt. Ich glaube an einen ganzheitlichen Ansatz, 
            der körperliches Training mit mentaler Stärke und ausgewogener Ernährung verbindet.
          </p>
          <p>
            Jeder Mensch ist einzigartig, daher erstelle ich individuelle Trainings- und Ernährungspläne, 
            die auf Ihre persönlichen Ziele und Bedürfnisse abgestimmt sind. Mein Training ist nachhaltig 
            und alltagstauglich, damit Sie langfristig Erfolg haben.
          </p>
        </div>
      </div>
    </div>
  );
} 