import React from 'react'
import { CardContainer, CardContent, CardImg, TopButton, CardTitle, Main, CardFooterBtn } from './style'

export default function Card1() {
  return (
    <>
     <Main>
            <CardContainer>
                <TopButton><p>-30% Sale</p></TopButton>
                <CardContent><h1>Super Books</h1></CardContent>
                <CardImg src={"https://images.unsplash.com/photo-1620275765334-4ed948bb4502?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"} />
                <CardTitle>
                    <p>by Diseño Constructivo</p>
                </CardTitle>
                <CardFooterBtn><p>Comprar ahora</p></CardFooterBtn>

            </CardContainer>
        </Main>
    </>
      
  )
}
