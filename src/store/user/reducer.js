import _state from './state';
import {
    CHANGE_USERINFO,EXIT 
} from './const';

const reducer = ( state = _state, action) => {
    let new_state = { ...state };
    switch ( action.type) {
        case  CHANGE_USERINFO :
            new_state.userInfo = action.userInfo;
            //同步到本地存储
            localStorage.userInfo = JSON.stringify(new_state.userInfo);
        break;
        case  EXIT :
            new_state.userInfo = null;
            localStorage.removeItem('userInfo');
        break;
        default : break;
     
    }
    return new_state;
}
export default reducer;