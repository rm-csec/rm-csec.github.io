import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
//TO DO: Performace improvements, mobile ver, other pages
//function that renders markdown file inside a specific element
async function fetchData(file, id) {
  try {
    const f = await fetch(file);
    const data = await f.text();
    document.getElementById(id).innerHTML += await marked.parse(data); 
  }catch (error){
    document.getElementById(id).innerText = 'An error occurred while fetching data.';
    console.error('Error fetching data:', error);
  }
};

/*
//function to execute when "render" div is loaded
const callback =  (mutations) => {
   if (document.getElementById("logo")) {
        fetchData('/md/n00bzCTF_2024/web_focus-on-yourSELF.md', 'render');
        observer.disconnect();
    }
};

//observe for the div "render" to appear in dom
var observer = new MutationObserver(callback);
observer.observe(document, {attributes: true, childList: true, characterData: false, subtree:true});

//same thing but for navbar button
document.getElementById("home").onclick = function(){
  observer.observe(document, {attributes: true, childList: true, characterData: false, subtree:true});
};
*/
export default fetchData;
//fix this
