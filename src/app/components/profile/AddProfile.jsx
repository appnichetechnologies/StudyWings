'use client';
import { useState } from "react";

const ProfileAdd = () => 
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
		const first_name = event.target.first_name.value;
		const last_name = event.target.last_name.value;
		const dob = event.target.dob.value;
		const address = event.target.address.value;
		const user = sessionStorage.getItem("Id");

		if (first_name==='' || last_name==='' || dob==='' || address==='' || user==='' || first_name===null || last_name===null || dob===null || address===null || user===null || first_name===undefined || last_name===undefined || dob===undefined || address===undefined || user===undefined ) 
		{
			alert('Invalid Values Please fill the form then submit');
		}

		try 
		{
			const data = new FormData();
      		data.set('image', file);
			data.set('first_name', first_name);
			data.set('last_name', last_name);
			data.set('dob', dob);
			data.set('address', address);
			data.set('user', user);

			const res = await fetch('/api/student/profile/add', {
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
								First name
							</label>
							<input className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-transparent leading-tight focus:outline-none focus:shadow-outline" id="first_name" type="text" placeholder="First name" />
						</div>
						<div className="mb-4">
							<label className="block text-sm font-bold mb-2">
								Last name
							</label>
							<input className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-transparent leading-tight focus:outline-none focus:shadow-outline" id="last_name" type="text" placeholder="Lastname" />
						</div>
						<div className="mb-4">
							<label className="block text-sm font-bold mb-2">
								Date of birth
							</label>
							<input className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-transparent leading-tight focus:outline-none focus:shadow-outline" id="dob" type="date" placeholder="Dob" />
						</div>
						<div className="mb-4">
							<label className="block text-sm font-bold mb-2">
								Address
							</label>
							<textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-transparent leading-tight focus:outline-none focus:shadow-outline" id="address" type="" placeholder="Address" rows={5}></textarea>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-bold mb-2">
								Profile Picture
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
							{/* {postImage=='' || postImage==null?"": <img src={ postImage } className="w-100" />} */}
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

export default ProfileAdd;