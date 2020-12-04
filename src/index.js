// 24. React элементы
// Подключаем библиотеки React и React DOM
// react должен называться React чтобы babel смог его использовать.
import React from 'react';
import ReactDOM from 'react-dom';

// Импортируем компоненты из файлов
// Расширение файлов js будет подставленно автоматически
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'

// Создаем React элемент с помощью JSX
// c помощью babel превращается в обычный javascript
// const el = <h1> Приветствие  </h1>;

// Можно написать на классическом javascript
//const el = React.createElement('h1',null,'Приветствие2');
//   <input placeholder="search"/> /* Будет ошибка без закрывающей палочки */
// Коментарии в обычном виде не работают внутри JSX
/* const el = (
   <div>
     <h1>  My Todo List  </h1>     
     <input placeholder="search"/> 
   
   <ul>
      <li> Learn React </li>
	  <li> Build Awesome App </li>
   </ul>
</div>
);
*/

// Метод превращает react-элемент el (virtual dom) в настоящий объект
// который можно отобразить на странице,  и рендерит их на странице
// ReactDOM.render(el,document.getElementById('root'));

// В терминале в папке todo запускаем npm start
// Ждем, затем запускается браузер по адресу http://localhost:3000/
// (или сами в google chrome можем запустить)

// webpack прослушивает- не изменилсяч ли проект
// (если запустим npm start)
// Если изменения есть- запускается babel, который преобразует
// JSX в javascript 
// Затем webpack шлет комманду браузеру обновиться.

// el- javascript-объект с очень маленьким набором свойств

// Virtual DOM- виртуальное дерево объектов

// 25. React-компоненты.

// Чтобы создать react-компонент надо создать функцию которая возвращает 
// react-элемент.

// Простыми словами, React элемент описывает то что вы хотите увидеть 
// на экране. А если не простыми, то React элемент описывает узел
// DOM в виде объекта.

//React компонент - это функция или класс, который принимает входные
// данные (опционально) и возвращает React элемент.


// Функция возвращает блок JSX, который превратится в React-элемент
/*
const TodoList = () => {
return (
   <ul>
      <li> Learn React </li>
	  <li> Build Awesome App </li>
   </ul>
);	
};*/

//Выносим компонент AppHeader в отдельный файл
/*
const AppHeader = () => {
return (
     <h1>  My Todo List  </h1> 
);	
};
*/

// Без скобок можно записать return когда одна строчка
// Переносим компонент SearchPanel в отдельный файл
/*
const SearchPanel = () => {
return  < input placeholder="search"/>; 	
};
*/
// В App собираем все компоненты
/*
const App = () => {
  return ( <div>
              < AppHeader /> 
              < SearchPanel />
              < TodoList />
          </div> );
};
 
*/

//const el = ( <App/>);
//const el =  <App/>;

//ReactDOM.render(el,document.getElementById('root'));
// <App/> можно вставить сюда не создавая дополнительный 
// элемент el

// Передаем сюда именно React элемент.

//ReactDOM.render(<App/>,document.getElementById('root'));

// Все react-компоненты называем с большой буквы.
// Это не только соглашение, это требование самого React
// Все что начинается с маленькой буквы- это html-теги
// Все что с большой - это кастомные компоненты, которые
// React будет пытаться найти.

// Отдельный компонент - если кусочек интерфейса может быть 
// еще где-то использован, выполняет самостоятельную функцию.
// Или если код становится уж слишком большим- его стоит разбить на 
// компоненты.

// 26. JSX

// В JSX можно использовать как обычные html-теги, так и имена react-
// компонентов.
// Если JSX код занимает несколько строк- его надо взять в круглые
// скобки. Если 1 строку занимает- круглые скобки не обязательны.

// Не можем создать элемент из двух <span> -
// надо их обернуть в какой-нибудь родительский элемент.
//const el= (
//    <div>
//     <span> 1 </span>
//      <span> 2 </span>	  
//    </div> 
//);

