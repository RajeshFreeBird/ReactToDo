import { format } from 'path';

var React = require('react');
var ReactDom = require('react-dom');

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.enteredValue=null;
        this.HandleEnterClick = this.HandleEnterClick.bind(this);
        this.handleRefInputEent =this.handleRefInputEent.bind(this);
    }
    HandleEnterClick(evnt){
        evnt.preventDefault();
        var todo = this.enteredValue.value;
        this.props.newTodoItem(todo);
        this.enteredValue.value='';
    }
    handleRefInputEent(enteredValue){
        this.enteredValue = enteredValue;
    }
    render(){
        return(
            <div>
                <form onSubmit = {this.HandleEnterClick}>
                 <input type="text" placeholder = "Enter Todo Item" ref ={this.handleRefInputEent}/>
                 </form>
            </div>
        );

    };
}

export default TodoForm;