
import { GET_PRODUCT, TOGGLE_FAVORITES, TOGGLE_CARTS } from "../acrions/productAction"

export const getProductAC = () => {
	return async (dispatch) => {
		const { products } = await fetch('http://localhost:3000/Data.json')
			.then(response => response.json())
			
		dispatch({ type: GET_PRODUCT, payload: products })
		
	}
}

export const toggleFavoriteAC = (id) => ({ type: TOGGLE_FAVORITES, payload: id })


export const toggleCartAC = (id) => ({ type: TOGGLE_CARTS, payload: id })

