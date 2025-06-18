function verificarIdade() {
    const idade = parseInt(document.getElementById("idade").value);
    const resultadoElement = document.getElementById("resultado");
    
    if (isNaN(idade)) {
        resultadoElement.textContent = "Por favor, digite uma idade válida.";
        return;
    }
    
    if (idade < 18) {
        resultadoElement.textContent = "Você é menor de idade";
    } else {
        resultadoElement.textContent = "Você é maior de idade";
    }
}

document.getElementById("idade").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        verificarIdade();
    }
});