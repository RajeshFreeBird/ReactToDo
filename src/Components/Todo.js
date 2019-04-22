import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoCount from './TodosCount';
var React = require('react');

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            todoList:[]
        }
        this.handleNewTodoItem= this.handleNewTodoItem.bind(this);
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
    }
    handleDeleteButtonClick =function(evnt){
       
        var index= Number(evnt.target.value);       
        this.setState(function(prevState){
            var todos = prevState.todoList;
            //todos.splice(index,1);
            todos = todos.slice(0,index).concat(todos.slice(index+1));
            return {
                todoList:todos
            }
        })
    }
    handleNewTodoItem =function(newTodo){
        //console.log(this.state.todoList.length)
        this.setState(function(prevState){
            var todos = prevState.todoList.concat(newTodo);
            return{
                todoList :todos
            }
        });
       
    }    
    render(){       
        var todos = this.state.todoList;       
        return(
           <div>
               <TodoForm  newTodoItem = {this.handleNewTodoItem}/>
                <TodoList todoList ={this.state.todoList} onDelButtonClick = {this.handleDeleteButtonClick}/>
        {this.state.todoList.length>0 &&
            <TodoCount total={this.state.todoList.length}/>
                }
                
           </div>
        );
    }
}

export default Todo;