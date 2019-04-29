import { format } from 'path';

var React = require('react');
var ReactDom = require('react-dom');

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todoText :''
        }
        this.HandleEnterClick = this.HandleEnterClick.bind(this);
        this.handleRefInputEent =this.handleRefInputEent.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    HandleEnterClick(evnt){
        evnt.preventDefault();
      var todo = this.state.todoText;
        this.props.newTodoItem(todo);
       this.setState(function(){
           return{
               todoText:''
           };
       });
    }

    handleRefInputEent(enteredValue){
        enteredValue.focus();
    }
    handleOnClick(inputElement){
        var todoText = inputElement.target.value;       
        this.setState(function(){
            return{
                todoText:todoText
            };           
        });
    }
    render(){
        return(
            <div>
                <form onSubmit = {this.HandleEnterClick}>
                 <input 
                 type="text" 
                 placeholder = "Enter Todo Item" 
                 ref ={this.handleRefInputEent}
                 onChange={this.handleOnClick}
                 value = {this.state.todoText}
                 />
                 </form>
            </div>
        );

    };
}

export default TodoForm;