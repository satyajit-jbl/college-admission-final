
import { corsHeaders } from "@/components/lib/corsHeader";
import dbConnect, { collectionNames } from "@/components/lib/dbConnect";
import { NextResponse } from "next/server";


export async function POST(req, { params }) {
    const body = await req.json()
    const submissionCollection = await dbConnect(collectionNames.submissionCollection)
    const result = await submissionCollection.insertOne(body)
    return NextResponse.json(result, {
        status: 200,
        headers: corsHeaders
    })
}

export async function OPTIONS() {
    return NextResponse.json({},
        {
            status: 200,
            headers: corsHeaders
        })
}