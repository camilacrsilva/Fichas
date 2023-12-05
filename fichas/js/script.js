//Criação e Autenticação de Usuários

function entrar() {

  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
  
  //método de login de usuários existentes no firebase
  firebase.auth().signInWithEmailAndPassword(email, senha)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.href ="/pages/home.html"
    // ...
  }).catch(function (error) {
    // Lide com erros aqui
    var codigoErro = error.code;
    var mensagemErro = error.message;
    window.alert('Erro : ' + mensagemErro);
  });

}

function criaConta() {
  window.location.href ="/pages/criaConta.html";
}

function novoUser() {
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;

  firebase.auth().createUserWithEmailAndPassword(email, senha)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.alert('Conta criada com sucesso!');
    window.location.href ="/pages/home.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

function sair() {
  firebase.auth().signOut();
  window.location.href ="../index.html";
}

//------------------------------------------------------------------------------------------------//
//Criação de Fichas
function novaFicha() {
  url = 'http://127.0.0.1:5000/post'
  fetch(url, {mode: "no-cors"})
}