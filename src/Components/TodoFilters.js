import Constants from '../Constants.js'
import { constants } from 'fs';
var React = require('react')


var Links =function(props){
    return (
        <a 
            href="#"
            className="btn btn-default btn-sm"
            style={{marginLeft:'5px'}}
            onClick={function(evnt){props.onFilterChange(evnt,props.linkName)}}
        >
            {props.linkName}
        </a>
    );
};


var TodoFilter = function(props){
    return(
        <div>
            <Links linkName={Constants.ALL} onFilterChange = {props.onFilterChange}/>
            <Links linkName={Constants.COMPLETED} onFilterChange = {props.onFilterChange}/>
            <Links linkName={Constants.ACTIVE} onFilterChange = {props.onFilterChange}/>
           

        </div>
    );
}

export default TodoFilter;