/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react-router/react-router.d.ts" />
/// <reference path="home.tsx" />

import React = require('react');
import ReactDOM = require('react-dom');
import ReactRouter = require('react-router');
import Home = require('./Home');

class MyComponent extends React.Component<{}, {}> {

    render() {
        return <div> My Component <br />
            <ReactRouter.Link to = {"Home"}> Home</ReactRouter.Link>
            </div>;
    }
}

export = MyComponent 