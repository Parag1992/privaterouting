

const userdetailreducers = (state = {},action) =>{

    switch(action.type){

        case 'Store_UserDetails':
            return action.data
            break;
        
        default:
            return state;
    }

}
export default userdetailreducers;