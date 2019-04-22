var React = require('react')

var TodoItem = function (props){
    return (
        <div>
            <li className="list-group-item" >
                <h3>{props.todo}</h3>
            <button 
                className="btn btn-default btn-danger pull-right"
                onClick = {props.onDelButtonClick}
                value = {props.index}
                > 
                Delete
            </button>
            </li>
        </div>
    );

}

export default TodoItem;