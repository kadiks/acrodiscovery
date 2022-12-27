import WrapSpanOpts from "../types/wrapSpanOpts";
import wrapSpan from "./wrapSpan";

const extractTextFromHTML = (
  html: string,
  searchTerm: string,
  opts?: WrapSpanOpts
) => {
  // const regex = new RegExp(`(?<=>)[\\w\\s]+(?=<\\/)`, "mgi");
  const regex = new RegExp(`(?<=>)[\\w\\s\\.:-]+(?=<\\/)`, "mgi");

  html = html.replace(regex, (match) => {
    const wrapped = wrapSpan(match, searchTerm, opts);
    return wrapped;
  });

  return html;
};

export default extractTextFromHTML;
