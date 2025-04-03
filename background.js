chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "format-json",
      title: "Format JSON",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "format-json" && info.selectionText) {
      const encoded = encodeURIComponent(info.selectionText);
      chrome.tabs.create({
        url: `formatter.html?json=${encoded}`
      });
    }
  });