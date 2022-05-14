import React,{memo, useEffect, useState} from 'react'
import "./Header.scss"
import {NavLink} from 'react-router-dom'

const Header = () => {
	
	const [addScroll, setAddScroll] = useState(0)

	useEffect((e) => {
		document.addEventListener('scroll', handlerScroll)
		return function () {
			document.removeEventListener('scroll', handlerScroll)
		} 
	}, [addScroll])

	const handlerScroll = (e) => {
		setAddScroll(e.target.documentElement.scrollTop)
	}

	
	 
	return (
		<header className={addScroll < 100 ? 'header ' : 'header__fixed '}>
			<nav className='header__nav'>
				<ul className='header__items'>
					<li className='header__item' >
						<NavLink	className='header__item-link' to='../projectPZ/'>Главная</NavLink>
					</li>
					<li className='header__item' >
						<NavLink	className='header__item-link' to='../projectPZ/PageCart'>Корзина </NavLink>
					</li>
					<li className='header__item' >
						<NavLink	className='header__item-link' to='../projectPZ/PageFavorites'>Избранное</NavLink>
					</li>
				</ul>
			</nav>
		 </header>
	 )
}
 export default memo(Header)