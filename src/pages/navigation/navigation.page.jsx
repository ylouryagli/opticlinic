import "./navigation.style.css";
import {Outlet, Link} from 'react-router-dom';
import { Fragment } from "react";

const Navigation =()=> { 
    return (
        <Fragment>
    <div className="navigation-bar">
        <div className="nav-left">
            <span> Logo </span>
        </div>
        <div className="nav-right">
            <Link to="/collection"><span > Collection </span></Link>
                
                <span> About </span>
                <span> Contact </span>
            </div>
            
    </div>
    <Outlet/>
    </Fragment>
        
    )
} ;

export default Navigation;
