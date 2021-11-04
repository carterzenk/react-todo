import logo from './logo.svg';
import { v4 as uuidv4 } from 'uuid';
import { useReducer, useEffect } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'create':
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: uuidv4(), complete: false, ...action.payload}
        ]
      }
    case 'delete':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case 'toggle':
      return {
        ...state,
        todos: state.todos.map(todo => {
          const newTodo = {...todo};
          if (newTodo.id === action.payload) {
            newTodo.complete = !newTodo.complete
          }
          return newTodo
        })
      }
    case 'update-form':
      return {
        ...state,
        todoForm: action.payload
      }
    default:
      return state
  }
}

const initialState = {
  todos: [],
  todoForm: ''
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: 'create', payload: { name: 'foo' } });
    dispatch({ type: 'create', payload: { name: 'bar' } });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoList todos={state.todos} dispatch={dispatch}></TodoList>
        <TodoForm nameField={state.todoForm} dispatch={dispatch}></TodoForm>
      </header>
    </div>
  );
}

export default App;
