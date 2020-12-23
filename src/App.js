import {Form, Input, Button, Select} from 'antd';
import './App.css';
import React, {Component} from 'react';
import {TodoBanner} from "./TodoBanner";
import {TodoRow} from "./TodoRow";

const {Option} = Select;

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 2},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};
//
// function App() {
//   return (
//     <Form {...layout}>
//       <Form.Item name="note" label="Note"><Input/></Form.Item>
//     </Form>
//   );
// }

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName : "Adam",
            todoItems :[
                {action: "Buy Flowers", done: false},
                {action: "Get Shoes", done: false},
                {action: "Collect Tickets", done: true},
                {action: "Call Joe", done: false}
            ],
            newItemText:""
        };
    }
    updateNewItemText=(event)=>{
        this.setState({newItemText:event.target.value})
    }
    createNewTodo=()=> {
        if(!this.state.todoItems.find(item=>item.action === this.state.newItemText)) {
            this.setState({todoItems:[...this.state.todoItems,{action: this.state.newItemText,done:false}],
            newItemText:""
            })
        }
    }

    toggleTodo =(todo)=> this.setState({todoItems:this.state.todoItems.map(item=> item.action===todo.action?{...item,done:!item.done} : item)})

    todoTableRows=() => this.state.todoItems.map(item=>
        <TodoRow key={item.action} item={item} callback={this.toggleTodo}/>
       /* <tr key={item.action}>
            <td>{item.action}</td>
            <td><input type="checkbox" checked={item.done} onChange={()=>this.toggleTodo(item)}/></td>
        </tr>*/
    );
    changeStateData= () => {
        this.setState({
            userName:this.state.userName==="Adam"?"Bob":"Adam"
        })
    };
    render  = ()=>

            <div>
                <TodoBanner name={this.state.userName} tasks={this.state.todoItems}/>
               {/* <h4 className="bg-primary text-white text-center p-2">
                    {this.state.userName}'s TO DO List
                    ({this.state.todoItems.filter(t=>!t.done).length} item to do)
                </h4>*/}
                <div className="container-fluid">
                    <div className="my-1">
                        <input className="form-control" value={this.state.newItemText} onChange={this.updateNewItemText}/>
                        <button className="btn btn-primary mt-1" on onClick={this.createNewTodo}>新增</button>
                    </div>
                </div>
                <button className="btn btn-primary m-2" onClick={this.changeStateData}>Change</button>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr><th>描述</th><th>完成</th></tr>
                    </thead>
                    <tbody>{this.todoTableRows()}</tbody>
                </table>
            </div>
};
