/// <reference path="../../../typings/react/react-addons-test-utils.d.ts" />
/// <reference path="../../../typings/jest/jest.d.ts" />
jest.dontMock('../../../MyComponent/Button');
import Home = require('../../../MyComponent/Home');
import TestUtils = require("react-addons-test-utils")
import React = require('react');
import ReactDOM = require('react-dom');

describe("ButtonClick", () => {

    it("Button", () => {
        var Test = <Home />;
        var DOM = TestUtils.renderIntoDocument(Test);
        expect(TestUtils.isCompositeComponent(DOM)).toBeTruthy();
        expect(ReactDOM.findDOMNode(DOM).textContent.trim())
            .toEqual("My home");
    });
});