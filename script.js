<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elegância Sob Medida - Loja de Ternos</title>
    <!-- Favicon -->
    <link rel="icon" href="https://www.example.com/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Cabeçalho -->
    <header id="main-header">
        <div class="container">
            <h1>Elegância Sob Medida - Loja de Ternos</h1>
            <nav>
                <ul>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#informacoes">Informações</a></li>
                    <li><a href="#sobre">Sobre Nós</a></li>
                    <li><a href="#testimonials">Depoimentos</a></li>
                    <li><a href="#contatos">Contato</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Botões "Adicionar ao Carrinho" -->
    <section id="ternos" class="products">
        <div class="container">
            <div class="product">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcxlLuQee1hz2__noGKzxi3qpwxWMxDrMKvg&usqp=CAU" alt="Terno Azul">
                <h3>Terno Azul</h3>
                <p class="price">R$ 299,99</p>
                <button class="add-to-cart">Adicionar ao carrinho</button>
            </div>
            <div class="product">
                <img src="https://viadoterno.cdn.plataformaneo.com.br/produto/multifotos/20220825153055_9119990881_DM.jpg" alt="Terno Preto">
                <h3>Terno Preto</h3>
                <p class="price">R$ 349,99</p>
                <button class="add-to-cart">Adicionar ao carrinho</button>
            </div>
            <div class="product">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7T5ATKThyrNcCAB7agGLa_DSAuWeTWk7m1Q&usqp=CAU" alt="Terno Cinza">
                <h3>Terno Cinza</h3>
                <p class="price">R$ 249,99</p>
                <button class="add-to-cart">Adicionar ao carrinho</button>
            </div>
            <div class="product">
                <img src="https://shoppingcity.com.br/media/catalog/product/cache/51a80c9da94f85ac42b65ba251e9fd91/t/e/terno_masculino_vinho_slim_fit_tommy_2.jpg" alt="Terno Vinho">
                <h3>Terno Vinho</h3>
                <p class="price">R$ 399,99</p>
                <button class="add-to-cart">Adicionar ao carrinho</button>
            </div>
        </div>
    </section>

    <script>
        // Função para gerar uma cor cinza aleatória
        function getRandomGray() {
            const randomValue = Math.floor(Math.random() * 156) + 100; // Valores entre 100 e 255 para tons de cinza mais claros
            return `rgb(${randomValue}, ${randomValue}, ${randomValue})`;
        }

        // Função para atualizar a cor de fundo do cabeçalho
        function updateHeaderBackground() {
            const header = document.getElementById('main-header');
            header.style.backgroundColor = getRandomGray();
        }

        // Atualiza a cor de fundo do cabeçalho a cada 2 segundos
        setInterval(updateHeaderBackground, 2000);

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
    </script>
</body>
</html>

