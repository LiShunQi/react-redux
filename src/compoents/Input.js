/**
 * Created by lsq on 2017/12/7.
 */
import React from 'react';

const Input = ({change,submit}) => {
    return(
        <form >
            <div
                className="form-group">
                <label
                    htmlFor="listInput">
                    Email address
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="listItemInput"
                    placeholder="Add new todo"
                    onChange={(event) => {change(event)}}
                />
                <button
                    onClick={(event) => {submit(event)}}
                    className="btn btn-primary">
                    Add Item
                </button>
            </div>
        </form>
    )
};

export default Input;