import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
  todos: Todo[];
  dispatch: React.Dispatch<Action>
}

export const TodoList: React.FC<Props> = ({ todos, dispatch }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
};