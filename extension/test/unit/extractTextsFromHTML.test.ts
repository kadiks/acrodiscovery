import extractTextsFromHTML from "../../src/injected/extractTextsFromHTML";
import Glossary from "../../src/types/Glossary";

import { describe, it, expect } from "vitest";

describe("extractTextsFromHTML", () => {
  it("Extract texts and wrap with span", () => {
    const html = `<body><p>DB</p><p>SSR</p></body>`;
    const glossary: Glossary = {
      DB: {
        acronym: "DB",
        longName: "Database",
      },
      SSR: {
        acronym: "SSR",
        longName: "Server Side Rendering",
      },
    };

    const result = extractTextsFromHTML(html, glossary, true);

    expect(result).toBe(
      "<body><p><span>DB</span></p><p><span>SSR</span></p></body>"
    );
  });
  it("Extract texts and wrap with span", () => {
    const html = `<body><p>Hybrid: DB and SSR</p></body>`;
    const glossary: Glossary = {
      DB: {
        acronym: "DB",
        longName: "Database",
      },
      SSR: {
        acronym: "SSR",
        longName: "Server Side Rendering",
      },
    };

    const result = extractTextsFromHTML(html, glossary, true);

    expect(result).toBe(
      "<body><p>Hybrid: <span>DB</span> and <span>SSR</span></p></body>"
    );
  });
  it("Extract texts and wrap with span with attrs", () => {
    const html = `<body><p>API</p><p>CSS</p></body>`;
    const glossary: Glossary = {
      API: {
        acronym: "API",
        longName: "Application Programming Interface",
      },
      CSS: {
        acronym: "CSS",
        longName: "Cascading StyleSheet",
      },
    };

    const result = extractTextsFromHTML(html, glossary);

    expect(result).toBe(
      `<body><p><span class="cdc-wiki-search-term" data-acronym="API" data-long-name="Application Programming Interface">API</span></p><p><span class="cdc-wiki-search-term" data-acronym="CSS" data-long-name="Cascading StyleSheet">CSS</span></p></body>`
    );
  });
});
