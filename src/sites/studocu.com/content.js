(function(){
    chrome.runtime.onMessage.addListener(receiveedMessage);

    function receiveedMessage(message) {
        if (message.content !== 'clean:studocu.com') return undefined; 
        
        try {

            const head = document.head;
            const floatingBox = document.querySelector('[class^=preview-banner]'); 
            const style = document.createElement("style");
            const pagesWrapper = document.getElementById('page-container');
            
            floatingBox.style.display = 'none';

            style.innerText = `
                .no-blur{filter:none!important;}
            `;

            head.appendChild(style);

            Array.from(pagesWrapper.children).forEach(page => page.classList.add("no-blur"));

        } catch(err) {}
    }
})();