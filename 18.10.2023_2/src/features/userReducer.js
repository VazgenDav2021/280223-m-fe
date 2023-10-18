import { FETCH_USERS_ERROR, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./action";

const initalState = {
    loading: false,
    users: [],
    error: ''
}

export const userReducer = (state = initalState, action) => {
    switch (action.type) {
        // запрос пошел loading:true
        case FETCH_USERS_REQUEST:
            return { ...state, loading: true };
        case FETCH_USERS_SUCCESS:
            // запрос прошел успешно loading:false, еррор:пустой, users получают те данные которые пришли из сервера
            return { ...state, loading: false, users: action.payload, error: "" };
        case FETCH_USERS_ERROR:
            // если запрос был провален то заканчивать загрузку и полажить в поле для ошибки текст
            return {...state, isLoading:false, users:[], error: "Somethign went wrong"}
        default:
            return state
    }
}