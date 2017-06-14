import React from 'react';
import constants from './constants';

var ALL=constants.ALL;
var ACTIVE=constants.ACTIVE;
var COMPLETED=constants.COMPLETED;

var Link =function(props){
	var filterName= props.filterName;
	var currentFilter=props.currentFilter;

	var linkStyle = {marginLeft:'3px', marginRight: '3px'};

	if(filterName===currentFilter){
		linkStyle={marginLeft:'3px', marginRight: '3px', backgroundColor: '#e6e6e6', borderColor: '#adadad', lineHeight: '1.5'};
	}


	return (
			<a 
				  href="#"
				  style={linkStyle}
				  className="btn btn-default btn-sm"	
				  // onClick={props.onFilterChange} // we need to pass the argument so below method for callback function
				  onClick={function(evt) { props.onFilterChange(evt, filterName); }}
			>
			<strong>{filterName}</strong>
			</a>
		);
}

var FilterNameLinks = function(props){

	return(
		<div className="text-center" style={{marginBottom: '30px'}}>
		{'Display: '}
			<Link filterName={ALL} onFilterChange={props.onFilterChange} currentFilter={props.currentFilter} />
			<Link filterName={ACTIVE} onFilterChange={props.onFilterChange} currentFilter={props.currentFilter} />
			<Link filterName={COMPLETED} onFilterChange={props.onFilterChange} currentFilter={props.currentFilter} />
		</div>
		);
	
}


export default FilterNameLinks;