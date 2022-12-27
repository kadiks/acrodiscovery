import { describe, expect, it } from "vitest";

import wrapSpan from "../../src/injected/wrapSpan";

describe("wrapSpan", () => {
  it("find a DB in a string", () => {
    const searchTerm = "DB";
    const content = "This is a DB";

    const result = wrapSpan(content, searchTerm);

    expect(result).toBe("This is a <span>DB</span>");
  });
  it("find a DB in a string", () => {
    const searchTerm = "DB";
    const content = "This is a DB";

    const result = wrapSpan(content, searchTerm);

    expect(result).toBe("This is a <span>DB</span>");
  });
  it("add a class to the wrapped span", () => {
    const searchTerm = "DB";
    const content = "This is a DB";

    const result = wrapSpan(content, searchTerm, {
      attrs: {
        class: "cdc",
      },
    });

    expect(result).toBe(`This is a <span class="cdc">DB</span>`);
  });

  it("add a data-attr to the wrapped span", () => {
    const searchTerm = "DB";
    const content = "This is a DB";

    const result = wrapSpan(content, searchTerm, {
      attrs: {
        "data-acronym": "cdc",
      },
    });

    expect(result).toBe(`This is a <span data-acronym="cdc">DB</span>`);
  });
  it("add a data-attr to the wrapped span", () => {
    const searchTerm = "DB";
    const content = "This is a DB";

    const result = wrapSpan(content, searchTerm, {
      attrs: {
        class: "abc",
        "data-acronym": "cdc",
      },
    });

    expect(result).toBe(
      `This is a <span class="abc" data-acronym="cdc">DB</span>`
    );
  });
  it("should wrap if [searchTerm=API] is inside a sentence", () => {
    const searchTerm = "API";
    const html = `Optionally create API endpoints to provide backend functionality.`;

    const result = wrapSpan(html, searchTerm);

    expect(result).toBe(
      "Optionally create <span>API</span> endpoints to provide backend functionality."
    );
  });
});
