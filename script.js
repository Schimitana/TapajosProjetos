function openTab(tabId) {
    // Esconde todos os conteúdos
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove a classe 'active' de todos os botões
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Mostra o conteúdo da aba selecionada
    document.getElementById(tabId).classList.add('active');

    // Ativa o botão clicado
    event.currentTarget.classList.add('active');
}

// Abre a primeira aba ao carregar
window.onload = function() {
    document.querySelector('.tab-btn.active').click();
};