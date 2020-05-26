import { API_DATA } from '../Api/rootApi'
import { GET_PRODUCT_LIST, GET_CART_ITEM, ADD_TO_CART, REMOVE_CART_ITEM, REMOVE_ONE_CART_ITEM } from "../actionsTypes/HomeActionType";

const getUniqueObj = (data) => {
  var tempResult = {};
  for (let { name, product_code, image, price, discount } of data)
    tempResult[product_code] = {
      name, product_code, image, price, discount,
      count: tempResult[product_code] ? tempResult[product_code].count + 1 : 1
    }

  return Object.values(tempResult)

}

export const getProductList = () => {
  const productList = API_DATA.items
  return {
    type: GET_PRODUCT_LIST,
    payload: productList
  }
}

export const getProductBySort = (orderBy) => {

  const productList = API_DATA.items
  if (orderBy === "asc") {
    var sortedData = productList.sort(function (a, b) {
      return b.price.actual - a.price.actual
    });
  } else if (orderBy === "dsc") {
    var sortedData = productList.sort(function (a, b) {
      return a.price.actual - b.price.actual
    });
  }

  else if (orderBy === "discount") {
    var sortedData = productList.sort(function (a, b) {
      return b.discount - a.discount
    });
  }

  return {
    type: GET_PRODUCT_LIST,
    payload: sortedData
  }
}

/* Add to Cart Item */
export const addToCart = (param) => {
  const cartItm = localStorage.getItem("cartItem") === null ? '[]' : localStorage.getItem("cartItem")
  const cartArr = JSON.parse(cartItm);
  cartArr.push(param)
  localStorage.setItem("cartItem", JSON.stringify(cartArr));

  const uniqcartItm = getUniqueObj(cartArr)

  return {
    type: ADD_TO_CART,
    payload: uniqcartItm
  }
}

/* Get All Cart item */
export const getCartItem = () => {

  const cartItm = localStorage.getItem("cartItem") === null ? '[]' : localStorage.getItem("cartItem")
  const cartArr = JSON.parse(cartItm);

  localStorage.setItem("cartItem", JSON.stringify(cartArr));

  const uniqcartItm = getUniqueObj(cartArr)

  return {
    type: GET_CART_ITEM,
    payload: uniqcartItm
  }
}

export const getTotalCartItem = () => {
  const cartItm = localStorage.getItem("cartItem") === null ? '[]' : localStorage.getItem("cartItem")
  const cartArr = JSON.parse(cartItm);

  localStorage.setItem("cartItem", JSON.stringify(cartArr));

  return {
    type: 'GET_TOTAL_CART_ITEM',
    payload: cartArr
  }
}


export const removeItem = (id) => {

  const cartItm = localStorage.getItem("cartItem") === null ? '[]' : localStorage.getItem("cartItem")
  const cartItem = JSON.parse(cartItm);

  const finalObj = cartItem.filter(obj => obj.product_code !== id);
  localStorage.setItem("cartItem", JSON.stringify(finalObj));
  const uniqcartItm = getUniqueObj(finalObj)

  return {
    type: REMOVE_CART_ITEM,
    payload: uniqcartItm
  }
}

export const removeOneItem = (id) => {

  const listToDelete = [];
  listToDelete.push(id);
  const cartItm = localStorage.getItem("cartItem") === null ? '[]' : localStorage.getItem("cartItem")
  const cartArr = JSON.parse(cartItm)

  for (var i = 0; i < cartArr.length; i++) {
    var obj = cartArr[i];

    if (listToDelete.indexOf(obj.product_code) !== -1) {
      cartArr.splice(i, 1);
      break;
    }

  }
  localStorage.setItem("cartItem", JSON.stringify(cartArr));
  const uniqcartItm = getUniqueObj(cartArr)

  return {
    type: REMOVE_ONE_CART_ITEM,
    payload: uniqcartItm
  }

}

