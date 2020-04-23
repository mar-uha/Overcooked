import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Recipe books!</h1>
        <p>Welcome to my recipe books :)</p>
      </div>
    );
  }
}
