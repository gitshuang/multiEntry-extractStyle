
import React from 'react';
import ReactDOM from 'react-dom';


export default class Next extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={pwd:1}
  }

  /*shouldComponentUpdate(nextProps,nextState){
    console.log(nextProps,'nextProps');
    console.log(nextState,'nextState');
    //return true {this.props.id.a}
  }*/
  render() {
   
    console.log('child rendered')
    return (
     <div>child</div>
    );
  }
}













