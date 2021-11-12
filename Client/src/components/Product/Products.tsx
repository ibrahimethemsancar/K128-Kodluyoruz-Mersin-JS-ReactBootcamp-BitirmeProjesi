import React,{useEffect} from 'react'
import {
    BrowserRouter as Router,
    Link,
    useParams,
  } from "react-router-dom";
  import {connect} from 'react-redux';
import  {getProducts}  from './actions/index';
const  Products=(props: any)=> {
    const url='https://my-expressjs-ap.herokuapp.com/products'
    const { category } : any = useParams();
    
   
    async function get(){
        
       await props.getProducts(url)
       console.log(props.products)
    }
    
  
    
    return (
        <div>
            
        </div>
    )
}
const mapStateToProps=(state: { products: any; })=>{
    return{
        products:state.products
    }
}
export default connect(mapStateToProps,{getProducts})(Products)