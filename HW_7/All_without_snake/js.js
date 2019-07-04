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
    $parent.innerHTML = "";
    if (cartContentTotal.quantity !== 0) {
        //Шапку нарисуем
        $cartBlockDiv = document.createElement("div");
        $cartBlockDiv.classList.add("cart-block");
        $parent.appendChild($cartBlockDiv);
        //название
        $cartProductP = document.createElement("p");
        $cartProductP.classList.add("cart-p");
        $cartProductP.textContent = "Product";
        $cartBlockDiv.appendChild($cartProductP);
        //количество
        $cartProductQuantity = document.createElement("p");
        $cartProductQuantity.classList.add("cart-quantity");
        $cartProductQuantity.textContent = "Quantity";
        $cartBlockDiv.appendChild($cartProductQuantity);
        //цена
        $cartProductPrice = document.createElement("p");
        $cartProductPrice.classList.add("cart-price");
        $cartProductPrice.textContent = "Price";
        $cartBlockDiv.appendChild($cartProductPrice);
    }

    //вывод таблицы товаров
    for (var i = 0; i < basket.length; i++) {
        $cartBlockDiv = document.createElement("div");
        $cartBlockDiv.classList.add("cart-block");
        $parent.appendChild($cartBlockDiv);
        //название
        $cartProductP = document.createElement("p");
        $cartProductP.classList.add("cart-p");
        $cartProductP.textContent = basket[i].product;
        $cartBlockDiv.appendChild($cartProductP);
        //количество
        $cartProductQuantity = document.createElement("p");
        $cartProductQuantity.classList.add("cart-quantity");
        $cartProductQuantity.textContent = basket[i].quantity;
        $cartBlockDiv.appendChild($cartProductQuantity);
        //уменьшение
        $cartProductDecrease = document.createElement("span");
        $cartProductDecrease.classList.add("cart-decrease-product");
        $cartProductDecrease.textContent = "-";
        $cartProductDecrease.dataset.idx = basket[i].idx;
        $cartProductDecrease.addEventListener("click", handleDecreaseProduct);
        $cartProductQuantity.appendChild($cartProductDecrease);
        //увеличение
        $cartProductIncrease = document.createElement("span");
        $cartProductIncrease.classList.add("cart-increase-product");
        $cartProductIncrease.textContent = "+";
        $cartProductIncrease.dataset.idx = basket[i].idx;
        $cartProductIncrease.addEventListener("click", handleIncreaseProduct);
        $cartProductQuantity.appendChild($cartProductIncrease);
        //удаление всего
        $cartProductDelete = document.createElement("span");
        $cartProductDelete.classList.add("cart-delete-product");
        $cartProductDelete.textContent = "x";
        $cartProductDelete.dataset.idx = basket[i].idx;
        $cartProductDelete.addEventListener("click", handleDeleteProduct);
        $cartProductQuantity.appendChild($cartProductDelete);

        //цена
        $cartProductPrice = document.createElement("p");
        $cartProductPrice.classList.add("cart-price");
        $cartProductPrice.textContent = basket[i].price;
        $cartBlockDiv.appendChild($cartProductPrice);
    }

    //вывод итого
    var $child = document.querySelector(".wrapCart p.total-sum") ? document.querySelector(".wrapCart p.total-sum") : document.createElement("p");
    if (!$child.classList.contains("total-sum")) {
       $child.classList.add("total-sum");
    }
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
    $parent.addEventListener("click",handleBuyButtonClick);
}

function handleBuyButtonClick(event) {
    if (event.target.classList.contains("buy_button")) {
        event.preventDefault();
        for (var i = 0; i < basket.length; i++) {
            if (basket[i].product == products[event.target.dataset.idx].product) {
                basket[i].quantity += 1;
                displayCart(basketTotal(basket));
                return;
            };
        }
        basket.push({product: products[event.target.dataset.idx].product, price: products[event.target.dataset.idx].price, quantity: 1, idx: event.target.dataset.idx});
        displayCart(basketTotal(basket));
    }
}

function handleImgClick(event) {
    $caruselImgElement = document.getElementById("carusel_img");
    var j = 0;
    $caruselImgElement.setAttribute("src", products[event.target.dataset.idx].additionalPhotos[0]);
    $caruselImgElement.dataset.idx = event.target.dataset.idx;
    $caruselImgElement.dataset.cur_photo = j;
    timerId = setInterval(function () {
        if (j == products[event.target.dataset.idx].additionalPhotos.length) {
            j = 0;
        }
        $caruselImgElement.dataset.cur_photo = j;
        $caruselImgElement.setAttribute("src", products[event.target.dataset.idx].additionalPhotos[j++]);
    },1000);
}

