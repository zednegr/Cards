import React from "react";
import "./style.jsx";
import {
  CardTwoBottom,
  CardTwo_Box,
  CardTwo_Img,
  CardTwo_Wrapper,
  CardTwo_h4,
  CardTwo_IconImg,
  CardTwo_Div,
  CardTwo_p,
  CardTwo_Images
} from "./style.jsx";

import CardTwo from "../../assets/CardTwo.svg";
import CardTwoAva from "../../assets/CardTwoAva.svg";
import CardTwo_MassageIcon from "../../assets/CardTwo_MassageIcon.svg";
import CardTwo_HeartIcon from "../../assets/CardTwo_HeartIcon.svg";

export default function Card2() {
  return (
    <React.Fragment>
      <CardTwo_Wrapper>
        <CardTwo_Box>
          <CardTwo_Images src={CardTwo} />

          <CardTwoBottom>
            <CardTwo_Div>
              <CardTwo_Img src={CardTwoAva} />
              <CardTwo_h4>Felipe Sacudon</CardTwo_h4>
            </CardTwo_Div>

            <CardTwo_Div>
              <CardTwo_IconImg src={CardTwo_MassageIcon} />
              <CardTwo_p>22</CardTwo_p>
            </CardTwo_Div>

            <CardTwo_Div>
              <CardTwo_IconImg src={CardTwo_HeartIcon} />
              <CardTwo_p>22</CardTwo_p>
            </CardTwo_Div>
          </CardTwoBottom>

        </CardTwo_Box>
      </CardTwo_Wrapper>
    </React.Fragment>
  );
}
