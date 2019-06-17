////////////////////
//Вывод простых числе до 100

console.log("-------------------------------" + " Задача 1");
var i;
var j = 2;
var limit = 100; //До какого числа найти простые числа
var times = 0; //Сколько раз число делится на другие числа меньше текущего
var counter = 0;
function primeNumbers() {
    while (j <= limit ) {
        i = 1;
        while (i <= Math.pow(j, 0.5)) {
            if (j % i == 0) {
                times += 1;
                counter += 1;
            }
            if (times > 1) break;
            i++;
        }
        if (times == 1) {
            console.log("A number " + j + " is a prime number");
        }
        times = 0;
        j++;
    }
}
primeNumbers();
console.log(counter);

///////////////////
//Подсчет стоимости корзины

console.log("-------------------------------" + " Задача 2 и 3");

var basket = [
    ["The first item", 2, 100],
    ["The second item", 3, 250],
    ["The third item", 1, 600]
];

function basketToDisplay(basket) {
    for (i = 0; i < basket.length; i++) {
        console.log("Product: " + basket[i][0] + ", quantity: " + basket[i][1] + ", price: " + basket[i][2]);
    }
}
function basketSum() {
    var sum = 0;
    for (var i = 0; i < basket.length; i++) {
        sum += (basket[i][1] * basket[i][2]);
    }
    return sum;
}
console.log("Состав корзины: ");
basketToDisplay(basket);
console.log("Стоимость корзины: " + basketSum());

/////////////////////

console.log("-------------------------------" + " Задача 4");

for (var k = 0; k < 10; console.log(k), k++) {

};

/////////////////////

console.log("-------------------------------" + " Задача 5");

function piramide(rows) {
    var logRow = "";
    for (var z = 0; z < rows; z++) {
        logRow += "x";
        console.log(logRow);
    }
}

piramide(20);