


/*
1.3 
https://codesandbox.io - среда разработки.
Создать проект на react
Справа - результат работы приложения и 
консоль
console.log("Привет") если добавить.

Для нового приложения.
Оставляем пустой файл index.js
index.html:
<noscript>:
тут выводится сообщение если пользователь отключил js

<div id="root"></div> - тут будем дописывать html, 
который сгенерируем при помощи react

В index.js пишем console.log("Привет!")  - чтобы вывести в консоль

Синтаксис модулей (EcmaScript 2019)

import React from 'react'
import ReactDom from 'react-dom'

В js на самом деле пишем на JSX
Он позволяет соединять html и js

function TodoItem() {
  return (
  <span>Выпить чай </span>
  );

}

Выводим - функцию TodoItem в div id="root"
ReactDOM.render(<TodoItem/>,document.getElementById('root'));


В итоге получается:

import React from "react";

import ReactDOM from "react-dom";

// 1 компонент
function TodoItem1() {
  return <span>Выпить чай </span>;
}

// 2 компонент
function TodoItem2() {
  return <span>Умыться </span>;
}

// 3 компонент
function TodoItem3() {
  return <span>Собраться </span>;
}

// функция собирает 3 компонента
// Из маленьких кусочков собира\ются большие кусочки
function TodoList() {
  return (
    <ul>
      <li>
        <TodoItem1 />{" "}
      </li>
      <li>
        <TodoItem2 />{" "}
      </li>
      <li>
        <TodoItem3 />{" "}
      </li>
    </ul>
  );
}

// выводим функцию с 3-мя компонентами
ReactDOM.render(<TodoList />, document.getElementById("root"));

// 1.4 Настройка локальной среды разработки.

node -v - версия node.js

2 Способа:
1) Утилита createReactApp
2) Собственноручно сделать то же что и утилита

1) npm i -g create-react-app

create-react-app todo - создаст новый проект "todo"

Переходим в эту папку.
В этой папке запускаем npm start

Проект запустится по адресу
http://localhost:3000/

Редактируем выводимый текст:
src/app.js

Заменяем на "Добро пожаловать в React"

npm run build
Появляется каталог build- итоговая сборка
Если cd build и npm start


Проект запустится по адресу
http://localhost:3000/


1.5

https://github.com/juriy - репозиторий, откуда можно брать проект
в разных стадиях разработки.

pro-react-redux

В корневой папке в меню Code/Download zip

Можно взять ссылку которая там появится
https://github.com/Juriy/pro-react-redux.git

В visual studio code дать команду 
git clone https://github.com/Juriy/pro-react-redux.git 
Скачается папочка в текущий каталог

Хотим зайти в папку какую-то- заходим с помощью cd-комманд,
чтобы подключились библиотеки- npm install

npm start - запуск

1.6 Современный javascript и его версии

EcmaScript 2020 - последняя версия стандарта javascript
TC39- группа людей, которая отвечеает за то, как будет выглядеть 
javascript в дальнейшем.

Современный javascript - коллекция proposel (идей) - некоторые включены уже
в стандарт, некоторые только готовятся.

babel- транскрилятор.
Умеет преобразовывать новый код, который пишем по новым стандлартам, для
старых браузеров.
babel умеет преобразовывть даже те новые возможности javascript в стандартный
javascript, которые только разрабатываются и не стали еще частью стандарта.


ECMA-262 - стандарт, последняя версия EcmaScript2020


ES2020- последняя версия

Нововведения JavaScript в ES2020:

метод String.prototype.matchAll;
динамический import();
тип BigInt;
метод Promise.allSettled;
объект globalThis;
механизм выполнения цикла for-in;
оператор Optional Chaining;
оператор Nullish Coalescing.

2.7

EcmaScript6 - в 2015 году появился (переименовали его в EcmaScript 2015)
EcmaScript5 - появился в 2015 году.

*/

// 2.8 Переменные let и const

// Рекоммендуется импользовать let и const вместо var

let name = 'Денис';
name = "Петр";

const p = 3.14;
// pi = 4; // Ошибка. хотя массивы и объекты изменять можно.

const names = ['Денис','Петр'];
// Мы не можем переприсвоить names:   names=[];, но можем добавить элемент

names.push('Женя');
names[0] = 'Владимир';

names.splice(1, 1); // начиная с позиции 1, удалить 1 элемент

console.log(names);

// В массив, определененый как const можно добавлять элементы, удалять их, изменять их.

// С объектами то же самое. Можно добавлять, удалять изменять значения
// внутри объекта, но новое значение целиком присвоить нельзя.

const person = {
	name: 'Денис',
	age: 25
};

person.name = 'Игорь';

console.log(person.name);
console.log(person['age']); // более универсальные способ обращения к полю объекта

// По умолчанию - объявляем const. Если нужно будет менять- меняем на let

