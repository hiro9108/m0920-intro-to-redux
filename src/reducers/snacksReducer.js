const initState = {
    snacksData: [
        'Doritos',
        'Jagabee',
        'Haribo',
        'Calbee',
        'M&Ms'
    ]
}

const snacksReducer = (state = initState, action) => {
    console.log(state)
    return state
}

export default snacksReducer;