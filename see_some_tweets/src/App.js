import React, { Component } from 'react';
import './App.css';
import TweetList from './TweetList';
import axios from 'axios';

class App extends Component {

  constructor(props){
   super(props);

   this.state={
     TweetData:[],
     Whathappen:[]
   }
   this.showmetweet = this.showmetweet.bind(this);
  // this.firststep = this.firststep.bind(this);
 }

// firststep(whatever){
//   axios.post('http://0.0.0.0:3000/gettweet?somthing='+whatever)
//   .then(response => {
//     const newdata = response.data.map((r, index) =>
//       ({
//         key: index,
//         Whathappen: 'Done',
//       })
//     );
//
//     this.setState({
//      Whathappen: newdata,
//     });
//   });
// }

 showmetweet(sometext) {
 // this.firststep(sometext)
   let i=0;
    if (sometext === 'NASA')
     {
       i=1;
     }
    else if (sometext === 'Open source')
    {
      i=2;
    }
    else
    {
      i=3;
    }
    console.warn(this.state.Whathappen)
   axios.post('http://0.0.0.0:3000/showmetweet?kind='+i)
   .then(response => {
     const tweetdata = response.data.map((r, index) =>
       ({
         key: index,
         text: r.text,
         name:r.userName,
       })
     );

     this.setState({
      TweetData: tweetdata,
     });
   });
 }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Our Cool Twitter</h2>
        </div>
        <div className="zar">
        <input className="zar1" type="submit" value="Show me NASA Tweets" onClick={() => {this.showmetweet("NASA")}}/>
        <input className="zar1" type="submit" value="Show me Healthcare Tweets" onClick={() =>{this.showmetweet("Healthcare")}} />
        <input className="zar1" type="submit" value="Show me Open source Tweets" onClick={() =>{this.showmetweet("Open source")}} />
        </div>
        <TweetList TweetData={this.state.TweetData}/>
      </div>
    );
  }

}
export default App;