// Область видимости var - вся функция.
// let и const видны только внутри объявленного блока.
let a=3;

let a1 = 2;
let text ="111";

if (a>1) {
	
	let b = 1;
	console.log(b);
	text= text + "333"; // Переменные, объявленные вне блока, проникают в блок.
	console.log(text);
	console.log(a1);
	console.log(a);
}




// console.log(b); // b не видно за пределами if

// В цикле let i - запоминается значение i на каждой иттерации.
// Для каждой иттерации как бы своя i

// 2.9 Функции-стрелки (arrow-функции)

// В javascript функция является объектом.
// Функции можно передавать как аргументы в другие функции
// Можно присваивать их как значения переменным
// Можно возвращать как результат из других функций


function square() {
	return x*x;
	}
	
// Стрелочная функция
// sq- название функции
// (x) - аргумент функции
// x*x - тело функции- фактически возвращаемое значение
const sq = (x) => x*x;
// const sq = (x) => x*x; // если 1 аргумент

console.log('sq=',sq(3));

const arr = ['1','3','2','4'];

// Преобразуем массив символов в массив чисел с помощью map
// Затем с помощью filter оставляем только нечетные числа
// num%2 у четных элементов равен 1, автоматически преобразуется в true
// 0 - false
// map и filter пробегаются по всем элементам и преобразуют их
// согласно переданным стрелочным функциям.
// reduce - пробегаем по всем значениям и вычисляем
// Метод reduce используется для вычисления на основе массива
// какого-либо единого значения
// Передаваемая функция- правило вычисления
// max- искомый результат, value- текущее значение которое придет
// Функция вычисляет результат (будущий max) - берет значение полученное
// и прошлый результат max и вычисляет новый maximum
// 0- первоначальный max (будем считать что в нашем массиве числа >=0)

const res = arr.map((el) => parseInt(el)).filter((num) => num%2).
reduce((max,value) => Math.max(max,value), 0 );

console.log("res=",res); 

// Старый синтаксис:
// arr.map(
//function(el) {
//	return parseInt(el);
//}
//)

// Если в теле стрелочной функции больше 1 строки:
// (в 3 строчки в данном случае написанно)
// фигурные скобки обязательны и return обязателен.


// const sq = (x) => {
// return x*x;
//	}; // если 1 аргумент


// Функции-стрелки сохраняют значение ключевого слова this
// Стрелочная функция может быть переденна в качестве аргумента 
// для другой функции или зарегистрированна как обработчик событий.

// У функций-стрелок нет свойства prototype
// В ООП:

function Person() {

}
// Добавляются новые функции в прототип
Person.prototype.hi = function() {
	
}
// На основе стрелочной функции нельзя сделать объект

//const Person = () => {
	
//};

// new Person(); // ошибка

// В классических функциях на основе функции можно создавать новые объекты,
// хотя в ES2015 появились классы.

// Стрелочные функции- легковесные версии обычных функций

// 1.10 Параметры по-умолчанию.

// Функция в старом синтаксисе с дефолтными значениями
function fechOrders(count,start){
	if (count===undefined) {
		count = 10;
		} 
	if (start===undefined) {
		start = 0;
	    }    	
	console.log('Счет',count,'Старт',start);
} 

// Вызываем функцию
fechOrders();

// шрифт Fira code поддерживает лигатуры (соединение символов)

// Функция в синтаксисе ES2015 с дефолтными значениями
function fechOrders(count=10,start=0){
	console.log('Счет',count,'Старт',start);
} 

// Вызываем функцию с дефолтными значениями
fechOrders();

// Вызываем функцию с 1-м другим значением, 2-е дефолтное
fechOrders(15);

// Вызываем функцию с 2-м другим значением, 1-е дефолтное
fechOrders(undefined,2);

// null - обычное значение, не undefined

// Значения по умолчанию - числа, строки, объекты, 
// функции, даже undefined

// Пример

function findProducts(opts = {minPrice:10,maxPrice:20}) {
	console.log(opts);
} 

findProducts(); // Будет значение по умолчанию

findProducts({}); // Будет пустой объект

// Т.е. в данном случае объект передается целиком или не передается
// Объект с опциями- деструктуризация - чтобы выборочно

// Параметры, которые обычно идут по умолчанию, лучше располагать к концу списка.


// 1.11
// Rest параметр

// В javascript в функцию можно передать любое количество аргументов
// независимо от того сколько параметров объявили в функции
// (можно меньше передавать)

//  Раньше, до ES2015

//max(1,3);
//max(1,3,4,5);

//function max() {
// Псевдо-массив arguments
// Чтобы его сконвертировать- нужно написать	
//var numbers = Array.ptototype.slice.call(arguments);
// rest-параметр функции, который группирует в настоящий массив
// все аргументы которые не были присвоены обычным параметрам
//}

