(function(){
    chrome.runtime.onMessage.addListener(receiveedMessage);

    function receiveedMessage(message) {
        if (message.content !== 'clean:scribd.com') return undefined; 
        
        const pages = document.querySelectorAll('.outer_page');

        Array.from(pages).forEach(page => {
            try {

                //#region -- remove promo pop-up from page

                    const promo = page.querySelector('.auto__doc_page_webpack_doc_page_blur_promo');
                    promo.parentElement.removeChild(promo);

                //#endregion

                //#region -- Search for blured text and set to normal
                    
                    const blurWraps = page.querySelectorAll('[class^="ff"]');
                    
                    blurWraps.forEach(blurGroup => {
                        Array.from(blurGroup.children).forEach(span => {
                            Object.assign(span.style, {
                                webkitTransition: 'all .5s',
                                transition: 'all .5s'
                            });
                        });
                        
                        Array.from(blurGroup.children).forEach(span => {
                            span.style.textShadow = 'black 0px 0px 1px';
                            span.style.userSelect = 'text';
                            span.removeAttribute('unselectable');
                        });
                    });

                //#endregion

                //#region -- Search for blured images and set to normal

                    const blurImages = page.querySelectorAll('img');

                    Array.from(blurImages).forEach(img => {
                        Object.assign(img.style, {
                            webkitTransition: 'all .5s',
                            transition: 'all .5s'
                        });
                    });

                    Array.from(blurImages).forEach(img => (img.style.opacity = 1));

                //#endregion

            } catch(err) {}
        });
    }
})();