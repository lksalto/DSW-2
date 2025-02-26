document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o formulário de login
    const loginForm = document.querySelector('form');

    // Adiciona um listener para o evento de submit do formulário
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário
        // Obtém os valores dos campos de e-mail e senha
        const email = document.querySelector('input[placeholder="E-mail"]').value;
        const senha = document.querySelector('input[type="password"]').value;

        // Validação básica dos campos
        if (!email || !senha) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            // Faz uma requisição para o JSON Server para buscar os usuários
            const response = await fetch('http://localhost:3000/usuarios');
            const usuarios = await response.json();

            // Verifica se há um usuário com o e-mail e senha fornecidos
            const usuario = usuarios.find(u => u.email === email && u.senha === senha);

            if (usuario) {
                // Login bem-sucedido
                alert('Login realizado com sucesso!');
                window.location.href = 'index.html'; // Redireciona para a página inicial
            } else {
                // Login falhou
                alert('E-mail ou senha incorretos.');
            }
        } catch (error) {
            // Erro na requisição
            console.error('Erro ao fazer login:', error);
            alert('Erro ao conectar ao servidor. Tente novamente mais tarde.');
        }
    });
});