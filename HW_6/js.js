//////////////////////////////////////////// Task 1

var basket = [];
var products = [
    {product: "The first item", price: 2, additionalPhotos: ["img/хаски1.jpg", "img/хаски2.jpg"]},
    {product: "The second item", price: 3, additionalPhotos: ["img/белый 1.jpg", "img/белый 2.jpg"]},
    {product: "The third item", price: 1, additionalPhotos: ["img/медведь 1.jpg", "img/медведь 2.jpg", "img/медведь 3.jpg"]},
    {product: "The 4 item", price: 18, additionalPhotos: ["img/овчарка 1.jpg", "img/овчарка 2.jpg", "img/овчарка 3.jpg"]},
    {product: "The 5 item", price: 15, additionalPhotos: ["img/щенок 1.jpg", "img/щенок 2.jpg", "img/щенок 3.jpg", "img/щенок 4.jpg"]}
];
var timerId;
var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-button");

function displayCart(cartContentTotal) {
    var $parent = document.getElementById('cart');
    var $child = document.querySelector(".wrapCart p") ? document.querySelector(".wrapCart p") : document.createElement("p");
    if (cartContentTotal.quantity == 0) {
        $child.textContent = "The cart is empty.";
    } else {
        $child.textContent = "In the cart " + cartContentTotal.quantity + " goods worth " + cartContentTotal.sum;
    }
    $parent.appendChild($child);
}

function basketTotal(basketContent) {
    var sum = 0;
    var quantity = 0;
    for (var i = 0; i < basketContent.length; i++) {
        sum += (basketContent[i].price * basketContent[i].quantity);
        quantity += basketContent[i].quantity;
    }
    return {sum: sum, quantity: quantity};
}

function displayCatalog(productList) {
    var $parent = document.getElementById('catalog');
    //создаем столько товаров, сколько их подлежит выводу
    for (var i = 0; i < productList.length; i++) {
        //делаем карточку
        var $child = document.createElement("div");
        $child.classList.add("product");
        $parent.appendChild($child);
        //наполняем изображением, описанием и ценой
        //делаем ссылку на товар и в нее кладем картинку
        var $grandson = document.createElement("a");
        $grandson.setAttribute("href","#");
        $child.appendChild($grandson);
        var $grandsonA = document.createElement("img");
        $grandsonA.classList.add("product_img");
        $grandsonA.setAttribute("src",productList[i].additionalPhotos[0]);
        $grandsonA.setAttribute("alt","dog");
        $grandsonA.dataset.idx = i;
        $grandsonA.addEventListener("click", handleImgClick);
        $grandsonA.addEventListener("click", function(){
            modal.classList.toggle("closed");
            modalOverlay.classList.toggle("closed");
        });
        $grandson.appendChild($grandsonA);
        //выводим описание товара
        var $grandson = document.createElement("p");
        $grandson.classList.add("catalog__product");
        $grandson.textContent = productList[i].product;
        $child.appendChild($grandson);
        //выводим цену товара
        var $grandson = document.createElement("p");
        $grandson.classList.add("catalog__price");
        $grandson.textContent = "price:" + productList[i].price;
        $child.appendChild($grandson);
        //выводим кнопку купить
        var $grandson = document.createElement("button");
        $grandson.classList.add("buy_button");
        $grandson.textContent = "Buy";
        $grandson.dataset.idx = i;
        $child.appendChild($grandson);
    }
    $parent.addEventListener("click",handleBuyButtonClick)
}

function handleBuyButtonClick(event) {
    if (event.target.classList.contains("buy_button")) {
        basket.push({product: products[event.target.dataset.idx].product, price: products[event.target.dataset.idx].price, quantity: 1});
        displayCart(basketTotal(basket));
    }
}

function handleImgClick(event) {
    $caruselImgElement = document.getElementById("carusel_img");
    var j = 1;
    $caruselImgElement.setAttribute("src", products[event.target.dataset.idx].additionalPhotos[0]);
    timerId = setInterval(function () {
        if (j == products[event.target.dataset.idx].additionalPhotos.length) {
            j = 0;
        }
        $caruselImgElement.setAttribute("src", products[event.target.dataset.idx].additionalPhotos[j++])
    },1000);
}

function init() {
    displayCart(basketTotal(basket));
    displayCatalog(products);
    closeButton.addEventListener("click", function() {
        modal.classList.toggle("closed");
        modalOverlay.classList.toggle("closed");
        clearInterval(timerId);
    });
}

init();







