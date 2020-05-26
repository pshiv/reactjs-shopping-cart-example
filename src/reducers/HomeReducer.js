import { GET_PRODUCT_LIST, GET_CART_ITEM, ADD_TO_CART, REMOVE_CART_ITEM, REMOVE_ONE_CART_ITEM } from "../actionsTypes/HomeActionType";

const initState = {
    productList: [],
    cartItem: [],
    totalCartItem:[]
}

const HomeReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload
            }

        case GET_CART_ITEM:
            return {
                ...state,
                cartItem: action.payload,
            }

        case ADD_TO_CART:
            return {
                ...state,
                cartItem: action.payload,
            }
        case REMOVE_CART_ITEM:
            return {
                ...state,
                cartItem: action.payload,
            }
        case REMOVE_ONE_CART_ITEM:
            return {
                ...state,
                cartItem: action.payload,
            }
            case 'GET_TOTAL_CART_ITEM':
            return {
                ...state,
                totalCartItem: action.payload,
            }
        default:
            return state
    }
}

export default HomeReducer;