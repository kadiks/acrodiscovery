// const extractTextFromHTML = require("./extractTextFromHTML");
import extractTextsFromHTML from "./extractTextsFromHTML";

const highlightWordsInDict = async () => {
  console.log("#0");
  const fetchWiki = async () => {
    const url = `http://localhost:3000/api/vendors/notion/databases/glossary`;
    const response = await fetch(url);
    // console.log("response", response);

    const dictionnary = await response.json();
    console.log(
      "🚀 ~ file: background.js ~ line 12 ~ fetchWiki ~ dictionnary",
      dictionnary
    );
    return dictionnary;
  };

  const dictionnary = await fetchWiki();

  // TODO: wrap span without rewriting the body

  let newInnerHTML = document.body.innerHTML;

  newInnerHTML = extractTextsFromHTML(newInnerHTML, dictionnary);

  console.log("#3");
  document.body.innerHTML = newInnerHTML;
  console.log("#4");

  const openTooltip = (el: HTMLDivElement) => {
    console.log("#5");
    const { left, top } = el.getBoundingClientRect();
    const center = left + el.offsetWidth * 0.5;
    const { longName, acronym } = el.dataset;
    if (acronym && longName) {
      // Rebuild tooltip container (imperative)
      const tooltipContainer = document.createElement("div");
      const tooltipHeader = document.createElement("div");
      const tooltipContent = document.createElement("div");

      tooltipContainer.classList.add("cdc-wiki-tooltip-container");
      tooltipContainer.style.position = "absolute";
      tooltipContainer.style.zIndex = "10";

      tooltipHeader.classList.add("cdc-wiki-tooltip-header");
      tooltipContent.classList.add("cdc-wiki-tooltip-content");

      tooltipHeader.textContent = acronym;
      tooltipContent.textContent = longName;

      tooltipContainer.appendChild(tooltipHeader);
      tooltipContainer.appendChild(tooltipContent);

      // Add to DOM
      document.body.appendChild(tooltipContainer);
      const tooltipEl = document.querySelector(
        ".cdc-wiki-tooltip-container"
      ) as HTMLElement | null;

      if (tooltipEl) {
        const tooltipHeight = tooltipEl.offsetHeight;
        const tooltipWidth = tooltipEl.offsetWidth;
        const topPos = top - tooltipHeight - 20 + window.scrollY;
        const leftPos = center - tooltipWidth * 0.5;
        tooltipEl.style.top = `${topPos}px`;
        tooltipEl.style.left = `${leftPos}px`;
      }
    }
  };

  Array.from(document.querySelectorAll(".cdc-wiki-search-term")).forEach(
    (el) => {
      console.log("#6");
      el.addEventListener("mouseenter", () => {
        openTooltip(el as HTMLDivElement);
      });
      el.addEventListener("mouseleave", () => {
        const tooltipEl = document.querySelector(".cdc-wiki-tooltip-container");
        if (tooltipEl) {
          tooltipEl.remove();
        }
      });
    }
  );
};

highlightWordsInDict();
// export default highlightWordsInDict;
