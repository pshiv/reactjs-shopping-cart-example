import { API_DATA } from '../Api/rootApi'
import { GET_PRODUCT_LIST, SORT_BY, FILTER_BY, GET_CART_ITEM } from "../actionsTypes/HomeActionType";

export const getProductList = () => {
  const productList = API_DATA.items
  // var movieData = movieList.find(m => m.type === 'movie-list')
  return {
    type: GET_PRODUCT_LIST,
    payload: productList
  }
}

export const getProductBySort = (orderBy) => {

  const productList = API_DATA.items
  if (orderBy == "asc") {
    var sortedData = productList.sort(function (a, b) {
      return b.price.actual - a.price.actual
    });
  } else if (orderBy == "dsc") {
    var sortedData = productList.sort(function (a, b) {
      return a.price.actual - b.price.actual
    });
  }

  else if (orderBy == "discount") {
    var sortedData = productList.sort(function (a, b) {
      return b.discount - a.discount
    });
  }

  return {
    type: GET_PRODUCT_LIST,
    payload: sortedData
  }
}