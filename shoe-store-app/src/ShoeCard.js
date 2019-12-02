import React, { Component } from 'react';

export class ShoeCard extends Component {
    render() {
        return (
            <div>
                {this.props.shoe.name}
            </div>
        );
    }
}

export default ShoeCard;
