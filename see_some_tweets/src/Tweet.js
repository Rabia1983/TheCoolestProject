import React, { Component } from 'react';
import './App.css';

class Tweet extends Component {

  render() {
    return (
      <div className="tweets">
            <p className="username">{this.props.information.name}</p>
             <p>{this.props.information.text}</p>
      </div>
    );
  }
}

export default Tweet;
