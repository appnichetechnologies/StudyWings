import { getXataClient } from "../../../../../xata";

// Database Connection Pool
const connection = getXataClient();

export async function profile_add(data) 
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
            const file = data.get('image');          
            const first_name  = data.get('first_name');
			const last_name = data.get('last_name');
			const dob = data.get('dob');
			const address = data.get('address');
			const user = data.get('user');
            
            let student = await connection.db.student_registration.filter({
                'StudentID.id': user
            })
            .getAll();
            student = JSON.parse(student);

            if(student==undefined || student==null || student.length==0)
            {
                
                const result = await connection.db.student_registration.create({
                    StudentID: user,
                    Student_FirstName: first_name,
                    Student_LastName: last_name,
                    Student_DOB: new Date(dob),
                    Student_Address: address,
                });

                console.log(result.id);

                await connection.files.upload({
                    table: 'student_registration', 
                    column: 'Student_ProfilePic', 
                    record: result.id 
                }, file);


                return {
                    'returncode': 200,
                    'message': "User Profile Added.",
                    'output': result
                }
            }
            else
            {
                return {
                    'returncode': 400,
                    'message': "User Profile Exists.",
                    'output': []
                }
            }
            
        }

        catch (error) {
            console.error(error)
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