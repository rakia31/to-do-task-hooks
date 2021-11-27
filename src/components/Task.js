import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, statusTask } from '../JS/Actions/task'
const Task = ({task}) => {
    const styleText=task.isDone?{textDecoderation:"line-through"}:null
     const dispatch = useDispatch()
    return (
        <div className ="todo">
            <p style={styleText}>{task.text}</p>
            <button className="btn btn-outline-primary">Edit</button>
            <button className="btn btn-outline-warning" onClick={()=>dispatch(deleteTask(task.id))}>Delet</button>
            <button className="btn btn-outline-success" onClick={()=>dispatch(statusTask(task.id))} >{task.isDone?  "undone" : "done"}</button>
        </div>
    )
}

export default Task