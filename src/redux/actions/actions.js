import { actions } from "../../types/redux";

export const starts = () => {
  return {
    type: actions.form_request_start,
    payload: {
      requesting: true,
    },
  };
};

export const ends = () => {
  return {
    type: actions.form_request_ends,
    payload: {
      requesting: true,
    },
  };
};

export const fails = (error) => {
  return {
    type: actions.form_request_failed,
    payload: error,
  };
};

export const success = (response) => {
  return {
    type: actions.form_request_success,
    payload: response,
  };
};

export const fetch = (data) => {
  return {
    type: actions.form_request_fetch,
    payload: data,
  };
};
