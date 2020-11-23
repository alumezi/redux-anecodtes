let anyOldTimeouts;

export const setNotification = (message, time = 5000) => {
    return async dispatch => {
        clearTimeout(anyOldTimeouts)
        dispatch({
            type: "SET_NOTIFICATION",
            message
        })
        anyOldTimeouts = setTimeout(() => {
            dispatch(removeNotification())
        }, time)
    }
}

export const removeNotification = () => {
    return {
        type: "REMOVE_NOTIFICATION"
    }
}

const reducer = (state = '', action) => {
    switch (action.type) {
        case "SET_NOTIFICATION":
            return action.message
        case "REMOVE_NOTIFICATION":
            return ""
        default:
            return state
    }
}

export default reducer