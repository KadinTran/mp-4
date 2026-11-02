import {Rates} from "@/types/rates";
import styled from "styled-components"

const AllRatesDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: #74275d;
`;

const SingleRatesDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 25%;
    padding: 2%;
    margin: 1%;
    background-color: #222233;
    color: #ffb5b4;
    border: 5px #b12f5d solid;
    font: small-caps calc(2px + 2vw) Copperplate, monospace;
    text-align: center;
`;

export default function RateDisplay(props: {data: Rates}){
    return (
        <AllRatesDiv>
                <SingleRatesDiv key={props.data.base_code}>
                    <p>US Dollars: {props.data.conversion_rates.USD}</p>
                    <p>Australian Dollars: {props.data.conversion_rates.AUD}</p>
                    <p>Euros: {props.data.conversion_rates.EUR}</p>
                    <p>Japanese Yen: {props.data.conversion_rates.JPY}</p>
                    <p>Indian Rupee: {props.data.conversion_rates.INR}</p>
                    <p>Korean Won: {props.data.conversion_rates.KRW}</p>
                    <p>Afghan Afghani: {props.data.conversion_rates.AFN}</p>
                    <p>Vietnamese Dong: {props.data.conversion_rates.VND}</p>
                </SingleRatesDiv>
        </AllRatesDiv>
    );
}