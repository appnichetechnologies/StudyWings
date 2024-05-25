import { getXataClient } from "../../../../../xata";

// Database Connection Pool
const connection = getXataClient();

export async function documents_add(data) 
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
            const document_name  = data.get('document_name');
			const user = data.get('user');
            const result = await connection.db.student_documents.create({
                StudentID: user,
                Student_DocumentName: document_name,
            });

            await connection.files.upload({
                table: 'student_documents', 
                column: 'Student_Document', 
                record: result.id 
            }, file);

            return {
                'returncode': 200,
                'message': "User Document Added.",
                'output': result
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