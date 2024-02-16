// Captura todos os botões "Adicionar ao Carrinho"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Adiciona um evento de clique a cada botão
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Muda a cor de fundo para verde ao clicar
        button.style.backgroundColor = 'green';
        
        // Define um atraso para restaurar a cor original (vermelha)
        setTimeout(() => {
            button.style.backgroundColor = 'red';
        }, 1000); // Tempo em milissegundos (1 segundo neste caso)
    });
});

