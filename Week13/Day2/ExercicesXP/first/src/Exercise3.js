import React from "react";
import './Exercice.css'

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

class Exercice extends React.Component {
    render() {
      return (
        <div>
            <h1 style={style_header}>This is a Header</h1>
            <p className="para">This is a Paragraph</p>
            <a href="www.google.fr"></a>
            <form>
            <h2>This is form</h2>
            <input type="text"></input>
            <input type="submit" value='Send'></input>
            </form>
            <h2>Here is an image</h2>
            <img src="https://repository-images.githubusercontent.com/410214337/070f2aba-d9d6-4699-b887-9a0f29015b1b"/>
            <ul>This is a list
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ul>
        </div>
      );
    }
  }
  
  export default Exercice;
  