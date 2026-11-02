import { NextResponse } from "next/server";
const apiKey = process.env.API_KEY

export async function GET() {
    const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${code}`);

    if (!res.ok) {
        return NextResponse.json(
            { error: "Failed to fetch heroes" },
            { status: 500 }
        );
    }

    const data = await res.json();

    return NextResponse.json(data);
}