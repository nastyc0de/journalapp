import { types } from "../types/types";

const InitialState = {
    loading:false,
    msgError:null
}

export const uiReducer = (state=InitialState, action) => {
    
    switch (action.type) {
        case types.uiMostrarError:
           return{
               ...state,
               msgError: action.payload
           }
        case types.uiQuitarError:
        return{
            ...state,
            msgError: null
        }
        case types.uiStartLoading:
           return{
               ...state,
               loading: true
           }
        case types.uiFinishLoading:
        return{
            ...state,
            msgError: false
        }
    
        default:
            return state;
    }

}