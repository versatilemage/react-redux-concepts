import { ADD_ARTICLE } from "../constants/action-types";
import { ADD_ICECREAM } from "../constants/action-types";
//specify how the app's state changes in response to actions sent to the store

const initialState = {
    articles: []
  }

//functions that take state and actions as arguements, returns the next state of application
//(previousstate, action) => newState  
export function initialReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
            return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
          });
    }
    return state;
  }

const IceCreamState = {
    numOfIceCreams: 20
  }
  
export function IcecreamReducer(state = IceCreamState, action) {
    if (action.type === ADD_ICECREAM) {
      return Object.assign({}, state, {
      numOfIceCreams: state.numOfIceCreams -1
    });
  }
    return state;
  }
  