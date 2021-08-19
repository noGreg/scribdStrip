(() => {
  
  let revealButton = document.getElementById("revealButton");

  if (revealButton) revealButton.onclick = () => {

    let tabParams = {
      active: true,
      currentWindow: true
    }
    
    chrome.tabs.query(tabParams, tabs => {
      let tab = tabs[0];
      let domain = tab.url.replace(/https:\/\/|http:\/\/|\/.+/gmi, "");
      let hasSubdomain = ([...domain].filter(c => c === ".")).length > 1;
      let host = hasSubdomain ? domain.replace(/\w+./, "") : domain;

      console.log({ url: tab.url, host }); 

      chrome.tabs.sendMessage(tab.id, { content: `clean:${host}` });
    });

  }
})();