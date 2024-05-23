import { getXataClient } from "../../../../../../xata";

// Database Connection Pool
const connection = getXataClient();

// Get Request fetch
export async function fetch_universities() 
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
            let result = await connection.db.universities
                .select([
                    "University_Name",
                    "University_Location",
                    "University_Description",
                    "University_Ranking",
                    "University_AdmissionProcess",
                ])
                .getAll();

            result = JSON.parse(result);
            
            if(result.length==0)
            {
                return {
                    'returncode': 400,
                    'message': "No Universities Detected.",
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
export async function fetch_university(data) 
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

        const university_name = data['university_name'];

        try 
        {
            let result = await connection.db.universities.filter({
                'University_Name': university_name
            }).getAll();

            result = JSON.parse(result);

            if(result.length==0)
            {
                return {
                    'returncode': 400,
                    'message': "No University Detected, please recheck the University name.",
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