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
document.getElementById("render").onload = fetchData('/md/VikeCTF.md');
