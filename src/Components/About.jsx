import React from "react";
import "./Section.scss";
import { Card, CardDeck } from "react-bootstrap";
import { FaRegCompass, FaMedapps } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div id="aboutUs" className="about">
      {/* <h5> <span>/ </span> About Us</h5> */}
      <CardDeck className="card-deck">
        {/* <Card.Header style={{fontSize:'3rem', color:'#333',textAlign:'center'}}>/ About Us</Card.Header> */}
        <Card className="card">
          <Card.Body className="card-body">
            <FaRegCompass className="icons" />
            <Card.Title className="card-title">
              {/* <span>/</span> */}Mission
            </Card.Title>
            <Card.Text className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              sapiente soluta necessitatibus vel officiis natus neque doloribus,
              deleniti ullam optio voluptatibus dolores nostrum aut et
              recusandae quaerat incidunt quidem nesciunt. Iusto aliquam modi
              nulla voluptate repellendus voluptatibus perferendis eos ea ullam
              molestias ex beatae fugiat, magnam non dolorem dicta, illo ipsum
              doloribus dolore id amet! Nobis dolorum ipsa adipisci at?
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Body className="card-body">
            <FaMedapps className="icons" />

            <Card.Title className="card-title">
              {/* <span>/</span> */}Vision
            </Card.Title>
            <Card.Text className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              sapiente soluta necessitatibus vel officiis natus neque doloribus,
              deleniti ullam optio voluptatibus dolores nostrum aut et
              recusandae quaerat incidunt quidem nesciunt. Iusto aliquam modi
              nulla voluptate repellendus voluptatibus perferendis eos ea ullam
              molestias ex beatae fugiat, magnam non dolorem dicta, illo ipsum
              doloribus dolore id amet! Nobis dolorum ipsa adipisci at?
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default About;
