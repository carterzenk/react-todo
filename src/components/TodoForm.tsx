import React from 'react';

interface Props {
  nameField: string
  dispatch: React.Dispatch<Action>
}

export const TodoForm: React.FC<Props> = ({ nameField, dispatch }) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: 'update-form', payload: event.target.value });
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch({type: 'create', payload: {name: nameField}});
    dispatch({type: 'update-form', payload: ''});
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={nameField} onChange={handleChange} />
      </label>
      <button type="submit">Add Todo</button>
    </form>
  )
};