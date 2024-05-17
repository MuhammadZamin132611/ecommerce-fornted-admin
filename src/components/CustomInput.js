import React from 'react';

const CustomInput = (props) => {
    const { type, label, i_id, i_class, name, val, onCh } = props
    return (
        <>
            <div className="form-floating mt-3">
                <input type={type} className={`form-control ${i_class}`} onChange={onCh} onBlur={onCh} value={val} name={name} id={i_id} placeholder={label}/>
                    <label htmlFor={label}>{label}</label>
            </div>
        </>
    );
}

export default CustomInput;
