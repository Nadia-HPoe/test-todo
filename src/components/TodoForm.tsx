import React from "react";
import "./TodoForm.scss";

interface TodoFormProps {
  input: string;
  setInput: (value: string) => void;
  handleAddTodo: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({
  input,
  setInput,
  handleAddTodo,
}) => {
  return (
    <div className='todo-form'>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Введите новую задачу'
      />
      <button onClick={handleAddTodo}>Добавить</button>
    </div>
  );
};

export default TodoForm;
