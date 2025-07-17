import { corsHeaders } from "@/components/lib/corsHeader";
import dbConnect, { collectionNames } from "@/components/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();
    const db = await dbConnect(collectionNames.collegeCollection);
    const result = await db.insertOne(body);
    return NextResponse.json(result);
}

export async function OPTIONS() {
    return NextResponse.json({},
        {
            status: 200,
            headers: corsHeaders
        })
}