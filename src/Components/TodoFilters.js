var React = require('react')


var TodoFilter = function(props){
    return(
        <div>
            <button >ALL</button>
            <button onClick = {props.activeClcik}>ACTIVE</button>
            <button>COMPLETED</button>

        </div>
    );
}

export default TodoFilter;