import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    this.setState({
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="card my-5">
          <div className="card-header">
            <h1>Something went wrong!</h1>
          </div>
          <div className="card-body">
            <p>
              An error occurred while rendering the component. Please try again
              later.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="btn btn-primary"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;