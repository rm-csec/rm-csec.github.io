const callback =  (mutations) => {
   if (document.getElementById("rolliePollie")) {
        const element = document.getElementById("rolliePollie");
        console.log(element.scrollHeight);
        let vale = element.scrollHeight - element.clientHeight; 
        element.addEventListener('scroll', () => {
          console.log(element.scrollTop);
          if(element.scrollTop >= vale - 30){
            element.scrollTop = 10;
          }else if(element.scrollTop <= 0){
            element.scrollTop = vale - 40;
          }
        });
        observer.disconnect();
    }
};
var observer = new MutationObserver(callback);
observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
