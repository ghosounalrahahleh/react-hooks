import React,{useRef} from 'react';
import Button from './Button';


const ImperativeHandle = () => {
  const buttonRef =useRef(null);  
    return ( <>
    <button onClick={()=>{buttonRef.current.alterToggle()} } className="ui button">button from parent</button>
    <Button ref={buttonRef} />
    </> );
}
 
export default ImperativeHandle;


// const ImperativeHandle = () => {
//     const buttonRef =useRef(null);
    
//         return ( <>
//         <button onClick={()=>{buttonRef.current.alterToggle()}}>button from parent</button>
//         <Button ref={buttonRef} />
//         </> );
//     }
     
//     export default ImperativeHandle;