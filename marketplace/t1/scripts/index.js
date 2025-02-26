document.addEventListener('DOMContentLoaded', () => {
    const produtosContainer = document.getElementById('localProdutos');

    // Função para carregar os discos do JSON Server
    async function loadDiscos() {
        try {
            const response = await fetch('http://localhost:3000/discos');
            const discos = await response.json();
            exibeDiscos(discos);
        } catch (error) {
            console.error('Erro ao carregar discos:', error);
        }
    }

    // Função para exibir os discos na página
    function exibeDiscos(discos) {
        produtosContainer.innerHTML = ''; // Limpa o conteúdo anterior

        discos.forEach(disco => {
            const produtoElement = document.createElement('div');
            produtoElement.classList.add('bg-gray-100', 'dark:bg-gray-800', 'rounded-lg', 'shadow-lg', 'flex', 'flex-col', 'items-center', 'p-4', 'relative');

            produtoElement.innerHTML = `
                <div class="relative w-full h-40 rounded-t-lg overflow-hidden group">
                    <img src="${disco.imagem}" alt="${disco.nome}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p><strong>Nome:</strong> ${disco.nome}</p>
                        <p><strong>Artista:</strong> ${disco.artista}</p>
                    </div>
                </div>
                <h3 class="mt-4 text-lg font-bold text-gray-800 dark:text-white">${disco.nome}</h3>
                <p class="text-green-600 dark:text-green-400 font-semibold mt-2">R$ ${disco.preco.toFixed(2)}</p>
                <button onclick="addToCart(${disco.id})" 
                    class="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
                    Adicionar ao Carrinho
                </button>
            `;

            produtosContainer.appendChild(produtoElement);
        });
    }

    // Função para adicionar um disco ao carrinho
    window.addToCart = async (discoId) => {
        try {
            const response = await fetch('http://localhost:3000/carrinho', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ disco_id: discoId })
            });

            if (response.ok) {
                alert('Disco adicionado ao carrinho!');
            } else {
                alert('Erro ao adicionar disco ao carrinho.');
            }
        } catch (error) {
            console.error('Erro ao adicionar ao carrinho:', error);
        }
    };

    // Carrega os discos ao carregar a página
    loadDiscos();
});