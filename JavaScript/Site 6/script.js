function somar() {

    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);

    const soma = num1 + num2;

    document.getElementById('resultado').textContent = `Resultado: ${soma}`;

}
function subtrair() {

    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);

    const subtração = num1 - num2;

    document.getElementById('resultado').textContent = `Resultado: ${subtração}`;

}
function multiplicar() {

    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);

    const multiplicação = num1 * num2;

    document.getElementById('resultado').textContent = `Resultado: ${multiplicação}`;

}
function dividir() {

    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);

    const divisão = num1 / num2;

    document.getElementById('resultado').textContent = `Resultado: ${divisão}`;

}