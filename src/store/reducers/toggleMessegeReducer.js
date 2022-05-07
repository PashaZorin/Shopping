import { TOGGLE_MESSEGE } from "../acrions/toggleMessegeAction";

const initialState = {

    isMessege: false,  
    
}

const toggleMessege = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_MESSEGE: {
            return { ...state, isMessege: !state.isMessege}
        }

        default: {
            return state;
        }
    }
}

export default toggleMessege