import { useContext } from "react";
import { MyFirstContext } from "./App";

// после обарачивания приложения используя хук useContext и передав внего тот контекст с которым работаем мы можем получить то значение которое передали в провайдер myData
export const ChildComponent = () => {
    const dataFromStore = useContext(MyFirstContext)
    console.log({ dataFromStore });
    return <div>{dataFromStore.name}{dataFromStore.age}</div>
}

// Anotony: Создать массив пользователей (CHAT GBT) в контексте и отрисовать в дочерних компонетах использовав react context
// Zhanna Regina: создать объект пользователя с значение имя, возраст и пол. Используя react context передать данные в дочерних Компонент и отрисовать
// Tatsiana: создать переменную mode у кторого значение может быть "light" "dark" пердав его в дочерних компонент сделать проверку если mode dark то задний цвет компонента черных ели нет до розовый