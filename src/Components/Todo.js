import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoCount from './TodosCount';
import TodoFilter from './TodoFilters'
import Constants from '../Constants.js'
var React = require('react');

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            todoList:[],
            filteredTodos:[]
        }
        this.handleNewTodoItem= this.handleNewTodoItem.bind(this);
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
        this.handlePriorityButtonClick= this.handlePriorityButtonClick.bind(this);
        this.handleOnChangeEvent = this.handleOnChangeEvent.bind(this);
        this.handleFilters = this.handleFilters.bind(this)
    }
    handleDeleteButtonClick =function(evnt){       
        var id= evnt.target.value;  
          
        this.setState(function(prevState){
            var todos = prevState.todoList;
            var filteredTodos=prevState.filteredTodos;
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
                todoList:todos,
                filteredTodos:filteredTodos
            }
        })
    }
    handleNewTodoItem =function(newTodo){
        //console.log(this.state.todoList.length)
        this.setState(function(prevState){  
            var todoItem={
                todo:newTodo,
                id :Date.now().toString(),
                priority: 0,
                completed:false
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
                todoList :todos,
                filteredTodos:todos
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
       // console.log(evnt.target.value)

    } 
    handleOnChangeEvent(chkbox){
        var id = chkbox.target.id;
        this.setState(function(prevState){
            var todos = prevState.todoList;
            for (let index = 0; index < todos.length; index++) {                
                if(todos[index].id==id){
                    todos[index].completed = (!todos[index].completed) ;
                    console.log(todos[index])
                }                            
            } 
            return{
                todoList :todos
            }
        });
    }
  
    handleFilters(evnt,linkName){
        evnt.preventDefault();       
        var filteredTodos=[];
        this.setState(function(prevState){
            var todos = prevState.todoList;
            for (let index = 0; index < todos.length; index++) {      
               // console.log(index);   
                //console.log(todos[index])       
                if(todos[index].completed && linkName==Constants.COMPLETED){
                   
                    filteredTodos= filteredTodos.concat(todos[index]);
                   console.log(filteredTodos);
                } 
                else if(!(todos[index].completed) && linkName==Constants.ACTIVE){
                    filteredTodos=filteredTodos.concat(todos[index])
                   // console.log('active')
                }
                else if(linkName==Constants.ALL){
                    filteredTodos =filteredTodos.concat(todos[index]);
                     //console.log('all')
                 }                          
            }
            console.log(filteredTodos); 
            return{
                todos:todos,
                filteredTodos:filteredTodos
            }
        });
    }
    
    render(){       
        var todos = this.state.todoList;       
        return(
           <div>
                <TodoForm  newTodoItem = {this.handleNewTodoItem}/>
                <TodoFilter onFilterChange={this.handleFilters}/>
                <TodoList 
                    todoList ={this.state.filteredTodos} 
                    onDelButtonClick = {this.handleDeleteButtonClick}
                    onPriorityButtonClcick = {this.handlePriorityButtonClick}
                    onChangeClick = {this.handleOnChangeEvent}
                />
                {this.state.todoList.length>0 &&
                    <TodoCount total={this.state.todoList.length}/>
                }
                
           </div>
        );
    }
}

export default Todo;