import {NextRequest, NextResponse} from "next/server";
const apiKey = process.env.API_KEY

export async function GET(req: NextRequest) {
    const code = String(req.nextUrl.searchParams.get("code")?.toUpperCase());
    const res = await fetch(
        `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${code}`,
        {cache: "no-store"}
    );

    if (!res.ok) {
        return NextResponse.json(
            { error: "Failed to fetch rates" },
            { status: 500 }
        );
    }

    const data = await res.json();
    return NextResponse.json(data);
}