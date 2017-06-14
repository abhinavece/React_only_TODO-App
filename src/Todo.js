import React, {Component} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Count from './Count';
import FilterLinks from './FilterLinks';
import constants from './constants';

var ALL=constants.ALL;
var ACTIVE=constants.ACTIVE;
var COMPLETED=constants.COMPLETED;

class Todo extends Component{
	constructor(props){
		super(props);
		this.state= {
			currentFilter: ALL,
			todos: []
		};
		this.handleNewTodoItem=this.handleNewTodoItem.bind(this);
		this.handleDeleteButtonClick=this.handleDeleteButtonClick.bind(this);
		this.handleCheckBoxClick=this.handleCheckBoxClick.bind(this);
		this.handleFilterChange=this.handleFilterChange.bind(this);
	}

	handleNewTodoItem(todo){
		this.setState(function(prevState){
				//todos: this.todos.push(todo)
				var todoItem = {
					todo: todo,
					id: Date.now().toString(),
					completed: false

				};	
				var todos = prevState.todos.concat(todoItem);
			return{				
				todos: todos
			};
		});
	}

	handleDeleteButtonClick(evt){
		// var index = Number(evt.target.value);
		var id = evt.target.value;
		this.setState(function(prevState){
			var todos = prevState.todos;
				var index = null;
				for(var i=0; i<todos.length; i++){
					if(todos[i].id===id){
						index=i;
						break;
					}
				}
			var todo = todos.slice(0, index).concat(todos.slice(index+1));
			return{
				todos: todo
			};
		});
	}

	handleCheckBoxClick(evt){
		var id = evt.target.value;

		this.setState(function(prevState){
			var todos= prevState.todos;
			var index=null;
			for(var i=0; i<todos.length; i++){
				if(todos[i].id===id){
					index=i;
					break;
				}
			}
			todos= (
					todos.slice(0, index)
						.concat([{
							todo : todos[index].todo,
							id: todos[index].id,
							completed: !todos[index].completed
						}])
						.concat(todos.slice(index+1))
				);
			return {
				todos: todos
			}
		});
	}

	handleFilterChange(evt, currentFilter){
		evt.preventDefault();
		console.log(currentFilter);
		this.setState(function(prevState){
			return{
				currentFilter: currentFilter
			}
			
		});
	}

	filterTodos(){
		var todos = this.state.todos;
		var currentFilter = this.state.currentFilter;
		var filteredTodos = [];

		for(var i=0; i<todos.length; i++){
			var todoItem= todos[i];
			if(currentFilter===COMPLETED && !todoItem.completed){
				continue;
			}
			if(currentFilter===ACTIVE && todoItem.completed){
				continue;
			}
			filteredTodos.push(todoItem);
		}
		return filteredTodos;
	}

	render(){
		var todos= this.filterTodos();
		return(
			<div>
				<TodoForm onNewTodoItem={this.handleNewTodoItem}  />

				<FilterLinks currentFilter={this.state.currentFilter} onFilterChange={this.handleFilterChange} />

				<TodoList todos={todos}
							currentFilter={this.state.currentFilter}
							onDeleteBtnClick={this.handleDeleteButtonClick} 
							onCheckBoxClicked={this.handleCheckBoxClick} />

				<Count count={todos.length} />
			</div>
			);
	}
}
export default Todo;