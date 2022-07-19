import React from "react";

class Hamburger extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpened: false,
            classList: ['hamburger']
        }

        this.handleOpen = this.handleOpen.bind(this)
    }

    handleOpen() {
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


    render() {
        return (
            <div className={this.state.classList.join(' ')} onClick={this.handleOpen}>
                <div className="hamburger__top hamburger-part"></div>
                <div className="hamburger__middle hamburger-part"></div>
                <div className="hamburger__bottom hamburger-part"></div>
                <div className="menu">
                    <ul>
                        <li>navitem</li>
                        <li>navitem</li>
                        <li>navitem</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Hamburger;