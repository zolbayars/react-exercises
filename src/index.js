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

// Name props from the component's own point of view rather than the context
// which it is used (We changed the author to user in here)
class Avatar extends Component {
  render() {
    return (
      <img className="Avatar"
        src={this.props.user.avatar}
        alt={this.props.user.name}
      />
    );
  }
}

class UserInfo extends Component {
  render() {
    return (
      <div className="UserInfo">
        <Avatar user={this.props.user} />
        <div className="UserInfo-name">
          <b>{this.props.user.name}</b>
        </div>
      </div>
    );
  }
}

class CommentModular extends Component {
  render() {
    return (
      <div className="Comment">
        <UserInfo user={this.props.comment.author} />
        <div className="CommentText">
          {this.props.comment.text}
        </div>
        <div className="CommentDate">
          {formatDate(this.props.comment.date)}
        </div>
      </div>
    );
  }
}

// ======================= Component State =======================

class Clock extends Component {

  constructor(props){
    super(props);
    this.state = {
      now: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      now: new Date()
    });
  }

  render(){
    return (
      <div className="Clock">
        <h1>Now time is: {this.state.now.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

class Counter extends Component {

  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((state, props) => ({
      counter: state.counter + parseInt(props.increment)
    }));
  }

  // Unreliable approach. The state is asynchronous
  // tick() {
  //   this.setState({
  //     counter: this.state.counter + 1
  //   });
  // }

  render(){
    return (
      <div className="Counter" increment="3">
        <h1>Now time is: {this.state.counter}</h1>
      </div>
    );
  }
}


ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
