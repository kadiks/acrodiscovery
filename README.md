# CDC Wiki extension

## Installation

### DEV Mode

#### Run the proxy server

```bash
cd api
npm i
npm run dev
```

#### Run the chrome extension

```bash
cd chrome-ext
npm i
npm run dev
```

#### Export the extension

```bash
cd chrome-ext
npm run build
```

In Chrome :

- Go to `chrome://extensions/`
- Enable `Developer mode`
- Click on `Load unpacked`
- Select the `chrome-ext/dist` folder

## TODO

### 0.1.0

- [x] Make jest work with TS files
- [x] Add test to understand why, only the last searchTerm is highlighted
- [x] Fix text for only API highlighted
- [x] Extract `fetchWiki` method
- [x] Add tests
- [x] Fix: Search only visible text in page (exclude attributes in search)
- [x] Fix (in DB/source) remove (stack) to MERN and MEAN

- [x] Change logo
- [x] Remove dead code
- [x] Remove "Options" contextual menu
- [CANCELED] Add loading indicator when fetching

- [x] Change chrome-ext to client or extension
- [ ] Create Github repo
- [ ] Push to Vercel

### 0.2.0

- [ ] Create page to add a PR: https://github.com/Evavic44/portfolio-ideas/blob/main/CONTRIBUTING.md
- [ ] Fix: "Hybrid: SSG and SSR" that wraps only SSR and not SSG

- [ ] Change all `dictionnary` to `glossary`
- [ ] Make ./package.json to run the ./api folder
- [ ] Make github actions for chrome-ext (https://docs.github.com/en/actions/quickstart)
  - [ ] build
  - [ ] test
  - [ ] coverage
- [ ] Make badges for chrome-ext (https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)
  - [ ] Build
  - [ ] Coverage
- [ ] Remove empty rows in Notion programmatically (to avoid undefined keys in Glossary)
- [ ] Fix: match exact word

- [ ] Fix: check why VSCode keeps underlining in red the keywords : `describe`, `test`, `it`, `expect`
- [ ] Add `npm i zod` to manage types on runtime (+ free type inference)

  - [ ] i.e: API vs lapidaire (french)
  - [ ] APIs
  - [ ] API's

- [ ] Add background fetch
- [ ] Add "Options" page
- [ ] Add loading indicator when fetching (https://stackoverflow.com/questions/9515704/access-variables-and-functions-defined-in-page-context-using-a-content-script)

## To add to encyclopedia

- [x] XSS
