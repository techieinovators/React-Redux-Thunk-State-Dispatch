import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

import AddListTodo from 'Pages/AddListTodo'

export default function App() {
    return <Provider store={store}>
        <h1>Todo Application</h1>

        <AddListTodo />
    </Provider>
}
