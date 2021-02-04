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
