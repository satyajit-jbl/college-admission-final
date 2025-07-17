
import dbConnect from "@/components/lib/dbConnect";
import { NextResponse } from "next/server";


export async function GET(req, { params }) {
    const id = params.id
 
    const commentCollection = await dbConnect(collectionNameObj.commentCollection)
    const query = { postId: id }
    const result = await commentCollection.find(query).toArray()
 
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