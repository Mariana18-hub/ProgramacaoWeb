const botao1 = document.getElementById("botao1")
const botao2 = document.getElementById("botao2")
const botao3 = document.getElementById("botao3")

const mensagem = document.getElementById('Resultado');

botao1.addEventListener('click', function() {
    mensagem.innerText = 'Errou... 😓';
})

botao2.addEventListener('click', function() {
    mensagem.innerText = 'Acertouu! 😁'
})

botao3.addEventListener('click', () => {
    mensagem.innerText = 'Errou... 😓';
})