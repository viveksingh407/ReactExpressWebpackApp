import React from "react";
import {Link} from "react-router-dom";

class Menu extends React.Component{
    render() {
        return(
            <div>
                <Link to='/'>Home</Link>&nbsp;
                <Link to='/about'>About</Link>
            </div>
        );
    }
}

export default Menu
