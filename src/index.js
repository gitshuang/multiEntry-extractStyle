import React from 'react';
import ReactDOM from 'react-dom';
import Next from './app.js';
import {Button} from 'antd';

class App extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                list: [
                {
                    name: "xiaohong",
                    age: 25
                },
                {
                  name:"xiaoming",
                  age:26
                }
                ]

            }
            this.insert = this.insert.bind(this);

           }
           
           handleClick(){
            console.log(1)
           }

           insert(){
              const obj = {name:"shuanger",age:18};
              //console.log(window.list = this.state.list,'===')
              //const list = this.state.list.splice(1,0,obj);
              // var list = this.state.list.slice(0);
              // list.push({name:"shuanger",age:18});
              //console.log(list,'list')
              this.setState(function(state,props){
                var list = state.list.slice(0);
                window.list = state.list
              list.push({name:"shuanger",age:18});
                return {list:list}
              })//{list:list}
              console.log(this.state.list,'立即查看')
           }
            render(){
                console.log(this.state.list);
                //<Next onClick={this.handleClick} name={this.state.list}></Next>

                return (
                  <>
                    <div >

                      {this.state.list.map(function(item,index){
                          return (<li>{index}:::{item.name}:{item.age}</li>)
                      })}
                      <Button onClick={this.insert}>插入一条</Button>
                      
                    </div>
                      <Next name={this.state.list}></Next>
                  </>
                );
            }
        }


        ReactDOM.render( < App / > , document.getElementById('app'));