// Блок jsx-кода возвращает (или создает) react-элемент.
// Поэтому корнем jsx-кода должен быть один элемент 
// (div обычно)


 
   // Переносим компонент TodoList в отдельный файл.  
   /*
   const TodoList = () => {
    //  Не JSX	
   const item = ['1) Learn React','2) Build Awesome App'];
    // JSX
   return (
     <ul>
        <li> {item[0]} </li>
	     <li> {item[1]}</li>
     </ul>
    );	
    };
   */

// Можно создать JSX-компонент как внутри компонента app,
// так и вне него
const SearchPanel3 = () => {
   // Можно создавать одинаковые по именам константы в разных
   // элементах- они автономны
   const searchText = 'Type hear to search2'; 
   const searchStyle = {
      fontSize:'20px'
   }
  

   // Нужно использовать фигурные скобки- react получит значение
   // из этого объекта
   // Еще свойства JSX
   // Если в свойстве не передать значение то мо умолчанию оно true
   // html нормально преобразуется с помощью JSX
   return  < input

   style = {searchStyle}
   placeholder={searchText}	 
   disabled={true}
   />
   };

const App = () => {

   const isLoggedIn = true;

   //  Можем вставлять одни react-элементы в другие.
   //  Есть react-элемент
  const loginBox = <span> Log in please </span> 
  // react-элемент (JSX)
  const welcomeBox = <span> hello </span>

// Без скобок можно записать return когда одна строчка
// Используем фигурные скобки чтобы передавать значения атрибутов
// аттрибуты в react называются свойствами (properties)
// В child-элементы ( <li> {item[0]} </li> ) 
// нельзя было передавать объект.
// А в аттрибуты можно передавать все что угодно
// Правда любой html-тег так или иначе ожидает получить строку.

// В html свойства можно писать как маленькими так и большими буквами
// Но в JSX для html-атрибутов их названия надо писать camal case
// Некоторые привычные аттрибуты называются немного иначе в JSX
// Примеров всего 2
// в html:  class="foo"
// в JSX: className="foo"
// в html for= ""(обычно ставится на label чтобы
// указать к каому html-элементу
// этот label относится)
// в JSX: htmlFor=""
// Все остальные аттрибуты называются также как и в html
// только используя camal case 



 const SearchPanel2 = () => {
   const searchText = 'Type hear to search'; 
   return  < input placeholder={searchText}
   autoComplete=""
   tabIndex=""/>; 	
   };

// Как html-элементу (например input) передать стиль
// Нужно передать объект, который описывает css-свойство,
// которое хотим установить на этом элементе
// Чаще используем css классы чтобы улучшить внешний вид
// компонента (className)



   // Если вставим через html эту константу-опасный скрипт может 
   // выполниться, но через JSX- он просто отрисуется (текст)
   // без выполнения (из соображений безопасности)
   const value='<script> alert("") </script>'

   const todoData=[
       {label:'Drink Cofee', important:false, id:1},
       {label:'Make Awesome App', important:true, id:2},
       {label:'Have a lunch', important:false, id:3},
   ];

  return ( <div>


  {/* Вызываем текущую дату с помощью кусочка javascript
   Напрямую нельзя вставить объект без <span>
   Т.е. вставляется результат работы функции
   */}
    {/*     <span>  { (new Date()).toString()}   </span>  */}
			 {/*числа, строки можно вставить так в JSX*/}
           {/*      	{'Текст'}    */}
      	 {/*обязательно  <br/> а не  <br>*/}            
           {/*       <span> <br/> </span>  */}
         {/* вставляем react-элемент. Таким образом 
         только react-элементы, строки, числа, булево,
         но не объекты 
         new Date()- объект- нельзя
         (new Date()).toString() - строка- можно
         {loginBox} - добавляем так потому что это react-элемент.
         Если бы это был react-компонент- добавляли бы так:
         <loginBox/>
         
         Если const loginBox = null (или undefined) - для react
         это не ошибка, просто элелент не отображается

                {loginBox}
         
         */}        

              {/*Если пользователь залогинен- null, иначе- loginBox
              Сложную логику лучше поместить в javascript
              true, false - будут проигнорированы если они только одни
              внутри фигурных скобок- ничего не отображается.
              
              */}
           {/*   { isLoggedIn ? welcomeBox :  loginBox}  */}

             {/* Передавать какие-то значения внутрь кастомных 
             компонентов имеет огромный смысл 
             Передаем в TodoList кастомный properties items */} 
           {/*  <br/>
              {value}
           */}
              < AppHeader /> 
              < SearchPanel />
         {/* < TodoList items={['Item 1','Item 2']}/> */}
         
         {/* Передаем в компоненту массив в качестве параметра */}
         <TodoList todos={todoData}/>

              {/* < SearchPanel2 />               
              <br/> <br/>
              < SearchPanel3 />   
              <br/> <br/>
              <h2> Заголовок</h2>
              */}
              {/*Комментарии внутри компонента
               обрамляются фигурными скобочками.
               Когда вызываем javascript посреди тегов html- 
               тоже используются такие скобочки */ }

              {/*Можно вставлять html-теги */} 
          </div> );
};

