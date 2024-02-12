const descriptions = [

    {   
        id:1,
        nam: 'Corolla',
        type: 'Japanese',
        condition: 'New',
        mileage: '26 MPG',
        fuelCapacity: '40 liters',
        engineInfo: '2.0L 4-cylinder',
        imgSource: 'https://tse1.mm.bing.net/th?id=OIP.2SR1g_xBmXncc3hGtx3iuwHaEo&pid=Api&P=0&h=220'
    },
    {
        nam: 'Camry',
        id:2,

        type: 'Japanese',
        condition: 'New',
        mileage: '30 MPG',
        fuelCapacity: '45 liters',
        engineInfo: '2.5L 4-cylinder',
        imgSource: 'https://tse1.mm.bing.net/th?id=OIP.cbpTO1aUwIN3R3d9AaxiwgHaEK&pid=Api&P=0&h=220'
    },
    {
        nam: 'Accord',
        id:3,

        type: 'Japanese',
        condition: 'Used',
        mileage: '28 MPG',
        fuelCapacity: '50 liters',
        engineInfo: '2.0L 4-cylinder',
        imgSource: 'https://tse2.mm.bing.net/th?id=OIP.QLzLDAUKxXGwfBMAEnRfhAHaEK&pid=Api&P=0&h=220'
    },
    {
        nam: 'Mustang',
        id:4,
        type: 'American',
        condition: 'New',
        
        mileage: '22 MPG',
        fuelCapacity: '60 liters',
        engineInfo: '5.0L V8',
        imgSource:  'https://tse2.mm.bing.net/th?id=OIP.UxHug9E96H7jy8bItL-v3wHaEK&pid=Api&P=0&h=220'
    },
    {
        nam: 'Civic',
        type: 'Japanese',
        id:5,
        condition: 'Used',
        mileage: '25 MPG',
        fuelCapacity: '42 liters',
        engineInfo: '1.8L 4-cylinder',
        imgSource: 'https://tse1.mm.bing.net/th?id=OIP.hw58LhOVhdrMeogqh9UtmwHaE8&pid=Api&P=0&h=220'
    },
    {
        nam: 'Cherokee',
        type: 'American',
        id:6,
        condition: 'New',
        mileage: '20 MPG',
        fuelCapacity: '55 liters',
        engineInfo: '3.6L V6',
        imgSource: 'https://tse3.mm.bing.net/th?id=OIP.cJ4ec59EhnSUR06kigaCMQHaEo&pid=Api&P=0&h=220'
    },
    {
        nam: 'Camaro',
        id:7,
        type: 'American',
        condition: 'Used',
        mileage: '24 MPG',
        fuelCapacity: '58 liters',
        engineInfo: '6.2L V8',
        imgSource:  'https://tse1.mm.bing.net/th?id=OIP.3ic5KIFAKZfwuTmlW6giBQHaEK&pid=Api&P=0&h=220'

        
    },
    {
        nam: 'A3',
        id:8,
        type: 'German',
        condition: 'New',
        mileage: '32 MPG',
        fuelCapacity: '35 liters',
        engineInfo: '2.0L 4-cylinder',
        imgSource:  'https://tse3.mm.bing.net/th?id=OIP.Te0rFzvINRzqNbNBPuxt0AHaEK&pid=Api&P=0&h=220'
    },
    {    id:9,
        nam: 'Golf',
        type: 'German',
        condition: 'Used',
        mileage: '29 MPG',
        fuelCapacity: '38 liters',
        engineInfo: '1.8L 4-cylinder',
        imgSource: 'https://tse1.mm.bing.net/th?id=OIP.T_QkgBkAt4WXOlQlavgw4QHaEo&pid=Api&P=0&h=220'
    },
    {id:10,
        nam: 'Golf',
        type: 'German',
        condition: 'Used',
        mileage: '29 MPG',
        fuelCapacity: '38 liters',
        engineInfo: '1.8L 4-cylinder',
        imgSource: 'https://tse1.mm.bing.net/th?id=OIP.AGeeZXo0LcZUg0ek0etsZQHaEK&pid=Api&P=0&h=220'
    },
    {id:11,
        nam: 'Golf',
        type: 'German',
        condition: 'Used',
        mileage: '29 MPG',
        fuelCapacity: '38 liters',
        engineInfo: '1.8L 4-cylinder',
        imgSource: 'https://tse4.mm.bing.net/th?id=OIF.G0shUKP4UPmXl%2bXzY4yI6Q&pid=Api&P=0&h=220'
    },
    {
        nam: 'Golf',
        type: 'German',
        condition: 'Used',
        mileage: '29 MPG',
        fuelCapacity: '38 liters',
        engineInfo: '1.8L 4-cylinder',
        imgSource: 'https://tse2.mm.bing.net/th?id=OIP.B-O6HytTixIXajHOpiVLCAHaFj&pid=Api&P=0&h=220',
    },
    {
        nam: 'Golf',
        type: 'German',
        condition: 'Used',
        mileage: '29 MPG',
        fuelCapacity: '38 liters',
        engineInfo: '1.8L 4-cylinder',
        imgSource:  'https://tse4.mm.bing.net/th?id=OIP.zPMu5d6Qy5H5glfSAV1MoQHaEK&pid=Api&P=0&h=220'
    },
];

function displayDes() {
    const detailsContainer = document.querySelector('.details');
    
    descriptions.forEach((item) => {
        const carDetailsHTML = `
            <div class="card">
                <div class="card-image">
                    <img src="${item.imgSource}" alt="Car Image">
                </div>
                <div class="card-content">
                    <h2>${item.nam}</h2>
                    <div class="detail-item">
                        <span class="detail-label">Condition:</span>
                        <span class="detail-value">${item.condition}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Type:</span>
                        <span class="detail-value">${item.type}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Mileage:</span>
                        <span class="detail-value">${item.mileage}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Fuel Capacity:</span>
                        <span class="detail-value">${item.fuelCapacity}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Engine Info:</span>
                        <span class="detail-value">${item.engineInfo}</span>
                    </div>
                    <button onclick="addToWishlist(${item.id})">Add To Wish List</button>
                </div>
            </div>
        `;
        
        detailsContainer.innerHTML += carDetailsHTML;
    });
}



let desArray = JSON.parse(localStorage.getItem('desArray')) || [];
function AddWishList(id){
    descriptions.forEach((product)=>{
        if(product.id==id){
            desArray.push(product)

            localStorage.setItem('desArray', JSON.stringify(desArray));
            Swal.fire('Added To Wish List')


        }

    })

}
function addToWishlist(id) {
    const selectedCar = descriptions.find((item) => item.id === id);
    if (selectedCar) {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        Swal.fire('Added To Wish List')
        if (!wishlist.some((item) => item.id === id)) {
            wishlist.push(selectedCar);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }
    }
}
displayDes()

