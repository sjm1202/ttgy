import _state from './state'
import { ADD_FOOD_TO_CART, DEL_FOOD_FROM_CART, SYNC_CART } from './const'
import { Toast } from 'antd-mobile'
const reducer= (state = _state,action = {})=>{
    let new_state = {...state}
    let defaultFlag = false;
    let temp = 0
    switch (action.type){
        case ADD_FOOD_TO_CART:
            let flag = false;
            new_state.foodList.map(item => {
                if(item.target_id === action.food.target_id){
                    flag = true
                    item.num++
                    return item
                }
                return item
            })
            new_state.total.num ++;
            temp = new_state.total.money
            new_state.total.money = parseFloat(action.food.price) + parseFloat(temp);
            if(!flag){
                action.food.num = 1
                new_state.foodList.push(action.food)
            }
            Toast.success('添加成功',.5)
        break;
        case DEL_FOOD_FROM_CART:
            let arr = new_state.foodList.filter(item=>{
                if(item.target_id === action.food.target_id){
                    item.num--;
                    if(item.num === 0) {
                        Toast.success('删除成功',.5)
                        return false;

                    }
                }
                return true
            })
            new_state.total.num --;
            temp = new_state.total.money
            new_state.total.money = parseFloat(temp) - parseFloat(action.food.price);
            new_state.foodList = arr
        break;
        case SYNC_CART:
            if(action.cart){
                new_state = action.cart
            }
        break;
        default:
            defaultFlag = true;
        break;
    }
    //同步到本地存储
    if(!defaultFlag) {
        localStorage.cart = JSON.stringify(new_state);
    }
    return new_state;
}
export default reducer