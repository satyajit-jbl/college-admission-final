import { corsHeaders } from "@/components/lib/corsHeader";
import dbConnect, { collectionNames } from "@/components/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || "";

  let query = {};
  if (search.trim()) {
    query = {
      collegeName: { $regex: search, $options: "i" },
    };
  }

  const collegeCollection = await dbConnect(collectionNames.collegeCollection);
  const result = await collegeCollection.find(query).toArray();
  return NextResponse.json(result);
}

export async function OPTIONS() {
    return NextResponse.json({},
        {
            status: 200,
            headers: corsHeaders
        })
}