// Теперь в ES2015

// Все передаваемые при фактическом вызове параметры будут
// сгруппированны в массив numbers
function max(...numbers){
console.log(numbers);	
}

max(1,3,4); // [1,3,4]

max(1);     // [1]

max();  // [] - пустой массив

function max1(a,b,...numbers){
console.log(a);
console.log(b);
console.log(numbers);	
}

max1(1,2,3); //  a=1, b=2,  [3]

max1(1); //  a=1, b=undefined,  []

// Rest-параметр: обязан идти последним в функции
// Нельзя передавать больше 1 rest-параметра в функцию.

// 1.12
// Spread оператор для массивов

// Spread- делает обратное действие к rest.
// Раскладывает массив на независимые параметры

// Хотим найти максимальное число в массиве.
const arr1=[1,2,3];

// Во встроенном объекте Math есть метод max, который принимает
// аргументы и позволяет достать из низ максимальное число.
// Но Math.max() не умеет работать с массивом.
// Для этого надо преобразовать массив в список аргументов.

// Раньше преобразование делалось:
// Math- контекст(this)
// arr1 - массив, который станет списком аргументов для Math.max
const res1= Math.max.apply(Math,arr1);
console.log('res1=',res1);

// В ES2015:
const arr2=[1,2,5];

// ... -spread-оператор. Извлечет значения массива и передаст
// как значения в функцию.
const res2 = Math.max(...arr2);
console.log('res2=',res2);


const arr3=[1,2,5];
const arr4=[5,6,7];
// Максимум из аргументов 2-х массивов.
// Первые 3 аргумента будут из 1 массива, 2-е 3 аргумента
// будут из 2-го массива
// spread-оператор также можно комбинировать с обычными аргументами.
const res3 = Math.max(41,...arr3,5,...arr4,10);
console.log('res3=',res3);

// shallowCopy- массив новый, но все элементы точно такие же
const shallowCopy1 = [...arr4];
console.log(shallowCopy1);

// shallow-copy из 2-х массивов - элементы те же, массив новый.
// так можно объединить 2 массива в один новый массив
const shallowCopy2 = [...arr3,...arr4];
console.log(shallowCopy2);


// Объединяем 2 массива и произвольные значения
const arr5 = [...arr3,...arr4,50];
console.log(arr5);

// Совеременые freimwork обычно используют неизменяемые массивы,
// разработчики таким образом создают новые измененные массивы.

// 1.13. Деструктуризация объектов.

// Деструктуризация позволяет достать данные - из массива или объекта.

const Person2= { 
	firstName: 'Peter',
	lastName: 'Smith',
	age: '27'
};

// До ES2015

const firstName1 = Person2.firstName;
const lastName1 = Person2['lastName'];
const age1 = Person2['age'];

console.log('firstName1=',firstName1,'lastName1=',lastName1,'age1=',age1);

// В ES2015

// Создаем 2 константы firstName,lastName, имена их должны
// совпадать с названиями полей объекта
const {firstName,lastName}= Person2;

console.log('firstName=',firstName,'lastName=',lastName)

// Более сложный случай. Деструктуризация объекта в объекте


const Person3= {
	name:{
		first: 'Peter',
	    last: 'Smith'
		},
	age: '27'
};

// Название констант должно быть таким же как и название полей
// в объекте. Можно использовать переменные let.

// В итоге получаем константы first,last,
// они созданны из Person3.first (Person3['first'])
// и Person3.last (Person3['last'])
// name в {} - просто указывает путь- 
// зайти в объект name и сохранить его поля first и last
// в соответствующих константах.

// Поле first объекта - сохраняем в константу firstName
// Поле last объекта - сохраняем в константу lastName

const {name:{first:firstName3,last:lastName3},age} = Person3;
 
console.log('firstName3=',firstName3,'lastName3=',lastName3,'age=',age);


// Переименовывать поля можно в любом случае
const Person4= {
		first: 'Peter',
	    last: 'Smith',
	    age: '27'
};

const {first:firstName4,last:lastName4} = Person4;
 
console.log('firstName4=',firstName4,'lastName4=',lastName4);

// Значение по умолчанию. Если в объекте не будет
// поля role- в константу role попадет значение по умолчанию 'user'
// Если будет- тогда в константу role попадет значение поля из объекта
const {role = 'user'} = Person4;
console.log('role=',role);

// Со вложенными объектами даст ошибку. Если
// объекта permissions нету- он даст undefined, к role нельзя обратиться
//const {permissions:{role = 'user'}} = Person4;

// Если объект есть в объекте, но внутри него нет искомого поля-
// можно новому полю задать значение по умолчанию
const {name:{role2='user'}}=Person3;
console.log('role2=',role2);


