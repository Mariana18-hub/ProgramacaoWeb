const frutas = ["Abacaxi", "Goiaba", "Laranja", "Maracujá", "Uva"];

const botao = document.getElementById("botaoMostrar");

botao.addEventListener("click", function () {
  const lista = document.getElementById("lista");

lista.innerHTML = "";

frutas.forEach(function(fruta) {
  const item = document.createElement("li");
  item.textContent = fruta; 
  lista.appendChild(item);
  
});
});