function inputAPI(e){
    api = 'http://127.0.0.1:5000/habilidades?';
    valor = Number(e.currentTarget.value);
    id = e.currentTarget.name;

    api = api + 'ID=' + id + '&valor=' + valor;

    fetch(api, { mode: "no-cors"})
}

forca = document.getElementById('habiliForcaValue')
destreza = document.getElementById('habiliDestrezaValue')
agilidade = document.getElementById('habiliAgilidadeValue')
vigor = document.getElementById('habiliVigorValue')
luta = document.getElementById('habiliLutaValue')
intelecto = document.getElementById('habiliIntelectoValue')
prontidao = document.getElementById('habiliProntidaoValue')
presenca = document.getElementById('habiliPresencaValue')

forca.addEventListener('input', inputAPI) 
destreza.addEventListener('input', inputAPI) 
agilidade.addEventListener('input', inputAPI) 
vigor.addEventListener('input', inputAPI) 
luta.addEventListener('input', inputAPI) 
intelecto.addEventListener('input', inputAPI) 
prontidao.addEventListener('input', inputAPI) 
presenca.addEventListener('input', inputAPI) 

/* Checa se valores já foram preenchidos */
async function PreencheResposta(){
    repostaAPI = await fetch('http://127.0.0.1:5000/habilidades')
    .then(data => {
        return data.json();
    })
    
    forca.value = repostaAPI['FOR']['valor']
    destreza.value = repostaAPI['DES']['valor']
    agilidade.value = repostaAPI['AGI']['valor']
    vigor.value = repostaAPI['VIG']['valor']
    luta.value = repostaAPI['LUT']['valor']
    intelecto.value = repostaAPI['INT']['valor']
    prontidao.value = repostaAPI['PRO']['valor']
    presenca.value = repostaAPI['PRE']['valor']

}

PreencheResposta();

