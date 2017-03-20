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
            <div className="row">
                <div className="col-md-6">
                    <SlideShowButton text ={this.state.text} className="btn btn-primary" />
                    <textarea className="form-control" rows="25" onChange={ this._handleChange } />
                </div>
                <div className="col-md-6">
                    <LivePreview text={this.state.text} />  
                </div>
            </div>
        );
    }
}

SlideShowApp.defaultProps = {
    
}