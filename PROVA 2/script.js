const btnMostrar = document.getElementById('mostrar');
const mensagem = document.getElementById('mensagem');


btnMostrar.addEventListener('click', function () {
    mensagem.classList.add("oculto");
});

btnMostrar.addEventListener('click', function () {
    mensagem.classList.remove("oculto");
});

