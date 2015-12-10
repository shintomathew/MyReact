/// <reference path="route.tsx" />
/// <reference path="typings/react-router/react-router.d.ts" />
/// <reference path="typings/react/react.d.ts" />
/// <reference path="typings/react/react-dom.d.ts" />
var ReactDOM = require('react-dom');
var React = require('react');
var routes = require('./Route');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
ReactDOM.render(React.createElement(Router, null, routes), document.getElementById('content'));
//# sourceMappingURL=App.js.map