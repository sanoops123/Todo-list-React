import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/Todoinput'
import Todolist from './components/TodoList';

function App(){
    const [listTodo,setListTodo] = useState([]);
    let addList = (inputText)=>{
        setListTodo([...listTodo,inputText]);
    }
    const deleteListItem = (key)=>{
        let newListTodo = [...listTodo];
        newListTodo.splice(key,1)
        setListTodo([...newListTodo])
    }
    return(
        <div className='main-container'>
           <div className='center-container'>
              <TodoInput addList={addList}/>
              <h1 className='app-heading'>TODO LIST</h1>
              <hr/>
              {listTodo.map((listItem,i)=>{
          return (
            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
           </div>
        </div>
    )
}

export default App