import _state from './state'
import { ADD_FOOD_TO_CARST } from './const'
const reducer= (state = _state,action = {})=>{
    let new_state = {...state}
    switch (action.type){
        case ADD_FOOD_TO_CARST:
            console.log('ADD_FOOD_TO_CARST')
        break;
        default:break;
    }
    return new_state;
}
export default reducer