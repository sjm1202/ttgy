import { ADD_FOOD_TO_CART, DEL_FOOD_FROM_CART, SYNC_CART } from './const'
const actionCreator = {
    addFoodToCart (food) {
        return dispatch => {
            setTimeout(()=>{
                let action = {type: ADD_FOOD_TO_CART, food}
                dispatch(action)
            },300);
        }
    },
    delFoodFromCart(food){
        return dispatch => {
            setTimeout(()=>{
                let action = {type: DEL_FOOD_FROM_CART, food}
                dispatch(action)
            },300);
        }
    },
    syncCart(){
        return {
            type: SYNC_CART,
            cart : localStorage.cart ? JSON.parse(localStorage.cart) : null
        }
    }
}
export default actionCreator