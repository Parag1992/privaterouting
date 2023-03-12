import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import '../component/styles.css'
const Header = () =>{

    return(
      <React.Fragment>
        <header >
       
       
       <nav className="nav">
        <Link to={"/home"}>Learn Reacts</Link>
         <ul>
           <li>
             <NavLink to='/home'>Home</NavLink>
           </li>
           <li>
           <NavLink to='/todo'>Todo</NavLink>
           </li>
           <li>
             <NavLink to='/login'>Login</NavLink>
           </li>
         </ul>
       </nav>
      

   </header>
   <Outlet/>
   </React.Fragment>
    )
}
export default Header;