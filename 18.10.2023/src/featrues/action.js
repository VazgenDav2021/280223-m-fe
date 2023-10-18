export const ADD_TO_DO = 'ADD_TO_DO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (payload) => {
    return {
        type: ADD_TO_DO,
        payload
    }
}

export const removeItemFromTodo = (payload)=>{
    return {
        type: REMOVE_TODO,
        payload
    }
}