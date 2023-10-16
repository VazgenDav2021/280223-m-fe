// метод для создания store
import {createStore} from 'redux';
import { counterReducer } from './reducers/counterReducer';

// создаем глобальное хранилище данных с помощью вызвоа метода createStore и вего передаем нами написанный редюсер
export const store = createStore(counterReducer);