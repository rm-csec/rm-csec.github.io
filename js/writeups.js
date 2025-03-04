//function that gets writeup data from the github api cuz dir listing is disabled for github pages :sob:
export async function getDirectory(dirName) {
  let response = await fetch(dirName);
  let str = await response.text();// JSON data from github
  const data = await JSON.parse(str); //parsed into array
  return data;
}
let c = [];
/*
const cb =  (mutations) => {
         if (document.getElementById("lWriteups")) {
              document.getElementById("lWriteups").addEventListener("mouseover", function(){
                
              });
              obs.disconnect();
          }
}
var obs = new MutationObserver(cb);
*/
//preload
if(window.location.pathname == "/"){
  getDirectory("https://api.github.com/repos/rm-csec/rm-csec.github.io/contents/md").then(ls =>{
    sessionStorage.setItem("dir", JSON.stringify(ls));
  }).catch(err => {
    console.log(err);
  });
}
//function that renders the ctf event lists for /writeups
export function wfunc(){ //W function
  if(!sessionStorage.getItem("dir")){
    console.log(":(");
    document.getElementById('divWriteups').innerHTML = "<a href=/>/</a><b>writeups/</b><br>"
    getDirectory("https://api.github.com/repos/rm-csec/rm-csec.github.io/contents/md").then(ls =>{
      for (let i in ls) {
        document.getElementById('divWriteups').innerHTML += "<br>" + "<a href=\"writeups/"+ ls[i].name + "/\" class=\"dirList\" style='font-size: 1vw;font-weight: 300;' id=\"" + ls[i].name + "\">> "+ ls[i].name +"/</a>";
      } 
    }).catch(err => {
      console.log(err);
    });
  }else{
    c = JSON.parse(sessionStorage.getItem("dir"));
    console.log("werks");
    document.getElementById('divWriteups').innerHTML = "<a href=/>/</a><b>writeups/</b><br>"
    for(let i in c){
        document.getElementById('divWriteups').innerHTML += "<br>" + "<a href=\"writeups/"+ c[i].name + "/\" class=\"dirList\" style='font-size: 1vw;font-weight: 300;' id=\"" + c[i].name + "\">> "+ c[i].name +"/</a>";
    }
  }
};
/*
const cl = (event) => {
  event = event || window.event;
  event.preventDefault();
  console.log(event);
  getDirectory("https://api.github.com/repos/rm-csec/rm-csec.github.io/contents/" + event.target.pathname).then(ls =>{
    document.getElementById('divWriteups').innerHTML = ""; //cleanup div;
    for (let i in ls) {
      document.getElementById('divWriteups').innerHTML += "<a href=\"writeups/"+ ls[i].name + "/\" class=\"dirList\" id=\"" + ls[i].name + "\">> "+ ls[i].name +"/</a>" + "<br>";
    }
  }).catch(err => {
    console.log(err);
  });
};
*/

const callback =  (mutations) => {
   if (document.getElementById("divWriteups")) {
        wfunc();
        observer.disconnect();
    }
};
var observer = new MutationObserver(callback);
if(window.location.pathname == "/writeups"){
  observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
}
/*
document.getElementById("lWriteups").onclick = function() {
  observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
};
*/

//function that renders /writeups/ctfname 
export function routeDir(pname){
  getDirectory("https://api.github.com/repos/rm-csec/rm-csec.github.io/contents/md/" + pname).then(ls =>{
  document.getElementById('divWriteups').innerHTML = ""; //cleanup div;
    for (let i in ls) {
      document.getElementById('divWriteups').innerHTML = "<a href=/>/</a><a href=/writeups>writeups/</a><b>" + pname + "</b><br>"
      document.getElementById('divWriteups').innerHTML += "<br><a href=\""+ ls[i].name + "\" class=\"dirList\" style='font-size: 1vw;font-weight: 300;'>> "+ ls[i].name +"</a>";
    };
  }).catch(err => {
    console.log(err);
  });
};
/*
const cl = (event) => {
  event = event || window.event;
  event.preventDefault();
  console.log(event);
  routeDir(event.target.pathname);
};
const gg = (event) => { //does anyone know what the hell is this
  event = event || window.event;
  event.preventDefault();
};
*/
