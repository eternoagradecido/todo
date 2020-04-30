import './styles.css';
import { Todo, TodoList } from './classes/index.js';
import { componentes, crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();
//const tarea1 = new Todo('Aprender Javascript');

// crear todoList.nuevoTodo( tarea1 );

// console.log( todoList );

// crearTodoHtml( tarea );

// localStorage.setItem('mi-key', 'ABC123');

todoList.todos.forEach( todo => crearTodoHtml( todo ) );


console.log( 'todos', todoList.todos );