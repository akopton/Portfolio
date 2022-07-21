import React from "react";

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpened: false,
            classList: ['nav']
        }

        this.handleToggle = this.handleToggle.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleToggle() {
        if (!this.state.isOpened) {
            this.setState({
                isOpened: true,
                classList: this.state.classList.concat('opened')
            })
        } else {
            this.setState({
                isOpened: false,
                classList: this.state.classList.filter(el => el !== 'opened')
            })
        }
    }

    handleClose() {
        if (this.state.isOpened) {
            this.setState({
                isOpened: false,
                classList: this.state.classList.filter(el => el !== 'opened')
            })
        }
    }

    render() {
        return (
            <div className={this.state.classList.join(' ')} >
                <div className="nav__hamburger" onClick={this.handleToggle}>
                    <div className="hamburger__top hamburger-part"></div>
                    <div className="hamburger__middle hamburger-part"></div>
                    <div className="hamburger__bottom hamburger-part"></div>    
                </div>
                <div className="nav__menu">
                    <ul>
                        <li><a href="#skills" onClick={this.handleClose}>Skills</a></li>
                        <li><a href="#experience" onClick={this.handleClose}>Experience</a></li>
                        <li><a href="#github" onClick={this.handleClose}>GitHub</a></li>
                        <li><a href="#contact" onClick={this.handleClose}>Contact</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav;