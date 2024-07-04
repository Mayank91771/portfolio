import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import musicplayer from "../../Assets/Projects/musicplayer.png";
import iBlog from "../../Assets/Projects/iBlog.png";
import ratecard from "../../Assets/Projects/Ratecard.png";
import fakestore from "../../Assets/Projects/Fakestore.png";
import invoice from "../../Assets/Projects/Invoice.png";
import tictactoe from "../../Assets/Projects/Tic-Tac-Toe.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fakestore}
              isBlog={false}
              title="Fake Store"
              description="It is a e-commerce web application that provide users options to buy from various products available. The API utilized is a third party API and the application is developed using React where as the state management is handled using Redux. For users to make payment Stripe payment gateway has been integrated in this application."
              ghLink="https://github.com/Mayank91771/ecommerce-stripe"
              demoLink="https://stunning-peony-09802f.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicplayer}
              isBlog={false}
              title="Music Player"
              description="A web based music player developed using HTML, CSS and JavaScript which has all the options of a music player present in the current market and the option to select songs from a pre-added library."
              ghLink="https://github.com/Mayank91771/musicplayer/tree/main"
              demoLink="https://mayank-personal-music-player.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="It is the famous tic-tac-toe game which has been developed using HTML, CSS and JavaScript. The user can select the choice of player from the two options given and which ever player gets their sign three times in a row (horizontally, vertically and diagonally) wins."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://tic-tac-toe-my-game-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ratecard}
              isBlog={false}
              title="Rate card design"
              description="A mini project which focuses on the designing of a rate card which can handle multiple rate card options inside itself."
              ghLink="https://github.com/Mayank91771/Multi-Rate-Card"
              demoLink="https://peaceful-mochi-03898f.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invoice}
              isBlog={false}
              title="Invoice creater"
              description="An Invoice creator project built using React. Add itemized items, configure quantity, prices, tax rates and discounts. Feature to download Invoice as PDFs to your device. It uses 'jspdf-react' to capture the data from the modal and covert it from canvas -> pdf."
              ghLink="https://github.com/Mayank91771/Invoice"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iBlog}
              isBlog={false}
              title="iBlog"
              description="A user interface design for a blog site created using HTML and CSS."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://mayank-blog-app.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
