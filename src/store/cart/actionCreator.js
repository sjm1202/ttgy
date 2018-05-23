import store from '../index'
const actionCreator = {
    addFoodToCarst (food) {
        return dispatch => {
            setTimeout(()=>{
                let action = {type:'test',food}
            },1000);
        }
    }
}