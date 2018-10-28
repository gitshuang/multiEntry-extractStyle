import React from 'react';
import ReactDOM from 'react-dom';
import './index.less'


export default class Detail extends React.Component{

	render(){
		return <>
		    <div id="header"></div>
			<div className="detail">detail page</div>
		</>
	}
}

    ReactDOM.render( < Detail / > , document.getElementById('app'));
