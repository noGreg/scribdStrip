(() => {
  
  const revealButton = document.getElementById("revealButton");

  if (revealButton) revealButton.onclick = () => {

    const tabParams = {
      active: true,
      currentWindow: true
    }
    
    chrome.tabs.query(tabParams, tabs => {
      const tab = tabs[0];
      const domain = tab.url.replace(/https:\/\/|http:\/\/|\/.+/gmi, "");
      const hasSubdomain = ([...domain].filter(c => c === ".")).length > 1;
      const host = hasSubdomain ? domain.replace(/\w+./, "") : domain;

      chrome.tabs.sendMessage(tab.id, { content: `clean:${host}` });
    });

  }
})();