// Или можно при отсуттствии в объекте искомого объекта 
// создавать пустой объект по-умолчанию, а там дальше проверять-
// есть ли в нем свойство role3. Если нет- присваивать ему 
// значение по-умолчанию.
const {permissions:{role3 = 'user'}={}} = Person4;
console.log('role3=',role3);

// Деструктуризация аргументов функции

// До ES2015:

// В функции- для каждого параметра, который может быть 
// задан пользователем- проверяем- является ли он undefined
// (задал ли его пользователь при вызове)


//  function connect(options){
//}

//connect({
//host:'localhost',
//port:1829,
//user:'peter'	
//}
//) 

// С ES2015

// Передаваемые параметры реструктуризируем.
// Передаем им значения по-умолчанию если данных
// параметров не будет при вызове
 
 
 // Можем так же использовать при деструктуризации вложенность
 // и переименование переменных.
 // Получается- объект не сразу передается а как аргумент при вызове
 function connect2({
 host:hostname = 'localhost',
 port:portName = 1829,
 user = 'quest'	 
 }={}){
 console.log('hostname:',hostname,'portName:',portName,'user:',user);	
}

connect2({}); 

// port получит определенное значение- 1111, остальные- 
// значения по-умолчанию.
// При вызове в объекте port, а при вызове функции
// при деструктуризации переименовваем в portName
connect2({port:1111}); 

// Если вызвать эту функцию без параметров вообще-
// будет ошибка
// Чтобы не было ошибки- при описани объекта- 
// поставить пустой объект если его нет. Тогда не будет ошибки.
// ={}
 connect2();
 
 // rest элемент
 
 const dict = {
	duck: 'quack',
    dog:  'wuff',
    mouse: 'squeak'	 
 };
 
 // Достаем значение duck из объекта,
 // а остальных животных собираем из переменных в объект с 
 // помощью оператора rest ...
 // То что работаем с объектом-  otherAnimals - тоже объект
 // rest- элемент должен быть в конце и один (на одном уровне если)
 const { duck, ...otherAnimals } = dict;
 
 console.log('duck=',duck,'otherAnimals=',otherAnimals);
 
 
 // 1.14. Деструктуризация массивов.
 // Массив чисел фибоначи
 const fib = [ 1, 1, 2, 3, 5, 8, 13];
 
 // Вместо {}  -  []
 // В  a - 0-й элемент массива
 // В  b - 1-й
 // В  c - 2-й
 // Константы не должны быть определены ранее
 // let-  чтобы можно было повторно использовать, менять значение
 // можно не до конца массива деструктурировать. Но если пропускаем
 // елемент- ставим ,,
 
let [a2,b2,c2] = fib;
 
 console.log('a2=',a2,'b2=',b2,'c2=',c2);
 // Если хотим достать 1,3 элемент и пропустить 0,2:
 // Так пишем если a2 и b2 уже объявленны ранее
[,a2,,b2] = fib;
console.log('a2=',a2,'b2=',b2);
 
// Двумерный массив 
const line = [[10,17],[4,7]]; 

// Описываем форму массива. Получаем данные
// в переменные p1x,p1y,p2x,p2y

const [[p1x,p1y],[p2x,p2y]] = line;

console.log('p1x=',p1x,'p1y=',p1y,'p2x=',p2x,'p1y=',p1y);

const people = ['chris','sandra'];
// При деструктуризации задаем значение по умолчанию- 
// если в массиве нет такого значения.
const [a3,b3,c3='guest'] = people;
 console.log('a3=',a3,'b3=',b3,'c3=',c3);


const people2 = ['chris','sandra','bob'];
// При деструктуризации задаем значение по умолчанию- 
// если в массиве нет такого значения.
// rest- элемент- собирает деструктурируемые переменные в массив
const [a4,...others] = people2;
 console.log('a4=','others=',others);
 
 // Объект- описывает как разные звери говорят
 const dict2= {
	duck:'quack',
	dog:'wuff',
	mouse:'squeak',
	hamster:'squeak'
	
 };
 
 
 // Хотим найти тех зверей которые говорят 'squeak'
 // Функция entries. Принимает объект, а возвращает двумерный
 // массив. Каждый элемент массива- это маленький массив ключ/значение
 
 // Фильтруем массив. Функция filter принимает стрелочную функцию.
 // arr- элемент массива- в свою очередь- маленький массив.
 // По всем элементам пробегаемся. Если 2 значение его равно 'squeak' 
 // Выражение получается true- элемент осттается в результирующем массиве.
 
 
 const result2 = Object.entries(dict2)
 //.filter((arr) => arr[1] === 'squeak');
 // С помощью ES2015- используем деструктуризацию.
 // Раскладываем внутренний массив на ключ и значение
 // .filter(([key,value]) => value === 'squeak');
 // Можно не писать key- он не используется
 .filter(([,value]) => value === 'squeak')
 // map- опять выбираем элементы, перестраиваем массив
 // выбираем с помощью деструктуризации ключи key и возвращаемоеъ
 // их в одномерный массив.
 // (остаются мышка и хомяк)
 .map(([key]) => key ); 
 
 console.log(result2);
 
 // Можно комбинировать деструтуризацию для массивов и для объектов.
 // Объект внутри которого есть массив
 
 
 const shape = {
	 type:'segment',
	 coordinates: {
	   start: [0,1],
	   end: [17,15]		 
	 }
	 
 };
 
 // Хотим получить координаты start,end.
 // Используем деструктуризацию.
 // Получаем только coordinates
 
