import { NextResponse } from "next/server";
import { fetch_countries, fetch_country } from "./logic/logic";

export async function GET()
{
    try 
    {
        const fetch_result = await fetch_countries();
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
        const fetch_result = await fetch_country(data);
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