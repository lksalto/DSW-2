document.addEventListener('DOMContentLoaded', () => {
    const cadastroForm = document.getElementById('cadastroForm');

    cadastroForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário
        // Obtém os valores dos campos do formulário
        const nome = document.querySelector('input[placeholder="Nome"]').value;
        const email = document.querySelector('input[placeholder="E-mail"]').value;
        const senha = document.querySelector('input[placeholder="Senha"]').value;
        const confirmarSenha = document.querySelector('input[placeholder="Confirmar Senha"]').value;

        // Validação básica dos campos
        if (!nome || !email || !senha || !confirmarSenha) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Verifica se as senhas coincidem
        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem. Tente novamente.');
            return;
        }

        try {
            // Faz uma requisição POST para o JSON Server para cadastrar o novo usuário
            const response = await fetch('http://localhost:3000/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    email: email,
                    senha: senha
                })
            });

            if (response.ok) {
                // Cadastro bem-sucedido
                alert('Cadastro realizado com sucesso!');
                window.location.href = 'login.html'; // Redireciona para a página de login
            } else {
                // Cadastro falhou
                alert('Erro ao cadastrar usuário. Tente novamente.');
            }
        } catch (error) {
            // Erro na requisição
            console.error('Erro ao cadastrar usuário:', error);
            alert('Erro ao conectar ao servidor. Tente novamente mais tarde.');
        }
    });
});