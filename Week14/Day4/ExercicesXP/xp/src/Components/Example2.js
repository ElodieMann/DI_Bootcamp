import React, { Component } from "react";
import data from "../data2.json";

class Example2 extends Component {
    render() {
      const { Skills } = data;
  
      return (
        <div>
          <h2>Skills:</h2>
          <ul>
            {Skills.map((skill, index) => (
              <li key={index}>
                <h3>{skill.Area}</h3>
                <ul>
                  {skill.SkillSet.map((skill, index) => (
                    <li key={index}>
                      {skill.Name}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

export default Example2;
