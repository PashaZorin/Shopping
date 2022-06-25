import React, { useEffect }  from 'react'
import './modal.scss'
import Button from '../Button/Button'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModalAC } from '../../store/actionsCreator/modalAC'
import { toggleCartAC } from '../../store/actionsCreator/productAC'
import { toggleScrollAC } from '../../store/actionsCreator/scrollAC'

const Modal = () => {
	const {isModal,id} = useSelector(state => state.modal)
	const dispatch = useDispatch()
	console.log(window.innerWidth - document.documentElement.clientWidth );
	//const scrollHidden = useSelector(state => state.scroll.isScroll)

	//console.log(scrollHidden);
	//useEffect(() => {
	//	scrollHidden === true ? document.body.className = "hidden" : document.body.className = 'scroll'
	//}, [scrollHidden])
	const closeModal = () => {
		dispatch(toggleModalAC())
		dispatch(toggleScrollAC(false))
	}
	return (
		
		<div
			className={`modal ${isModal ? 'open' : null}`}
			onClick={(e) => e.target.className === 'modal open' ?  closeModal() : null}
		>

			<div className='modal__dialog '>
				<div className='modal__header'>
					<h3 className='modal__title'> Подтвердите ваши действея </h3>
					<span className='modal__close' onClick={() => closeModal()}>
						&times;
					</span>
				</div>
				<div className='modal__body'>
				</div>				
				<div className='modal__footer'>
				<div className="modal__footer-btns">
            <Button
				text={'Ok'}
				className='wrapper__btn'
				onClick={() => {
					closeModal()		
					dispatch(toggleCartAC(id))		
				}}
              
              backgroundColor={"green"}

            />
            <Button
              text={'Cansel'}
              onClick={() =>  closeModal()}
              className='wrapper__btn'
              backgroundColor={"red"}
            />

        	  </div>
				</div>
			</div>
		</div>
		
	)
}
Modal.propTypes = {
	isOpen: PropTypes.bool,
	title: PropTypes.string,
	closeModal: PropTypes.func,
	addCart: PropTypes.func
  }
export default Modal