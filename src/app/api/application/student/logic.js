import { getXataClient } from "../../../../xata";

// Database Connection Pool
const connection = getXataClient();

export async function student_application_fetch(data) 
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
            const username = data['username'];

            let student = await connection.db.applications.select([
                "StudentID.*",
                "CourseID.*",
                "CourseID.UniversityID.*",
                "Application_Status"
              ])
              .getAll();
            student = JSON.parse(student);

            if(student==undefined || student==null)
            {
                return {
                    'returncode': 400,
                    'message': "User account not Found, Please recheck the entered username.",
                    'output': []
                }
            }

            let result = []

            for(let stud in student)
            {
                if(student[stud].StudentID.Student_Username === username)
                {
                   result.push(student[stud]);
                }
            }

            if(result.length!=0)
            {
                return {
                    'returncode': 200,
                    'message': 'User Applications Fetched',
                    'output': result
                }
            }
            
            return {
                'returncode': 400,
                'message': 'User Applicarions Not Found',
                'output': []
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