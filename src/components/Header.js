import React from "react";
import Nav from "./Nav";

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <nav className="nav__top">
                <div className="title__wrap" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
                    <h2><i>Hello!</i></h2>
                    <div className="title__hover-wrap">
                        <h2><i>Hello!</i></h2>
                    </div>
                </div>
                <Nav />
            </nav>
        )
    }
}

export default Header;