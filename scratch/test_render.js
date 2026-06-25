const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { FacebookIcon } = require('react-share');

const html = ReactDOMServer.renderToString(React.createElement(FacebookIcon, { size: 24, round: true }));
console.log(html);
