// Green-B,Green-C,Green-D,Green-E
// Red
// Blue
// Orange
// Mattapan
const apiKey = process.env.API_KEY
import {Stop} from "@/types/heros";

async function fetchJson(url: string, init?: RequestInit): Promise<Stop[]>{

    const res = await fetch(url,
        {
            method: "GET",
            headers: {'x-api-key': apiKey}
        }
    );

    if (!res.ok) throw new Error("Failed to fetch characters");
    return res.json();
}

export default function getStops(line: string) {
    const url = `https://api-v3.mbta.com/stops?filter[route]=${line}`
    return fetchJson(url);
}


