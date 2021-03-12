const snacksData =[
        {food:'Doritos', quantity: 10},
        {food:'Jagabee', quantity: 6},
        {food:'Haribo', quantity: 22},
        {food:'Calbee', quantity: 12},
        {food:'M&Ms', quantity: 2},
    ]


const snacksReducer = (state = snacksData, action) => {
    // console.log(action)
    if(action.type === 'UPDATE_SNACKS'){
        const newState = [...state]; 

        if(action.payload.operator === '+'){
            newState[action.payload.index].quantity++
        }else if(action.payload.operator === '-'){
            newState[action.payload.index].quantity--
        }

        return newState
    }else{
        return state
    }

}

export default snacksReducer;