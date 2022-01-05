import React, { useState } from 'react'

function UnchangingObjects() {

    const [newTodo, setNewTodo] = useState('');
    const [toDoList, setToDoList] = useState([]);

    const onChange = (e) => {
        setNewTodo(e.target.value);
    }

    const onClick = () => {
        // toDoList.push(newTodo);
        setToDoList([...toDoList, newTodo])
    }
    
    const onDelete = (key) => {
        setToDoList(toDoList.filter((fruit) => fruit !== key));
    }
    return (
        <div>
            <input type="text" onChange={onChange} value={newTodo}></input>
            <button onClick={onClick}>추가</button>
            <br/>
            {toDoList.map((fruit, index) => {
                return(
                    <>
                        <span an key={index}>{fruit}</span>
                        <button onClick={() => onDelete(fruit)}>삭제</button>
                        <br/>
                    </>
                )
            })}
        </div>
    )
    React.memo(toDoList);
}
export default UnchangingObjects
