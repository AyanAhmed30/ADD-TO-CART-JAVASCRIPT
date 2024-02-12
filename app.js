const products = [
  {
    id: 1,
    nam: "Corolla",
    imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.2SR1g_xBmXncc3hGtx3iuwHaEo&pid=Api&P=0&h=220',
    price: 900000,
  },
  {
    id: 2,
    nam: "Alto",
    imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.cbpTO1aUwIN3R3d9AaxiwgHaEK&pid=Api&P=0&h=220',
    price: 650000,
  },
  {
    id: 3,
    nam: "Civic",
    imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.QLzLDAUKxXGwfBMAEnRfhAHaEK&pid=Api&P=0&h=220',
    price: 8000000,
  },
  {
    id: 4,
    nam: "Accord",
    imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.UxHug9E96H7jy8bItL-v3wHaEK&pid=Api&P=0&h=220',
    price: 450000,
  },
  {
    id: 5,
    nam: "Camry",
    imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.hw58LhOVhdrMeogqh9UtmwHaE8&pid=Api&P=0&h=220',
    price: 230000,
  },
  {
    id: 6,
    nam: "Fusion",
    imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.cJ4ec59EhnSUR06kigaCMQHaEo&pid=Api&P=0&h=220',
    price: 1789000,
  },
  {
    id: 7,
    nam: "Mustang",
    imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.3ic5KIFAKZfwuTmlW6giBQHaEK&pid=Api&P=0&h=220',
    price: 1789000,
  },
  {
    id: 8,
    nam: "Explorer",
    imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.Te0rFzvINRzqNbNBPuxt0AHaEK&pid=Api&P=0&h=220',
    price: 1789000,
  },
  {
    id: 9,
    nam: "Escape",
    imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.T_QkgBkAt4WXOlQlavgw4QHaEo&pid=Api&P=0&h=220',
    price: 1789000,
  },
  {
    id: 10,
    nam: "Ranger",
    imgSrc: 'https://tse4.mm.bing.net/th?id=OIF.G0shUKP4UPmXl%2bXzY4yI6Q&pid=Api&P=0&h=220',
    price: 1789000,
  },
  {
    id: 11,
    nam: "Bronco",
    imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.AGeeZXo0LcZUg0ek0etsZQHaEK&pid=Api&P=0&h=220',
    price: 1789000,
  },
  {
    id: 12,
    nam: "Expedition",
    imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.B-O6HytTixIXajHOpiVLCAHaFj&pid=Api&P=0&h=220',
    price: 1789000,
  },
  {
    id: 13,
    nam: "Edge",
    imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.zVRlCvb4HhMv9ATKQ9zwQgHaEo&pid=Api&P=0&h=220',
    price: 1789000,
  },
  {
    id: 14,
    nam: "EcoSport",
    imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.zPMu5d6Qy5H5glfSAV1MoQHaEK&pid=Api&P=0&h=220',
    price: 1789000,
  }
];



// get html 
let ProductEl = document.querySelector('  .product-row')
let cartItem = document.querySelector('.cart-item')
let total1 = document.querySelector('.total')
let cartlength = document.querySelector('cart-length')

// render products
function renderProduct() {
  products.forEach((item) => {
    ProductEl.innerHTML += `
        <div class="product-1">
        <div class="image"><img src="${item.imgSrc}" alt=""></div>
        <div class="details">
          <div class="name">${item.nam}</div>
          <div class="price">$ ${item.price}</div>
        </div>
        <button onclick="addtoCart(${item.id}, '${item.nam}', '${item.imgSrc}', ${item.price})">Add to Cart</button>
        </div>
        `
  })
}
if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
  window.addEventListener('DOMContentLoaded', renderProduct())
}
// update cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function addtoCart(id, nam, imgSrc, price) {
  const itemExists = cart.find(item => item.id === id);
  if (itemExists) {
    Swal.fire('Product Already Exist')

    return

  }

  const newItem = {
    id: id,
    nam: nam,
    imgSrc: imgSrc,
    price: price,
    numberOfUnits: 1
  };
  cart.push(newItem);
  localStorage.setItem('cart', JSON.stringify(cart));
  Swal.fire('Product Added!')

  renderCartItem();
}

// render cart item 
function renderCartItem() {
  const cartItem = document.querySelector('.cart-item');
  cartItem.innerHTML = '';
  cart.forEach((item) => {
    cartItem.innerHTML += `
        <div class="cart-entry">
            <div class="item">
                <img src="${item.imgSrc}" alt="" />
                <h3> $ ${item.price}</h3>
                <button onclick="deleteItem(${item.id})" class='delete'>Delete</button>
            </div>
            <div class="counting">
                <div class="plus" onclick="changeButton(${item.id}, 'plus')"><button>+</button></div>
                <div class="count"><h5>${item.numberOfUnits}</h5></div>
                <div class="minus" onclick="changeButton(${item.id}, 'minus')"><button>-</button></div>
            </div>
        </div>
        `;
  });
}
// increament or decreament number of units
function changeButton(ID, action) {
  const item = cart.find((product) => product.id === ID);
  if (item) {
    if (action === 'plus') {
      item.numberOfUnits++;
    } else if (action === 'minus' && item.numberOfUnits > 1) {
      item.numberOfUnits--;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItem();
    Total();
  }
}
// total
function Total() {
  let total = 0;
  cart.forEach((product) => {
    const subtotal = product.price * product.numberOfUnits;
    total += subtotal;
  });

  total1.innerHTML = `
    <div class="sub-total">Total :$${total.toFixed(2)}</div>
    `;
}
Total();


// delete item
function deleteItem(id) {
  let newcart = cart.filter((product) => product.id !== id);
  localStorage.setItem('cart', JSON.stringify(newcart));
  cart = newcart;
  Swal.fire('Deleted')
  renderCartItem();
  Total();
}
if (window.location.pathname === '/cart.html' || window.location.pathname === '/cart') {
  renderCartItem()
}
// // Filter products based on price range
function filterProducts() {
  const minPrice = parseFloat(document.getElementById("minPrice").value);
  const maxPrice = parseFloat(document.getElementById("maxPrice").value);

  if (!isNaN(minPrice) && !isNaN(maxPrice)) {
    const filteredProducts = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    renderFilteredProducts(filteredProducts);
  }
}
const originalProducts = [...products];

// Reset the filter and display all products
function resetFilter() {
  document.getElementById("minPrice").value = "";
  document.getElementById("maxPrice").value = "";
  ProductEl.innerHTML = ''
  renderProduct();
}


// Render filtered products
function renderFilteredProducts(filteredProducts) {
  ProductEl.innerHTML = ""; // Clear the product list
  filteredProducts.forEach((item) => {
    ProductEl.innerHTML += `
      <div class="product-1">
        <div class="image"><img src="${item.imgSrc}" alt=""></div>
        <div class="details">
          <div class="name">${item.nam}</div>
          <div class="price">$ ${item.price}</div>
        </div>
        <button onclick="addtoCart(${item.id}, '${item.nam}', '${item.imgSrc}', ${item.price})">Add to Cart</button>
      </div>
    `;
  });
}


