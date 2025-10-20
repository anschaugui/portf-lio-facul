// JavaScript simples para iniciantes

// Função que mostra um alerta quando o formulário é enviado
function enviarFormulario() {
    alert('Mensagem enviada! (Este é apenas um exemplo)');
    return false; // Impede o envio real do formulário
}

// Adiciona a função ao formulário quando a página carrega
window.onload = function() {
    const formulario = document.querySelector('form');
    if (formulario) {
        formulario.onsubmit = enviarFormulario;
    }
    
    console.log('Página carregada!');
};