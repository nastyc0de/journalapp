import { types } from "../components/types/types";


export const setError = (error) =>({
    type:types.uiMostrarError,
    payload:error
});

export const removeError = () =>({
    type:types.uiQuitarError,
});

export const startLoading = () =>({
    type:types.uiStartLoading
});
export const finishLoading = () =>({
    type:types.uiFinishLoading
});
