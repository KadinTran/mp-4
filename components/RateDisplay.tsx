import {Rates} from "@/types/rates";
import styled from "styled-components"
import {SingleRatesDiv} from "@/styles/styles";

export default function RateDisplay(props: {data: Rates}){
    return (
        <SingleRatesDiv key={props.data.base_code}>
            <p>{props.data.base_code} Conversion Rates</p>
            <p>US Dollars: {props.data.conversion_rates.USD}</p>
            <p>Australian Dollars: {props.data.conversion_rates.AUD}</p>
            <p>Euros: {props.data.conversion_rates.EUR}</p>
            <p>Japanese Yen: {props.data.conversion_rates.JPY}</p>
            <p>Indian Rupee: {props.data.conversion_rates.INR}</p>
            <p>Korean Won: {props.data.conversion_rates.KRW}</p>
            <p>Afghan Afghani: {props.data.conversion_rates.AFN}</p>
            <p>Vietnamese Dong: {props.data.conversion_rates.VND}</p>
        </SingleRatesDiv>
    );
}