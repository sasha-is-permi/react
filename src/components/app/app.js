// Импортируем компоненты из файлов
// Расширение файлов js будет подставленно автоматически
// Подключается из по умолчанию index.js из app-header, а тот подключает app-header.js

// импортируем Component чтобы сделать из функции класс
import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends Component{

  state = {

    todoData : [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
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
      </div>
    );
  }
  };


// export default App;