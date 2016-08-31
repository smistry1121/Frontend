import * as actionTypes from '../actionTypes';

const uiReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_LEFT_SIDE:
      return Object.assign({}, state, {
        leftSideComponent: action.payload.component,
        leftSideData: action.payload.data
      })

    case actionTypes.SET_RIGHT_SIDE:
      return Object.assign({}, state, {
        rightSideComponent: action.payload.component,
        rightSideData: action.payload.data
      });

    default:
      return state;
  }
};

export { uiReducer };
