import fetchData from "/js/script.js"
export async function getDirectory(dirName) {
  let response = await fetch(dirName);
  let str = await response.text();// JSON data from github
  const data = await JSON.parse(str); //parsed into array
  return data;
}
<<<<<<< HEAD
export function wfunc(){
  getDirectory("https://api.github.com/repos/rm-csec/rm-csec.github.io/contents/md").then(ls =>{
=======
function wfunc(){ //W function
getDirectory("https://api.github.com/repos/rm-csec/rm-csec.github.io/contents/md").then(ls =>{
  for (let i in ls) {
    document.getElementById('divWriteups').innerHTML += "<a href=\""+ ls[i].path + "\" class=\"dirList\" onclick=\"cl()\">> "+ ls[i].name +"/</a>" + "<br>";
  } 
}).catch(err => {
  console.log(err);
});
};
const cl = (event) => {
  event = event || window.event;
  event.preventDefault();
  console.log(event);
  getDirectory("https://api.github.com/repos/rm-csec/rm-csec.github.io/contents/" + event.target.pathname).then(ls =>{
    document.getElementById('divWriteups').innerHTML = ""; //cleanup div;
>>>>>>> f57ba7cb0149153e62325eed513df31bf5969301
    for (let i in ls) {
      document.getElementById('divWriteups').innerHTML += "<a href=\"writeups/"+ ls[i].name + "/\" class=\"dirList\" id=\"" + ls[i].name + "\">> "+ ls[i].name +"/</a>" + "<br>";
    }
  }).catch(err => {
    console.log(err);
  });
};
if(window.location.pathname == "/writeups"){
  wfunc();
}
document.getElementById("lWriteups").onclick = function() {
  setTimeout(() => {
    wfunc();
  }, "100");
};

export function routeDir(pname){
  getDirectory("https://api.github.com/repos/rm-csec/rm-csec.github.io/contents/md/" + pname).then(ls =>{
  document.getElementById('divWriteups').innerHTML = ""; //cleanup div;
    for (let i in ls) {
      document.getElementById('divWriteups').innerHTML += "<a href=\""+ ls[i].name + "\" class=\"dirList\">> "+ ls[i].name +"</a>" + "<br>";
    };
  }).catch(err => {
    console.log(err);
  });
}
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
