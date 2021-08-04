let stateInit = {
}

export default function rootReducer(state = stateInit, action) {
    let clone = JSON.parse(JSON.stringify(state))
    switch(action.type) {
        default: return clone
    }
}