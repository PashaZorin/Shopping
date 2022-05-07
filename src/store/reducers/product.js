import { GET_PRODUCT, TOGGLE_FAVORITES, TOGGLE_CARTS } from "../acrions/productAction"


const initialState = {
    data: [],
    
}

const product = (state = initialState, action) => {

    switch (action.type) {

        case GET_PRODUCT:
            const favoritesId = JSON.parse(localStorage.getItem('isInFavorites')) || []
            const cartsId = JSON.parse(localStorage.getItem('isInCarts')) || [];


            const product = action.payload.map(e => {
                if (favoritesId.includes(e.id)) {
                    e.isInFavorite = !e.isInFavorite
                    return e
                }
                if (cartsId.includes(e.id)) {
                    e.isInCart = !e.isInCart
                    return e
                }
                    return e
            })
            return { ...state, data: product };
        
        
        case TOGGLE_FAVORITES:

            const res = [...state.data] 
            
            const indexFavorites = res.findIndex(e => e.id === action.payload)
            res[indexFavorites].isInFavorite = !res[indexFavorites].isInFavorite;

            const storageFavoritesId = JSON.parse(localStorage.getItem('isInFavorites')) || [];
            if (storageFavoritesId.includes(action.payload)) {
                const newId = storageFavoritesId.filter(e => e !== action.payload)
                localStorage.setItem('isInFavorites', JSON.stringify(newId))
            }
            else {
                storageFavoritesId.push(action.payload)
                localStorage.setItem('isInFavorites', JSON.stringify(storageFavoritesId))
                }
            
            return {...state, data: res}
        
        case TOGGLE_CARTS:
            const newDate = [...state.data] 
            const indexCarts = newDate.findIndex(e => e.id === action.payload)
            newDate[indexCarts].isInCart = !newDate[indexCarts].isInCart;

            const storageCartsId = JSON.parse(localStorage.getItem('isInCarts')) || [];
            if (storageCartsId.includes(action.payload)) {
                const newId = storageCartsId.filter(e => e !== action.payload)
                localStorage.setItem('isInCarts', JSON.stringify(newId))
            }
            else {
                storageCartsId.push(action.payload)
                localStorage.setItem('isInCarts', JSON.stringify(storageCartsId))
                }

            return {...state, data: newDate}
        
        
        default: 
            return state;
    
}
    
}

export default product