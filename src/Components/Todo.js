import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoCount from './TodosCount';
import TodoFilter from './TodoFilters'
import Constants from '../Constants.js'
const React = require('react');

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            todoList:[],           
            currentFilter:Constants.ALL,
            searchText:''
        }
        this.handleNewTodoItem= this.handleNewTodoItem.bind(this);
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
        this.handlePriorityButtonClick= this.handlePriorityButtonClick.bind(this);
        this.handleOnChangeEvent = this.handleOnChangeEvent.bind(this);
        this.handleFilters = this.handleFilters.bind(this)
        this.handleSearchText = this.handleSearchText.bind(this);
    }
    handleDeleteButtonClick =function(evnt){             
        var id= evnt.target.value;            
        this.setState(function(prevState){                               
            var todos = prevState.todoList.filter(function(todo){
                return  (todo.id!==id);
            })  
            return {
                todoList:todos
            }
        })
    }
    handleNewTodoItem =function(){       
        this.setState(function(prevState){  
            var todoItem={
                todo:this.state.searchText,
                id :Date.now().toString(),
                priority: 0,
                completed:false
            }                
            var todos = prevState.todoList;
            todos= todos.concat(todoItem)           
            return{
                todoList :todos,
                searchText:''             
            }
        });
       
    }   
    handlePriorityButtonClick(evnt){
         var id = evnt.target.id;
        this.setState(function(prevState){
            var todos = prevState.todoList;
            for (let index = 0; index < todos.length; index++) {                
                if(todos[index].id===id){
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
            var index = todos.findIndex(function(todo){
                return todo.id ===id;
            });
            todos[index].completed = (!todos[index].completed)
            return{
                todoList :todos              
            }
        });
    }
  
    handleFilters(evnt,linkName){
        evnt.preventDefault();    
        this.setState(function(){
            return{
                currentFilter:linkName
            };
        });  
       
    }
    handleSearchText(search){
        this.setState(function(){
            return{
                searchText:search
            };
        })
    }

    filterTodos(){
        var todos = this.state.todoList;
        var currentFilter = this.state.currentFilter;       
        var search = this.state.searchText;       
        var filteredTodos = todos.filter(function(eachTodo){
            if(eachTodo.todo.indexOf(search)===-1){
                        return false;
                   }
                    if(currentFilter===Constants.COMPLETED && !eachTodo.completed){
                        return false;
                    }
                    else if(currentFilter===Constants.ACTIVE && eachTodo.completed){
                        return false;
                    }
                    return true;
        })
        return filteredTodos;
    }

    
    render(){       
        var todos = this.filterTodos();       
        return(
           <div>
                <TodoForm inputText={this.state.searchText} ontextChange={this.handleSearchText} newTodoItem = {this.handleNewTodoItem}/>
                <TodoFilter currentFilter={this.state.currentFilter} onFilterChange={this.handleFilters}/>
                <TodoList 
                    todoList ={todos} 
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