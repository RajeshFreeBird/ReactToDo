import TodoItem from './TodoItem';
var React = require('react')

var TodoList = function(props){
    var finalTodo = [];
    var todos = props.todoList;
    for (var i=0; i<todos.length; i++){
        finalTodo.push(
            <TodoItem 
                todo={todos[i].todo} 
                key={todos[i].id} 
                id = {todos[i].id} 
                onDelButtonClick ={props.onDelButtonClick} 
                onPriorityButtonClcick = {props.onPriorityButtonClcick}      
                priority = {todos[i].priority}     
                completed = {todos[i].completed}   
                onChangeClick = {props.onChangeClick}  
            />
        )
    }
    return (
        <ul className="list-group">
            {finalTodo}
        </ul>
    );
}
export default TodoList;