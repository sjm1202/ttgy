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
        let { params } = this.props.match;
        if(params.id){
            axios.get('/sjm/v3/product/detail',{
                params:{
                    store_id_list: 3,
                    product_id: params.id,
                    store_id: 3,
                    delivery_code: 3
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