import React from 'react';

var TodoItem = function(props){

	return(
		<li className="list-group-item" style={{backgroundColor: '#F1EE9C'}}>
			<h4>
				<input type="checkbox" 
						className="pull-left"
						checked={props.todoItem.completed}
						onChange={props.onCheckBoxClicked}
						value={props.todoItem.id}
						/>
					{props.todoItem.todo}
				<button className="btn btn-default btn-danger pull-right" 
						// onClick={function() {props.onDeleteBtnClick(props.index); }} // We shoud avoid function definition inside render method
						onClick={props.onDeleteBtnClick}
						value={props.todoItem.id}
				>
				Delete
				</button>
			</h4>
		</li>
	);
}

export default TodoItem;