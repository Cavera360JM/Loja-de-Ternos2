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
// Captura os elementos das células da tabela de informações
const sizeCell = document.getElementById('size');
const materialCell = document.getElementById('material');
const colorCell = document.getElementById('color');

// Adiciona um evento de clique a cada célula
sizeCell.addEventListener('click', () => {
    // Alterna a visibilidade das outras células
    materialCell.style.display = 'none';
    colorCell.style.display = 'none';
});

materialCell.addEventListener('click', () => {
    // Alterna a visibilidade das outras células
    sizeCell.style.display = 'none';
    colorCell.style.display = 'none';
});

colorCell.addEventListener('click', () => {
    // Alterna a visibilidade das outras células
    sizeCell.style.display = 'none';
    materialCell.style.display = 'none';
});

