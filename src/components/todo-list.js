import React from 'react';
// Импортируем содержимое файла js из этого же каталога
import TodoListItem from './todo-list-item'

// Тут в TodoList прописано- какие данные выводить
//const TodoList = () => {
    //  Не JSX	
  //  const item = ['1) Learn React','2) Build Awesome App'];
    // JSX
    // <li> {item[0]} </li> <li> {item[1]} </li>
    // Еще в TodoList передали значения < TodoList items={['Item 1','Item 2']}/>
    // В дальнейшем научимся использовать переданные значения    
    // вместо important={true} можно написать просто important
  //  return (
  //     <ul>
  //        <li> <TodoListItem label="Drink Cofee"/> </li>
  //        <li> <TodoListItem label="Build React App"
  //        important
  //       />  </li>
  //     </ul>
  //  );	
  //  };


// Тут TodoList получает данные как параметр props
//  const TodoList = (props) => {

// с помощью деструктуризации достаем из входящего параметра 
// свойство todos
   const TodoList = ({todos}) => {
    //  Не JSX	
    const item = ['1) Learn React','2) Build Awesome App'];
    // JSX
    // <li> {item[0]} </li> <li> {item[1]} </li>
    // Еще в TodoList передали значения < TodoList items={['Item 1','Item 2']}/>
    // В дальнейшем научимся использовать переданные значения    
    // вместо important={true} можно написать просто important

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
      
      
   // Передаем массив целиком   
   // Элементы этого массива- это jsx-элементы,
   // которые создаем внутри map

   const elements = todos.map((item) => {
     return (
      <li>


         {/*

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

         */}
         
         <TodoListItem {...item} />

      </li>
            );
   });
   

    return (
       <ul>

       {elements}    

      {/*
      {firstEl}

      {secondEl}

      {ThirdEl}
      */}
      
      {/*
          <li> <TodoListItem label={todos[0].label}
          important={todos[0].important}
          /> </li>
               <li> <TodoListItem label={todos[1].label}
           important={todos[1].important}
           /> </li>
          <li> <TodoListItem label={todos[2].label}
         important={todos[2].important}
          /> </li>
      */}

      </ul>


    );	
    };



export default TodoList;
