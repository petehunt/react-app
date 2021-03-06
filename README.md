# react-app

Express application which serves pre-rendered React components and corresponding
client code. Can be used for rapid experimentation and application development
with React library.

Main features:

  * UI pre-rendering on a server
  * HTML5 History navigation
  * Browserified client code bundles
  * Debug mode which features fast bundle rebuilds and source map support

## Quickstart

Install `react-app` npm module:

    % npm install git+https://github.com/andreypopp/react-app.git

Initialise `react-app` express application with route table:

    % cat <<EOF
    var makeApp = require('react-app');
    makeApp({
      '/': './index_page.jsx',
      '/about: './about_page.jsx'
    }).listen(3000);
    EOF > index.js

Now create `index_page` and `about_page` components:


    % cat <<EOF
    /**
    *
    * @jsx React.DOM
    *
    */

    var React = require('react-tools/build/modules/React'),
        Page = require('../../page.js');

    module.exports = React.createClass({
      render: function() {
        return this.transferPropsTo(
          <Page>
            <head>
              <title>Index</title>
            </head>
            <body>
              <h1>Hello, index!</h1>
              <a href="/pages/about">About page</a>
            </body>
          </Page>
        );
      }
    });
    EOF> ./index_page.jsx

    % cat <<EOF
    /**
    *
    * @jsx React.DOM
    *
    */

    var React = require('react-tools/build/modules/React'),
        Page = require('../../page.js');

    module.exports = React.createClass({
      render: function() {
        return this.transferPropsTo(
          <Page>
            <head>
              <title>About</title>
            </head>
            <body>
              <h1>Hello, about!</h1>
              <a href="/">index</a>
            </body>
          </Page>
        );
      }
    });
    EOF > ./about_page.jsx
