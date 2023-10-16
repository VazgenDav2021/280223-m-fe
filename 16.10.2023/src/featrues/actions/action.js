export const INCREMENT = "INCREMENT";
export const DECRMEENT = "DECRMEENT";
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";

// action creator возращает экшн с типом
export const incrmenet = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECRMEENT
    }
}

export const addUser = (payload) =>{
    return {
        type:ADD_USER,
        payload
    }
}

export const removeUser = (payload)=>{
    return {
        type: REMOVE_USER,
        payload
    }
}