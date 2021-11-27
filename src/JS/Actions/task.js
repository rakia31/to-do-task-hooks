import { ADD_TASK, DELETE_TASK, EDIT_TASK, STATUS_TASK } from "../Constans/task"

export const addTask=(newTask) => {
    return {type : ADD_TASK, payload:newTask}
};

export const deleteTask=(id) => {
    return {type : DELETE_TASK, payload:id}
};
export const editTask =(id,text)=>{
    return{type:EDIT_TASK,payload:{id,text}}
};
export const statusTask=(id)=>{
    return{type:STATUS_TASK,payload:{id}}
}