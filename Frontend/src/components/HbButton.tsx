import React, { useState } from 'react';
import location from './assets/location.svg'

 export interface Props {
    className?:string,
    id?:string,
   src:string, 
   text:string,
   text2?:string,
   size?:number

  }
  
 
export default function hbButton({
    className,
    id,
   src,
   text,
   text2,
   size=24,
    ...props
}:Props) 

{


 
 
   
    return (
    <div className={className}>
    <img src={src} width={size} height={size} id={id}/> {text}<br/>
       {text2}
    </div>
         )

} 



       
        