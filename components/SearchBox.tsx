"use client";

import { useState } from "react";
import RateDisplay from "@/components/RateDisplay";
import { Rates } from "@/types/rates";
import {AllRatesDiv, ErrorScreen, StyledAnchor, StyledButton, StyledInput, StyledSearchBox} from "@/styles/styles";

export default function SearchBox() {
    const [code, setCode] = useState("");
    const [data, setData] = useState<Rates | null>(null);
    const [error, setError] = useState("");

    async function handleSearch() {
        setError("");
        setData(null);

        try {
            const response = await fetch(
                `/api?code=${encodeURIComponent(code.trim().toUpperCase())}`
            );
            const result = await response.json();
            if (!response.ok) {
                setError("Could not retrieve rates. Check your currency code.")
            }
            setData(result);
        } catch (err) {
            console.error(err);
            setError("Could not retrieve rates. Check your currency code.");
        }
    }

    return (
        <>
            <StyledSearchBox>
                <StyledInput
                    id = "SearchBox"
                    type="text"
                    placeholder="Enter currency code (e.g. GBP)"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                <StyledButton onClick={handleSearch}>
                    Search
                </StyledButton>
            </StyledSearchBox>
            <StyledAnchor href = "https://www.exchangerate-api.com/docs/supported-currencies" target = "_blank">
                (See Supported Codes Here)
            </StyledAnchor>


            {error ? (<ErrorScreen>{error}</ErrorScreen>) :
                data ? (<AllRatesDiv> <RateDisplay data={data} /></AllRatesDiv>) :
                null
            }
        </>
    );
}