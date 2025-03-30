import React from "react";
import "./TodoList.scss";
import { Todo } from "../types/todo";

interface TodoListProps {
  todos: Todo[];
  handleDeleteTodo: (id: number) => void;
  handleToggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  handleDeleteTodo,
  handleToggleTodo,
}) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className='todo-item'>
          <div className='todo-content'>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
              className='todo-checkbox'
            />
            <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
              {todo.text}
            </span>
          </div>
          <button
            className='delete-button'
            onClick={() => handleDeleteTodo(todo.id)}
            aria-label='Удалить задачу'
          >
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15 5L5 15M5 5L15 15'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
