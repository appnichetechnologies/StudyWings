import { NextResponse } from "next/server";
import { fetch_courses, fetch_course } from "./logic/logic";

export async function GET()
{
    try 
    {
        const fetch_result = await fetch_courses();
        return NextResponse
            .json(
                {
                    'returncode': fetch_result.returncode,
                    'message': fetch_result.message,
                    'output': fetch_result.output
                },
                {
                    status: fetch_result.returncode,
                });

    } 
    catch (error) 
    {
        return NextResponse.json(
            {
                'returncode': 400,
                'message': error.message,
                'output':[]
            },
            {
                status: 400
            }
        );
    }
}

export async function POST(request)
{
    try 
    {
        const data = await request.json()
        const fetch_result = await fetch_course(data);
        return NextResponse
            .json(
                {
                    'returncode': fetch_result.returncode,
                    'message': fetch_result.message,
                    'output': fetch_result.output
                },
                {
                    status: fetch_result.returncode,
                });

    } 
    catch (error) 
    {
        return NextResponse.json(
            {
                'returncode': 400,
                'message': error.message,
                'output':[]
            },
            {
                status: 400
            }
        );
    }
}