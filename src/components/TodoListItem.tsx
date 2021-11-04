import React from 'react';

interface Props {
  todo: Todo,
  dispatch: React.Dispatch<Action>
}

export const TodoListItem: React.FC<Props> = ({ todo, dispatch }) => {
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'toggle', payload: todo.id });
  }

  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input type="checkbox" checked={todo.complete} onChange={handleChange}/>
        <span> </span>
        <span>{todo.name}</span>
      </label>
    </li>
  );
};