import { actions } from "../../types/redux";

const initialState = {
  requesting: false,
  error: null,
  response: null,
  success: null,
};

const reducer = (state = initialState, action) => {
  let newState = null;

  switch (action.type) {
    case actions.form_request_start:
      newState = {
        ...state,
        requesting: true,
        error: false,
        success: null,
      };
      break;

    case actions.form_request_success:
      newState = {
        ...state,
        ...action.payload,
        success: true,
      };
      break;

    case actions.form_request_failed:
      newState = {
        ...state,
        ...action.payload,
        success: false,
      };
      break;

    case actions.form_request_ends:
      newState = {
        ...state,
        requesting: false,
        success: false,
      };
      break;

    case actions.form_request_reset:
      newState = { ...initialState };
      break;

    default:
      newState = state;
      break;
  }

  return newState;
};

export default reducer;
