import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd';
import './index.less';


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
            this.handleClick = this.handleClick.bind(this);
           }
           
           handleClick(e){
            console.log(e.target.innerText)
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

                return (
                  <>
                    <div >

                      {this.state.list.map((item,index)=>{
                          return (<li onClick={this.handleClick}>{index}:::{item.name}:{item.age}</li>)
                      })}
                      <Button onClick={this.insert}>插入一条</Button>
                      
                    </div>
                  </>
                );
            }
        }


        ReactDOM.render( < App / > , document.getElementById('app'));