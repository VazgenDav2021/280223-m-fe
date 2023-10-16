import { ADD_USER } from "../actions/action";

const initalState = {
    users: []
}

export const userReducer = (state=initalState, action)=>{
    switch (action.type) {
        case ADD_USER:
        return {users: [...state.users, action.payload]}
    
        default:
            return state;
    }
}