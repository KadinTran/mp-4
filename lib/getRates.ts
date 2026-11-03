const apiKey = process.env.API_KEY
import {Rates} from "@/types/rates";

export default async function getRates(code:string): Promise<Rates> {
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${code}`

    const res = await fetch(url,{
        next: {revalidate: 3600}
    })
    return res.json();
}