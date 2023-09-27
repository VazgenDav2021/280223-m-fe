import { ListItem } from './components/ListItem/ListItem'
import AntonyTask from './components/Antony/Antony'
import './index.css'

const links = [
  'HOME',
  'ABOUT',
  'CONTACT',
  'DELIVERY',
  'SETTINGS',
]


function App() {

  // function returnHelloWorld (){
  //   return "Hello World"
  // }

  const hello = () => console.log("Hello");

  return (
    <>
      <ul className="list">
        {/* {returnHelloWorld()} */}
        {links.map((eachLink, index) => {
          return <ListItem hello={hello} key={index} index={index} text={eachLink} element={<span>Hello World {index}</span>} />
        })}
      </ul>
      <AntonyTask />
    </>
  );
}


// 1. Создать состояния для хранения значения counter
// 2. Создать 2 кнопки для увелечения и уменьшения значения counter
// 3. Создать элемент для отаброжения значения counter
// 4. Counter уверличивается и уменьшается на 3, если значение меньше 0 то не уменьшать counter



export default App;
