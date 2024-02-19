const carListElement = document.getElementById('carList');
const searchInput = document.getElementById('searchInput');

const cars = [
    { model: 'Ferrari', year: 2023, price: 500000, image: 'ferrari.jpg' },
    { model: 'Lamborghini', year: 2022, price: 400000, image: 'lamborghini.jpg' },
    { model: 'Porsche', year: 2021, price: 300000, image: 'porsche.jpg' }
];

function displayCars() {
    carListElement.innerHTML = '';
    cars.forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.classList.add('car');
        carDiv.innerHTML = `
            <img src="${car.image}" alt="${car.model}">
            <h2>${car.model}</h2>
            <p>Year: ${car.year}</p>
            <p>Price: $${car.price.toLocaleString()}</p>
            <button onclick="buyCar('${car.model}')">Buy Now</button>
        `;
        carListElement.appendChild(carDiv);
    });
}

function buyCar(model) {
    alert(`You have purchased a ${model}!`);
}

searchInput.addEventListener('input', function() {
    const searchValue = this.value.trim().toLowerCase();
    const filteredCars = cars.filter(car => car.model.toLowerCase().includes(searchValue));
    displayFilteredCars(filteredCars);
});

function displayFilteredCars(filteredCars) {
    carListElement.innerHTML = '';
    filteredCars.forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.classList.add('car');
        carDiv.innerHTML = `
            <img src="${car.image}" alt="${car.model}">
            <h2>${car.model}</h2>
            <p>Year: ${car.year}</p>
            <p>Price: $${car.price.toLocaleString()}</p>
            <button onclick="buyCar('${car.model}')">Buy Now</button>
        `;
        carListElement.appendChild(carDiv);
    });
}

displayCars();
