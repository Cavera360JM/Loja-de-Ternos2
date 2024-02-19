// script.js
const carList = document.getElementById('carList');
const searchInput = document.getElementById('searchInput');
const sortBySelect = document.getElementById('sortBy');
const brandFilter = document.getElementById('brandFilter');
const priceFilter = document.getElementById('priceFilter');
let carData = [
  { id: 1, brand: 'Toyota', model: 'Corolla', price: 25000, image: 'corolla.jpg' },
  { id: 2, brand: 'Honda', model: 'Civic', price: 27000, image: 'civic.jpg' },
  { id: 3, brand: 'Ford', model: 'Mustang', price: 40000, image: 'mustang.jpg' }
];

// Função para exibir carros na lista
function displayCars(cars) {
  carList.innerHTML = '';
  cars.forEach(car => {
    const carElement = document.createElement('div');
    carElement.classList.add('car');
    carElement.innerHTML = `
      <img src="images/${car.image}" alt="${car.brand} ${car.model}">
      <h3>${car.brand} ${car.model}</h3>
      <p>Price: $${car.price}</p>
      <button onclick="editCar(${car.id})">Editar</button>
      <button onclick="removeCar(${car.id})">Remover</button>
      <button onclick="addToCart(${car.id})">Adicionar ao Carrinho</button>
      <button onclick="addToFavorites(${car.id})">Adicionar aos Favoritos</button>
    `;
    carList.appendChild(carElement);
  });
}

// Função para filtrar carros
function filterCars() {
  let filteredCars = carData;

  const brand = brandFilter.value;
  if (brand !== 'all') {
    filteredCars = filteredCars.filter(car => car.brand === brand);
  }

  const priceRange = priceFilter.value;
  if (priceRange !== 'all') {
    const [minPrice, maxPrice] = priceRange.split('-').map(Number);
    filteredCars = filteredCars.filter(car => car.price >= minPrice && car.price <= maxPrice);
  }

  displayCars(filteredCars);
}

// Função para adicionar um novo carro
function addCar(newCar) {
  carData.push(newCar);
  displayCars(carData);
}

// Função para editar um carro
function editCar(carId) {
  const index = carData.findIndex(car => car.id === carId);
  if (index !== -1) {
    const editedCar = prompt('Digite as novas informações do carro (marca, modelo, preço, imagem):');
    if (editedCar) {
      const [brand, model, price, image] = editedCar.split(',').map(item => item.trim());
      carData[index] = { ...carData[index], brand, model, price: parseInt(price), image };
      displayCars(carData);
    }
  }
}

// Função para remover um carro
function removeCar(carId) {
  carData = carData.filter(car => car.id !== carId);
  displayCars(carData);
}

// Função para adicionar um carro ao carrinho de compras
function addToCart(carId) {
  const car = carData.find(car => car.id === carId);
  // Implemente a lógica para adicionar ao carrinho aqui
}

// Função para adicionar um carro aos favoritos
function addToFavorites(carId) {
  const car = carData.find(car => car.id === carId);
  // Implemente a lógica para adicionar aos favoritos aqui
}

// Inicialização: exibir todos os carros
displayCars(carData);
