import React from 'react';
import ReactDOM from 'react-dom';
import Detail from './detail/detail.js'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

/*const Next = ()=>(
      <div>这是第二页</div>
	)
*/
// class Next extends React.Component{
// 	render(){
// 		return <div>这是第二页</div>
// 	}
// }
export default class App extends React.Component{

	render(){
		
		return <Router>
		            <div>
						<Link to="/next">Home</Link>
						<Detail />
						<Route path="/next" component="Detail"/>
		            </div>
					
				</Router>
	}
}