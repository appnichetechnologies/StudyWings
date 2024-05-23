import { NextResponse } from "next/server";
import { student_application } from "./logic";

export async function POST(request) 
{
    try 
    {
        const data = await request.json()
        const result = await student_application(data);
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