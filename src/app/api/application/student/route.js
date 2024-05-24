import { NextResponse } from "next/server";
import { student_application_fetch } from "./logic";

export async function POST(request) 
{
    try 
    {
        const data = await request.json()
        const result = await student_application_fetch(data);
        return new NextResponse(
            JSON.stringify({
                'returncode': result.returncode,
                'message': result.message,
                'output': result.output
            }),
            {
                status: result.returncode,
                headers: {
                    'Access-Control-Allow-Origin': 'https://studywings.netlify.app',
                    'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Credentials': 'true'
                }
            }
        );
    } 
    catch (error) 
    {
        return new NextResponse(
            JSON.stringify({
                'returncode': 500,
                'message': error.message,
                'output': []
            }),
            {
                status: 500,
                headers: {
                    'Access-Control-Allow-Origin': 'https://studywings.netlify.app',
                    'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Credentials': 'true'
                }
            }
        );
    }
}

export async function OPTIONS() 
{
    return new NextResponse(
        null,
        {
            status: 204,
            headers: {
                'Access-Control-Allow-Origin': 'https://studywings.netlify.app',
                'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': 'true'
            }
        }
    );
}