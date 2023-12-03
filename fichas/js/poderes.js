class MontaPoderes{
    async getDados(){
        var api = 'http://127.0.0.1:5000/';
    
        var jsonFicha = await fetch(api).then(data=>{
            return data.json()
        })
        return (jsonFicha["poderes"]) 

    }
    convertUTF(Nome){
        var ConvertedName = ''
        for (var i = 0; i < Nome.length; i++){
            switch(Nome[i]){
                case '_':
                    ConvertedName += ' '
                    break;
                case '1':
                    ConvertedName += 'í'
                    break;
                case '4':
                    ConvertedName += 'ã'
                    break;
                case '5':
                    ConvertedName += 'ç'
                    break;
                case '0':
                    ConvertedName += 'ó'
                    break;
                default:
                    ConvertedName += Nome[i]

            }
        }
        return (ConvertedName);

    }

    async createCountainerPower(){
        var jsonPoderes = await this.getDados()
        var listaPoder = Object.keys(jsonPoderes)
        for(var i=0; i < listaPoder.length; i++){
            var poderAtual = jsonPoderes[listaPoder[i]];

            // uma countainer por poder
            var countainerPoder = document.createElement('div');
            countainerPoder.className = 'individualPower'
            // Titulo
            var txtPoder = document.createElement('h2');
            txtPoder.innerText = poderAtual.NomePoder;

            // Botão de delete
            var iconDelete = document.createElement('a');
            iconDelete.className = 'DeleteText'
            iconDelete.innerText = 'Deletar Poder'
            // iconDelete.addEventListener('click', )
            iconDelete.setAttribute('onclick',`deletePower("${listaPoder[i]}")`)
            

            // Nome do Efeito
            var txtEfeito = document.createElement('p')

            txtEfeito.innerText = this.convertUTF(poderAtual.nomeEfeito);

            // Ação Tomada
            var txtAcao = document.createElement('p')
            txtAcao.innerText = 'Ação: '
            switch(poderAtual.acao){
                case 0:
                    txtAcao.innerText += 'Nenhuma';
                    break;
                case 1:
                    txtAcao.innerText += 'Padrao';
                    break;
                case 2:
                    txtAcao.innerText += 'Movimento';
                    break;
                case 3:
                    txtAcao.innerText += 'Livre';
                    break 
                case 4:
                    txtAcao.innerText += 'Reação';
                    break;
            }
            // Graduação
            var inputNivel = document.createElement('input')
            inputNivel.type = 'number'
            inputNivel.value = poderAtual.graduacao

            inputNivel.setAttribute('oninput',`addCustoPoder(this,"${listaPoder[i]}")`)

            // Um campo pra deletar
            var deleteCountainer = document.createElement('div')
            deleteCountainer.className = 'DeleteClass'
            deleteCountainer.appendChild(txtPoder);
            deleteCountainer.appendChild(iconDelete)           
            countainerPoder.appendChild(deleteCountainer);
            
            // container separado para Dano e Nivel
            var countainerCountDano = document.createElement('div');
            countainerCountDano.className = 'CountSpace'
            countainerCountDano.appendChild(txtEfeito);
            countainerCountDano.appendChild(inputNivel);

            countainerPoder.appendChild(countainerCountDano);            
            // Linha Ação   
            countainerPoder.appendChild(txtAcao);   


            document.getElementById('containerPoderes').appendChild(countainerPoder);

        }
    }
    async mntListEfeitos(){
        var api = 'http://127.0.0.1:5000/efeitos';
        var jsonEfeito = await fetch(api).then(data=>{
            return data.json()
        })

        // Montando Lista
        var listaEfeito = document.getElementById('efeitosLista')

        var listEfeito = Object.keys(jsonEfeito)
        for(var i=0; i < listEfeito.length; i++){
            var optNovp = document.createElement('option');
            optNovp.value = listEfeito[i];
            if(optNovp.value != 'notas'){
                listaEfeito.appendChild(optNovp);
            }           
            
        }
    }
    async reconstruirPoderes(){
        document.getElementById('containerPoderes').innerHTML = ''
        this.createCountainerPower()
    }
}
// MAIN
pedreiroHTML = new MontaPoderes();
pedreiroHTML.createCountainerPower();
pedreiroHTML.mntListEfeitos();


async function openPopPower(){
    addPower = document.getElementById('newPower');
    if (addPower.style.display == ''){
        addPower.style.display = 'flex'
    }else{
        addPower.style.display = ''
    }
        
}
function convertText(text){
    var txtConvert = ''
    for(var i=0; i < text.length; i++){
        switch(text[i]) {
            case ' ':
                txtConvert += '_'
                break;
            default:
                txtConvert += text[i];
        }
    }
    return (txtConvert);
    
}

async function submitPower(){
    var pNome = document.getElementById('nomePoder').value
    var pEfeito = document.getElementById('poderEfeito').value

    utfNome = this.convertText(pNome)
    api = `http://127.0.0.1:5000/poderes?efeito=${pEfeito}&nivel=0&nome=${utfNome}`
    if (pEfeito != ''){
        await fetch(api, {mode: "no-cors"})    
    }
    await pedreiroHTML.reconstruirPoderes()
}

async function deletePower(idDePoder){
    api = 'http://127.0.0.1:5000/delPoder?id=' + idDePoder
    await fetch(api, {mode: "no-cors"})
    await pedreiroHTML.reconstruirPoderes()    
}

async function addCustoPoder(e, idPoder){   
    api = 'http://127.0.0.1:5000/poderes?id=' + idPoder + '&nivel=' + e.value

}

document.getElementById('PopUpNovoPoder').addEventListener('click', openPopPower)