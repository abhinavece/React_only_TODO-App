import React from 'react';

var Count=function(props){
		return(
			<div className="text-center">
				<h4 className="list-group-item" style={{backgroundColor: '#000000', color: 'white'}}>
					Count: {props.count}
				</h4>
			</div>
			);
}
export default Count;