const { coordinates: {start:[startX,startY],end:[endX,endY]}  }  = shape;
 
console.log('startX=',startX,'stratY=',startY,'endX=',endX,'endY=',endY);

// 1.15. Шаблонные строки (template strings, template литералы) 

// До ES2015

const user='Bob';

const num = 17;

const text1 = 'Hello, ' + user + ' you have ' + num + ' letters in your inbox';

console.log(text1);

// После ES2015

const text2 = `Hello, ${user} you have ${num} letters in your inbox`;
console.log(text2);

// Можно вычислять выражения
const text3 = `${2+2}`;
console.log(text3);


// Можно использовать функции. Например, time stamp
const text4 = `${Date.now()}`;
console.log(text4);

// Можно переносить строки. Также можно их комбинировать с включениями javascript

const items = ['tea','cofee'];

const text5 = `
 <ul>
  <li> ${items[0]} </li>
  <li> ${items[1]} </li> 
 </ul>
`;
console.log(text5);

// 16. Объекты

const x= 10;
const y= 30;

// До ES2015
// Метод - это функция, которая принадлежит объекту
const point = {
	x:x,
	y:y,
    draw: function(ctx) {
		//***
	}	
};
// Получается объект {x:10,y:30}
console.log(point);

// В ES2015

const point2 = {x,y};	// Означает x:x,y:y
console.log(point2);

const point3 = {
	x,y,
	draw(ctx){ // Не функция-стрелка- обычная функция, просто упрощенный синтаксис
	//***	
	}
	};	// Означает x:x,y:y
console.log(point3);


// При создании объекта можно использовать значения ключей которые
// вычисляются динамически


const prefix = '_blah_';
const data = {
[prefix + 'name']: 'Bob',
[prefix + 'age']: 23	
};
// Получается: {_blah_name:'Bob',_blah_age:23};
console.log(data);

// Есть 3 объекта. При объединении поля второго
// должны иметь приоритет над полями первого, а 3- приоритет
// над полями 1 и 2-го


const defaults = {
	host:'localhost',
	dbName:'dbUser',
	user:'admin',
	password:'123'
};


const opts = {
	user:'jhon',
	password:'567',
	comp:'user',
	draw(x){x+=1;}
};

const opts2 = {
	user:'jhon2',
	password:'5672',
    draw(x,y){}
};

// Первый объект- дефолтный, потом- 1 или несколько объектов- свойствами которых
// перезаписываем дефолтные значения
//Object.assign(defaults,opts,opts2);

// В итоге все объединяется в первый объект-  defaults
// Если 2 и 3 объекты имеют совпадающие поля- данные идут из 3-го объекта
// Также функция- если одинаковые во 2 и 3-м объекте-
// функция 3-го объекта целиком перезапишет 2-ю и результат- в объект defaults
// Меняется в результате только 1-й объект, 2,3 не меняются
console.log(defaults);
console.log(opts);
console.log(opts2);

// Чтобы не менять объект defaults а создать новый объект:

const res5= Object.assign({},defaults,opts,opts2);
console.log(res5);

// С помощью object.assign() удобно создавать поверхносные копии объектов
// (shellow copy)


const person5 = {
	name:'Bob',
	friends:['Mark','Yakov']	
};

const shallowcopy = Object.assign({},person5);



// Используется именно поверхносная копия
// Изменяем свойство в первом объекте- во втором объекте
// свойство не меняется.
// Но если изменяем массив в первом объекте- и во втором
// объекте он меняется
person5.friends.push('Jane');
person5["name"]='Denis';

console.log(person5);
console.log(shallowcopy);

//В ES2018 - Object spread operator- более лаконичный способ
// копирования объектов

// В ES2015 новый методы:
// setPrototypeOf - устанавлоивает объекту прототип
// ключевое слово super- упрощает доступ к прототипу объекта

// 17. spread-оператор для объектов
// spread-оператор для массивов существовал и в ES2015

// Есть 2 объекта. При объединении поля второго
// должны иметь приоритет над полями первого


const defaults1 = {
	host:'localhost',
	dbName:'dbUser',
	user:'admin',
	password:'123'
};


const opts3 = {
	user:'jhon',
	password:'567',
	comp:'user',
	draw(x){x+=1;}
};

