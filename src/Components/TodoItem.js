var React = require('react')
var spanStyle ={width:'80%'}


var TodoItem = function(props){
    return (
        <div>
            
            <li className="list-group-item" >
            
            <button 
                className="pull-left" 
                onClick = {props.onPriorityButtonClcick} 
                value={props.priority}
                id ={props.id}
            >                
                {props.priority}
            </button>
           
            <input 
                className="pull-left" 
                type="checkbox"
                checked={props.completed}
                id ={props.id}
                onChange = {props.onChangeClick}
            >
            </input>
           
                <span style ={spanStyle}>{props.todo}</span>
                
            <button 
                className="btn btn-default btn-danger pull-right"
                onClick = {props.onDelButtonClick}
                value = {props.id}
                > 
                Delete
            </button>
            <div style= {{clear:'both'}}></div>
            </li>
           
        </div>
    );
}


// class TodoItem extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             priority : 0
//         }
//         this.handlePriorityClick =this.handlePriorityClick.bind(this);
//     }
//     handlePriorityClick(){
//         this.setState(function(prevState){
//             return{
//                 priority:prevState.priority +1 
//             }
            
//         });
      
//     }

//     render(){
//         return (
//                     <div>
//                         <button className="pull-left" onClick = {this.handlePriorityClick} >{this.state.priority}</button>
//                         <li className="list-group-item" >
//                             <h3>{this.props.todo}</h3>
//                         <button 
//                             className="btn btn-default btn-danger pull-right"
//                             onClick = {this.props.onDelButtonClick}
//                             value = {this.props.index}
//                             > 
//                             Delete
//                         </button>
//                         </li>
//                     </div>
//                 );
//     }
// }


export default TodoItem;