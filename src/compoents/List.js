/**
 * Created by lsq on 2017/12/7.
 */
import React from 'react';

const List = (props) => {
    const style = {cursor:'pointer'};
    const list = props.listItems.map((el, i)=>(
        <li key={i} style={style}>
            <span
                style={
                    el.done
                        ? {textDecoration: 'line-through', fontSize: '20px'}
                        : {textDecoration: 'none', fontSize: '20px'}
                }
                onClick={props.onclick.bind(null, i)}
            >{el.item}</span>
            <button className="btn btn-danger pull-right" onClick={props.delete.bind(null, i)}>x</button>
        </li>
    ));
    return(
        <div>
            <ul>
                {
                    list // this is a variable we'll define next
                }
            </ul>
        </div>
    )
};

export default List;