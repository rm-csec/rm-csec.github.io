const callback =  (mutations) => {
   if (document.getElementById("rolliePollie")) {
        const element = document.getElementById("rolliePollie");
        let vale = element.scrollHeight - element.clientHeight; 
        element.addEventListener('scroll', () => {
          console.log(element.scrollTop);
          if(element.scrollTop >= vale){
            element.scrollTop = vale - (element.clientHeight*1.3);
          }else if(element.scrollTop <= 0){
            element.scrollTop = 720;
          }
        });
        observer.disconnect();
    }
};
var observer = new MutationObserver(callback);
observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
