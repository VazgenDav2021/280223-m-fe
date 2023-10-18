import { ADD_TO_DO, REMOVE_TODO } from "./action";

const initalState = {
    todos: []
}

export const todoReducer = (state=initalState,action)=>{
    switch (action.type) {
        case ADD_TO_DO:
            // return { ...state, todos: [...state.todos, action.payload] }
            return { ...state, todos: state.todos.concat(action.payload)}
        case REMOVE_TODO:
            return {...state, todos: state.todos.filter((_,index)=>index !== action.payload)}
        default:
          return state
    }
}