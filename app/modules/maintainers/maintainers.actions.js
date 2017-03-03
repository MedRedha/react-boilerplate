import { ACTION_TYPES } from './maintainers.constants';


export function getMaintainers(language) {
  return {
    type: ACTION_TYPES.GET,
    payload: {
      language,
    },
  };
}

export function getMaintainersSuccess(data) {
  return {
    type: ACTION_TYPES.GET_SUCCESS,
    payload: data,
  };
}

export function getMaintainersError(data) {
  return {
    type: ACTION_TYPES.GET_FAIL,
    payload: data,
    error: true,
  };
}

