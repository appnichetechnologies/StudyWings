import { getXataClient } from "../../../../../xata";

// Database Connection Pool
const connection = getXataClient();

export async function sign_up(data) 
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
            const email = data['email'];
            const phone = data['phone'];

            let result = await connection.db.students.create({
                Student_Username: username,
                Student_PasswordHash: password,
                Student_Phone: phone,
                Student_Email: email,
              });

            result = JSON.parse(result);

            return {
                'returncode': 200,
                'message': "User Registered.",
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