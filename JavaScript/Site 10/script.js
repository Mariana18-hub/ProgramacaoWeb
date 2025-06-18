const nome = document.getElementById("Nome").value;
const classe = document.getElementById("Classe").value;
const força = document.getElementById("Força").value;
const imagem = document.getElementById("Imagem").value;

const novoPersonagem = {
    nome: nome,
    classe: classe,
    força: Number (força),
    imagem: imagem,
};