import React from "react";
import { Container, Card, Row, Text } from "@nextui-org/react";

function Footer({ text, secondText }) {
  return (
    <Container xl>
      <Card css={{ $$cardColor: "none" }}>
        <Card.Body>
          <Row justify="center" align="center">
            <Text h6 size={15} color="black" css={{ m: 0 }}>
              {text}
            </Text>
          </Row>
        </Card.Body>
      </Card>
      <Card css={{ $$cardColor: "none" }}>
        <Card.Body>
          <Row justify="center" align="center">
            <Text h6 size={15} color="black" css={{ m: 0 }}>
              {secondText}
            </Text>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Footer;
