import { ADD_USER, REMOVE_USER } from "../actions/action";

const initalState = {
    users: []
}

export const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_USER:
            return { users: [...state.users, action.payload] }
        case REMOVE_USER:
            return { users: state.users.filter((eachUser, index) => index !== action.payload) }
        default:
            return state;
    }
}