import TodoItem from './TodoItem';
const React = require('react')

var TodoList = function(props){
    //var finalTodo = [];
    var todos = props.todoList;   
    var finalTodo = todos.map(function(todo){
        return (
            <TodoItem 
                todo={todo.todo} 
                key={todo.id} 
                id = {todo.id} 
                onDelButtonClick ={props.onDelButtonClick} 
                onPriorityButtonClcick = {props.onPriorityButtonClcick}      
                priority = {todo.priority}     
                completed = {todo.completed}   
                onChangeClick = {props.onChangeClick}  
            />
        );
    })
    return (
        <ul className="list-group">
            {finalTodo}
        </ul>
    );
}
export default TodoList;