import { combineReducers } from "redux"
import product from './product'
import toggleModal from './toggleModal'
import toggleForm from "./formReducer"
import toggleMessege from "./toggleMessegeReducer"

const rootReducers = combineReducers({
	product,
	modal: toggleModal,
	form: toggleForm,
	messege :toggleMessege,
	
})
export default rootReducers