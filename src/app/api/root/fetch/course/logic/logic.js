import { getXataClient } from "../../../../../../xata";

// Database Connection Pool
const connection = getXataClient();

// Get Request fetch
export async function fetch_courses() 
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
            let result = await connection.db.university_courses
                .select([
                    "UniversityID.*",
                    "CountryID.*",
                    "Course_Name",
                    "Course_Description",
                    "Course_Duration",
                    "Course_Fees",
                    "Course_StartDate",
                    "Course_EndDate",
                    "Course_Status",
                ])
                .getAll();

            result = JSON.parse(result);
            
            if(result.length==0)
            {
                return {
                    'returncode': 400,
                    'message': "No Courses Detected.",
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
export async function fetch_course(data) 
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

        const course_name = data['course_name'];

        try 
        {
            let result = await connection.db.university_courses.filter({
                'Course_Name': course_name
            }).getAll();

            result = JSON.parse(result);

            if(result.length==0)
            {
                return {
                    'returncode': 400,
                    'message': "No Course Detected, please recheck the name.",
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