import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
async function fetchData(file) {
  try {
    const f = await fetch(file);
    const data = await f.text();
    document.getElementById('render').innerHTML = marked.parse(data);
  }catch (error){
    document.getElementById('render').innerText = 'An error occurred while fetching data.';
    console.error('Error fetching data:', error);
  }
}
async function getDirectory(dirname) {
  let response = await fetch(dirname);
  let str = await response.text();
  console.log(str); // This is all data from a dir
  let e = document.createElement('html');
  e.innerHTML = str;
  let list = e.getElementsByTagName("li")[0].getElementsByTagName("a");
  console.log(list);

}
getDirectory("/md")
document.getElementById("render").onload = fetchData('/md/VikeCTF.md');
