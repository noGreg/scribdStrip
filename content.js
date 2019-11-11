(function(){
    chrome.runtime.onMessage.addListener(receiveedMessage);

    function receiveedMessage(message, sender, sendResponse) {
        console.log('message: ', message, 'sender: ', sender, 'sendResponse: ', sendResponse);
    }
})()