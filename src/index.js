import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// To use properties in a component
class Welcome extends Component {
  render(){
    return <h1>Hi, {this.props.name}</h1>
  }
}

// To include other components into a component
class AppReal extends Component {
  render(){
    return (
      <div>
        <Welcome name="Zolbayar" />
        <Welcome name="Bayarsaikhan" />
        <Welcome name="Battulga" />
        <Welcome name="Ulziijargal" />
        <Welcome name="Gegee" />
      </div>
    );
  }
}

// ======================= Extracting Components =======================
const comment = {
  date: new Date(),
  text: 'Learning React is really interesting!',
  author: {
    name: 'Buchka',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

function formatDate(date){
  return date.toLocaleDateString();
}

// When it's getting messy
class Comment extends Component {
  render() {
    return (
      <div class="Comment">
        <div class="UserInfo">
          <div class="Avatar">
            <img src={this.props.comment.author.avatarUrl}/>
          </div>
          <div class="Name">
            <b>{this.props.comment.author.name}</b>
          </div>
        </div>
        <div class="CommentText">
          {this.props.comment.text}
        </div>
        <div class="CommentDate">
          {formatDate(this.props.comment.date)}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Comment comment={comment} />, document.getElementById('root'));
registerServiceWorker();
