var a = 1, b = 1, c, d;
c = ++a;           // 2   Унарный префиксный оператор, сначала значение a увеличивается на 1, потом происходит присвоение значения а переменной с
d = b++;           // 1   Унарный постфиксный оператор, сначала значение b присваивается значению d, затем значение b увеличивается на 1
c = (2+ ++a);      // 5   Сначала вычисляется выражение в скобках, после этого унарным префисным оператором значение a увеличивается на 1, затем происходит сложение 2 + a, значение которой уже 3, потом происходит присвоение полученного значения переменной с
d = (2+ b++);      // 4   Сначала вычисляется выражение в скобках, происходит сложение 2 и b, затем b увеличивается на 1, затем результат 2 + b (до увеличения b) присваивается значению переменной d
//alert(a);                    // 3   Вывод значения a
//alert(b);                    // 3   Вывод значения b

/////////////////////////////////////////////////

var a = 2;
var x = 1 + (a *= 2); //Очевидно, что 5. Сначала происходит умножение значения переменной а на 2 и сама переменная а принимает значение 4, потом прибавляется 1, потом полученный результат присваивается значению переменной x;

/////////////////////////////////////////////////
//переменные уже объявлены, изменим им только значение
a = prompt("Задача 3. Введите числовое значение переменной а");
b = prompt("Задача 3. Введите числовое значение переменной b");

if (isNaN(x) || isNaN(b)) {
    alert("Необходимо ввести числовые значения переменных! Код далее будет исполнен некорректно");
} else if (a >= 0 && b >= 0) {
    console.log("b - a: " + (b - a));
} else if (a < 0 && b < 0) {
    console.log("a * b: " + a * b);
} else if (a * b < 0 || (a < 0 && b == 0) || (b < 0 && a == 0)) {
    console.log("a + b: " + (a + b));
}

/////////////////////////////////////////////////

//Задаем рандом целочисленный в промежетке 0 и 15
varSwitch = Math.round(Math.random() * 15);

//Я бы рекурсией сделал вывод
function consoleNumbers(n) {
    if (n >= 0 && n <= 15) {
        console.log(n++);
        consoleNumbers(n);
    }
}

console.log("Вывод числа до 15 рекурсией:");
consoleNumbers(varSwitch);

//А вот так в учебных целях через Switch, правда это на безумие похоже

console.log("Вывод числа до 15 через Switch:");
switch (varSwitch) {
    case 0: console.log(0);
    case 1: console.log(1);
    case 2: console.log(2);
    case 3: console.log(3);
    case 4: console.log(4);
    case 5: console.log(5);
    case 6: console.log(6);
    case 7: console.log(7);
    case 8: console.log(8);
    case 9: console.log(9);
    case 10: console.log(10);
    case 11: console.log(11);
    case 12: console.log(12);
    case 13: console.log(13);
    case 14: console.log(14);
    case 15: console.log(15);
}

//////////////////////////////////////////////////

function fSummation(x,y) {
    return parseInt(x) + parseInt(y);
}

function fMultiplication(x,y) {
    return x * y;
}

function fSubtraction(x,y) {
    return (x - y);
}

function fDivision(x,y) {
    return (x / y).toFixed(2);
}

console.log("Результат арифмитических операций с переменными a и b (значения  " + a + " и " + b + "). Сложение, умножение, вычитание, деление соответственно:");
console.log(fSummation(a, b));
console.log(fMultiplication(a, b));
console.log(fSubtraction(a, b));
console.log(fDivision(a, b));

//////////////////////////////////////////////////

//Организация функции мат. расчетов.
function mathOperation(arg1, arg2, operation) {
    if (isNaN(arg1) || isNaN(arg2)) {
        return "The parameters have to be numbers.";
    }
    else {
        switch (operation) {
            case "Summation":
                return fSummation(arg1, arg2);
            case "Multiplication":
                return fMultiplication(arg1, arg2);
            case "Subtraction":
                return fSubtraction(arg1, arg2);
            case "Division":
                return fDivision(arg1, arg2);
            default:
                return "The calculation can't be done. Pls, check the operation type";
        }
    }
}

console.log(mathOperation("omg", 1, "Division"));
console.log(mathOperation(2, 3, "gg wp"));
console.log(mathOperation(2, 3, "Multiplication"));

//////////////////////////////////////////////////

//Сравнение даст false, ибо Null будет приведен к числу как 0+, а ноль так и есть точный 0.
//Прикольная статья на эту тему: https://habr.com/ru/company/ruvds/blog/337732/
var i = null, j = 0;
console.log(i == j);

/////////////////////////////////////////////////

//Возведение в степень
function power(val, pow) {
    if (pow == 0) {
        if (val >= 0) {
            return 1;
        } else {
            return -1;
        };
    }
    if (pow == 1) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
};
console.log("Возведение в степень:");
var val, pow;
val = prompt("Задача 8. Что возводим?");
pow = prompt("Задача 8. В какую степень?");

if (isNaN(val) || isNaN(pow)) {
    console.log("Возводить в степень можно только числа.");
} else {
    console.log(power(val,pow));
}


