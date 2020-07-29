import {ADD_HELPCONT} from "./actionTypes";

export const addHelpcont = (tit) => {
    return {
        type: ADD_HELPCONT,
        tit
    }
}