import React from "react"
import { useDispatch } from "react-redux"
import { toggleFavoriteAC } from "../../store/actionsCreator/productAC";
import { toggleModalAC } from "../../store/actionsCreator/modalAC";
import {toggleFormAC} from "../../store/actionsCreator/formAC"
import { ReactComponent as Svg } from "../PageHome/svg.svg"
import Button from "../Button/Button";
//import PageHome from '../PageHome/PageHome';

const PageCart = ({ cards }) => {

	const dispatch = useDispatch()
	const res = cards.filter(i => i.isInCart === true)
	if (res.length === 0) return <h2>'В корзине нет товаров</h2>	


	return (
		<div className="content__conteiner">
			
			
			{res.map((element) => {
				return (
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
				
				<div className="content__conteiner-buttons" >
					<Button
						text={element.isInCart ? "Delete from cart" : "Add to cart"}
						onClick={() => {
							dispatch(toggleModalAC(element.id))
						}}
					/>

					<Button
						text={'buy'}

						onClick={() => {
							dispatch(toggleFormAC(element.id))
						}}
					/>

				</div>
				
			</div>
		</div>

		
					</div>
					
				)
			})}
			{/*<PageHome cards={res} />	*/}
		</div>
	)
}
export default PageCart