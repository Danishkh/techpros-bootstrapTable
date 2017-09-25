import React from 'react';
import Navigation from './Navigation';
export default class Layout extends React.Component{
    render(){
        return(
            <div className="page">
                <Navigation/>
                    {this.props.children}
                </div>

        );
    }
}
