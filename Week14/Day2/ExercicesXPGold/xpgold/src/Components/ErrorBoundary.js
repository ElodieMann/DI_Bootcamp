import React from "react";
import Modal from "./Modal";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      errorInfo: errorInfo,
    });
  }

  occurError = () => {
    throw new Error("Something went wrong!");
  };

  handleCloseModal = () => {
    this.setState({
      hasError: false,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Modal errorInfo={this.state.errorInfo} onClose={this.handleCloseModal} />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
