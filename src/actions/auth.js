import { types } from "../components/types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { startLoading, finishLoading } from "./ui";

import Swal from 'sweetalert2';

export const startLoginEmailPassword = (email, password) =>{
    return (dispatch) => {

        dispatch(startLoading());
        
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(({user}) =>{
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch(e =>{
                console.log(e);
                dispatch(finishLoading());
                if (e.code ==='auth/user-not-found') {
                  return (Swal.fire('Error', 'El usuario no esta registrado', 'error'));  
                }
                
            })
    }
}
export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return(dispatch)=>{

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async({user}) => {  

                await user.updateProfile({displayName:name});

                dispatch(
                    login(user.uid, user.displayName)
                );
            })
            .catch( e => {
                console.log(e.message);
            })
    }
}
export const startGoogleLogin = () =>{
    return(dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user})=> {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}
export const login = (uid, displayName) => ({
        type: types.login,
        payload:{
            uid,
            displayName
        }
    });
export const startLogout = () => {
    return async(dispatch) =>{
        await firebase.auth().signOut();

        dispatch(logout())
    }
}
export const logout = () => ({
    type: types.logout
})