import * as actionTypes from '../constants/productConstant';
import axios from 'axios';


// = () => async (dispatch)  ---use the middleware (thunk) as it give advantage to use dispatch
// let obj={
//     config:{},
//     data:[],
//     status:200,
// }
// then if we want data then we use as obj.data....in the same we can also use object destructing concept i.e.
// {data} : obj;

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:8000/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);
        
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.response});

    }
};


export const removeProductDetails = () => (dispatch) => {
    
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });

};
