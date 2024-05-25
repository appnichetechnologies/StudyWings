'use client';
import { useState } from "react";

const AddDocument = () => 
{
	const [file, setFile] = useState();
	
	const onSubmit = async(event) => 
	{
		event.preventDefault();
		if (!file) 
		{
			alert('No File Selected, Please select a file to proceed.');
		}

		const alert_msg = document.getElementById('notification');
		const document_name = event.target.document_name.value;
		const user = sessionStorage.getItem("Id");

		if (document_name==='' ||  user==='' || document_name===null  || user===null || document_name===undefined ||  user===undefined ) 
		{
			alert('Invalid Values Please fill the form then submit');
		}

		try 
		{
			const data = new FormData();
      		data.set('image', file);
			data.set('document_name', document_name);
			data.set('user', user);

			const res = await fetch('/api/student/profile/document', {
				method: 'POST',
				body: data
			})

			const response = await res.json()
			
			if(response.returncode === 200) 
			{

				alert_msg.innerHTML = `
					<div class="fixed top-16 bg-green-100 w-full border border-green-400 text-green-700 px-4 py-3 rounded">
						<div class="flex justify-center items-center">
							<span class="text-3xl">${response.message}</span>
						</div>
					</div>
				`;
				setTimeout(function () { alert_msg.classList.toggle('hidden') }, 3000);
				window.location.href="/profile";
			}
			else
			{

				alert_msg.innerHTML = `
					<div class="fixed top-16 bg-red-100 w-full border border-red-400 text-red-700 px-4 py-3 rounded">
						<div class="flex justify-center items-center">
							<span class="text-3xl">${response.message}</span>
						</div>
					</div>
				`;
				setTimeout(function () { alert_msg.classList.toggle('hidden') }, 3000);
			}
		} 
		catch (error) 
		{
			alert_msg.innerHTML = `
					<div class="fixed top-16 bg-red-100 w-full border border-red-400 text-red-700 px-4 py-3 rounded">
						<div class="flex justify-center items-center">
							<span class="text-3xl">${error.message}</span>
						</div>
					</div>
				`;
            setTimeout(function () { alert_msg.classList.toggle('hidden') }, 3000);
		}
	}

	return (
		<div className="pt-[10dvh] w-full h-auto flex justify-center items-center bg-[--background]">
			<div id="notification" className="relative z-10 flex justify-center items-center"></div>
			<div className="overflow-hidden w-[90dvw] h-auto mx-auto flex justify-center items-center rounded-[20px] shadow-[--primary] shadow-md" >
                <div className="h-full p-8 ">
					<form className="w-auto h-auto px-8 flex flex-col justify-center" encType="multipart/form-data" onSubmit={onSubmit} >
						<div className="mb-4">
							<label className="block text-sm font-bold mb-2">
								Document Name
							</label>
							<input className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-transparent leading-tight focus:outline-none focus:shadow-outline" id="document_name" type="text" placeholder="Document Name" />
						</div>
    
                        <div className="mb-4">
							<label className="block text-sm font-bold mb-2">
								Document Attachment
							</label>
							
							<input 
								type="file"
								className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-transparent leading-tight focus:outline-none focus:shadow-outline" 
								placeholder="Image" 
								lable="Image"
								name="myFile"
								id='file-upload'
								accept='.jpeg, .png, .jpg'
								onChange={(e) => setFile(e.target.files?.[0])}
							/>
							<div id="image" className="relative z-10 flex justify-center items-center"></div>
						</div>

						<div className="flex items-center justify-start gap-8">
							<button className="bg-[--primary] text-[--background] hover:bg-[--primary-500] hover:text-[--text] transition-colors font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
							<button className="bg-gray-500 hover:bg-gray-700 hover:text-[--text] text-[--background] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="reset">Cancel</button>
						</div>

					</form>
				</div>
			</div>
		</div>
	);
}

export default AddDocument;