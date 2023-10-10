import React from "react";
import Modal from "./Components/Modal";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showError: false,
    };
  }

  render() {
    return (
      <div>
        <button onClick={this.occurError}>Occur an error</button>
        {this.state.showError && (
          <Modal
            errorInfo={{
              message: "Something went wrong!",
              stack:
                "Détails\n\nin r\nin div\nin r\nin StrictMode\nPlease try it again",
            }}
            onClose={() => this.setState({ showError: false })}
          />
        )}
      </div>
    );
  }

  occurError = () => {
    this.setState({ showError: true });
  };
}

export default App;
