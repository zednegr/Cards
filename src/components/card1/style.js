import styled from "styled-components";

export const Main = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const CardContainer = styled.div`
box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10);
position: relative;
width: 350px;
height: 530px;
border-radius: 20px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
padding: 10px;

`

export const TopButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #fff;
width: 90px;
height: 30px;
border-radius: 10px;
background: red;
font-size: 12px;
font-weight: 700;
margin-bottom: 5px;
`

export const CardContent = styled.h1`
color: black;
font-size: 24px;
font-weight: 700;
`

export const CardTitle = styled.p`
font-size: 14px;
font-weight: 400;
`

export const CardImg = styled.img`
position: absolute;
top: 130px;
left: 0;
right: 0;
width: 100%;
height: 400px;
`
export const CardFooterBtn = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
top: 400px;
left: 100px;
right: 0;
width: 150px;
height: 50px;
border-radius: 20px;
background: dodgerblue;
color: #FFF;
font-size: 14px;
font-weight: 700;
z-index: 10;
`
