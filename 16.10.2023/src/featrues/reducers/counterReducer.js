import { INCREMENT, DECRMEENT } from '../actions/action'

// начальное состояние приложения
const initalState = {
    counter: 0
}


// создаем редусер который принимает 2 параметра, 1ый состояние, 2ой action
// в редюсере делатся проверка на тип экшена
export const counterReducer = (state = initalState, action) => {
    switch (action.type) {
        // если тип экшена INCREMENT то возращай новый объект объект где состояние counter равно counter + 1
        case INCREMENT:
        return {counter:state.counter+1};
        // если тип экшена DECREMENT то возращай новый объект объект где состояние counter равно counter - 1
        case DECRMEENT:
            return { counter: state.counter - 1 };
        // если все высше перечисленные условия не соответствую действительности то просто возращай state 
        default:
            return state
    }
};