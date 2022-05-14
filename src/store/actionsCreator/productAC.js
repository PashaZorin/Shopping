
import { GET_PRODUCT, TOGGLE_FAVORITES, TOGGLE_CARTS } from "../acrions/productAction"

export const getProductAC = () => {
	return async (dispatch) => {
		const  {products}  = await fetch('http://localhost:3000/projectPZ//Data.json')
			.then(response => response.json())
			.catch((e) => console.log(`Error! ${e}`));
		
		dispatch({ type: GET_PRODUCT, payload: products })
		
	}
}

export const toggleFavoriteAC = (id) => ({ type: TOGGLE_FAVORITES, payload: id })


export const toggleCartAC = (id) => ({ type: TOGGLE_CARTS, payload: id })

