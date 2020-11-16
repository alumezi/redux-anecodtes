const message = "This is a message";

export const changeAction = (message) => {
    return {
        type : "SET_NOTIFICATION",
        message
    }
}

const reducer = (state = message, action) => {
    switch(action.type){
        case "SET_NOTIFICATION":
            return action.message
        default:
            return state
    }
}

export default reducer