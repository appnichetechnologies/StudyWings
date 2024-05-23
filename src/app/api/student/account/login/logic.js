import { getXataClient } from "../../../../../xata";

// Database Connection Pool
const connection = getXataClient();

export async function sign_in(data) 
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
            const password = data['password'];

            let student = await connection.db.students.filter({Student_Username: username}).getAll();
            student = JSON.parse(student);

            if(student==undefined || student==null)
            {
                return {
                    'returncode': 400,
                    'message': "User account not Found, Please recheck the entered username.",
                    'output': []
                }
            }

            const match = student[0].Student_PasswordHash===password;

            if (match)
            {
                // Passwords match
                return {
                    'returncode': 200,
                    'message': 'User Authenticated',
                    'output': student
                }
            }
            else {
                // Passwords don't match
                return {
                    'returncode': 400,
                    'message': 'Incorrect Password',
                    'output': []
                }
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