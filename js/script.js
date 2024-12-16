const callback =  (mutations) => {
   if (document.getElementById("rolliePollie")) {
        const element = document.getElementById("rolliePollie");
        element.addEventListener('scroll', () => {
          //console.log(element.scrollTop);
          if(element.scrollTop >= 723){
            element.scrollTop = 0;
          }else if(element.scrollTop <= 1){
            element.scrollTop = 720;
          }
        });
        observer.disconnect();
    }
};
var observer = new MutationObserver(callback);
observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
