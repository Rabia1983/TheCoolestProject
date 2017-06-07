import React, { Component } from 'react';
import './App.css';
import Tweet from './Tweet'
class TweetList extends Component {

  render() {

    return (
      <div className="tweetlist">
          {
            this.props.TweetData.map((item,index) => {
              return <Tweet information={item} key={index}/>
            })
          }
      </div>
    );
  }



}
export default TweetList;
