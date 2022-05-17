import { combineReducers } from "redux"
import product from './product'
import toggleModal from './toggleModal'
import toggleForm from "./formReducer"
import toggleMessege from "./toggleMessegeReducer"
import toggleScroll from "./scrollReducer"

const rootReducers = combineReducers({
	product,
	modal: toggleModal,
	form: toggleForm,
	messege: toggleMessege,
	scroll :toggleScroll
	
})
export default rootReducers