document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');

    // Recupera o carrinho do localStorage
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Exibe os itens do carrinho
    if (carrinho.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-gray-600 dark:text-gray-400">Seu carrinho está vazio.</p>';
    } else {
        carrinho.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('bg-gray-100', 'dark:bg-gray-800', 'rounded-lg', 'shadow-lg', 'p-4');

            itemElement.innerHTML = `
                <div class="flex items-center gap-4">
                    <img src="${item.imagem}" alt="${item.nome}" class="w-16 h-16 object-cover rounded">
                    <div>
                        <h3 class="text-lg font-bold text-gray-800 dark:text-white">${item.nome}</h3>
                        <p class="text-green-600 dark:text-green-400 font-semibold">R$ ${item.preco.toFixed(2)}</p>
                    </div>
                </div>
            `;

            cartItemsContainer.appendChild(itemElement);
        });
    }
});

// Função para finalizar a compra
function finalizarCompra() {
    localStorage.removeItem('carrinho'); // Limpa o carrinho
    alert('Compra finalizada com sucesso!');
    window.location.href = 'index.html'; // Redireciona para a página inicial
}