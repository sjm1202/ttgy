import './index.scss'
import React, {Component} from 'react'
import axios from 'axios'
import Header from "./Header"
import Goods from "./Goods"
import Footer from './Footer'
import {Route, Switch, withRouter} from 'react-router-dom'
class Detail extends Component {
    constructor(props){
        super(props)
        this.state = {
            info:{}
        }
    }
    componentWillReceiveProps(){
        this.getData();
    }
    componentDidMount(){
        this.getData();
    }
    getData(){
        console.log(this.props,101010);
        let { params } = this.props.location;
        console.log(params)
        if(params){
            axios.get('/sjm/v3/product/detail',{
                params:{
                    store_id_list: params.store_id_list,
                    product_id: params.product_id,
                    store_id: params.store_id,
                    delivery_code: params.delivery_code
                }
            }).then(res => {
                console.log(res);
                let { data } = res.data;
                console.log(data);
                this.setState({
                    info: data
                })
            })
        }
    }
    render() {
        return (
            <div className='detail'>
                <Header></Header>
                <Switch>
                    <Route path='/detail/goods' component={Goods} ></Route>
                </Switch>
                <Footer></Footer>
            </div>
        )
    }
}
export default withRouter(Detail)