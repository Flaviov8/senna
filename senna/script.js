// Captura o botão de enviar
document.getElementById('whatsappButton').addEventListener('click', function() {
    // Captura os valores dos campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validação básica
    if (name === '' || email === '' || message === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Formata a mensagem para o WhatsApp
    const whatsappMessage = `Olá, meu nome é ${name} (${email}). Minha mensagem é: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage); // Codifica a mensagem para URL

    // Link do WhatsApp com a mensagem pré-preenchida
    const whatsappLink = `https://wa.me/5511976085490?text=${encodedMessage}`;

    // Redireciona para o WhatsApp
    window.open(whatsappLink, '_blank');
});