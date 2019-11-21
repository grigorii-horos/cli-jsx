var ReactDOMServer = require('react-dom/server');
const React = require('react')

const cliJSX = (jsx)=>{
	return ReactDOMServer.renderToStaticMarkup(React.createElement(jsx, null))
}

module.exports = cliJSX