import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
    return (
        <div className="container">
            <h1>Tech<b>Pros</b> ACT</h1>
            <div className="well">
             </div>

            <Link to="about" className="btn btn-primary btn-lg">Mer informasjon</Link>
        </div>
    );
  }
}




