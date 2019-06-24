//////////////////////////////////// Task 1
console.log("-------------------------------" + " Task 1");
function numberIntoObject(val) {
    if (isNaN(val)) {
        console.log("It's not a number.")
        return {};
    } else if (val > 999) {
        console.log("A too big number.");
        return {};
    } else if (val != Math.floor(val)) {
        val = Math.floor(val);
        console.log("You've entered not an integer. The value has been changed into " + val);
    }

    var obj = {
        "units": 0,
        "decades": 0,
        "hundreds": 0
    };
    obj.hundreds = Math.floor(val / 100);
    obj.decades = Math.floor((val - obj.hundreds * 100) / 10);
    obj.units = val - obj.decades * 10 - obj.hundreds * 100;
    return obj;
}

console.log(numberIntoObject(+prompt("Pls, enter a number between 0 and 999 inclusive")));

///////////////////////////////////// Task 2
//Подсчет стоимости корзины через объекты

console.log("-------------------------------" + " Task 2 (using the structure from the previous HW and objects instead of inner arrays)");

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
function basketSum() {
    var sum = 0;
    for (var i = 0; i < basket.length; i++) {
        sum += (basket[i].price * basket[i].quantity);
    }
    return sum;
}
console.log("The cart: ");
basketToDisplay(basket);
console.log("Total: " + basketSum());

///////////////////////////////////// Task 3

console.log("-------------------------------" + " Task 3");

var product = {
    name: "t-shirt",
    size: "XXL",
    color: "black",
    inStock: 32,
    resizeProduct: function resizeProduct() {
        //any action applied to the product
        //for instance here can be placed a method, calculating price of making a product either bigger or less, but actually it's not recommended, a better choice is to declare it in a prototype.
        console.log("Hi");
    },
}
console.log("Product: " + product.name);
console.log("Size: " + product.size);
console.log("Color: " + product.color);
console.log("In stock: " + product.inStock);
product.resizeProduct();