import React from "react";
import PropTypes from "prop-types";

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <head
            dangerouslySetInnerHTML={{
              __html: `${"<!--                                                -->"}
            ${"<!-- 88888888   8888888   888    888   8888888          -->"}
            ${"<!--    88    88888888888 8888  8888 88888888888        -->"}
            ${"<!--    88    88888888888 88 8888 88 88888888888        -->"}
            ${"<!--    88    88888888888 88  88  88 88888888888        -->"}
            ${"<!--    88      8888888   88      88   8888888          -->"}
            ${"<!-- 8888888 88888888 88     88 8888888  88   8888888   -->"}
            ${"<!-- 88         88    88     88 88    88 88 88888888888 -->"}
            ${"<!-- 8888888    88    88     88 88    88 88 88888888888 -->"}
            ${"<!--      88    88    88     88 88    88 88 88888888888 -->"}
            ${"<!-- 8888888    88     8888888  8888888  88   8888888   -->"}
            ${"<!--                                                    -->"}
            ${"<!-- site by https://tomostudio.id                      -->"}
            ${"<!--                                                    -->"}`,
            }}
          />
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes} className="loading">
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
