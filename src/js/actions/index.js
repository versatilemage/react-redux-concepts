import { ADD_ARTICLE, ADD_ICECREAM} from "../constants/action-types";

const addArticle = (payload) => ({ 
        type: ADD_ARTICLE,//action
        payload
        // payload: {title: 'React Redux Tutorial', id: 1 }
})

const addIcecream = (payload) => ({ 
    type:  ADD_ICECREAM,//action
    payload
})

export {addArticle, addIcecream}