import React, {Component} from 'react'
import './index.scss'
import axio from 'axios'
import axios from "axios/index";
import ListView from '../../../commons/ListView/'
function ContentItem(props){
    let {item} = props
    return (
        <li className='item' key={item.id}>
            <div className="contentInfo">
                <div className="left">
                    <div className="imgBox">
                        <img src={item.userface} alt=""/>
                    </div>
                    <div className="user_name">{item.user_name}</div>
                    <i></i>
                </div>
                <div className="time">
                    {item.time}
                </div>
            </div>
            <div className="contentLevel">
                <span>口感{item.star_eat}</span>
                <span>颜值{item.star_show}</span>
            </div>
            <div className="contentMsg">
                {item.content}
            </div>
        </li>
    )
}
class Comment extends Component {
    constructor(props){
        super(props);
        this.state={
            commentLevel:null,
            commentList:[],
            hasMore: true,
            loading: false
        },
        this.page = 1;
        this.num = 20;
        this.onReachEnd = this.onReachEnd.bind(this)
    }
    getDate(){
        if(this.state.loading) return
        this.setState({loading:true})
        axio.get("/sjm/v3/comment/list_by_product_id",{
            params:{
                product_id: this.product_id,
                curr_page: this.page,
                num_per_page: this.num,
                limit: this.num
            }
        }).then((res) => {
            let commentList = this.state.commentList.concat(res.data.data)
            this.setState({commentList:commentList})
            this.page++
            this.setState({loading:false})
        })
    }
    renderStar(num){
        let result = [];
        let num1 = parseFloat(num);
        while(num1 > 0){
            if(num1<1){
                result.push(<i className='fa fa-star-half-full' key={parseInt(num1)}></i>)
            }else{
                result.push(<i className='fa fa-star'  key={parseInt(num1)}></i>)
            }
            num1--;
        }
        return result;
    }
    componentDidMount(){
        let { params } = this.props.location;
        if(!params) return
        this.product_id = params.product_id
        axios.get('/sjm/v3/comment/rate_and_comment',{
            params:{
                product_id: this.product_id
            }
        }).then(res => {
            this.setState({commentLevel:res.data.data})
        })
        this.getDate()
    }
    onReachEnd(){
        this.getDate()
    }
    render() {
        let {commentLevel, commentList, loading, hasMore} = this.state;
        if(!commentLevel){
            return null;
        }
        return (
            <div className='detail_comment'>
                <div className="comment-level-item">
                    <div className="left">
                        <span>{commentLevel.good}%</span>
                        <span>好评</span>
                    </div>
                    <div className="right">
                        <div className='eat_level'>
                            <span>口感</span>
                            {this.renderStar(commentLevel.eat)}
                        </div>
                        <div className='show_level'>
                            <span>颜值</span>
                            {this.renderStar(commentLevel.show)}
                        </div>
                    </div>
                </div>
                <div className="comment-tab-menu">
                    <span className='active'>评价({commentLevel.num.total})</span>
                    <span>晒图({commentLevel.num.has_image})</span>
                </div>
                <div className="tip">
                    <i className='fa fa-check-circle'></i>
                    <i className='fa fa-circle-o'></i>
                    <span>只看有内容的评价</span>
                </div>
                <ListView
                    contentClassName = {'contents'}
                    row = {ContentItem}
                    dataList = {commentList}
                    distanceEnd = {50}
                    loadiong = {loading}
                    hasMore = {hasMore}
                    onReachEnd={this.onReachEnd}
                >
                </ListView>
            </div>
        )
    }
}
export default Comment