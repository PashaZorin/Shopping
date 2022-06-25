import { TOGGLE_SCROLL } from "../acrions/scrollAction";

const initialState = {
    isScroll: false,
    
    
    
}

const toggleScroll = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_SCROLL: {
            if (!state.isScroll === true) {
                document.body.className = 'hidden'
            } else {
                document.body.className = 'scroll' 
            }
            return { ...state, isScroll: !state.isScroll}
        }
        

        default: {
            return state;
        }
    }
}

export default toggleScroll