import { useContext } from "react";
import { MyFirstContext } from "./App";

// после обарачивания приложения используя хук useContext и передав внего тот контекст с которым работаем мы можем получить то значение которое передали в провайдер myData
export const ChildComponent = () => {
    const dataFromStore = useContext(MyFirstContext)
    console.log({ dataFromStore });
    return <div>{dataFromStore.name}{dataFromStore.age}</div>
}

