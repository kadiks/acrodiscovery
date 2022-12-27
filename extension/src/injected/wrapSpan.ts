import WrapSpanOpts from "../types/wrapSpanOpts";

const wrapSpan = (content: string, searchTerm: string, opts?: WrapSpanOpts) => {
  const regex = new RegExp(`(${searchTerm})`, "mgi");

  let replaceText = `<span>$1</span>`;

  if (opts) {
    const attrs = Object.keys(opts.attrs)
      .map((key) => `${key}="${opts.attrs[key]}"`)
      .join(" ");
    replaceText = `<span ${attrs}>$1</span>`;
  }

  return content.replace(regex, replaceText);
};

export default wrapSpan;
