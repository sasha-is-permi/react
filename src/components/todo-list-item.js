import React from 'react';

//const TodoListItem = (props) => {
    // Если хотим сделать универсальный элемент- 
    // который можем использовать в разных других- пишем
 //   return <span> {props.label} </span>;
    // (li можно использовать не везде-  только в ul)
    //  Не JSX	
 //  };

// Объект props передается в каждый компонент
// (если не указан - пустой)

// используем деструктуризацию
// принимаем из todo-list.js параметры label и imortant
// (деструктурируем их из props)

const TodoListItem = ({label, important = false}) => {
    
    // Если important задан true- то красный цвет, иначе- черный
    // important=true задаем в todo-list.js 
    // чтобы выделить красным пункт "Build React App"
    // (ниже возвращаем в todo-list.js:
    // <span style = {liStyle}> {label} </span>;
    const liStyle = {
      color: important ? 'tomato' : 'black'
    }; 


    // Если хотим сделать универсальный элемент- 
    // который можем использовать в разных других- пишем
  return <span style = {liStyle}> {label} </span>;
    // (li можно использовать не везде-  только в ul)
    //  Не JSX	
 };

export default TodoListItem;
