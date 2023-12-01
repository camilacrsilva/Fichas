const options = {
   method: 'GET',
   headers: {
       "Content-Type": "application/json",
   }
}
var jsonData = await this.slowerFetch(url, options);

document.getElementById('nome').addEventListener('onchange', addName)

function addName() {
   document.getElementById('nome').value;

   var nome = document.getElementById('nome').value;

   var api = 'http://127.0.0.1:5000/';

   fetch(api + '/nome/?nome=' + (nome), options);
}

