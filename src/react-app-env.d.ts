/// <reference types="react-scripts" />

interface Todo {
  id: string,
  name: string,
  complete: boolean
}

type State = {
  todos: Todo[],
  todoForm: strings
}

type Action =
  | {type: 'create', payload: { name: string }}
  | {type: 'delete', payload: string}
  | {type: 'toggle', payload: string}
  | {type: 'update-form', payload: string}