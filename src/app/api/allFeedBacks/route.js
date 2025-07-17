
import { corsHeaders } from "@/components/lib/corsHeader";
import dbConnect, { collectionNames } from "@/components/lib/dbConnect";
import { NextResponse } from "next/server";


export async function GET(req, { params }) {
    const commentCollection = await dbConnect(collectionNames.feedbackCollection)
    const result = await commentCollection.find({}).toArray()
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