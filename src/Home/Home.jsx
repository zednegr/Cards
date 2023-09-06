import React from "react";
import Card from "../components/card/card";
import Card1 from "../components/card1/card1";
import Card2 from "./../components/card2/card2";
import { HomeSection } from "./Styled";
import Container from "../components/container/container";

export default function Home() {
  return (
    <React.Fragment>
      <HomeSection>
        <Container>
          <Card />
          <Card1 />
          <Card2 />
        </Container>
      </HomeSection>
    </React.Fragment>
  );
}
