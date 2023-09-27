import './index.css'

export function ListItem({ index, text, element, hello }) {
    return <div>
        <li onClick={hello} className={index % 2 === 0 ? "even" : "odd"}>{text}</li>
        {element && element}
    </div>
}