function somar() {

    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);

    const soma = num1 + num2;

    document.getElementById('resultado').textContent = `Resultado: ${soma}`;

}

