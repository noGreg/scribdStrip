chrome.browserAction.onClicked.addListener(clicked);

function clicked(tab){
    console.log('some clicked', tab);
}