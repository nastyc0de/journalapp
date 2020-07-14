import React from 'react'
import { AppRouter } from './routers/AppRouter';
import {Provider} from 'react-redux'
import { store } from './components/store/store';

export const JournalApp = () => {
    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    )
}
