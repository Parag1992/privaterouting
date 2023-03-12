import React, { useState } from "react";


const TodoApp = () =>{

const [todoList,setTodoList]= useState([]);
const [newValue,setNewValue]= React.useState("");

const txtValUpdate = (e) =>{
//console.log(e.target.value);
setNewValue(e.target.value);
}

const updateTodoList = () =>{
    let tempTodoList= todoList;
    tempTodoList=[...tempTodoList,newValue];
    setTodoList(tempTodoList);
    console.log('todoList',todoList);
}

return(
<React.Fragment>

<h1 className="todoCls">Welcome to Todo App</h1>
<hr/>
<div>
    Add todo : <input type={"text"} className="input" value={newValue} onChange={txtValUpdate}/> <br/>
    <input type={"button"} value={"submit"} className="btnCls" onClick={updateTodoList}/>
</div>
<hr/>
{todoList.map(ele=>{
    return <h3 key={ele} className={ele}>{ele}</h3>
 })}
</React.Fragment>
)

}
export default TodoApp;