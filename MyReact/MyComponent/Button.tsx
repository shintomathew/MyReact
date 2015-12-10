/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react-router/history.d.ts" />
/// <reference path="../typings/react-router/react-router.d.ts" />
import ReactRouter = require('react-router');
import React = require('react');
import ReactDOM = require('react-dom');

class Button extends React.Component<{}, {}> {

    render() {
        return <input type="submit" value="Submit" onClick={this.handleClick.bind(this)}  />
            }

    private handleClick(): void{
        //this.props.history.pushState(null, 'Home');
         
            }
}

export = Button 
