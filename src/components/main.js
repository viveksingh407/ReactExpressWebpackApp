import React from "react";
import Menu from "./header/menu.js";

class Main extends React.Component{
    render() {
        return (
            <div>
                <Menu />
                {this.props.children}
            </div>
        );
    }
}

export default Main;

