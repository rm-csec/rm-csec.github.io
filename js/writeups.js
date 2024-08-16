async function getDirectory(dirName) {
  let response = await fetch(dirName);
  let str = await response.text();// JSON data from github
  const data = await JSON.parse(str); //parsed into array
  return data;
}
function wfunc(){
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
    for (let i in ls) {
      console.log(i);
      document.getElementById('divWriteups').innerHTML += "<a href=\""+ ls[i].path + "\" class=\"dirList\" onclick=\"fetchData(\'"+ ls[i].path + "\', \'divWriteups\'); gg();\">> "+ ls[i].name +"</a>" + "<br>";
    };
  }).catch(err => {
    console.log(err);
  });
};
const gg = (event) => {
  event = event || window.event;
  event.preventDefault();
};
