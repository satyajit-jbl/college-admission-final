
import { corsHeaders } from "@/components/lib/corsHeader";
import dbConnect, { collectionNames } from "@/components/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


export async function PATCH(req, { params }) {
    const body = await req.json()
    const id = params.id
    const usersCollection = await dbConnect(collectionNames.usersCollection)
    const query = { _id: new ObjectId(id) }
    const updatedDoc = {
        $set: body
    }
    const result = await usersCollection.updateOne(query, updatedDoc)
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