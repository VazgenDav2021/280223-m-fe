// import React, { useMemo, useState } from 'react'

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const incrmeentCount = () => setCounter((prevState) => prevState + 1);

//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick={incrmeentCount}>Incrmeent</button>
//       <ChildComponent counter={counter} />
//     </div>
//   )
// }


// const ChildComponent = ({ counter }) => {

//   const borderStyle = useMemo(() => {
//     if (counter === 0) return { 'border': 'none' }
//     else if (counter === 1) return { 'border': '1px solid red' }
//     else if (counter === 2) return { 'border': '2px solid red' }
//     else if (counter === 3) return { 'border': '3px solid red' }
//     return { 'border': '10px solid blue' }

//   }, [counter]);

//   return <div style={{ width: "100px", height: "200px", background: "red", ...borderStyle }}></div>
// }


// export default App