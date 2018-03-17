import React, { Component } from 'react';
import { Root } from 'native-base';
import Router from './Router';

export let navigatorRef;

export class App extends Component {
  componentDidMount() {
    navigatorRef = this.navigator;
  }

  render() {
    return (
      <Root>
        <Router ref={nav => { this.navigator = nav; }} />
      </Root>
    );
  }
}
