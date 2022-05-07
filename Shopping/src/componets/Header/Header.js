import React,{memo, useEffect, useState} from 'react'
import "./Header.scss"
import {NavLink} from 'react-router-dom'

const Header = () => {
	
	const [addScroll, setAddScroll] = useState(0)

	useEffect((e) => {
		document.addEventListener('scroll', handlerScroll)
		return function () {
			console.log('remove'); 
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
						<NavLink	className='header__item-link' to='/'>Главная</NavLink>
					</li>
					<li className='header__item' >
						<NavLink	className='header__item-link' to='../PageCart'>Корзина </NavLink>
					</li>
					<li className='header__item' >
						<NavLink	className='header__item-link' to='../PageFavorites'>Избранное</NavLink>
					</li>
				</ul>
			</nav>
		 </header>
	 )
}
 export default memo(Header)