function handleDeleteProduct(event) {
    event.stopPropagation();
    for (var i = 0; i < basket.length; i++) {
        if (basket[i].idx == event.target.dataset.idx) {
            basket.splice(i,1);
            displayCart(basketTotal(basket));
        };
    }
}

function handleDecreaseProduct(event) {
    event.stopPropagation();
    for (var i = 0; i < basket.length; i++) {
        if (basket[i].idx == event.target.dataset.idx) {
            if (basket[i].quantity === 1) {
                basket.splice(i,1);
            } else {
                basket[i].quantity -= 1;
            }
            displayCart(basketTotal(basket));
        };
    }
}

function handleIncreaseProduct(event) {
    event.stopPropagation();
    for (var i = 0; i < basket.length; i++) {
        if (basket[i].idx == event.target.dataset.idx) {
            basket[i].quantity += 1;
            displayCart(basketTotal(basket));
        };
    }
}

function init() {
    displayCart(basketTotal(basket));
    displayCatalog(products);
    closeButton.addEventListener("click", function() {
        modal.classList.toggle("closed");
        modalOverlay.classList.toggle("closed");
        clearInterval(timerId);
    });
    document.getElementById("outer_cart_wrap").addEventListener("click", function () {
        if (this.classList.contains("grouped")) {
            $outerContainer = document.getElementById("outerContainer");
            for (var i = 0; i < $outerContainer.children.length; i ++) {
                if ($outerContainer.children[i] != this) {
                    $outerContainer.children[i].classList.add("grouped");
                    $outerContainer.children[i].classList.remove("ungrouped");
                }
            }
        }
        this.classList.toggle("grouped");
        this.classList.toggle("ungrouped");
    });
    document.getElementById("outer_delivery").addEventListener("click", function () {
        if (this.classList.contains("grouped")) {
            $outerContainer = document.getElementById("outerContainer");
            for (var i = 0; i < $outerContainer.children.length; i ++) {
                if ($outerContainer.children[i] != this) {
                    $outerContainer.children[i].classList.add("grouped");
                    $outerContainer.children[i].classList.remove("ungrouped");
                }
            }
        }
        this.classList.toggle("grouped");
        this.classList.toggle("ungrouped");
    });
    document.getElementById("outer_comments").addEventListener("click", function () {
        if (this.classList.contains("grouped")) {
            $outerContainer = document.getElementById("outerContainer");
            for (var i = 0; i < $outerContainer.children.length; i ++) {
                if ($outerContainer.children[i] != this) {
                    $outerContainer.children[i].classList.add("grouped");
                    $outerContainer.children[i].classList.remove("ungrouped");
                }
            }
        }
        this.classList.toggle("grouped");
        this.classList.toggle("ungrouped");
    });
    document.getElementById("arrow-right").addEventListener("click", handleArrowRight);
    document.getElementById("arrow-left").addEventListener("click", handleArrowLeft);
}

function handleArrowRight(event) {
    clearInterval(timerId);
    $caruselImgElement = document.getElementById("carusel_img");
    if ($caruselImgElement.dataset.cur_photo == products[$caruselImgElement.dataset.idx].additionalPhotos.length-1) {
        $caruselImgElement.dataset.cur_photo = 0;
    } else {
        $caruselImgElement.dataset.cur_photo = Number($caruselImgElement.dataset.cur_photo) + 1;
    };
    console.log($caruselImgElement.dataset.cur_photo);
    $caruselImgElement.setAttribute("src", products[$caruselImgElement.dataset.idx].additionalPhotos[$caruselImgElement.dataset.cur_photo]);
    console.log($caruselImgElement.dataset.cur_photo);
};

function handleArrowLeft(event) {
    clearInterval(timerId);
    $caruselImgElement = document.getElementById("carusel_img");
    if ($caruselImgElement.dataset.cur_photo == 0) {
        $caruselImgElement.dataset.cur_photo = products[$caruselImgElement.dataset.idx].additionalPhotos.length-1;
    } else {
        $caruselImgElement.dataset.cur_photo -= 1;
    };

    $caruselImgElement.setAttribute("src", products[$caruselImgElement.dataset.idx].additionalPhotos[$caruselImgElement.dataset.cur_photo]);

}

init();







