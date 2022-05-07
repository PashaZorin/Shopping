import React from "react";
import PropTypes from 'prop-types'
import './button.scss'

const Button = (props) => {
	const { text, onClick, backgroundColor,className, type } = props
	return (
		<button className='wrapper__btn'
			onClick={onClick}
			//id={id}
			type={type}
			style={{backgroundColor : backgroundColor}}
		>
			{text}
			
		</button>
	)
}
Button.propTypes = {
	backgroundColor : PropTypes.string,
	text: PropTypes.string,
	onClick: PropTypes.func,
  }
export default Button