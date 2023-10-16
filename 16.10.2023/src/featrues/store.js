// метод для создания store
import {combineReducers, createStore} from 'redux';
import { counterReducer } from './reducers/counterReducer';
import { userReducer } from './reducers/userReducer';


// созддаем один общий редюсер на основе комбинации наших всех редюсеров
// В дальнейшем если ,ы хотим работать со значением  counter то мы должны useSelector возращать кусок counter из наашего общего хранилища
const rootReducer = combineReducers({
    counter: counterReducer,
    users:userReducer
})

// создаем глобальное хранилище данных с помощью вызвоа метода createStore и вего передаем нами написанный редюсер
export const store = createStore(rootReducer);