// 1) С помощью Object.assign()
//const res6= Object.assign({},defaults1,opts3);

// 2) spread-оператор ...
// В массивах spread-оператор раскрывается на спаисок аргументов.
// а в объектах - В 2018 году появилось 
// использование spread-оператора - тоже раскрываются свойства 
// и из них формируются свойства для нового объекта


const port = 8080;

// Можем так же добавить дополнительное свойство
// из константы в результирующий объект
// port  - то же самое что написать: port:port
// port:8080
// Так же можно добавить метод

const res6 = {...defaults1,...opts3,port,connect(){}};

// React/Redux- работает с неизменяемыми копиями объектов-
// удобно делать shellowcopy

console.log(res6);

// 18. Прототипы

// Animal1  Name:Dog, voice:woof
// Animal2  Name:Cat, voice:meow
// Animal3  Name:Beard, voice:tweet

// Общая функция для всех 3-х объектов:
// Animal Prototype: say()

// Обращаемся к полю или функции
// В объекте: сначала проверяем поля и функции самого объекта.
// Если нашли- берем его
// Если не нашли - проверяем есть ли у объекта прототип.
// Если есть- ищем там поле или функцию.

// Прототип- обычный объект, хранящий числа, строки, функции.
// (его могут использовать разные объекты)
// У него тоже может быть прототип.

// Ищем дальше в этом прототипе у протоипа пока не найдем то что искали
// или пока не дойдем до объекта у которого нет прототипа.

// Если нет и там- возвращается undefined.
// Это цепочка прототипов

// 1) Функция say() включена в сами объекты

const dog1= {
	name:'dog',
	voice:'woof',
    say: function() {
		console.log(this.name,'goes',this.voice);
	}	
};


const cat1= {
name:'cat',
voice:'meow',
say: function() {
	    console.log(this.name,'goes',this.voice);
} 		
};

dog1.say();
cat1.say();
console.log("1 способ",cat1,dog1);

// 2) Выненесем функцию say() в отдельный объект
// Используем  Object.setPrototypeOf()
// Сначала создаем объекты а потом-
// добавляем в cat2,dog2 прототип

const animal2= {
	    say: function() {
		console.log(this.name,'goes',this.voice);
	}		
}

const animal2_= {
	    say2: function() {
		console.log(this.name,'goes2',this.voice);
	}		
}


const dog2= {
	name:'dog',
	voice:'woof'
};
// Из ES2015
// Object.setPrototypeOf делает код существенно медленнее
// Делаем animal2_ прототипом объекта dog2
Object.setPrototypeOf(dog2,animal2);
// Теперь animal2_ будет прототипом объекта dog2.
// В нем будет функция say2(), а функции say() не будет
Object.setPrototypeOf(dog2,animal2_);

const cat2= {
name:'cat',
voice:'meow'
};
// Добавляем в прототип объекта cat2  содержимое объекта animal2- 
//  свойство/функцию say()
Object.setPrototypeOf(cat2,animal2);

dog2.say2();
cat2.say();
console.log("2 способ",cat2,dog2);


// 3) Исполоьзуем Object.create()
// для создания прототипа
// Object.create() создает пустой объект с заданным прототипом.
// Лучше использовать этот способ

const animal3= {
	    say: function() {
		console.log(this.name,'goes',this.voice);
	}		
}

// Создаем пустой объект dog3 с прототипом из объекта 
// animal3
const dog3=Object.create(animal3);
// 2 способа задания свойств объекта
dog3.name='dog';
dog3['voice']='woof';

dog3.say();
console.log('3 способ',dog3);

// 4) Улучшим код
const animal4= {
	    say: function() {
		console.log(this.name,'goes',this.voice);
	}		
}

// функция-конструктор
// используется для создания объектов с заданным прототипом
function createAnimal(name,voice){
   // создаем объект пустой result на основе объекта animal
   // (animal- его прототип будет)
   const result = Object.create(animal4);	
   // создаем поля у нового объекта на основании 
   // переданных значений   
   result.name=name;
   result['voice']=voice;   
   return result;	
	
};

const dog4 = createAnimal('dog','woof');
const cat4 = createAnimal('cat','meow');

console.log('4 способ',dog4,cat4);
dog4.say();
cat4.say();

// 5) Еще оптимизируем код

// функцию-конструктор принято называть с большой буквы
function Animal(name,voice){
   this.name=name;
   this['voice']=voice;   
};
// В javascript у каждой обычной функции (стрелочные функции не считаются)
// есть свойство prototype. Пока это пустой объект.

// Добавляем в объект prototype метод say()
// метод- это функция в составе объекта
Animal.prototype.say= function(){
console.log(this.name,'goes',this.voice);	
};