// 27. Упражнение

// 28. react-компоненты можно вынести в отдельные файлы
// Типично: 1 файл- 1 компонент
// В папке src добавляем папку components
// Как называть файлы:
// 1) Способ через черточку. kebub-case
// todo-list.js 
// 2) TodoList так же как компонент называем файл
// В этом курсе используем 1 способ. 
// В конце файла обязательно пишем export default TodoList;
// Так же выносим в отдельный файл компонент AppHeader
// Так же надо в начале файла написать: 
// import React from 'react';
// (если в файле есть хоть 1 строка jsx-кода)
// Для react: Отключаем Eslint, включаем jsHint
// (Eslint проверяет jsx и javscript, jsHint- javascript)
// Кмпонент todo-list еще разобьем.
// Вынесем todo-list-item отдельно.
// Импортируем todo-list-item в todo-list и используем его там 
// как компонент

// 29. Props-свойства компонентов.
// Передаем параметр label в другой компонент:
// (из todo-list в todo-list-item)
// <li>  <TodoListItem label="Drink Cofee"/> </li>
// <li> <TodoListItem label="Build React App"/>  </li>

// В todo-list-item принимаем параметры props
// (можем назвать и по другому). 

//const TodoListItem = (props) => {
   // Если хотим сделать универсальный элемент- 
   // который можем использовать в разных других- пишем
   // return <span> {props.label} </span>;
   // (li можно использовать не везде-  только в ul)
   //  Не JSX	
   // };


   // используем деструктуризацию в todo-list-item.js
//const TodoListItem = ({label}) => {
   // Если хотим сделать универсальный элемент- 
   // который можем использовать в разных других- пишем
// return <span> {label} </span>;
   // (li можно использовать не везде-  только в ul)
   //  Не JSX	
