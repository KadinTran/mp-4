"use client";

import { useState } from "react";
import { Rates } from "@/types/rates";
import {AllRatesDiv, ErrorScreen, SingleRatesDiv, StyledButton, StyledInput, StyledSearchBox} from "@/styles/styles";
import RateDisplay from "@/components/RateDisplay";

export default function Calculator() {
    const [amount, setAmount] = useState("");
    const [data, setData] = useState<Rates | null>(null);
    const [error, setError] = useState("");

    async function getUSDRates() {
        setError("");
        setData(null);

        try {
            const response = await fetch(
                `/api?code=${encodeURIComponent("USD")}`
            );
            const result = await response.json();
            if (!response.ok) {
                setError("Could not retrieve rates. Check your input amount.")
            }
            setData(result);
        } catch (err) {
            console.error(err);
            setError("Could not retrieve rates. Check your input amount.");
        }
    }
    return (
        <>
            <StyledSearchBox>
                <StyledInput
                    id = "Converter"
                    type= "text"
                    placeholder="Enter Amount in USD"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <StyledButton onClick={getUSDRates}>
                    Convert
                </StyledButton>
            </StyledSearchBox>
            {error ? (<ErrorScreen>{error}</ErrorScreen>) :
                data ? (
                        <AllRatesDiv>
                            <SingleRatesDiv key={data.base_code}>
                                <p>{data.base_code} Conversion</p>
                                <p>US Dollars: {(Number(amount) * data.conversion_rates.USD).toFixed(2)}</p>
                                <p>Australian Dollars: {(Number(amount) * data.conversion_rates.AUD).toFixed(2)}</p>
                                <p>Euros: {(Number(amount) * data.conversion_rates.EUR).toFixed(2)}</p>
                                <p>Japanese Yen: {(Number(amount) * data.conversion_rates.JPY).toFixed(2)}</p>
                                <p>Indian Rupee: {(Number(amount) * data.conversion_rates.INR).toFixed(2)}</p>
                                <p>Korean Won: {(Number(amount) * data.conversion_rates.KRW).toFixed(2)}</p>
                                <p>Afghan Afghani: {(Number(amount) * data.conversion_rates.AFN).toFixed(2)}</p>
                                <p>Vietnamese Dong: {(Number(amount) * data.conversion_rates.VND).toFixed(2)}</p>
                            </SingleRatesDiv>
                        </AllRatesDiv>
                    ) :
                    null
            }
        </>
    );
}