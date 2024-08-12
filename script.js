fetch('/md/VikeCTF.md')
  .then(response => response.text())
  .then(data => {
    document.getElementById("render").innerHTML = data; 
  })
  .catch(error => console.error('Error fetching the file:', error));
