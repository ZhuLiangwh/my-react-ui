/**
 * Created by liangzhu on 2016/4/19.
 */

import React from 'react';
import { Router, Route, Link } from 'react-router'

let App = React.createClass({
    render() {
      return (
          <div className="nav">
            <ul>
              <li><Link to="/signIn">login In</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            {this.props.children}
          </div>
      );
    }
});

export default App;
