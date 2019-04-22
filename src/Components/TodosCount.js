var React = require('react')

var TodosCount = function(props){
    return (
        <div className= "well well-sm">
                 <h3>count: {props.total}</h3>
        </div>
    )
}

export default TodosCount;