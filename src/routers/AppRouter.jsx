import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import{firebase} from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [checking, setChecking] = useState(true);


    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) =>{
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn])
    
    if (checking) {
        return(
            <h2>Espere...</h2>
        )
    }
    return (
        <Router>
            <Switch>
                <Route path='/auth' component={AuthRouter}/>
                <Route exact path='/' component={JournalScreen}/>
                <Redirect to='/auth/login'/>

            </Switch>
        </Router>
    )
}
