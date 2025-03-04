import { wfunc, getDirectory, routeDir } from "/js/writeups.js";
import fetchData from "/js/funs.js";

//This function is called whenevr you click on a link in the navbar
//This makes it so that the site doesn't go to the original intended url
const route = (event) => {
    event = event || window.event; //takes click event
    event.preventDefault();
    window.history.pushState({}, "", event.target.href); //manipulates url
    handleLocation(); //renders route accordingly
};

//function that gets HTML file and renders it
async function getHTML(r){
    const html = await fetch(r).then((data) => data.text());
    document.getElementById("content").innerHTML = html;
};

//predefined routes
const routes = {
    404 : "/pages/404.html",
    "/" : "/pages/index.html",
    "/writeups": "/pages/writeups.html",
    "/writeups/": "/pages/writeups.html",
    "/about": "/pages/about.html",
    "/members": "/pages/members.html",
};

//function that handles rendering the routes accordingly
const handleLocation = async () => {
    const path = window.location.pathname; //takes the url
    const route = routes[path] || routes[404]; //checks which html file should be rendered
    getHTML(route); //renders
};

//routing for writeups page starts here
//messy ahh
function handle() {
  if(window.location.pathname.includes("/writeups/")){
    let path = window.location.pathname.replace("/writeups/", ""); //get where in writeups ur supposed to go
    if (path == ""){
      //blank means just /writeups/
      handleLocation();
    }else if(window.location.pathname.includes(".md")){ //This is for actual writeupfile routes not folder routes
      let path = window.location.pathname.replace("/writeups/", "/md/"); //get file name
      const callback =  (mutations) => {
         if (document.getElementById("divWriteups")) {
              let e = window.location.pathname;
              document.getElementById('divWriteups').innerHTML = "<a href=/>/</a><a href=/writeups>writeups/</a><a href=" + e.replace(/[^\/]+\.md$/,"") + ">"+ e.match(/(?<=writeups\/)([^\/]+\/)/g) + "</a>"+ e.match(/[^\/]+\.md$/) + "</b><br>"
              fetchData(path, 'divWriteups'); //render
              observer.disconnect();
          }
      };
      var observer = new MutationObserver(callback);
      //console.log(path);
      if (screen.width <= 700){ //mobile detection
        console.log("mobile mode triggered!");
        getHTML("/pages/writeups-mobile.html");
      }else{
        getHTML("/pages/writeups.html");
      }
      observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true}); 
    }else{ //This is for folder routes like /writeups/ctfname
      const callback =  (mutations) => {
         if (document.getElementById("divWriteups")) {
              routeDir(path); //render
              observer.disconnect();
          }
      };
      var observer = new MutationObserver(callback);
      if (screen.width <= 700){ //mobile detection
        console.log("mobile mode triggered!");
        getHTML("/pages/writeups-mobile.html");
        observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true}); 
      } else{
        getHTML("/pages/writeups.html");
        observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true}); 
      }
      
    }
  }
  else{ //If the req is not for /writeups, handle accordingly
    //handleLocation();
    if (screen.width <= 700){ //mobile detection
      console.log("mobile mode triggered!");
      getHTML("/pages/index-mobile.html");
    } else{
      console.log("desktop mode triggered!")
      handleLocation();
    }
  }
}
//listner for navbar clicks
handle();
//handles back and forward arrows for browser
window.onpopstate = (event) => {
  /*console.log(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
  );*/
  document.location.reload();
};
export default route;

