// import React, { Component } from 'react'

// export default class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 1
//         }

//         this.handleChangeCountValue = this.handleChangeCountValue.bind(this)
//     }

//     handleChangeCountValue() {
//         this.setState({ count: this.state.count + 1 })
//     }

//     render() {
//         console.log("Компонент перерисовывается");
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.handleChangeCountValue}>Click</button>
//                 <Component1 count={this.state.count} />
//             </div>
//         )
//     }
// }



// class Component1 extends Component {
//     render() {
//         console.log("Component rendered");
//         return (
//             <div>App</div>
//         )
//     }
// }



import { useEffect, useState } from 'react'

function App() {
    const [count, setCount] = useState(12);
    const [username, setUsername] = useState("");
    const [posts, setPosts] = useState([]);
    const handleChangeCountValue = () => {
        setCount(prevState => prevState + 1);
    };
    const handleChangeInputValue = (e) => {
        setUsername(e.target.value)
    }

    useEffect(() => {
        console.log('====================================');
        console.log("Компонентр перерендерился");
        console.log('====================================');
    }, [count, username])

    useEffect(() => {
        console.log("Делаем запрос");
        fetch('https://jsonplaceholder.typicode.com/posts').then(async res => {
            const data = await res.json();
            // мы изменяем состояния компоненты
            setPosts((prevState) => {
                return [...prevState, ...data]
            })
        })
    }, []);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleChangeCountValue}>Click</button>
            {/* 1. Не хорошо передовать в пропы колбэк функции, лучше созать функцию обертку и ее передовать */}
            {/* <button onClick={() => setCount(count + 1)}>Click</button> */}
            <input value={username} onChange={handleChangeInputValue} />
            <p>{username}</p>
        </div>
    )
}

export default App