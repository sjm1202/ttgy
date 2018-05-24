import {
    CHANGE_USERINFO, EXIT
} from './const';

export default {
    
    hasUser (){
        return{ type:CHANGE_USERINFO, 
                userInfo : localStorage.userInfo ? JSON.parse(localStorage.userInfo) : null
            }
    },
    //登录的方法
    login ( {username, password, success, fail}){
        let _fail = fail || function (){};
        //闭包
        return dispatch => {
            setTimeout ( ()=>{
                if(username === 'sqq' && password === '123'){
                    dispatch ({ 
                        type : CHANGE_USERINFO,
                        userInfo : {
                            username : '孙漂亮',
                            signature : '走过路过千万不要错过！！！'
                        }
                    })
                    success ();
                    return;
                }
                _fail()
            }, 1000)
        }
    },
    exit (){
        return {
            type : EXIT
        }
    }
}