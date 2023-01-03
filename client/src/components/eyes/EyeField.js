import React from "react";

export default  ({input, label, name, meta: {error, touched}}) => {

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type="file" {...input}  style = {{marginBottom : '5px'}}/>
            <div className="red-text" style = {{marginBottom : '20px'}}>
                {touched?error: ''}
            </div>
        </div>
    )

}