const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { FacebookShareButton } = require('react-share');

const html = renderToStaticMarkup(
  React.createElement(FacebookShareButton, { url: "http://example.com", resetButtonStyle: false }, "Share")
);
console.log(html);
