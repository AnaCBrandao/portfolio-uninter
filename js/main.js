document.getElementById('submit').addEventListener('click', function () {
    // Seleciona o contêiner do formulário
    const formContainer = document.getElementById('form-container');

    // Substitui o conteúdo do contêiner com uma mensagem de sucesso
    formContainer.innerHTML = '<p class="success">Obrigada pelo contato!</p>';
});