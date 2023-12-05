function periciaAPI(e){
    console.log(e);
    id = e.currentTarget.name
    valor = e.currentTarget.value
    api = 'http://127.0.0.1:5000/pericias?';

    api = api + 'ID=' + id + '&valor=' + valor;

    fetch(api, { mode: "no-cors"})
}

async function main(){
    construtor = document.getElementById('BuildPericias')
    api = 'http://127.0.0.1:5000/pericias';
    jsonPericias = await fetch(api)
    .then(data => {
        return (data.json());
    })
    // jsonPericias = json['pericias']
    keyJson = Object.keys(jsonPericias)

    var ContainerDiv = document.createElement("div");

    for(var i = 0; i < keyJson.length; i++){
        //adjuda no CSS
        var subContainerDiv = document.createElement("div");
        
        // Criar Texto
        var txtPERI = document.createElement("p");
        txtPERI.innerText = jsonPericias[keyJson[i]].nome        

        // Criar input
        var InputPERI = document.createElement("input");
        InputPERI.type = 'number';
        InputPERI.name = keyJson[i];
        InputPERI.id = 'PeriID'   
        InputPERI.addEventListener("input", periciaAPI);
        InputPERI.value = jsonPericias[keyJson[i]].bonus;

        // console.log(jsonPericias[keyJson[i]])
        subContainerDiv.appendChild(txtPERI);
        subContainerDiv.appendChild(InputPERI);
        ContainerDiv.appendChild(subContainerDiv);

    }
    construtor.appendChild(ContainerDiv);
    return 1
    
    
}

requsicao = main()
