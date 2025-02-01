import { createStore } from 'redux';

// Initial state
const initialState = {
  userId: 'user-unique-identifier',
  profilePictureUrl: '',
  profileCompleteness: 0.75,
  name: 'Pedro Pérez',
  bio: 'Loves coding, coffee, and cats.',
};

// Action types
const SET_PROFILE_PICTURE = 'SET_PROFILE_PICTURE';
const SET_PROFILE_COMPLETENESS = 'SET_PROFILE_COMPLETENESS';

// Reducer
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_PICTURE:
      return { ...state, profilePictureUrl: action.payload };
    case SET_PROFILE_COMPLETENESS:
      return { ...state, profileCompleteness: action.payload };
    default:
      return state;
  }
};

// Create store
const store = createStore(profileReducer);

export default store;
export { SET_PROFILE_PICTURE, SET_PROFILE_COMPLETENESS };