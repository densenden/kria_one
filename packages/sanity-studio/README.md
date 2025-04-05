# Kria Sanity Studio

Content Management System für Kria, basierend auf Sanity.io.

## Datasets

Das Studio unterstützt zwei Datasets:
- `training`: Für Personal Training Inhalte
- `centro`: Für Retreat/Centro Inhalte

## Entwicklung

```bash
# Installation
npm install

# Entwicklungsserver starten (training dataset)
npm run dev

# Entwicklungsserver mit centro dataset
npm run dev -- --dataset centro
```

## Deployment

Das Studio wird automatisch auf Vercel deployed unter admin.kria-centro.de.

### Umgebungsvariablen

- `SANITY_STUDIO_PROJECT_ID`: ktr2zvpc
- `SANITY_STUDIO_DATASET`: training (oder centro)

## Schema

### Personal Training
- Titel
- Beschreibung
- Preis
- Bild (mit Hotspot, Alt-Text und Bildunterschrift)
- YouTube Video-ID

### Retreats
- Titel
- Beschreibung
- Dauer (Tage)
- Preis pro Tag
- Starttermine
- Bildergalerie (mit Hotspot, Alt-Text und Beschreibung)
- YouTube Video-ID 