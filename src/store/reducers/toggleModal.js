import { TOGGLE_MODAL } from "../acrions/modalAction";
const initialState = {
  isModal: false,
  id: null,
};

const toggleModal = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL: {
      return { ...state, isModal: !state.isModal, id: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default toggleModal;
