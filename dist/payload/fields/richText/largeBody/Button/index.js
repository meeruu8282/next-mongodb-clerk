"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-use-before-define
var react_1 = __importDefault(require("react"));
var richtext_slate_1 = require("@payloadcms/richtext-slate");
var Icon_1 = __importDefault(require("../Icon"));
var baseClass = 'rich-text-large-body-button';
var ToolbarButton = function () { return (react_1.default.createElement(richtext_slate_1.ElementButton, { className: baseClass, format: "large-body" },
    react_1.default.createElement(Icon_1.default, null))); };
exports.default = ToolbarButton;