// Используем функцию-конструктор с ключевым словом new
// javascript автоматически создает пустой объект.
// он называется this
// Не надо возвращать его- объект this автоматически возвращается
// из функции-конструктора при вызове её с ключевым словом new
// Объект, возвращенный функцией- конструктором Animal 
// станет прототипом dog5,cat5


const dog5 = new Animal('dog','woof');
const cat5 = new Animal('cat','meow');

console.log('5 способ',dog5,cat5);
dog5.say();
cat5.say()

// 1) Object.setPrototypeOf
// 2) Object.create()l
// 3) new

// У прототипа объекта- есть еще свой прототип-  Object.prototype
// у него есть функции toString(), valueOf, hasOwnProperty() и т.д.
// Можно вызвать, например, dog5.toString()

// У большей части объектов javascript Object.prototype - верхний прототип
// но некоторые объекты могут не иметь вообще прототипов

// Объект без прототипа
const obj= Object.create(null);
console.log(obj);

// 19. Классы
// Классы добавились в ES2015

// Класс- это некий чертеж по которому создаются объекты

class Animal2{
	// В конструкторе описываются- какие параметры принимают
	// объекты класса и какие свойства (поля) объектов на основании 
	// них создаются (this.name, this.voice)
	constructor(name,voice){
		this.name=name;
		this.voice=voice;		
	}
	say(){
        console.log(this.name,'goes',this.voice);	
	}
	
	
}
// Класс bird дочерний от Animal
class Bird extends Animal {
	
}

// Если в классе не указан конструктор- он наследуется от своего родителя
// (суперкласса) Animal 

// duck -> Bird.prototype -> Animal.prototype -> Object.prototype -> null
const duck3 = new Bird('duck','quack');
duck3.say();
console.log("******************************");


// Расширим класс bird4

// Класс bird дочерний от Animal
class Bird4 extends Animal {
	// Вызываем конструктор. Получаем данные значения при создании объекта
	constructor(name,voice,canFly){
		// Суперконстуктор обязательно вызывается до первого this
		super(name,voice); // родительский конструктор для установки свойств
		
		super.say(); // Вызывается функция при создании объекта (именно из родительского
		// класса Animal функция)
		// Если this.say() - это уже переопределенная функция 
		
		//this.name, this.voice на основании переданных name,voice
        this.canFly=canFly; // Создаем свойство this.canFly на основе переданного
		// canFly
	}
	// Для данного класса переопределяем родительскую функцию
	say(){
		console.log("He is a bird");
		
	}
	
}
// 
const duck4 = new Bird4('duck','quack',true);
duck4.say(); // Вызывается преопределенная для данного класса функция


// 20. Свойства классов
// class properties- пока только готовятся войти в официальный стандарт.

// используем среду разработки https://codesandbox.io -
// потому что там используются самые новые возможности с транслятором babel.

// Можно инициализировать сваойства без конструктора
class  Counter5{
	count=1;
	
	// Свойству присваиваиваем arrow-функцию
	inc = () => {
		this.count++;
		console.log(this.count);
		
	}  
	
	
}

const cnt = new Counter5;
console.log(cnt.count);

// inc привязан к своему this.count

cnt.inc();

// Даже при таком вызове- корректное значение
//setTimeout(cnt.inc,1000);

// static. Статические свойства принадлежат
// классу а не конкретным объектам.


class  Counter6{
	count=1;
	// Раньше в классическом JS надо было:
	// constructor() {
	// this.count = 1; 
	//
	// // сюда же в конструктор переносим свойство которому присваиваем arrow-функцию
	//	this.inc = () => {
	//	this.count+= Counter6.incStep;
	//	console.log(this.count);		
	// }
	
	// св-во привязанно к объекту
	// Свойству присваиваиваем arrow-функцию
	inc = () => {
		this.count+= Counter6.incStep;
		console.log(this.count);
		
	}  
	// Статическое свойство- на сколько хотим увеличивать count
	static incStep = 2;
	
	// Статическая функция
	static incrementAll= function(arr) {
		arr.forEach( (c) => c.inc() );
		
	}
	
}
    // Для классического JS: выносим функции сюда. 
	// Статическое свойство- на сколько хотим увеличивать count
	// Counter.incStep = 2;
	// Статическая функция
	// Counter.incrementAll= function(arr) {
	//	arr.forEach( (c) => c.inc() );
    //   }


const cnt2 = new Counter6;
// При каждом вызове- увеличивается на incStep
cnt2.inc();
cnt2.inc();
cnt2.inc();

Counter6.incrementAll([]);


// В классическом JS
console.log("***");


class  Counter7{

	 constructor() {
	 this.count = 1; 
	
	 this.inc = () => {
	 this.count+= Counter7.incStep;
	 console.log(this.count);		
	 }
	 }
	
}

	 Counter7.incStep = 2;

	 Counter7.incrementAll= function(arr) {
	 arr.forEach( (c) => c.inc() );
      }

