import React,{memo} from "react"; 
import CardItem from "./CardItem";

import "./cards.scss"
//import PropTypes from"react-dom"


const Cards = ({ cards }) => {
	return (
		<div className="content__conteiner" >
			{cards.map(element => (
				<CardItem
					key={element.id}
					element={element}
					
				/>
			))}
			
		</div>
			
		
		
		
	)
	}
	//Cards.propTypes = {
	//	cards : PropTypes.object
	//}

export default memo(Cards)