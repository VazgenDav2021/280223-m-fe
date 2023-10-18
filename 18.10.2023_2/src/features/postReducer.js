
import { FETCH_POSTS_ERROR, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "./action";

const initalState = {
    loading: false,
    posts: [],
    error: ''
}

export const postReducer = (state = initalState, action) => {
    switch (action.type) {
        // запрос пошел loading:true
        case FETCH_POSTS_REQUEST:
            return { ...state, loading: true };
        case FETCH_POSTS_SUCCESS:
            // запрос прошел успешно loading:false, еррор:пустой, posts получают те данные которые пришли из сервера
            return { ...state, loading: false, posts: action.payload, error: "" };
        case FETCH_POSTS_ERROR:
            // если запрос был провален то заканчивать загрузку и полажить в поле для ошибки текст
            return { ...state, isLoading: false, posts: [], error: "Somethign went wrong" }
        default:
            return state
    }
}