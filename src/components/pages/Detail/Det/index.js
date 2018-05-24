import React, {Component} from 'react'
import './index.scss'
import axios from "axios/index";
class Det extends Component{
    constructor(props){
        super(props)
        this.state = {
            templateInfo: {}
        }
    }
    componentDidMount(){
        let { params } = this.props.location;
        if(params){
            axios.get('/sjm/v3/product/detail',{
                params:{
                    store_id_list: params.store_id_list,
                    product_id: params.product_id,
                    store_id: params.store_id,
                    delivery_code: params.delivery_code
                }
            }).then(res => {
                let { data } = res.data;
                this.setState({
                    templateInfo: data.templateInfo
                })
            })
        }
    }
    render(){
        return(
            <div className="detail_det"
                dangerouslySetInnerHTML={{
                __html:this.state.templateInfo.desc_mobile
                }}>

            </div>
        )
    }
}
export default Det