/// <reference path="typings/react/react.d.ts" />
/// <reference path="mycomponent/mycomponent.tsx" />
/// <reference path="mycomponent/home.tsx" />
/// <reference path="mycomponent/landingpage.tsx" />
/// <reference path="typings/react-router/react-router.d.ts" />
import React = require('react')
import ReactRouter = require('react-router');
import MyComponent = require('./MyComponent/MyComponent');
import Home = require('./MyComponent/Home');
import Button = require('./MyComponent/Button');
//import LandingPage = require('./MyComponent/LandingPage');

var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

//var routes = (
//    <Route path="/" component = {Button} >
//        <IndexRoute component = {Button} />
//        <Route path="Home" component = {Home} />
//        <Route path="Button" component = {Button} />
//    </Route>
);
export = routes;