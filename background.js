chrome.browserAction.onClicked.addListener(clicked);
function clicked(tab) { chrome.tabs.sendMessage(tab.id, { content: 'clean' }); }