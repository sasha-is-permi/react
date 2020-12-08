import React, {Component} from 'react';

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


// компонент-класс
// Наследует свойства класса React.Component
// export default переносим из нижней строчки сюда. 
// Чтобы не писать полностью  React.Component -
// добавляем выше в import Component

export default class TodoListItem extends Component {

//  constructor() {
//    super();
//     this.onLabelClick = () => {
//      console.log(`Done: ${this.props.label}`);
//     };
//  }

  //  constructor() {
  //    super();
  //    this.state= {
  //       done: false     
  //    };
  //  }


  state= {
       done: false,    
       important: false 
   };

 onLabelClick = () => {
   this.setState({
      done: true
   });
   // console.log(`Done: ${this.props.label}`);
   };

  // onLabelClick(){
  //   console.log(`Done: ${this.props.label}`);
  // }


   

  // функция отображает компонент
  render()
  {

    // Получаем из друших компонентов props
    // и записываем как поле класса 
    // Затем деструктурируеем props, получаем переменные

    const { label}  = this.props;

    // с помощью деструктуризации из state поучаем done. 
    const {done, important} = this.state  




    
    // Если important задан true- то красный цвет, иначе- черный
    // important=true задаем в todo-list.js 
    // чтобы выделить красным пункт "Build React App"
    // (ниже возвращаем в todo-list.js:
    // <span style = {liStyle}> {label} </span>;
  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };
  
  // Переменная, к которой потом можно прибавить/убавить видимость 
  // элемента (done)
  let classNames = 'todo-list-item';
   
  // Если щелкнули по элементу (done из state изменилось-
  // добавляем класс, обозначающий зачеркивание элемента )
  if (done) {
     classNames += ' done';    
  }

 // const style = {
 //    color: important ? 'steelblue' : 'black',
 //    fontWeight: important ? 'bold' : 'normal'
 // };
 
    // если важный элемент- добавляем класс 'important' - важный.
    
     if (important) {
       classNames += 'important'
     }


      // Если хотим сделать универсальный элемент- 
    // который можем использовать в разных других- пишем
    // onClick= {}
    // При клике по элементу выводим его название.
    // onClick = { () => console.log(`Нажат: ${label}`) }
    // Затем заведем функцию, поместим в нее вызываемый метод.
    // Передаем функцию (не вызываем её через (), а передаем)
    // onClick = { this.onLabelClick }> 
  return (
    // используем переменную classNames
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        style={style}
        onClick = { this.onLabelClick }> 
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



}



//const TodoListItemFunc = ({ label, important = false }) => 

// export default TodoListItem;
