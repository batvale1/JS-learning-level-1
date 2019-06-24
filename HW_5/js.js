//////////////////////////////////////////// Service functions
function separateBlocks() {
    var $element = document.createElement("div");
    $element.classList.add("separator");
    return $element;
}

//////////////////////////////////////////// Task 1
function buildChessBoard() {
    var $parent = document.getElementById('chessBoard');
    for (var i = 0; i < 8; i ++) {
        for (var j = 0; j < 8; j ++) {
            var $cell = document.createElement("div");
            $cell.classList.add("block")
            if (i % 2 == 0) {
                if (j % 2 == 0) {
                    $cell.classList.add("white");
                } else {
                    $cell.classList.add("black");
                }
            } else {
                if (j % 2 == 0) {
                    $cell.classList.add("black");
                } else {
                    $cell.classList.add("white");
                }
            }
            if (i == 7) {
                $labelCol = document.createElement('p');
                $labelCol.classList.add("labelColumn");
                $labelCol.innerHTML = "&#" + (65 + j) + ";";
                $cell.appendChild($labelCol);
            }
            if (j == 0) {
                $labelCol = document.createElement('p');
                $labelCol.classList.add("labelRow");
                $labelCol.innerHTML = 8 - i;
                $cell.appendChild($labelCol);
            }
            $parent.appendChild($cell);
        }
    }
}

buildChessBoard();

//////////////////////////////////////////// Task 2
function displayCart(cartContentTotal) {
    var $parent = document.getElementById('cart');
    var $child = document.createElement("p");
    if (cartContentTotal.quantity == 0) {
        $child.textContent = "The cart is empty.";
    } else {
        $child.textContent = "In the cart " + cartContentTotal.quantity + " goods worth " + cartContentTotal.sum;
    }
    $parent.appendChild($child);
}

var basket = [
    {product: "The first item", price: 2, quantity: 100},
    {product: "The second item", price: 3, quantity: 250},
    {product: "The third item", price: 1, quantity: 600},
];

function basketToDisplay(basket) {
    for (i = 0; i < basket.length; i++) {
        console.log("Product: " + basket[i].product + ", quantity: " + basket[i].price + ", price: " + basket[i].quantity);
    }
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

displayCart(basketTotal(basket));
basket = [];
displayCart(basketTotal(basket));

//////////////////////////////////////////// Task 3

var products = [
    {product: "The first item", price: 2},
    {product: "The second item", price: 3},
    {product: "The third item", price: 1},
    {product: "The 4 item", price: 18},
    {product: "The 5 item", price: 15},
    {product: "The 6 item", price: 12},
    {product: "The 7 item", price: 10},
    {product: "The 8 item", price: 17},
];

function displayCatalog(cart) {
    var $parent = document.getElementById('catalog');
    //создаем столько товаров, сколько их подлежит выводу
    for (var i = 0; i < cart.length; i++) {
        //делаем карточку
        var $child = document.createElement("div");
        $child.classList.add("product");
        $parent.appendChild($child);
        //наполняем изображением, описание и ценой
        //делаем ссылку на товар и в нее кладем картинку
        var $grandson = document.createElement("a");
        $grandson.setAttribute("href","#");
        $child.appendChild($grandson);
        var $grandsonA = document.createElement("img");
        $grandsonA.setAttribute("src","https://loremflickr.com/200/250/dog");
        $grandsonA.setAttribute("alt","dog");
        $grandson.appendChild($grandsonA);
        //выводим описание товара
        var $grandson = document.createElement("p");
        $grandson.classList.add("catalog__product");
        $grandson.textContent = cart[i].product;
        $child.appendChild($grandson);
        //выводим цену товара
        var $grandson = document.createElement("p");
        $grandson.classList.add("catalog__price");
        $grandson.textContent = "price:" + cart[i].price;
        $child.appendChild($grandson);
    }
}

displayCatalog(products);