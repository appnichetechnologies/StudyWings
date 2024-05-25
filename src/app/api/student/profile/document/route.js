import { NextResponse } from "next/server";
import { documents_add } from "./logic";

export async function POST(request) 
{
    try 
    {
        const data = await request.formData();
        const result = await documents_add(data);
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