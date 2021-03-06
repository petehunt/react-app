/**
 * Bootstrap code which initialise root component.
 *
 * 2013 (c) Andrey Popp <8mayday@gmail.com>
 */
var extend = require('underscore').extend,
    ReactMount = require('react-tools/build/modules/ReactMount'),
    React = require('react-tools/build/modules/React'),
    Router = require('./router');

module.exports = function(component, request, routes) {
  var topLevelComponent = null,
      props = extend(request, {router: new Router(routes)});

  ReactMount.allowFullPageRender = true;

  if (document.readyState == 'interactive') {
    React.renderComponent(component(props), document);
  } else {
    window.addEventListener('DOMContentLoaded', function() {
      React.renderComponent(component(props), document);
    });
  }
};
