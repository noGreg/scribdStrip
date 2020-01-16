(function(){
    chrome.runtime.onMessage.addListener(receiveedMessage);

    function receiveedMessage(message, sender, sendResponse) {
        if (message.content == 'clean') {
            let pages = document.querySelectorAll('.outer_page');

            Array.from(pages).forEach(page => {
                try {
                    // remove promo pop-up from page

                    let promo = page.querySelector('.auto__doc_page_webpack_doc_page_blur_promo');
                    promo.parentElement.removeChild(promo);

                    // Search for blured text and set to normal
                    
                    let blurWraps = page.querySelectorAll('[class^="ff"]');
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

                    // Search for blured images and set to normal

                    let blurImages = page.querySelectorAll('img');
                    Array.from(blurImages).forEach(img => {
                        Object.assign(img.style, {
                            webkitTransition: 'all .5s',
                            transition: 'all .5s'
                        });
                    });

                    Array.from(blurImages).forEach(img => (img.style.opacity = 1));
                } catch(err) {}
            });
        }
    }
})();