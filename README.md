# Family Vault

Family Vault is a responsive product website for a proposed offline-first desktop app for organizing household documents. This repository contains the **React/Vite website and interactive product mockups**; it does not contain the desktop application, document-processing services, or vault storage implementation.

The site introduces the product concept, walks through an example document workflow, and lets visitors explore sample records and form-assistance interactions.

## What the website includes

- A landing page with navigation, product overview, feature descriptions, and download information.
- An interactive vault preview with sample documents, search, member and category filters, and extracted-field/OCR/file tabs.
- A clickable, illustrative four-stage document-processing walkthrough.
- Family-profile, privacy, and form-assistance sections. The form assistant demonstrates filling sample fields from sample values.
- A configurable download section with Windows release details and macOS/Linux availability messaging.
- Responsive styling, motion effects, and icons.

**The interactions are website demonstrations backed by static sample data.** They do not upload or read real documents, run OCR or Ollama, save an encrypted database, create reminders, or autofill other applications. Product descriptions and technical pipeline details describe the proposed desktop product and are not evidence that those capabilities are implemented in this repository.

## Technology

- React 19 with JSX
- Vite 8 for local development and production builds
- Tailwind CSS 4 through the Vite plugin, plus project CSS
- Framer Motion for animations
- Lucide React for icons
- ESLint for static code checks

The project uses JavaScript ES modules. There is no backend or automated test script configured in `package.json`.

## Requirements

- Node.js compatible with the installed Vite version (Node.js 20.19+ or 22.12+ recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal (typically `http://localhost:5173`). Open that address in a browser. The development server supports hot reload while editing.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create an optimized static production build in `dist/`. |
| `npm run preview` | Serve the production build locally for a preview. Run the build first. |
| `npm run lint` | Run ESLint against the project. |

## Project layout

```text
.
├── index.html                  # HTML entry point and page metadata
├── package.json                # Dependencies and npm scripts
├── vite.config.js              # Vite and Tailwind CSS plugin setup
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Page composition and section order
    ├── App.css                 # Application-specific styles
    ├── index.css               # Global styles and Tailwind import
    ├── config/
    │   └── site.js              # Product copy, release links, and requirements
    ├── data/
    │   └── demoData.js          # Static records and walkthrough examples
    ├── components/             # Page sections and interactive previews
    └── assets/                 # Images and bundled assets
```

## Page sections

`src/App.jsx` assembles the page from reusable components: navigation, hero, product demo, document pipeline, privacy overview, family profiles, form assistant, features, how-it-works, download section, and footer. Most sections are presentational; the product demo, pipeline, family profile view, navigation menu, and form assistant use local React state for their on-page interactions.

The demo records and scenarios live in `src/data/demoData.js`. They are illustrative sample content, not a connected vault or live customer data. Site name, marketing copy, release metadata, download URLs, and displayed system requirements are centralized in `src/config/site.js`.

## Build and deployment

Run `npm run build` to produce the static site in `dist/`. Deploy the contents of that directory to a static hosting provider. Configure the host to serve `index.html` for the site root and any client-side routes if routes are added in the future. `npm run preview` can be used to inspect the built output locally.

Before publishing, review the release URL, version, checksum, system requirements, repository links, and availability claims in `src/config/site.js`. These values are website configuration; the site does not verify that a linked installer exists or that its checksum is valid.

## Scope and current limitations

- This repository is a website, not the Family Vault desktop application.
- OCR, local AI inference, encrypted storage, full-text indexing, operating-system shortcuts, notifications, and cross-application form filling are described or illustrated, but are not implemented here.
- The vault preview, family data, OCR output, and suggested form values are hard-coded examples.
- No account system, API, database, document upload flow, or persistence layer is configured.
- The Windows installer link and release details come from site configuration and should be checked before distribution.

## License

No license is specified in the repository. Add a license file and update this section if the project is intended for reuse or distribution.
