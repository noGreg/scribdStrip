chrome.browserAction.onClicked.addListener(clicked);

function clicked(tab) {
    console.log('some clicked', tab);
    let message = {
        content: 'hello greg'
    }
    chrome.tabs.sendMessage(tab.id, message);
}