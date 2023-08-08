const form = document.querySelector("#novoitem")
const lista = document.querySelector('#lista')
const itens = JSON.parse(localStorage.getItem("itens")) || [] 
// Para consultar o que há dentro do localStorage, utilizamos o 'getItem', porém pra retornar a um objeto e podermos utilizar no site, utilizamos o 'parse'

itens.forEach( (elemento) => {
    criaElemento(elemento) 
    // Para pordemos percorrer todos os elementos dentro do array, utilizamos o forEach
})

form.addEventListener("submit", (evento) =>{
    evento.preventDefault() 
    // Interrompemos o comportamento padrão dos formulários

    const nome = evento.target['nome']
    const quantidade = evento.target['quantidade'] 

    const itemAtual = {
    "nome": nome.value,
    "quantidade": quantidade.value}  
    // Definimos a chave e o que seria guardado nela com um objeto
    
    criaElemento(itemAtual)
    
    itens.push(itemAtual) 
    // adicionamos os itens no array com a função push
    
    localStorage.setItem("itens", JSON.stringify(itens)) 
        // Utilizamos JSON.stringfy para transformar o objeto em string pois localStorage só guarda strings
    
        nome.value = ""
    quantidade.value = ""
})

 function criaElemento(item){ 

const novoItem = document.createElement('li') // Criamos um elemento utilizando CreateElement
novoItem.classList.add("item") // Adicionamos uma classe utilizando ClassList e add.

const numeroItem = document.createElement('strong')
numeroItem.innerHTML = item.quantidade 

novoItem.appendChild(numeroItem) // adicionamos algo dentro de outro com appendChild
novoItem.innerHTML += item.nome 

lista.appendChild(novoItem)
}