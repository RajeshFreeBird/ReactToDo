import Todo from './Components/Todo';
var React = require('react');
var ReactDOM = require ('react-dom');

function App(){
    return (
        <div className="container text-center"> 
            <h1>Todo App</h1>
            <Todo />
        </div>
        );
}

export default App; 