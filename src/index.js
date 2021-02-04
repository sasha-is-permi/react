
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';



// 24. React элементы
// Подключаем библиотеки React и React DOM
// react должен называться React чтобы babel смог его использовать.


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
{/* const SearchPanel3 = () => {
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
  const welcomeBox = <span> hello </span>*/}

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


{/*
 const SearchPanel2 = () => {
   const searchText = 'Type hear to search'; 
   return  < input placeholder={searchText}
   autoComplete=""
   tabIndex=""/>; 	
   };  */}

// Как html-элементу (например input) передать стиль
// Нужно передать объект, который описывает css-свойство,
// которое хотим установить на этом элементе
// Чаще используем css классы чтобы улучшить внешний вид
// компонента (className)



   // Если вставим через html эту константу-опасный скрипт может 
   // выполниться, но через JSX- он просто отрисуется (текст)
   // без выполнения (из соображений безопасности)
  {/*  const value='<script> alert("") </script>'

   const todoData=[
       {label:'Drink Cofee', important:false, id:1},
       {label:'Make Awesome App', important:true, id:2},
       {label:'Have a lunch', important:false, id:3},
   ];

return ( <div>  */}


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
        {/*      < AppHeader /> 
              < SearchPanel />  */}
         {/* < TodoList items={['Item 1','Item 2']}/> */}
         
         {/* Передаем в компоненту массив в качестве параметра */}
  {/*       <TodoList todos={todoData}/>   */}

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
    {/*      </div> );
                     };  */}

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

// https://www.bootstrapcdn.com

// https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css


// В  public/index.html вставляем эту ссылку. 
// Также подключаем возможность иконок:

// Разные иконки: 
// https://www.bootstrapcdn.com/fontawesome

// https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css


// Используем для списков list-group и list-group-item - классы bootstrap, 
// и todo-list- собственный класс- сделать отступ от заголовка до списка.

// Создадим файл todo-list.css для todo-list.js

// В js-файле: 
// import './todo-list.css'

// Это возможно благодаря webpack

// договоренность.
// Элемент с компонентом todo-list возвращает элемент с классом todo-list.css

// И аналогично.

// Переносим файлы в отдельные каталоги.
// Если приложение покажет ошибку

// 4. Состояние компонентов и обработка событий.

// 34.

// Компоненты-классы. 

// Бывают не просто компоненты, а компоненты-классы. 
// Они хранят внутренне состояние.
// Например, значения счетчиков. 

// Сделаем в todo-list-item.js   компонент-класс.

// Также из item-status-filter делаем компонент-класс.

// Использовать компоненты-классы или компоненты-функции?

// Если не видно причин для использования компонент-классов-
// используем компонент-функцию


// В компонент-классах: 
// Метод render() возвращает элемент как в функциональном компоненте. 
// Свойства из других компонентов props доступны через this.props

// 35. 
// Обработка событий. 
// В todo-list-item.js :


// Если хотим сделать универсальный элемент- 
// который можем использовать в разных других- пишем
// onClick= {}
// При клике по элементу выводим его название.
// onClick = { () => console.log(`Нажат: ${label}`) }



// Установка BreackPoint
// В google chrome правая кнопка мыши- посмотреть код. 
// Sourses /   Static/js
// todo-list-item.js
// Находим строчку где предположительно ошибка, устанавливаем breackpoint 
// (Blackbox.script)

// Потом запускаем программу- попадаем на breackpoint
// справа окошко Scope/ Local/ this: undefined

// Потом отключим breackpoint 
// (правая кнопка мыши- disable breackpoint)

// Ошибка: функция-стрелка сохраняет контекст и this, 
// а обычные функции не сохраняют. 

// Методы исправления ошибки:

// 1)
// this.onLabelClick.bind(this)
//  Привязываем код к "правильному" this. 
// Не очень хороший способ- каждый раз при вызове render()
// создается новая функция. 
//
// 2) Создаем функцию onLabelClick не на прототипе класса, а на самом объекте.
// Объявим ее как функцию-стрелку чтобы this внутри этой функции сохранялся правильным
// Теперь использовать .bind(this) уже не нужно. 

//constructor() {
//   super();
//    this.onLabelClick = () => {
//     console.log(`Done: ${this.props.label}`);
//    };
// }

// 3) Поля классов (class fields)
// Пока еще не входит в стандарт. 

// Вместо constructor(): 

// onLabelClick = () => {
//   console.log(`Done: ${this.props.label}`);
//   };

// Также на самом объекте, а не на прототипе создается
// onClickLabel(), а поскольку это функция-стрелка- 
// контекст сохраняется. 

// 36. State- состояние React-компонента. 

// Если добавить к компоненту класс bootstrap done- зачеркнутый 
// элемент. 
// Надо добавлять по щелчку на корзинку. 

// В react внутренне состояние компонента хранится в специальном поле: 
// state

// constructor() {
//   super();
//   this.state= {
//      done: false     
//   };
// }

