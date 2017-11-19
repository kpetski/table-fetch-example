import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div className="p-3 mb-2 bg-primary text-white">
                <br/>
                <h1>{this.props.title}</h1>
                <br/>
            </div>      
        )
    }
}
export default Header