"use client"
import styled from "styled-components";
import Link from "next/link";

const StyledUL=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #74275d;
`
const StyledLink = styled(Link)`
    font: small-caps calc(2px + 1vw) Copperplate, monospace;
    border: solid #b12f5d 2px;
    background: #222233 ;
    color: #ffb5b4;
    justify-content: center;
    padding: 1%;
    margin: 1%;
`

export default function Nav() {
    return(
        <nav>
            <StyledUL>
                <StyledLink href="/">Home</StyledLink>
                <StyledLink href="/calculator">Convert USD</StyledLink>
            </StyledUL>
        </nav>
    )
}