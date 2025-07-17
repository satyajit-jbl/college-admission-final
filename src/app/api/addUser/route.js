
import { corsHeaders } from "@/components/lib/corsHeader";
import dbConnect, { collectionNames } from "@/components/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
    const body = await req.json()
    const { email } = body
    const query = { email }
    const usersCollection = await dbConnect(collectionNames.usersCollection)
    const isUser = await usersCollection.findOne(query)
    if (isUser) {
        return NextResponse.json({ message: 'User already exists', user: isUser }, { status: 200 });
    }
    const result = await usersCollection.insertOne(body)

    return NextResponse.json(result,{
        status:200,
        headers:corsHeaders
    })
}

export async function OPTIONS() {
    return NextResponse.json({},
        {
            status: 200,
            headers: corsHeaders
        })
}