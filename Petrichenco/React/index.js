/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
// 85. Знакомимся с React.js

// Стандарты ES6-8
// Отключаем Eslint, включаем jsHint

//1) Обычная функция say()
/* let obj= {
   number : 5,
   sayNumber: function() {
           function say() {console.log(this)}
   } 
         }         
*/
//2) Стрелочная функция
let obj= {
   number : 5,
   sayNumber: function() {
         say = () => {console.log(this)}
   } 
         }         


/*         Методы map, filter. 
Перебирают массив и возвращают новый сформированный массив.
Возвращает новый массив в зависимости от callback
функции, которую передаем.

Отфильтруем массив- из старого создадим новый, 
который содержит имена < 5 букв.
*/
let names= ['Ivan','Anna','Ksenia','Sergey'];

console.log("names:",names);

// Стрелочная функция, анонимная, переданная в качестве аргуемента
// (callback-  в качествеаргумента передается, вызывается при определенных условиях.
// В данном случае- для каждого элементв массива функция берет его элемент
// name и возвращает true- что значит что элемерт  нужно включить в новый массив лишь 
// при длине элемента name.length <5 )  
let shortNames = names.filter((name) => {
return name.length <5;
});

console.log("shortNames:",shortNames);

// Исправим элементы массива
// Переприсвоим массив, т.е. фактически изменим его
let answers = ['SErgey','BorIs'];

//  Для каждого элемента массива item:
// переводим его буквы в маленькие (элемент- строка,
// делаем для нее регистр lowercase).
answers = answers.map((item)=>item.toLowerCase());

console.log('lowercase: ',answers);


// Интерополяция. Используем `` а внутри- переменные и т.п.

let age=30;

console.log(`Пользователь: ${names[3]}, ${age} лет`);