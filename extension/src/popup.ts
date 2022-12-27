const searchEl = document.getElementById("search");

if (searchEl) {
  searchEl.addEventListener("click", async () => {
    searchEl.textContent = "Searching...";
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    await chrome.scripting.executeScript({
      // @ts-ignore
      target: { tabId: tab.id },
      files: ["injected/script.ts"],
    });
    await chrome.scripting.insertCSS({
      // @ts-ignore
      target: { tabId: tab.id },
      files: ["injected/style.css"],
    });
  });
}

export default {};
