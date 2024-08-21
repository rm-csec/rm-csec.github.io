import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
async function fetchData(file, id) {
  try {
    const f = await fetch(file);
    const data = await f.text();
    document.getElementById(id).innerHTML = await marked.parse(data); 
  }catch (error){
    document.getElementById(id).innerText = 'An error occurred while fetching data.';
    console.error('Error fetching data:', error);
  }
};
if(window.location.pathname == "/"){
  setTimeout(() => {
    window.onload = fetchData('/md/n00bzCTF_2024/web_focus-on-yourSELF.md', 'render');
  }, "100");
}
document.getElementById("home").onclick = function(){
  setTimeout(() => {
    window.onload = fetchData('/md/n00bzCTF_2024/web_focus-on-yourSELF.md', 'render');
  }, "100");
}; 
export default fetchData;
//fix this
