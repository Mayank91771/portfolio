import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mayank Mishra </span>
            {/* from <span className="purple"> Bhubaneswar, India.</span> */}
            <br />
            I have worked as a software developer for almost 2 years.
            <br />
            I have completed my post graduation from Conestoga College in Mobile
            Solutions Development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling.
            </li>
            <li className="about-activity">
              <ImPointRight /> Play various sports.
            </li>
            <li className="about-activity">
              <ImPointRight /> Keeping myself updated with latest market trends.
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
