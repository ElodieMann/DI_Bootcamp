import React, { Component } from "react";
import data from "../data2.json";

class Example3 extends Component {
  render() {
    const { Experiences } = data;

    return (
      <div>
        <h2>Experiences:</h2>
        {Experiences.map((experience, index) => (
          <div key={index}>
            <div>
              <img src={experience.logo} alt={experience.companyName} />
            </div>
            <h3>
              <a href={experience.url}>{experience.companyName}</a>
            </h3>
            {experience.roles.map((role, index) => (
              <div key={index}>
                <h4>{role.title}</h4>
                <p>
                  {role.startDate} {role.location}
                </p>
                <p>{role.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
