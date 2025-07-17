
import { corsHeaders } from "@/components/lib/corsHeader";
import dbConnect, { collectionNames } from "@/components/lib/dbConnect";
import { NextResponse } from "next/server";


export async function GET(req, { params }) {

    const email = params.email
    const query = { email }
    const usersCollection = await dbConnect(collectionNames.usersCollection)
    const result = await usersCollection.findOne(query)
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