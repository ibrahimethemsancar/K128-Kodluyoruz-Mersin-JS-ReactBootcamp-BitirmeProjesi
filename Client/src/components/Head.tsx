import React, { useState } from 'react';
import location from './assets/location.svg'
import HbButton from './HbButton'
import './Head.css'
import Logo from './assets/HbLogo.svg'
import Profile from './assets/Profile.svg'
import ShoppingCart from './assets/shoppingCart.svg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  useParams,
  useRouteMatch,
  Link
} from "react-router-dom";
 export interface Props {
   
  }
  
 
export default function HbTopImg({
   
    ...props
}:Props) 

{

async function getUser(){
 try{
const response=await fetch('https://my-expressjs-ap.herokuapp.com/products');
const jsonData=await response.json();
console.log(jsonData)
 }
 catch(error){
  console.log(error)
 }
}
getUser()
 
 
   
    return (
      <nav className="navbar  navbar-light bg-white" style={styles().navBar}>
        <div className="TopList">
          <ul>
            <li ><a href="#" title="Siparişlerim" rel="nofollow">Siparişlerim</a></li>
          <li><a href="#" title="Süper Fiyat, Süper Teklif">Süper Fiyat, Süper Teklif</a></li>
          <li><a href="#" title="Yurt Dışından" rel="nofollow">Yurt Dışından</a></li>
          <div className="sf-Overlay-39Wjv sf-TopLinks-2A5jW"></div><li><a className="" href="#" target="" title="Kampanyalar">Kampanyalar</a></li>
          <li className="sf-TopLinks-3fj5n"><a href="#" title="Girişimci Kadınlar" rel="nofollow">Girişimci Kadınlar</a></li>
          <li><a href="#" title="Çözüm Merkezi" rel="nofollow">Çözüm Merkezi</a></li><li><a href="#" title="Hepsiburada'da Satıcı Ol" rel="nofollow">Hepsiburada'da Satıcı Ol</a></li>
          </ul>
          </div>
    <div className='secondPart'>      
  <a className="navbar-brand" href="#"><img src={Logo} alt="" /> </a>
  
  <form className="form-inline my-2 my-lg-0" style={styles().SearchForm}>
      <input className="form-control mr-sm-2" id="input"type="search" placeholder="Ürün, kategori veya marka ara" aria-label="Search">
      </input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <HbButton text='Konum' text2='İstanbul' src={location} className='locationBtn'/>
   <Link to={'/Login'}><HbButton text='Giriş Yap' text2='veya üye ol' src={Profile} className='headLoginBtn' id='img'/></Link> 
    <HbButton text='Sepetim'  src={ShoppingCart} className='shoppingCart' id='shopping' /><br/>
   
    </div>
    <div className="sf-ColorfulBand-3p0K5">
      <div className="sf-ColorfulBand-3Ae09"></div>
      <div className="sf-ColorfulBand-1sARj"></div>
      <div className="sf-ColorfulBand-3Ief9"></div>
      <div className="sf-ColorfulBand-AxUY4"></div>
      <div className="sf-ColorfulBand-2JoEr"></div>
      <div className="sf-ColorfulBand-2vyIJ"></div>
      </div><br/>
      <div className='menu-items'>
        <ul id='menu-list'>
          <li className='menu-li'>
            <span className='menu-span'>
            <Link to={'/Products/elektronik'}> <a href="" className='menu-link'>Elektronik</a></Link>
            </span><div className='vl'></div>
          </li>
          <li className='menu-li'>
            <span>
              <a href="" className='menu-link'>Moda</a>
            </span><div className='vl'></div>
          </li>
          <li className='menu-li'>
            <span>
              <a href="" className='menu-link'>Ev,Yaşam,Kırtasiye,Ofis</a>
            </span><div className='vl'></div>
          </li>
          <li className='menu-li'>
            <span>
              <a href="" className='menu-link'>Oto,Bahçe,Yapı,Market</a>
            </span><div className='vl'></div>
          </li>
          <li className='menu-li'>
            <span>
              <a href="" className='menu-link'>Anne,Bebek,Oyuncak</a>
            </span><div className='vl'></div>
          </li>
          <li className='menu-li'>
            <span>
              <a href="" className='menu-link'>Kozmetik,Kişisel Bakım</a>
            </span><div className='vl'></div>
          </li>
          <li className='menu-li'>
            <span>
              <a href="" className='menu-link'>Süpermarket,Petshop</a>
            </span><div className='vl'></div>
          </li>
          <li className='menu-li'>
            <span>
              <a href="" className='menu-link'>Kitap,Müzik,Film,Hobi</a>
            </span><div className='vl'></div>
          </li>
         
        </ul>
      </div>
  
</nav>
         )

} 

const styles =()=>( {
  navBar: {
    backgroundColor:'#fff',
    height:'100px'
  },
 SearchForm: {
  marginLeft: '50px',
  
 }
});

       
        