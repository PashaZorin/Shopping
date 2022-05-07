
import { TOGGLE_FORM } from "../acrions/formAction";


const initialState = {
	isInForm: false,
    id: null,
	
    
    
}

const toggleForm = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_FORM: {
            return { ...state, isInForm: !state.isInForm, id: action.payload }
        }

        default: {
            return state;
        }
    }
}

export default toggleForm