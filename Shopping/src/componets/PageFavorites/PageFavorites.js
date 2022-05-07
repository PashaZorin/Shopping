import React from 'react'
import Cards from '../PageHome/Cards';

const PageFavorites = ({ cards }) => {

	const res = cards.filter( item => item.isInFavorite === true)
	
	return (
		<>
			
				 <h2>{res.length === 0  ? 'В избраном нет товаров' : ''}</h2>
				
				<Cards cards={res} />
				
			
			
		</>
	)
}
export default PageFavorites