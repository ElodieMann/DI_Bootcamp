import React from "react";
import "./style.css"

class Modal extends React.Component {
  render() {
    const { errorInfo, onClose } = this.props;

    return (
      <div className="modal-background">
        <div className="modal-body">
          <h2>Error: Something went wrong!</h2>
          <h3>Details</h3>
          <pre>{errorInfo.stack}</pre>

          <p>Please try it again</p>
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>
    );
  }
}

export default Modal;
