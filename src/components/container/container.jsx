import React from "react";
import { Container__box } from "./style";

export default function Container(props) {
  return (
    <React.Fragment>
      <Container__box>{props.children}</Container__box>
    </React.Fragment>
  );
}
