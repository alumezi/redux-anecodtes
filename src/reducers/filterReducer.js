const filter = ""

export const addFilter = filter => {
    return {
        type: "FILTER",
        filter
    }
}

const reducer = (state = filter, action) => {
    switch (action.type) {
        case "FILTER":
            return action.filter
        default:
            return state
    }
}

export default reducer