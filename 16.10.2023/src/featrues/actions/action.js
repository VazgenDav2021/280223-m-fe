export const INCREMENT = "INCREMENT";
export const DECRMEENT = "DECRMEENT";

// action creator возращает экшн с типом
export const incrmenet = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECRMEENT
    }
}