//};

   // из todo-list.js в todo-list-item.js передаем
   // еще один параметр 
   // вместо important={true} можно написать просто important
   //       <li> <TodoListItem label="Build React App"
   //       important={true}
   //       </li>


   // В todo-list-item:
   // Объект props передается в каждый компонент
   // (если не указан - пустой)
   
   // используем деструктуризацию
   // принимаем из todo-list.js параметры label и imortant
   // (деструктурируем их из props)
   
   // const TodoListItem = ({label, important = false}) => {
       
       // Если important задан true- то красный цвет, иначе- черный
       // important=true задаем в todo-list.js 
       // чтобы выделить красным пункт "Build React App"
       // (ниже возвращаем в todo-list.js:
       // <span style = {liStyle}> {label} </span>;
       // const liStyle = {
       // color: important ? 'tomato' : 'black'
       // }; 
   
   
       // Если хотим сделать универсальный элемент- 
       // который можем использовать в разных других- пишем
       //  return <span style = {liStyle}> {label} </span>;
       // (li можно использовать не везде-  только в ul)
       //  Не JSX	
       // };

     
       // 30. Массивы как свойства компонентов. 
       // Todo-list должен получать данные для отображения
       // в качестве одного из своих свойств. 

       // TodoList.js:

       // Тут TodoList получает данные как параметр props
       // const TodoList = (props) => {

       // Создаем в index.js массив todoData

       //   const todoData=[
       // {label:'Drink Cofee', important:false},
       // {label:'Make Awesome App', important:true},
       // {label:'Have a lunch', important:false},
       //  ];

      {/* Передаем в компоненту массив в качестве параметра */}
      // <TodoList todos={todoData}/>

        // Передаем элементы массива каждый в отдельности
   // eslint-disable-next-line no-lone-blocks
   {/*
      const firstEl= (
         <li> <TodoListItem label={todos[0].label}
          important={todos[0].important} />
         </li>
         );         
   
      const secondEl= (
            <li> <TodoListItem label={todos[1].label}
             important={todos[1].important} />
            </li>
            ); 

      const ThirdEl= (
               <li> <TodoListItem label={todos[2].label}
                important={todos[2].important} />
               </li>
               );  
      */}  
      
      // Выполняем код
       // eslint-disable-next-line no-lone-blocks
       {/*
      return (
         <ul>
 
        {firstEl}
  
        {secondEl}
  
        {ThirdEl}

        </ul>
        )
        */}

   // Передаем массив целиком   
  // eslint-disable-next-line no-lone-blocks
  {/*
   const elements = todos.map((item) => {
      return (
       <li>
           <TodoListItem 
           label={item.label}
           important={item.important}
           />
       </li>
             );
    });
   */}

      // Выполняем код
       // eslint-disable-next-line no-lone-blocks
       {/*
      return (
         <ul>
 
        {elements}

        </ul>
        )
        */}


   // Передаем массив целиком   
   // Элементы этого массива- это jsx-элементы,
   // которые создаем внутри map
  
   // eslint-disable-next-line no-lone-blocks
   {/*
   const elements = todos.map((item) => {
      return (
       <li>
 
 
        
 
           // Используем spread-оператор для объекта
           // (spread-оператор позволяет разложить объект 
           // на коллекцию ключей и значений)
 
           // ключи и названия свойств совпадают 
           // label  -  item.label
 
           <TodoListItem 
           label={item.label}
           important={item.important}          
           />
          
           Взять каждое свойство из item и передать его в качестве 
           аттрибута вместе со значением в item
 
         
          
          <TodoListItem {...item} />
 
       </li>
             );
    });
     */}

// 31. Коллекции и ключи   

//   Чтобы не было ошибки- добавляем уникальный ключ key 
// (обычно приходит с сервера) в  todolist.js  <li key={item.id}>
// В данном приложении- id приходит из компонента <app/>,
// который находится в index.js

//const todoData=[
//   {label:'Drink Cofee', important:false, id:1},
//   {label:'Make Awesome App', important:true, id:2},
//   {label:'Have a lunch', important:false, id:3},
// ];


// Когда добавляем ключ для элемента- при добавлении элементов сравниваются уже их
// ключи, а не элементы, и перерисовка приложения пойдет быстрее. 

// В качестве ключа лучше использовать не индекс элемента

// Если id не хотим передавать дпльше в компоненты: 
//   {/*            
// Из массива объектов item извлекаем 
// массив с id и массив с лстальными объектами
//   */}

// const { id, ...itemProps} = item;

// используем извлеченный объект:
// <TodoListItem {...itemProps} />

// Каждому JSX элементу в массиве нужно свойство key


// 32 Как импортировать css

// Подключим bootstrap через cdn. 





ReactDOM.render(<App/>,document.getElementById('root'));
