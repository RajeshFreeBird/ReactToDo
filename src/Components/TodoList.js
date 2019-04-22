import TodoItem from './TodoItem';
var React = require('react')

var TodoList = function(props){
    var finalTodo = [];
    var todos = props.todoList;
    for (var i=0; i<todos.length; i++){
        finalTodo.push(<TodoItem todo={todos[i]} onDelButtonClick ={props.onDelButtonClick} index={i}/>)
    }
    return (
        <ul>
            {finalTodo}
        </ul>
    );
}
export default TodoList;