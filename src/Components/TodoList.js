import React, { useState } from 'react';

const TodoList = ({ todos, setTodos }) => {
  const [editTodo, setEditTodo] = useState(null);

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    );
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo) => {
    setEditTodo({ ...todo });
  };

  const handleEditInputChange = (event) => {
    setEditTodo({ ...editTodo, title: event.target.value });
  };

  const handleEditSave = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === editTodo.id) {
          return { ...item, title: editTodo.title };
        }
        return item;
      }),
    );
    setEditTodo(null);
  };

  return (
    <div className="list-li">
      {todos.map((todo) => (
        <li className="todo-list" key={todo.id}>
          <button type="button" className="button-complete task-button">
            <input type="checkbox" onChange={() => handleComplete(todo)} />
          </button>
          {editTodo && editTodo.id === todo.id ? (
            <>
              <input
                type="text"
                value={editTodo.title}
                className={`list ${todo.completed ? 'complete' : ''}`}
                onChange={handleEditInputChange}
              />
              <button type="button" className="button-complete task-button" onClick={handleEditSave}>
                <i className="fa fa-save" />
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                value={todo.title}
                className={`list ${todo.completed ? 'complete' : ''}`}
                onChange={(event) => event.preventDefault()}
                disabled
              />
              <button type="button" className="button-edit task-button" onClick={() => handleEdit(todo)}>
                <i className="fa fa-edit" />
              </button>
              <button type="button" className="button-delete task-button" onClick={() => handleDelete(todo)}>
                <i className="fa fa-trash" />
              </button>
            </>
          )}
        </li>
      ))}
    </div>
  );
};

export default TodoList;
