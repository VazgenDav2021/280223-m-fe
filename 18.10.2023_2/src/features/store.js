import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./userReducer";
import { postReducer } from "./postReducer";
import thunk from "redux-thunk";


// создаем рутобый редюсер (мобавить несколько)
const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer
})

// создаем стор, первым параметром передаем корневой редюсер, 2ым параметром отдаем middleWare который нам помогает работать в редаксе с асинхронными операциями
export const store = createStore(rootReducer, applyMiddleware(thunk));