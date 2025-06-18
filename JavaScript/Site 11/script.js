
const btnAmarelo =document.getElementById('amarelo');
const btnRoxo =document.getElementById('roxo');
const btnAzul =document.getElementById('azul');

btnAmarelo.addEventListener('click', function() {
document.body.style.backgroundColor = "rgb(234, 234, 128)";
});

btnRoxo.addEventListener('click', function() {
document.body.style.backgroundColor = "rgb(195, 124, 195)";
});

btnAzul.addEventListener('click', function() {
document.body.style.backgroundColor = "rgb(73, 148, 213)";
});

