import Glossary from "../types/Glossary";
import WrapSpanOpts from "../types/wrapSpanOpts";

import extractTextFromHTML from "./extractTextFromHTML";

const extractTextsFromHTML = (
  html: string,
  glossary: Glossary,
  debug = false
) => {
  for (let key in glossary) {
    // console.log("loop #2", key);
    const opts: WrapSpanOpts | undefined = debug
      ? undefined
      : {
          attrs: {
            // TODO: create a config file with shared class names
            class: "cdc-wiki-search-term",
            "data-acronym": key,
            "data-long-name": glossary[key].longName,
          },
        };
    html = extractTextFromHTML(html, key, opts);
  }
  return html;
};

export default extractTextsFromHTML;
