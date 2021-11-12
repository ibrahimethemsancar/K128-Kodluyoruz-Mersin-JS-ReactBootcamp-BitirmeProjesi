const INITIAL_STATE={
    products:[],
    message:''
}
export const reducer=(state=INITIAL_STATE,action: any)=>{
    switch(action.type){
        case'GET_PRODUCTS_SUCCESS': return {...state, products:action.payload};
        case 'GET_PRODUCTS_ERROR': return{...state, message:action.payload}
        default: return state;
    }
}