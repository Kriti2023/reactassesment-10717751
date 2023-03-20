import { combineReducers } from 'redux';
 const myreducer =(state = {}, action) => {
    switch (action.type) {
      case "FETCH_POSTS_REQUEST":
        return {...state,loading:true};
      case "FETCH_SUCCESS": 
        return {...state, posts: action.payload,loading:false};

      case "FETCH_POSTS_REQUEST_BLOG":
         {const newState = {...state};
         console.log(newState);
         newState.loading=  true;
        return newState};
      case "FETCH_SUCCESS_BLOG": 
        return {...state, posts: action.payload,loading:false};
      default:
        return state;
    }
  }
  const rootReducer=combineReducers({myreducer:myreducer});
  export default rootReducer;