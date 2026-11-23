# Atlas Steel

An independent Obsidian community plugin for Draw Steel game-management tools alongside Atlas VTT.

> **Project status:** early development scaffold. The current build only registers a status command; the trackers and imports described below are planned work.

Atlas Steel is not made, endorsed, or supported by the Atlas VTT or MCDM teams. Draw Steel is a game by MCDM Productions, LLC. This project does not include Draw Steel rules text or statblocks.

## Planned features

- **Combat:** import Draw Steel statblocks from the intended Steel repository; calculate and present Malice; track conditions, including conditions that expire at the end of a creature's turn.
- **Negotiations:** track and present interest and patience, optionally reveal other NPC stats to players, and show an NPC portrait.
- **Montages:** track challenges, successes, failures, and which player is assigned to each challenge.
- **Atlas presentation:** provide controlled player-facing information without exposing unrevealed GM data.

The importer source repository and its data format still need to be confirmed before implementation. Malice calculations and condition timing must be checked against the applicable rules before they are encoded.

## Atlas VTT integration

Atlas VTT already includes Draw Steel statblock templates and initiative tools. Atlas Steel starts as a standalone Obsidian plugin and will avoid undocumented Atlas internals. Integrations should use a documented, supported Atlas extension API when one is available; until then, compatibility must be verified against released Atlas versions.

## Development

Requirements: Node.js 22 or newer and Obsidian 1.8.7 or newer (desktop).

```bash
npm ci
npm run dev
```

For a production build:

```bash
npm run build
```

The build produces `main.js` in the project root. For local testing, copy `main.js`, `manifest.json`, and `styles.css` into `<vault>/.obsidian/plugins/atlas-steel/`, then enable **Atlas Steel** in Obsidian's community plugin settings.

## Project decisions before release

- Confirm the exact Steel repository and import format.
- Confirm supported Atlas versions and integration surface.
- Select a project license before distributing builds.
