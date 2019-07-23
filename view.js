browser.contextMenus.create({
  id: "view-comments",
  title: "HTML Comments"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "view-comments") {
    browser.tabs.executeScript({
      file: "process.js"
    });
  }
});