//при запуске скрипта происходит сначала определение всех переменных (без установки значений) и функций (но не функциольных выражений и стрелочных функций) и только потом установка
//  их значений на втором этапе.
//как видно из кода последним определением переменной "а" служит объявление ее как функции в пятом пункте.
//в первом случае условный оператор даст ложь, поскольку переменная "а" уже содержится в глобальном объекте Window согласно строке выше (она определяется еще на первом этапе создания
//  глобального контекста). Alert и покажет определение "а" как определение функции.
//во втором случае для переменной "а" ничего не меняется, последнее ее определение это по-прежнему последнее определение функции.
//в третьем случае для переменной "а" ничего не меняется, последнее ее определение это по-прежнему последнее определение функции, ибо объявление ее в третьем пункте будет переопредено
//  пятым пунктом.
//в четвертом случае при запуске системы на первом проходе определяется идентификатор "b", который на втором этапе сначала выставляется в
//  в определение "b" как функции, но затем замещается установкой значения переменной "b" на функциольное выражение
//  Определение "b" как обычной функции в данном случае бесполезно, этому мешает установка значения переменной "b".
//в пятом случае вызывается наша старая добрая функция "a" так, что у для нее сохраняетя ее контектс исполнения по умолчанию (поскольку в метод call передо null), а для глобальной функции
//this есть глобальный объект Window, который и будет выведен в alert.

//1
if (!("a" in window)) {
    var a = 1;
}
alert(a);
//2
var b = function a(x) {
    x && a(--x);
};
alert(a);
//3
function a(x) {
    return x * 2;
}
var a;
alert(a);
//4
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);
//5
function a() {
    alert(this);
}
a.call(null);