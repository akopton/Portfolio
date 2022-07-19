import React from "react";
import Hamburger from "./Hamburger";

class TopNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="nav__top">
                <h1>Welcome!</h1>
                <Hamburger />
            </div>
        )
    }
}

export default TopNav;