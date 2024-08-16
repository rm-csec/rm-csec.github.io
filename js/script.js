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
//router

window.fetchData = fetchData;
