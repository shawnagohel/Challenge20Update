import React from "react";
import { Card, Button } from 'react-bootstrap'

export default function Project(props) {
  const { title, github, url, img } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          GitHub : {github}
        </Card.Text>
        <Card.Text>
          URL : {url}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
