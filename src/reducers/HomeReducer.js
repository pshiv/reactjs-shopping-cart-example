import { GET_PRODUCT_LIST, SORT_BY, FILTER_BY, GET_CART_ITEM } from "../actionsTypes/HomeActionType";

const initState = {
    productList: [],
    selectedMovie: {},
    optionList :[],
    sortBy : ''
}

const HomeReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload
            }

        case SORT_BY:
            return {
                ...state,
                selectedMovie: action.payload,
            }
        case FILTER_BY:    
            return {
                ...state,
                movieList: action.payload,
                selectedMovie: {}
            }
        case GET_CART_ITEM:
            return {
                ...state,
                optionList: action.payload,
                sortBy : action.param
            }
        default:
            return state
    }
}

export default HomeReducer;