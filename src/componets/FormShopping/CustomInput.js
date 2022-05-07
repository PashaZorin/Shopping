import React from 'react';
import {useField} from "formik";
//import './CustomInput.scss';

const CustomInput = (props) => {
    const {type, placeholder, className} = props;

    const [field, meta, helpers] = useField(props);
    const { error, touched } = meta
    
	
    return (
        <>
            <input
                {...field}
                type={type}
				placeholder={placeholder}
				className={className}

            />
            <p className='form__error' >{ touched &&  error }</p>
        </>
    )
}

CustomInput.propTypes = {};
CustomInput.defaultProps = {};

export default CustomInput;