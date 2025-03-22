const products = [ 
  {
    id: 0,
    image: 'read.jpg',
    title: 'English Study Book',
    description: 'An easy guide for English learning',
    author: 'Peter Shelling',
    publisher: 'Oxford',
    price: 8
  },
  {
    id: 1,
    image: 'read.jpg',
    title: 'French Study Book',
    description: 'An easy guide for English learning',
    author: 'Shallon Dion',
    publisher: 'Oxford',
    price: 8
  },
  {
    id: 2,
    image: 'read.jpg',
    title: 'German Study Book',
    description: 'An easy guide for German learning',
    author: 'Jörg Stine',
    publisher: 'Sarasavi',
    price: 8
  },
  {
    id: 3,
    image: 'read.jpg',
    title: 'Spanish Study Book',
    description: 'An easy guide for Spanish learning',
    author: 'R.L. Stine',
    publisher: 'Oxford',
    price: 8
  },
  {
    id: 4,
    image: 'read.jpg',
    title: 'Italian Study Book',
    description: 'An easy guide for Italian learning',
    author: 'Sofia Vergara',
    publisher: 'Sarasavi',
    price: 8
  },
  {
    id: 5,
    image: 'read.jpg',
    title: 'English Work Book',
    description: 'Enhance Your Writing Skills',
    author: 'Sheldon Copper',
    publisher: 'Penguin',
    price: 9
  },
  {
    id: 6,
    image: 'read.jpg',
    title: 'French Work Book',
    description: 'Enhance Your Writing Skills',
    author: 'Margeret Brown',
    publisher: 'Penguin',
    price: 9
  },
  {
    id: 7,
    image: 'read.jpg',
    title: 'German Work Book',
    description: 'Enhance Your Writing Skills',
    author: 'Channing Landon',
    publisher: 'Oxford',
    price: 9
  }

];

const cart = [];

function addtocart(id) {
  const productToAdd = products.find(product => product.id === id);
  if (productToAdd) {
    cart.push({...productToAdd});
    displaycart();
  } else {
    console.error('Product not found');
  }
}

function delElement(index) {
  cart.splice(index, 1);
  displaycart();
}

function displaycart() {
  let total = 0;
  const cartElement = document.getElementById("cartItem");
  const totalElement = document.getElementById("total");
  const countElement = document.getElementById("count");

  if (cart.length === 0) {
    cartElement.innerHTML = "Your cart is empty";
    totalElement.innerHTML = "$ 0.00";
    countElement.innerHTML = 0;
  } else {
    cartElement.innerHTML = cart.map((item, index) => {
      total += item.price;
      return `
        <div class='cart-item'>
          <div class='row-img'>
            <img class='rowimg' src='${item.image}' alt='${item.title}'>
          </div>
          <p style='font-size:12px;'>${item.title}</p>
          <h2 style='font-size: 15px;'>$ ${item.price}.00</h2>
          <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
        </div>`;
    }).join('');
    totalElement.innerHTML = `$ ${total}.00`;
    countElement.innerHTML = cart.length;
  }
}

document.getElementById('root').innerHTML = products.map(product => {
  return `

    <div class='box'>
      <div class='img-box'>
        <img class='images' src='${product.image}' alt='${product.title}'>
      </div>
      <div class='bottom'>
        <p>${product.title}</p>
        <p>${product.description}</p> <!-- Added description -->
        <p>Author: ${product.author}</p> <!-- Added author -->
        <p>Publisher: ${product.publisher}</p> <!-- Added publisher -->
        <h2>$ ${product.price}.00</h2>
        <button onclick='addtocart(${product.id})'>Add to cart</button>
      </div>
    </div>`;
}).join('');


function openCheckout() {
  let total = 0;
  // Calculate total amount from cart
  for (const item of cart) {
    total += item.price;
  }
  // Redirect to another HTML page with total amount in the URL
  window.location.href = `PaymentDetails.html?total=${encodeURIComponent('$' + total)}`;

}



// Retrieve total amount from URL parameter
var urlParams = new URLSearchParams(window.location.search);
var total = urlParams.get('total');
document.getElementById("total").innerText = total;
