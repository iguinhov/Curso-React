export const ContatosService = {
    listar(){
        return fetch('http://localhost:3200/Contatos')
            .then(response => response.json())
    },
    remover(id){
        return fetch('http://localhost:3200/Contatos/' + id, {
            method:"DELETE"
        })
            .then(response => response.json())
    },
    adicionar(contato){
        return fetch('http://localhost:3200/Contatos', {
            method:"POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(contato) 
            //{id:9, imagem:";/imagens/6.jpg", nome:"Teste", telefone: "11526"}
        })
            .then(response => response.json())
            .then(response => console.log(response))
    }
}