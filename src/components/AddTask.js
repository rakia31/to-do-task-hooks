import React from 'react'
import { addTask } from '../JS/Actions/task'
import { useDispatch } from 'react-redux'
import { useState } from 'react'


const AddTask = () => {
    const handleAdd = (e)=> {
        e.preventDefault()
        dispatch(addTask({id :Math.random(),description,isDone:false}))
        setDescription("");
    }
    const [description, setDescription] = useState("")
    const dispatch = useDispatch()
    return (
        <form className = "mt-4" >
            <div className = "card card-body">
            < div className = "form-group">
            <label>Add a Todo</label>
             <input className="form-control form-control-lg" type="text" placeholder="Add here"  onChange={(e)=>setDescription(e.target.value) } value={description}/>
            <button className="btn btn-primary"onClick={handleAdd}>Add</button>
            </div>
            </div>
        </form>
    )
}

export default AddTask