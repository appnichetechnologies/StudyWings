import { NextResponse } from "next/server";
import { document_fetch } from "./logic";

export async function POST(request) 
{
    try 
    {
        const data = await request.json()
        const result = await document_fetch(data);
        return NextResponse
            .json(
                {
                    'returncode': result.returncode,
                    'message': result.message,
                    'output': result.output
                },
                {
                    status: result.returncode,
                });

    } 
    catch (error) 
    {
        return NextResponse.json(
            {
                'returncode': 500,
                'message': error.message,
                'output':[]
            },
            {
                status: 500
            }
        );
    }
}