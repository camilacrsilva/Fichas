
const options = {
   method: 'GET',
   mode: "no-cors",
   headers: {
         // "Content-Type": "application/json",
         // "mode":"cors",
         "Access-Control-Allow-Origin": "127.0.0.1 ",
         "Access-Control-Allow-Credentials": "true",
         "Access-Control-Allow-Methods": "GET, POST",
         "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key, Authorization",
   }
}

document.getElementById('nome').addEventListener('input', addName)

async function addName() {

   document.getElementById('nome').value;

   var nome = document.getElementById('nome').value;

   var api = 'http://127.0.0.1:5000/nome?nome=' + nome;

   fetch(api, options)
   .then(data => {
      console.log(data);
   });
   // var xmlHttp = new XMLHttpRequest();
   // xmlHttp.open("GET", `${api}${nome}`, true)
   // xmlHttp.send(null);
}

async function prencheDados(){
   nomeFicha = await fetch('http://127.0.0.1:5000/nome').then(data=>{
      return data.text()
   })
   
   document.getElementById('nome').value = nomeFicha;
   
}

prencheDados()

document.getElementById('volta').addEventListener('click', function(){
   window.location.href ="/pages/home.html";
});