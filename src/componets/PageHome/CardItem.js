import React from "react";
import Button from "../Button/Button";
import { ReactComponent as Svg } from "./svg.svg"
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { toggleFavoriteAC } from "../../store/actionsCreator/productAC";
import { toggleModalAC } from "../../store/actionsCreator/modalAC";

const CardItem = ({ element }) => {
	
	const dispatch = useDispatch()
	
	return(
		<div
			className="content__item"
			key={element.id}
			id={element.id}
		>

			<div className="content__img-conteiner" >
				<img
					className="content__img"
					src={element.url}
					alt={'telephon'}
				/>
			</div>
			<div className="content__item-content">
				<div className="content__item-info">
					<p>{element.name}</p>
					<p>{element.price}$ </p>
					<span
						style={{
							backgroundColor: `${element.color}`,
							borderRadius: `100%`,
							width: `20px`,
							height: `20px`
						}}
					/>
				</div>
				<div className="content__item-buttons" >
					<Svg
						id={element.id}
						className={ element.isInFavorite ? 'content__item-star active' : 	'content__item-star'}
						onClick={() => {
							dispatch(toggleFavoriteAC(element.id))
						}}
					/>
					<Button
						text={element.isInCart ? "Delete from cart" : "Add to cart"}
						onClick={() => {
							dispatch(toggleModalAC(element.id))
						}}

					/>

				</div>
			</div>

			<div className="content__btn-conteiner" ></div>
		</div>
	)
}
CardItem.propTypes = {
	element: PropTypes.object,
  }
export default CardItem