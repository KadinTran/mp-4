const apiKey = process.env.API_KEY
import {Rates} from "@/types/rates";

async function fetchJson(url: string, init?: RequestInit): Promise<Rates>{

    const res = await fetch(url,init);

    if (!res.ok) throw new Error("Failed to fetch rates");
    return res.json();
}

export default function getRates(code:string) {
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${code}`
    return fetchJson(url,{
        next: {revalidate: 3600}
    });
}


