import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { store } from './featrues/store'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


// 1 Создать новый редюсер InputReducer
// 2 В нем начальное состояние будет (initalState) inputValue="Hello World"
// 3 Внутри редюсера InputReducer просто возращать state без условий
// 4 После того как создали редюсе в котором просто возращает состояние импортировать в store.js и добавтиь в качестве параемтра createStore