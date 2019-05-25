import Constants from '../Constants.js'
import { constants } from 'fs';
var React = require('react')


var Links =function(props){
    var currentFilter = props.currentFilter;
    var linkName = props.linkName;
    var btnStyle = {marginLeft:'5px'}
    // console.log(linkName);
    // console.log(currentFilter);
    if(currentFilter==linkName){
        btnStyle={marginLeft:'5px', backgroundColor:'yellow',borderColor:'adadad'}
    }
    return (
        <a 
            href="#"
            className="btn btn-default btn-sm"
            style={btnStyle}
            onClick={function(evnt){props.onFilterChange(evnt,props.linkName)}}
        >
            {props.linkName}
        </a>
    );
};


var TodoFilter = function(props){
    return(
        <div>
            <Links currentFilter={props.currentFilter} linkName={Constants.ALL} onFilterChange = {props.onFilterChange}/>
            <Links currentFilter={props.currentFilter} linkName={Constants.COMPLETED} onFilterChange = {props.onFilterChange}/>
            <Links currentFilter={props.currentFilter} linkName={Constants.ACTIVE} onFilterChange = {props.onFilterChange}/>
           

        </div>
    );
}

export default TodoFilter;