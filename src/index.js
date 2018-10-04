import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function formatName(user){
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: 'Zolbayar',
  lastName: 'Bayarsaikhan'
};

class Welcome extends Component {
  render(){
    return <h1>Hi, {this.props.name}</h1>
  }
}

ReactDOM.render(<Welcome name="Zoloo" />, document.getElementById('root'));
registerServiceWorker();
