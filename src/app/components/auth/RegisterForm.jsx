'use client';
import axios from "axios";

const handleSubmit = (event) =>{
	event.preventDefault();
	
	const username = event.target.username.value;
	const email = event.target.email.value;
	const password = event.target.password.value;
	const phone = event.target.phone.value;

	const alert_msg = document.getElementById('notification');
	
	axios.post("api/student/account/register", {
		username: username,
		email: email,
		password: password,
		phone: phone
	})
		.then((response) => {
            console.log(phone)
			console.log(response.status)

			if (response.status === 200) {
				
				alert_msg.innerHTML = `
					<div class="fixed top-16 bg-green-100 w-full border border-green-400 text-green-700 px-4 py-3 rounded">
						<div class="flex justify-center items-center">
							<span class="text-3xl">Verification Successfull</span>
						</div>
					</div>
				`
				
				window.location = "/";
			}
		})
		.catch((error) => {
			console.error(error);
		});
}


const RegisterForm = () => {
	return (
		<div className="h-screen flex justify-center items-center">
			<div className="w-full max-w-sm">
				<form className="shadow-[--primary] shadow-md border border-[--primary] rounded-2xl px-8 pt-6 pb-8" onSubmit={handleSubmit}>
					<div className="w-full text-white mb-3">
						<a href="/login" className="mx-1 text-[--primary] underline">Sign in </a>
						<span className="">/</span>
						<a href="/register" className="mx-1 underline">Sign up</a>
					</div>
					<div className="mb-4">
						<label className="block text-sm font-bold mb-2" htmlFor="username">
							Username
						</label>
						<input className="bg-transparent text-[--text] shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
					</div>
					<div className="mb-6">
						<label className="block text-sm font-bold mb-2" htmlFor="email">
							Email
						</label>
						<input className="bg-transparent text-[--text] shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" />
					</div>
					<div className="mb-6">
						<label className="block text-sm font-bold mb-2" htmlFor="password">
							Password
						</label>
						<input className="bg-transparent text-[--text] shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
					</div>
					<div className="mb-6">
						<label className="block text-sm font-bold mb-2" htmlFor="phone">
							Phone No
						</label>
						<input className="bg-transparent text-[--text] shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="phone no" />
					</div>
					<div className="flex items-center justify-between">
						<button className="bg-[--primary] hover:bg-[--primary-500] hover:text-[--text] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
							Sign Up
						</button>
						<a className="inline-block align-baseline font-bold text-sm text-[--primary] hover:text-[--primary-500]" href="#">
							Forgot Password?
						</a>
					</div>
				</form>
				<div id="notification" className="relative z-10 flex justify-center items-center"></div>
			</div>
		</div>
	)
}

export default RegisterForm;
