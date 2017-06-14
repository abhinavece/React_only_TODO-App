import React, {Component} from 'react';

class TodoForm extends Component{
	constructor(props){
		super(props);
		this.state={
			inputText: ''
		};
		this.handleFormSubmit=this.handleFormSubmit.bind(this);
		this.handleRefInputEvent=this.handleRefInputEvent.bind(this);
		this.handleInputTextChangeEvt=this.handleInputTextChangeEvt.bind(this);
	}

	handleFormSubmit(event){
		//debugger;
		event.preventDefault();
		this.props.onNewTodoItem(this.state.inputText);
		this.setState(function(){
			return {
				inputText: ''
			};
		});
	}

	handleRefInputEvent(inputRef){
		inputRef.focus();		
	}

	handleInputTextChangeEvt(evt){
		var text = evt.target.value;

		this.setState(function(){
			return {
				inputText: text
			};
		});
	}

	render(){

		return(
			<form className="form-group" onSubmit={this.handleFormSubmit}>
				<input className="form-control" 
					type="text" 
					placeholder="Add a todo item..."
					ref={this.handleRefInputEvent} 
					value={this.state.inputText}
					onChange={this.handleInputTextChangeEvt}
					/>
			</form>
			);
	}
}
export default TodoForm;