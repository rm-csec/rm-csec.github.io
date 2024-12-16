const callback =  (mutations) => {
   if (document.getElementById("rolliePollie")) {
        const element = document.getElementById("rolliePollie");
        element.addEventListener('scroll', () => {
          console.log(element.scrollTop);
          if(element.scrollTop >= 722){
            element.scrollTop = 1;
          }else if(element.scrollTop <= 0){
            element.scrollTop = 720;
          }
        });
        observer.disconnect();
    }
};
var observer = new MutationObserver(callback);
observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