const cnt3 = new Counter7;

cnt3.inc();  
cnt3.inc();  
cnt3.inc();  


// 21. Модули в javascript

// В модуле пишем что будем экспортировать- классы, объекты, константы, функции
//export {
// add, subtract, multipart,divide	
//};

// В модуле где нужны эти классы, объекты константы, функции
// add переименуем в a. После этого в коде используем эту функцию
// как a(3,4) 

//import { add as a, subtract } from './mymath';


// Если в экспортном файле переименовываем:

//export {
// add as a, subtract, multipart,divide	
//};

// Для всех внешних файлов эта функция будет называться "a"

//import * as calc from './mymath';

// Теперь принимаемый calc будет объектом 
// calc{add:function add(),Pi:3.14}
// Для использования:
// calc.add(1,2);

// По-умолчанию экспортируем класс Graph
// export default Graph

// импорт (если default- то не нужны фигурные скобки):
// это класс, но typeof Graph виден как функция для js
//import Graph from './mymath';

// Переименовываем при принятии Graph в G1
//import G1 from './mymath';

// Можно смешать дефолтный и именованный импорт-экспортировать-
// import G1, {add,subtract} from './mymath';



// Можно импортировать по умолчанию объект и всё как объект calc
//import G1, * as calc from './mymath';

// Можно ставить export default прямо при создании класса:

// export default class Graph{}

// default export- только один объект в файле

// Импортировать и исполнить кусок другого модуля:
// (этот модуль находится в том же каталоге)
// import './sideeffect'

// webpack может через import подключить css,png файлы и т.п.
// (прописывается расширение)

// импортируем объект joker из библиотеки которая установленна как 
// зависимость

// import joker from 'one-liner-joke'

// Генерация короткой шутки
// console.log(joker.getRandomJoke().body);

// 22. Первый проект.

// Создаем приложение: список дел.
// Можно добавить дело, перечеркнуть- выполнено, выделить как важное (!),
// отфильтровать, удалить.

// Создадим 7 компонентов.
// Среди них app- компонент- обертка, который 
// собирает все остальные 6  компонентов вместе

// app
// app-header
// item-add-from
// item-status-filter
// search-panel
// todo-list
// todo-list-item


// 23. Создаем пустой react проект.

// Запускаем утилиту в терминале в vidual studio code 
// create-react-app  . Потом почистим код стандартный- 
// будем создавать сами проект.

// (если не установлен: выполним npm install -g create-react-app )

// Создаем приложение: create-react-app todo
// create-react-app даст правильно настроенный babel и webpack


//  npm start
//    Starts the development server.

//  npm run build
//    Bundles the app into static files for production.

 // npm test
 //   Starts the test runner.

 // npm run eject
 //   Removes this tool and copies build dependencies, configuration files
 //   and scripts into the app directory. If you do this, you can’t go back!

// We suggest that you begin by typing:

//  cd todo
// npm start

// npm start
// Запускает сервер разработки.

// npm run build
// Объединяет приложение в статические файлы для производства.

 // тест npm
 // Запускает тестовый прогон.

 // npm run eject
 // Удаляет этот инструмент и копирует зависимости сборки, файлы конфигурации
 // и скрипты в каталог приложения. Если вы сделаете это, вы не сможете вернуться!



// Выполняем:

// cd todo
// npm start

// Запустится приложение и откроется в браузере 
// Можно открыть приложение в другом браузере http://localhost:3000/

// src- исходный код приложения
// папка public: index.html- файл для запуска
// favicon.ico- иконка для отображения
// manifest.json - для андроид-device.

// В каталоге src: удаляем все файлы кроме index.js
// Чистим index.js

// Из public удаляем все кроме index.html

// index.html оставляем в таком виде:

//<!DOCTYPE html>
//<html lang="en">
//  <head>
//    <meta charset="utf-8" />
//    <meta name="viewport" content="width=device-width, initial-scale=1" />
//    <title>Todo App</title>
//  </head>
// <body>
//    <div id="root"></div>
//  </body>
//</html>


// Добавим в index.js команду console.log("Привет");

//http://localhost:3000/  - выведется в консоль команда

// .gitignore- чтобы по git поделиться с коллегами.
// package.json- тут хранятся все зависимости проекта

// package-lock.json - Цель этого файла заключается 
// в отслеживании точных версий установленных пакетов, 
// что позволяет сделать разрабатываемый продукт стопроцентно 
// воспроизводимым в его исходном виде даже в случае, если те,
// кто занимается поддержкой пакетов, их обновили.
// yarn.lock - если используем yarn а не npm
// (можно удалить)
 
 
// readme.md- можно очистить (описание проекта)
// node_modules - при пересылке можно не брать,
// восстанавливается из файлов *.json командой npm install
// в каталоге проекта


// 24. React-элементы


