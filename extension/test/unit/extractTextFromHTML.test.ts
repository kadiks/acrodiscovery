import { describe, expect, it } from "vitest";

import extractTextFromHTML from "../../src/injected/extractTextFromHTML";

describe("extractTextFromHTML", () => {
  it("Extract text and wrap with span", () => {
    const html = `<body>DB</body>`;
    const searchTerm = "DB";

    const result = extractTextFromHTML(html, searchTerm);

    expect(result).toBe("<body><span>DB</span></body>");
  });
  it("Extract text and wrap with span", () => {
    const html = `<body>This is DB</body>`;
    const searchTerm = "DB";

    const result = extractTextFromHTML(html, searchTerm);

    expect(result).toBe("<body>This is <span>DB</span></body>");
  });
  it("Extract text in table and wrapped only DB search term", () => {
    const html = `<table><tr><td>Cell 4</td><td>DB</td><td>Cell 5</td></tr></table>`;
    const searchTerm = "DB";

    const result = extractTextFromHTML(html, searchTerm);

    expect(result).toBe(
      `<table><tr><td>Cell 4</td><td><span>DB</span></td><td>Cell 5</td></tr></table>`
    );
  });

  it("Doesn't change attribute with search term", () => {
    const html = `<body data-db="abc">Start your DB server</body>`;
    const searchTerm = "DB";

    const result = extractTextFromHTML(html, searchTerm);

    expect(result).toBe(
      `<body data-db="abc">Start your <span>DB</span> server</body>`
    );
  });
  it("Extract text in table and wrapped only DB search term", () => {
    const html = `<table><tr><td>Start your DB server</td><td>Start your db server</td><td>DB</td><td>DB server</td></tr></table>`;
    const searchTerm = "DB";

    const result = extractTextFromHTML(html, searchTerm);

    expect(result).toBe(
      `<table><tr><td>Start your <span>DB</span> server</td><td>Start your <span>db</span> server</td><td><span>DB</span></td><td><span>DB</span> server</td></tr></table>`
    );
  });
  it("Extract DB in HTML and add span with class and data-attributes", () => {
    const html = `<body><p>DB</p></body>`;
    const searchTerm = "DB";

    const result = extractTextFromHTML(html, searchTerm, {
      attrs: {
        class: "cdc",
        "data-acronym": "db",
        "data-long-name": "Database",
      },
    });

    expect(result).toBe(
      `<body><p><span class="cdc" data-acronym="db" data-long-name="Database">DB</span></p></body>`
    );
  });
  it("should wrap if [searchTerm=API] is inside a sentence", () => {
    const searchTerm = "SSG";
    const html = `<body><p>Built-in: SSG.</p></body>`;

    const result = extractTextFromHTML(html, searchTerm);

    expect(result).toBe("<body><p>Built-in: <span>SSG</span>.</p></body>");
  });
});
