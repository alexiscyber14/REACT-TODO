import React from 'react';

const Form = ({
  input, setInput, todos, setTodos,
}) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: Math.random(), title: input, completed: false }]);
    setInput('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input placeholder="add item" className="task-input" type="text" value={input} onChange={onInputChange} required />
      <button type="submit">ADD</button>
    </form>
  );
};
export default Form;
