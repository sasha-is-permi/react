import React from 'react';

import './todo-list-item.css';



{/* import React from 'react';

import './todo-list-item.css';


const TodoListItem = ({label, important = false}) => {

    const liStyle = {
      color: important ? 'tomato' : 'black'
    }; 

  return (<span
     className="todo-list-item" 
     style = {liStyle}> 
     {label} 
     </span> )
    // (li можно использовать не везде-  только в ul)
    //  Не JSX	
 };

export default TodoListItem;

*/}




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

const TodoListItem = ({ label, important = false }) => {
    
    // Если important задан true- то красный цвет, иначе- черный
    // important=true задаем в todo-list.js 
    // чтобы выделить красным пункт "Build React App"
    // (ниже возвращаем в todo-list.js:
    // <span style = {liStyle}> {label} </span>;
  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

      // Если хотим сделать универсальный элемент- 
    // который можем использовать в разных других- пишем
  return (
    <span className="todo-list-item">
      <span
        className="todo-list-item-label"
        style={style}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" /> {/* иконка восклицательного знака- выделение важного элемента */}
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" /> {/* иконка "удалить" */}
      </button>
    </span>
  );
};

export default TodoListItem;
