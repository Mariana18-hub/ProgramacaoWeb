function mostrarMensagem() {
    const hora = new Date().getHours();
    const horaFormatada = hora.toString().padStart(2, '0') + 'hrs';
    
    let saudacao;
    if (hora < 12) saudacao = 'Bom dia, agora são:';
    else if (hora < 18) saudacao = 'Boa tarde, agora são:';
    else saudacao = 'Boa noite, agora são:';
    
    document.getElementById('mensagem').textContent = `${saudacao} (${horaFormatada})`;
}