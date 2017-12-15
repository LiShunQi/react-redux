/**
 * Created by lsq on 2017/12/15.
 */
import React,{Component} from 'react'
import {  Route, Link } from 'react-router-dom'

class About extends Component{
    render(){
        const match = this.props.match;
        return(
            <div>
                <h1>about page</h1>
                <hr/>
                <div>
                <ul>
                    <li><Link to={`${match.url}/shoes`}>Shoes</Link></li>
                    <li><Link to={`${match.url}/boots`}>Boots</Link></li>
                    <li><Link to={`${match.url}/footwear`}>Footwear</Link></li>
                </ul>
                    {/*:name是路径参数,获取about/之后到下一条斜杠之间的所有内容*/}
                    <Route path={`${match.path}/:name`} render= {({match}) =>( <div> <h3 style={{color:'green'}}> {match.params.name} </h3></div>)}/>
                </div>
            </div>
        )
    }
}
export default About;