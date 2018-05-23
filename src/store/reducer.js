import { combineReducers }  from 'redux'
import cart from './cart/reducer'
import user from './user/reducer'
const reducer = combineReducers({
    cart,user
})
export default reducer