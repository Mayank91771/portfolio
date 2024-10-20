import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi!, I am <span className="purple">Mayank Mishra </span>
            {/* from <span className="purple"> Bhubaneswar, India.</span> */}
            <br />
            A software developer.
            <br />
            I am a post graduate in Computer Science from Conestoga College,
            Canada. I have previously worked as a Software Developer Intern at
            UInSports Inc., where I built user-friendly applications, and my
            experience also extends to IT, where I have gained hands-on
            experience in building and maintaining computers and servers.
            <br />
            <br />
            Outside of work, I stay active by
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling.
            </li>
            <li className="about-activity">
              <ImPointRight /> workout
            </li>
            <li className="about-activity">
              <ImPointRight /> and be part of any activity.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mayank</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
