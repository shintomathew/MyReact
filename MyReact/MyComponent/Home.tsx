/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/react/react.d.ts" />
import React = require('react');
import ReactDOM = require('react-dom');

interface Props {
    HomeName: string
}

class Home extends React.Component<Props, {}> {

    render() {
        return <div>My home</div>;
    }
}

export = Home 