export const getProducts=(url:any)=> (dispatch: (arg0: { type: any; payload: any }) => any)=>{

    fetch(url).then(res=> res.json())
   .then(response=>dispatch(({type:"GET_PRODUCTS_SUCCESS",payload:response}))
   ).catch(error=>dispatch({type:"GET_PRODUCTS_ERROR", payload:error}))
}