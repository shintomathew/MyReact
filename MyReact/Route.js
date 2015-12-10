/// <reference path="typings/react/react.d.ts" />
/// <reference path="mycomponent/mycomponent.tsx" />
/// <reference path="mycomponent/home.tsx" />
/// <reference path="mycomponent/landingpage.tsx" />
/// <reference path="typings/react-router/react-router.d.ts" />
var React = require('react');
var ReactRouter = require('react-router');
var Home = require('./MyComponent/Home');
var Button = require('./MyComponent/Button');
//import LandingPage = require('./MyComponent/LandingPage');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var routes = (React.createElement(Route, {"path": "/", "component": Button}, React.createElement(IndexRoute, {"component": Button}), React.createElement(Route, {"path": "Home", "component": Home}), React.createElement(Route, {"path": "Button", "component": Button})));
module.exports = routes;
//# sourceMappingURL=route.js.map