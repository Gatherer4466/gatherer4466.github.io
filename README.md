# uniPortfolio

[![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D?logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![License](https://img.shields.io/badge/license-personal%20project-lightgrey)](#licens)

> En personlig portfolio og eksamensplatform bygget med Vue 3, TypeScript og Vite.

## Om projektet

uniPortfolio samler læringsmål, faglige refleksioner, litteratur og udviklingsprodukter i én overskuelig webapplikation. Indholdet er organiseret som datafiler og genanvendelige Vue-komponenter, så portfolioen er nem at udvide og vedligeholde.

## Funktioner

- **Eksamensinformation** – emnebeskrivelser, læringsmål og afsluttende refleksioner.
- **Webudvikling** – produkter og eksempler fra Vue- og frontendarbejde.
- **DevOps** – dokumentation af automatisering, containere og CI/CD-relaterede produkter.
- **Læringslog** – kronologiske refleksioner og udviklingsnoter.
- **Litteratur** – kuraterede ressourcer og faglige kilder.

## Teknologier

- [Vue 3](https://vuejs.org/) med Composition API
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Vue Router](https://router.vuejs.org/)
- [Highlight.js](https://highlightjs.org/)

## Kom i gang

### Forudsætninger

- Node.js `20.19+` eller `22.12+`
- npm

### Installation

```sh
npm install
```

### Udvikling

Start den lokale udviklingsserver med hot reload:

```sh
npm run dev
```

### Produktion

Byg projektet til produktion:

```sh
npm run build
```

Forhåndsvis produktionsbygget lokalt:

```sh
npm run preview
```

## Projektstruktur

```text
src/
├── components/       Genanvendelige UI-komponenter
├── features/         Funktionsområder med komponenter, typer og data
├── router/           Applikationens routes
├── styles/            Globale og responsive styles
└── views/             Overordnede sider
public/                Statiske billeder og øvrige assets
```

## Indhold

Det meste portfolioindhold ligger i JSON-filer under `src/features/`. Når nyt indhold skal tilføjes, bør det placeres i det relevante featureområde og følge de eksisterende typer og komponentmønstre.

## Licens

Projektet er et personligt portfolioarbejde og er ikke udgivet under en separat open source-licens.
