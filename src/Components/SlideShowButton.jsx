import React, { Component } from 'react';

export class SlideShowButton extends Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
        };

        //  this._handleClick = this._handleClick.bind(this);
        this._handleClick = this._handleClick.bind(this);
    }

    componentWillUnmount(){
    }

    componentDidMount(){
    }

    render(){
        return(
            <button onClick={this._handleClick}>播放</button>
        );
    }
}

SlideShowButton.defaultProps = {
    
}