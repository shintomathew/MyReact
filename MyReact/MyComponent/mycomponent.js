/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react-router/react-router.d.ts" />
/// <reference path="home.tsx" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactRouter = require('react-router');
var MyComponent = (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent() {
        _super.apply(this, arguments);
    }
    MyComponent.prototype.render = function () {
        return React.createElement("div", null, " My Component ", React.createElement("br", null), React.createElement(ReactRouter.Link, {"to": "Home"}, " Home"));
    };
    return MyComponent;
})(React.Component);
module.exports = MyComponent;
//# sourceMappingURL=mycomponent.js.map