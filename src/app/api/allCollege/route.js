import { corsHeaders } from "@/components/lib/corsHeader";
import dbConnect, { collectionNames } from "@/components/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req) {
  const collegeCollection = await dbConnect(collectionNames.collegeCollection);
  const result = await collegeCollection.find().toArray();
  return NextResponse.json(result);
}
export async function OPTIONS() {
  return NextResponse.json({},
    {
      status: 200,
      headers: corsHeaders
    })
}