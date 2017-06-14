import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component{

	render(){

		var todoList=[];
		var todos = this.props.todos;
		var currentFilter= this.props.currentFilter;
		for(var i=0; i<todos.length; i++){
			if(todos[i].todo!==''){
				todoList.push(
					<TodoItem /*todos={todos[i].todo} 
								completed={todos[i].completed}								
								id={todos[i].id} */
								todoItem={todos[i]}
								key={todos[i].id} 
								onDeleteBtnClick={this.props.onDeleteBtnClick}
								onCheckBoxClicked={this.props.onCheckBoxClicked} 
								/>);
			}
		}

		return(
			<ul className="list-group">
				{todoList}
			</ul>
		);
	}
}
export default TodoList;