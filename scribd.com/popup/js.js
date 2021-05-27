(() => {
  
  let revealButton = document.getElementById("revealButton");

  if (revealButton) revealButton.onclick = () => {

    let tabParams = {
      active: true,
      currentWindow: true
    }
    
    chrome.tabs.query(tabParams, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { content: 'clean' });
    });

  }
})();