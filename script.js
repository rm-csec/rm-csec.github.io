import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
async function fetchData() {
  try {
    const f = await fetch('/md/VikeCTF.md');
    const data = await f.text();
    document.getElementById('render').innerHTML = marked.parse(data);
  }catch (error){
    document.getElementById('render').innerText = 'An error occurred while fetching data.';
    console.error('Error fetching data:', error);
  }
}
fetchData();
