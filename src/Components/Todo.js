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
        this.handlePriorityButtonClick= this.handlePriorityButtonClick.bind(this);
    }
    handleDeleteButtonClick =function(evnt){       
        var id= evnt.target.value;  
          
        this.setState(function(prevState){
            var todos = prevState.todoList;
            var delIndex =null;
            for (let index = 0; index < todos.length; index++) {                
                if(todos[index].id==id){
                    delIndex = index;   
                    break;
                }                            
            } 
            //todos.splice(index,1);
            todos = todos.slice(0, delIndex).concat(todos.slice(delIndex+1));
            return {
                todoList:todos
            }
        })
    }
    handleNewTodoItem =function(newTodo){
        //console.log(this.state.todoList.length)
        this.setState(function(prevState){  
            var todoItem={
                todo:newTodo,
                id :Date.now().toString(),
                priority: 0
            }                
            var todos = prevState.todoList;
            todos= todos.concat(todoItem)
            // if(!todos.includes(newTodo)){   
            //    todos = todos.concat(newTodo);
            //     console.log(todos);
            // }   
            // else{
            //     alert('Already Exist')
            // }  
            return{
                todoList :todos
            }
        });
       
    }   
    handlePriorityButtonClick(evnt){
         var id = evnt.target.id;
        this.setState(function(prevState){
            var todos = prevState.todoList;
            for (let index = 0; index < todos.length; index++) {                
                if(todos[index].id==id){
                    todos[index].priority+=1;
                }                            
            } 
            return{
                todoList :todos
            }
        });
        console.log(evnt.target.value)

    } 
    render(){       
        var todos = this.state.todoList;       
        return(
           <div>
                <TodoForm  newTodoItem = {this.handleNewTodoItem}/>
                <TodoList 
                    todoList ={this.state.todoList} 
                    onDelButtonClick = {this.handleDeleteButtonClick}
                    onPriorityButtonClcick = {this.handlePriorityButtonClick}
                />
                {this.state.todoList.length>0 &&
                    <TodoCount total={this.state.todoList.length}/>
                }
                
           </div>
        );
    }
}

export default Todo;