import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>ooops, I think you just encountered an error</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
