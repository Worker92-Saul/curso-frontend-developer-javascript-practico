const menuEmail = document.querySelector(".navbar-email");
const miniCuadro = document.querySelector(".desktop-menu");

const botonMovil = document.querySelector(".menu");
const menuMovilLeft = document.querySelector(".mobile-menu");
// document.getElementsByClassName regresa un alista de elementos, tendriamos que usar [0]

const menuCarrito = document.querySelector(".product-detail");
const botonCarrito = document.querySelector(".navbar-shopping-cart");

const cards = document.querySelector(".cards-container");


/* Ejemplos*/
const productList = []; // En esta ocacion manualmente, aquí debemos obtener los datos de nuestra base de datos.
productList.push({
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });
productList.push({
            name: 'Rac',
            price: 350,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        });
productList.push({
                name: 'Sam',
                price: 1300,
                image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            });
/* Ejemplos*/

renderProducts(productList); // Cargamos los productos

// Llamar eventos
menuEmail.addEventListener('click',ocultarMinuCuadro);
botonMovil.addEventListener('click',ocultarMenuMovilLeft);
botonCarrito.addEventListener('click',ocultarCarrito);

function ocultarMinuCuadro(){
    let isMenuCarritoActive = !menuCarrito.classList.contains('inactive');

    if(isMenuCarritoActive){
        ocultarCarrito();
    }
    miniCuadro.classList.toggle("inactive");
}

function ocultarMenuMovilLeft(){
    let isMenuCarritoActive = !menuCarrito.classList.contains('inactive');

    if(isMenuCarritoActive){
        ocultarCarrito();
    }
    menuMovilLeft.classList.toggle("inactive");
}

function ocultarCarrito(){
    let isMenuMovilActive = !menuMovilLeft.classList.contains('inactive');
    let isMiniCuadro = !miniCuadro.classList.contains('inactive');
    
    if(isMenuMovilActive){
        ocultarMenuMovilLeft();
    }
    if(isMiniCuadro){
        ocultarMinuCuadro();
    }
    menuCarrito.classList.toggle("inactive");
}

function renderProducts(arr){ // crea los elemento de una fomras más ordenada.
    for(product of arr){
        // Crear componentes en base al harcoreado de html
        const productCard = document.createElement("div")
        const image = document.createElement("img");
        const productInfo = document.createElement("div");
        const productInfoDiv = document.createElement("div");
        const price = document.createElement("p");
        const marc = document.createElement("p");
        const figure = document.createElement("figure");
        const icono = document.createElement("img");
    
        // Asignarles sus clases
        productCard.classList.add('product-card');
        productInfo.classList.add('product-info');
        
        // asignar valores
        image.setAttribute('src',product.image); // Imagen
        price.innerText = "$" + product.price;
        marc.innerHTML = product.name;
        
        icono.setAttribute('src',"./icons/bt_add_to_cart.svg");
        
        /* Se van agregando los elementos dentro de otros*/
        figure.appendChild(icono);
        productInfoDiv.append(marc,price);
        productInfo.append(productInfoDiv, figure);
        productCard.append(image,productInfo);
        cards.appendChild(productCard);
    }    
}