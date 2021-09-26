const todoUrl = 'http://localhost:3002/todo'

export function addTodo(todo) {
    console.log(addTodo)
    return dispatch => {
        console.log(todo)
        const payload = {
            todo
        }
        dispatch({
            type: "ADD_TODO",
            payload
        })
    }
}

const todoInitialState = {
    data: [],
    status: "not loaded"
}

export function todoReducer(state = todoInitialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload.todo
                ],
                status: "loaded"
            };

        default:
            return state
    }
}