// Опять же используя новые возможности javascript пишем:
//   state= {
//      done: false    };


    // с помощью деструктуризации из state поучаем done. 
    // const {done} = this.state  

      // Переменная, к которой потом можно прибавить/убавить видимость 
  // элемента (done)
  // let classNames = 'todo-list-item';
   
  // Если щелкнули по элементу (done из state изменилось-
  // добавляем класс, обозначающий зачеркивание элемента )
  //if (done) {
  //   classNames += ' done';    
  //}

  // После того как проинициализировали state-  напрямую изменять его нельзя.
  // Его можно читать, но напрямую нельзя изменять. 
  // Чтоюы изменить state:
  // нужно использовать специальную функцию this.setState({});
  // (сеттер)

  // Как только кликаем на элемент- он зачеркивается.
  // onLabelClick = () => {
  //  this.setState({
  //   done: true
  // });


  // 37. Как работает setState()

 // Добавляем в state ещё и important 
 //  state= {
 //  done: false,    
 //  important : false 
 //    };

// important получаем теперь не из props а из state
// с помощью деструктуризации из state поучаем done. 
// const {done, important} = this.state  

// Так же как добавляли класс на done добавим класс на important. 

// В state может быть много переменных, но в setState()
// передаем только то, что нужно изменить. 
// Остальные переменные сохраняются в state

// 38. Обновление состояния, зависящее от предыдущего состояния.

// setState может быть асинхронной функцией. 
// не правильно писать поэтому:
// important : !this.state.important

// используем функцию- чтобы react понимал что надо
// брать последний state 
// передаем state, деструктуризация:  {important}
// this.setState(({important}) => {
//   return {
//     important: !important
//   };
// });

// Если новое состояние не зависит от предыдущего- можно передавать в setState() объект
//  this.setState({
//   important:true
// );
//
//
// если зависит- функцию

// 39. Собственные события.

// Чтобы удалить элемент- при нажатии кнопки button надо чтобы
// среагировал компонент <App>, и из массива todoData удалились данные. 

// TodoListItem будет генерировать событие
// Его будет слушать TodoList -> App -> todoData

//  Массив обновится- TodoListItem исчезнет (удалится).

// Передадим каждому элементу еще одну функцию. 

// Кликаем на кнопку в TodoListItem- вызываем функцию, которую 
// передал TodoList. 

// TodoList вызывает функцию, которую передал ему App. 

// Таким образом App узнает что один из TodoListItem решил
// удалиться.


// 40. setState() - удаление элемента. 

// Компонент App является компонтентом-функцией.
// Чтобы удалить из массива элемент компонент App нужно сделать
// компонентом-классом, а массив todoData сделать частью state-а 
// приложения. 

// Тогда будем вызывать setState(), и это даст react знать что 
// приложение нужно обновить.

// Нельзя напрямую изменять данные, которые получаем в setState()
// Нужно вернуть новый массив, который содержит все
// элементы старого массива кроме элемента,
// который хотим удалить.

// setState() не должен изменять текущий state. 

// 41. setState() - добавление элемента. 

// Создаем новый компонент
// src/components/item-add-form (папочка)

// Там файлы index.js: 

// import ItemAddForm from './item-add-form';
// export default ItemAddForm;

// item-add-form.css:
// .item-add-form {
//   margin-top: 10px;
// }

// item-add-form.js: 

// import React, { Component } from 'react';

// import './item-add-form.css';

// Компонент-класс 
// (но можно было сделать и компонент-функцию)

// export default class ItemAddForm extends Component {

//  render() {
//    return (
//      <div className="item-add-form">
//        <button
//          className="btn btn-outline-secondary"
//          onClick={() => this.props.onItemAdded('Hello World')}>
//          Add Item
//        </button>
//     </div>
//    )
//  }
// }


// В  app.js импортируем новый компонент: 
// import ItemAddForm from '../item-add-form';

// Добавляем в функцию render():
// <ItemAddForm onItemAdded={this.addItem}/>

// А также выше render(): 
// addItem = (text) => {
//   // generate id ?
//   const newItem = {
//     label: text,
//     important: false,
//     id: this.maxId++
//   };

//   this.setState(({ todoData }) => {
//     const newArr = [
//       ...todoData,
//       newItem
//     ];

//     return {
//       todoData: newArr
//     };
//   });

// };


// uuId - плагин для генерации id.
// maxId = 100 - начинаем с этого id генерировать
// Обычно id генерируется сервером.
// тут для примера генерируем. 


// addItem = (text) => {
//    // generate id ?
//    const newItem = {
//      label: text,
//      important: false,
//      id: this.maxId++
//    };

//    this.setState(({ todoData }) => {
//      const newArr = [
//        ...todoData,
//        newItem
//      ];

//      return {
//        todoData: newArr
//      };
//    });

//  };

ReactDOM.render(<App/>,document.getElementById('root'));





