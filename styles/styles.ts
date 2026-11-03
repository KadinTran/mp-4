import styled from "styled-components";
import Link from "next/link";

export const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px #222233 solid;
`;

export const TitleDiv = styled.h1`
    justify-content: center;
    text-align: center;
    margin: 0;
    background: #74275d ;
    color: #ffb5b4;
    font: small-caps calc(2px + 2vw) Copperplate, monospace;
`

export const StyledLink = styled(Link)`
    font: small-caps calc(2px + 1vw) Copperplate, monospace;
    border: solid #b12f5d 2px;
    background: #222233 ;
    color: #ffb5b4;
    justify-content: center;
    //border-radius: 1.5vw;
    padding: 1%;
    margin: 1%;
`
export const SingleRatesDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 70%;
    padding: 2%;
    margin: 1%;
    background-color: #222233;
    color: #ffb5b4;
    border: 5px #b12f5d solid;
    font: small-caps calc(2px + 2vw) Copperplate, monospace;
    text-align: center;
`;
export const AllRatesDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: #74275d;
`;

export const StyledButton = styled.button`
    font: small-caps calc(2px + 1vw) Copperplate, monospace;
    border: solid #b12f5d 2px;
    background: #222233 ;
    color: #ffb5b4;
    justify-content: center;
    margin: 1%;
`;
export const StyledSearchBox = styled.div`
    justify-content: center;
    display: flex;
    background: #74275d;
    padding: 0.5%;
    margin: auto;
`;
export const StyledAnchor = styled.a`
    font: small-caps calc(2px + 1vw) Copperplate, monospace;
    color: #ffb5b4;
    margin: 0;
    background: #74275d;
    justify-content: center;
    display: flex;
    padding: 0.5%;
`;
export const ErrorScreen = styled.p`
    font: small-caps calc(2px + 3vw) Copperplate, monospace;
    color: #FF0000;
    margin: 0;
    background: #74275d;
    justify-content: center;
    display: flex;
    padding: 0.5%;
`;
export const StyledInput = styled.input`
    margin: 1%;
    width: 30%
`;
