import React, { Component } from 'react'
import '../styles/HeaderLogo.css'

class Logo extends Component {
    render() {
        return (
            <div className="Logo">
                <h1>MOVIE IN MEMORY</h1>
                <h3>with <span>NETFLIX</span></h3>
            </div>
        );
    }
}

export default Logo;