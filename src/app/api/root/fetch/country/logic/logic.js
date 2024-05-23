import { getXataClient } from "../../../../../../xata";

// Database Connection Pool
const connection = getXataClient();

// Get Request fetch
export async function fetch_countries() 
{
    try 
    {
        if (connection == undefined || connection == null) 
        {
            return {
                'returncode': 404,
                'message': "Connection With Xata wasn't established.",
                'output': []
            }
        }

        try 
        {
            let result = await connection.db.countries
                .select([
                    "Country",
                    "Country_Description",
                ])
                .getAll();

            result = JSON.parse(result);
            
            if(result.length==0)
            {
                return {
                    'returncode': 400,
                    'message': "No Countries Detected.",
                    'output': result
                }
            }

            return {
                'returncode': 200,
                'message': "Data Fetched.",
                'output': result
            }
        }

        catch (error) {
            return {
                'returncode': 500,
                'message': error.message,
                'output': []
            }
        }

    }
    catch (error) {
        return {
            'returncode': 503,
            'message': error.message,
            'output': []
        }
    }
}

// Post Request fetch
export async function fetch_country(data) 
{

    try 
    {
        if (connection == undefined || connection == null) 
        {
            return {
                'returncode': 404,
                'message': "Connection With Xata wasn't established.",
                'output': []
            }
        }

        const country_name = data['country_name'];

        try 
        {
            let result = await connection.db.countries.filter({
                'Country': country_name
            }).getAll();

            result = JSON.parse(result);

            if(result.length==0)
            {
                return {
                    'returncode': 400,
                    'message': "No Country Detected, please recheck the name.",
                    'output': result
                }
            }

            return {
                'returncode': 200,
                'message': "Data Fetched.",
                'output': result
            }
        }

        catch (error) {
            return {
                'returncode': 500,
                'message': error.message,
                'output': []
            }
        }

    }
    catch (error) {
        return {
            'returncode': 503,
            'message': error.message,
            'output': []
        }
    }
}