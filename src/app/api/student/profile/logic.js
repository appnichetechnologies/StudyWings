import { getXataClient } from "../../../../xata";

// Database Connection Pool
const connection = getXataClient();

export async function profile_fetch(data) 
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

            let student = await connection.db.student_registration.select([
                "StudentID.*",
                "Student_FirstName",
                "Student_LastName",
                "Student_DOB",
                "Student_Address",
                "Student_ProfilePic",
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

            for(let stud in student)
            {
                if(student[stud].StudentID.Student_Username === username)
                {
                    return {
                        'returncode': 200,
                        'message': 'User Profile Fetched',
                        'output': student[stud]
                    }
                }
            }
            
            return {
                'returncode': 400,
                'message': 'User Profile Not Found',
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