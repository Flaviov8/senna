// Captura o botão de enviar
document.getElementById('whatsappButton').addEventListener('click', function() {
    // Captura os valores dos campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validação básica
    if (name === '' || phone === '' || service === '' || message === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Formata a mensagem para o WhatsApp
    const whatsappMessage = `✅ *SOLICITAÇÃO DE ORÇAMENTO - SN PINTURAS* ✅\n\n` +
                            `👤 *Nome:* ${name}\n` +
                            `📧 *Email:* ${email || 'Não informado'}\n` +
                            `📞 *Telefone:* ${phone}\n\n` +
                            `🛠️ *Serviço Desejado:* ${service}\n\n` +
                            `📝 *Detalhes do Serviço:*\n${message}\n\n` +
                            `💬 *Informações Adicionais:*\n` +
                            `- Tipo de ambiente (residencial/comercial)\n` +
                            `- Metragem aproximada\n` +
                            `- Prazo desejado\n` +
                            `- Preferência de cores/texturas`;

    const encodedMessage = encodeURIComponent(whatsappMessage); // Codifica a mensagem para URL

    // Link do WhatsApp com a mensagem pré-preenchida
    const whatsappLink = `https://wa.me/5511976085490?text=${encodedMessage}`;

    // Redireciona para o WhatsApp
    window.open(whatsappLink, '_blank');
});