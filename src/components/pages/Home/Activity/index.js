import React, { Component } from 'react'
import './index.scss'
import axios from 'axios'
class Activity extends Component {
    constructor (props) {
        super(props)
        this.state = {
            activitys:[]
        }
        this.unMountFlag = false;
    }
    componentDidMount(){
        axios.get('/sjm/v3/ad/homepage',{
            params:{type:2,lonlat:'116.252423%2C40.11634',ad_code:'110114'}
        }).then((res) => {
            if( this.unMountFlag ){
                return;
            }
            this.setState({
                activitys: res.data.data.banner.mainBanners[1].content
            })
        })
    }
    componentWillUnmount () {
        this.unMountFlag = true;
    }
    render () {
        return (
            <div className="activity">
                {this.state.activitys.map(( item ) => {
                    return (
                        <a className="imgBox" key={item.banner_ad_id}>
                            <img src={item.image} alt=""/>
                        </a>

                        )
                })}

            </div>
        )
    }
}
export default Activity