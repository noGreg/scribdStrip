(() => {
  
  let revealButton = document.getElementById("revealButton");

  if (revealButton) revealButton.onclick = () => {

    let tabParams = {
      active: true,
      currentWindow: true
    }

    let siteDomain = location.host.replace("www.");
    
    chrome.tabs.query(tabParams, tabs => {

      console.log('TAB: ', tabs[0], { siteDomain }); 

      chrome.tabs.sendMessage(tabs[0].id, { content: 'clean' });
    });

  }
})();