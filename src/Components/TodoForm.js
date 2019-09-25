const React = require('react');

class TodoForm extends React.Component{
    constructor(props){
        super(props);       
        this.HandleEnterClick = this.HandleEnterClick.bind(this);
        this.handleRefInputEent =this.handleRefInputEent.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    HandleEnterClick(evnt){      
        evnt.preventDefault();           
        this.props.newTodoItem();    
    }
   

    handleRefInputEent(enteredValue){
        enteredValue.focus();
    }
    handleTextChange(inputElement){
        var todoText = inputElement.target.value;        
        this.props.ontextChange(todoText);
    }
    render(){
        return(
            <div>
                <form className="form-group" onSubmit = {this.HandleEnterClick}>
                 <input 
                 type="text" 
                 className="form-control"
                 placeholder = "Enter Todo Item" 
                 ref ={this.handleRefInputEent}
                 onChange={this.handleTextChange}
                 value = {this.props.inputText}
                
                 />
                 </form>
            </div>
        );

    };
}

export default TodoForm;