/// <reference path="route.tsx" />
/// <reference path="typings/react-router/react-router.d.ts" />
/// <reference path="typings/react/react.d.ts" />
/// <reference path="typings/react/react-dom.d.ts" />

import ReactDOM = require('react-dom');
import React = require('react')
import routes = require('./Route');
import ReactRouter = require('react-router');

var Router = ReactRouter.Router;

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('content'));