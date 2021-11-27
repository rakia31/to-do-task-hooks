import { DELETE_TASK, ADD_TASK, EDIT_TASK, STATUS_TASK } from "../Constans/task";

const initialState={
    tasks:[{id:Math.random(), description:"first Task" , isDone:false}
        ,  {id:Math.random(), description:"second Task" , isDone:false},
           {id:Math.random(), description:"third Task" , isDone:false}
]
};

const taskReducer =(state=initialState,{type,payload})=>  {
    switch (type) {
        case ADD_TASK:
        return{...state,tasks:[...state.tasks,payload]}
        return{...state,task:[...state.tasks.concat(payload)]}
        case DELETE_TASK :   
        return{...state,tasks:state.tasks.filter((el)=>el.id!==payload)}
        case EDIT_TASK : 
        return{...state,tasks:state.tasks.map(el=>el.id==payload.id? {...el,text:payload.text}: el)}
        case STATUS_TASK : 
        return{...state,tasks:state.tasks.map(el=>el.id==payload.id? {...el,isDone:!el.isDone}: el)}
        default :
            return state;
    }
};
export default taskReducer;