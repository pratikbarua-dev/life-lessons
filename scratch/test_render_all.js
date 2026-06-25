const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { TwitterIcon, LinkedinIcon, Share2, LinkIcon, Check } = require('react-share');

console.log(ReactDOMServer.renderToString(React.createElement(TwitterIcon, { size: 24, round: true })));
console.log(ReactDOMServer.renderToString(React.createElement(LinkedinIcon, { size: 24, round: true })));
