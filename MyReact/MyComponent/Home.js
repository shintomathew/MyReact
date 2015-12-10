var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/react/react.d.ts" />
var React = require('react');
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        _super.apply(this, arguments);
    }
    Home.prototype.render = function () {
        return React.createElement("div", null, "My home");
    };
    return Home;
})(React.Component);
module.exports = Home;
//# sourceMappingURL=home.js.map