// Импортируем компоненты из файлов
// Расширение файлов js будет подставленно автоматически
// Подключается из по умолчанию index.js из app-header, а тот подключает app-header.js

// импортируем Component чтобы сделать из функции класс
import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component{
  maxId = 100;

  state = {

    todoData : [
      { label: 'Выпить кофе', important: false, id: 1 },
      { label: 'Поработать', important: true, id: 2 },
      { label: 'Пообедать', important: false, id: 3 }
    ]


  };
 
  deleteItem = (id) => {
    
   // console.log(id)
   
   // Передаем в state функцию, кторая меняет массив
   // Аргументы деструктурируем и заберем todoData
   this.setState( ({todoData}) => {
          // индекс удаляемого элемента получаем 
          const idx = todoData.findIndex( (el) =>  el.id === id   ); 
          // console.log(idx);
          // Удаляем элемент их массива
          // todoData.splice(idx, 1);
          
          // Не изменяем текущий массив. Получим новый массив без 
          // удаляемого элемента и вернем его

          // все элементы массива до удаляемого элемента
         // const before = todoData.slice(0,idx);
          // все элементы массива после удаляемого элемента до конца  
         // const after = todoData.slice(idx+1); 

          // используем spread-оператор (объединение) для массивов
          // Добавляем в новый  массив все элементы массива before,
          // а затем все элементы массива after
          //const newArray = [...before, ...after];
          const newArray = [
            ...todoData.slice(0,idx), 
            ...todoData.slice(idx+1)
          ];
          
          // Возвращаем новый массив в качестве todoData 
          // в новое состояние
          return {
            todoData: newArray
          };

   });
   
  }; 

  addItem = (text) => {
    // generate id ?
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };

    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      };
    });

  };


  render() {

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
       {/* Получаем из todo-list элемент, который нужно удалить при нажатии кнопки 
       deleted */}
        <TodoList 
        todos={this.state.todoData} 
        onDeleted= { this.deleteItem }
        />


       <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    );
  }
  };


// export default App;