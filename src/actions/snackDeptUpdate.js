
//action creator is a function that RETURNS an ACTION
//action is just an object
const snackUpdate = (operator, index) => {
    return { 
        type: 'UPDATE_SNACKS', 
        payload: { operator, index } 
    }
}

export default snackUpdate