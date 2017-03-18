import React, { Component } from 'react';
import { SlideShowButton } from './SlideShowButton';
import { LivePreview } from './LivePreview';


export class SlideShowApp extends Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            text: ''
        };
        this._handleChange = this._handleChange.bind(this);
        this._handleClick = this._handleClick.bind(this);
    }

    componentWillUnmount(){
    }

    componentDidMount(){
    }

    _handleChange(e) {
        this.setState({
            text: e.target.value 
        });
    }

    render() {
        return(
            <div>
                <SlideShowButton />
                <textarea rows="30" onChange={ this._handleChange } />
                <LivePreview text={this.state.text} />  
            </div>
        );
    }
}

SlideShowApp.defaultProps = {
    
}