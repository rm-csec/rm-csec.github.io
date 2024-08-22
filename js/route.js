import { wfunc, getDirectory, routeDir } from "/js/writeups.js";
import fetchData from "/js/script.js";
const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};
async function getHTML(r){
    const html = await fetch(r).then((data) => data.text());
    document.getElementById("content").innerHTML = html;
};

const routes = {
    404 : "/pages/404.html",
    "/" : "/pages/index.html",
    "/writeups": "/pages/writeups.html",
    "/writeups/": "/pages/writeups.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    getHTML(route);
};

if(window.location.pathname.includes("/writeups/")){
  let path = window.location.pathname.replace("/writeups/", "");
  if (path == ""){
    handleLocation();
  }else if(window.location.pathname.includes(".md")){
    let path = window.location.pathname.replace("/writeups/", "/md/");
    console.log(path);
    if (screen.width <= 700){ //mobile detection
      console.log("mobile mode triggered!");
      getHTML("/pages/writeups-mobile.html");
    }else{
      getHTML("/pages/writeups.html");
    }
    setTimeout(() => {
      fetchData(path, 'divWriteups');
    }, "100");
  }else{
    if (screen.width <= 700){ //mobile detection
      console.log("mobile mode triggered!");
      getHTML("/pages/writeups-mobile.html");
      setTimeout(() => {
        routeDir(path);
      }, "100");
    } else{
      getHTML("/pages/writeups.html");
      setTimeout(() => {
        routeDir(path);
      }, "100");
    }
    
  }
}
else{
  if (screen.width <= 700){ //mobile detection
    console.log("mobile mode triggered!");
    getHTML("/pages/index-mobile.html");
  } else{
    console.log("desktop mode triggered!")
    handleLocation();
  }

  
}
const items = document.querySelectorAll(".l");
Array.from(items).forEach(function(items){
  items.addEventListener('click', route);
});
window.onpopstate = handleLocation;
export default route;

//let path = window.location.pathname.replace("/writeups/", "");
