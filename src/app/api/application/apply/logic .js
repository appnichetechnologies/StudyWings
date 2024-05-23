import { getXataClient } from "../../../../xata";

// Database Connection Pool
const connection = getXataClient();

export async function student_application(data) 
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
            const course_id = data['course_id'];
            const student_id = data['student_id'];
            const status = data['status'];

            let student = await connection.db.applications.create({
                CourseID: course_id,
                StudentID: student_id,
                Application_Status: status,
              });
            student = JSON.parse(student);
            return {
                'returncode': 200,
                'message': "Thank you For Contacting us, We'll contact you as soon as possible",
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