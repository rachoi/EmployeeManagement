import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className="footer" style={{backgroundColor: "#212529"}}>
                    <span>
                        All Rights Reserved 2021
                    </span>
                </footer>
            </div>
        )
    }
}


export default FooterComponent;