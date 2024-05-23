'use client';
import axios from "axios";

const handelSubmit = (event) => {
	event.preventDefault();

	const username = event.target.username.value;
	const password = event.target.password.value;

	const alert_msg = document.getElementById('notification');

	axios.post("/api/student/account/login", {
		username: username,
		password: password
	})


		.then((response) => {

			let studentId = response.data.output.Student_Id;
			let logincode = response.data.returncode;
			console.log(response.data)
			sessionStorage.setItem("Id", studentId);
			sessionStorage.setItem("navcode", logincode);

			if(logincode === 1)
			{
				sessionStorage.setItem("name", "User");
			}else{
				sessionStorage.setItem("name", username);
			}

			console.log(sessionStorage.getItem("navcode"))

			console.log(sessionStorage.getItem("Id"))

			if (response.status === 200) {

				alert_msg.innerHTML = `
					<div class="fixed top-16 bg-green-100 w-full border border-green-400 text-green-700 px-4 py-3 rounded">
						<div class="flex justify-center items-center">
							<span class="text-3xl">Verification Successfull</span>
						</div>
					</div>
				`

				window.location = "/profile";
			}
		})
		.catch((error) => {
			console.error(error);
		});
}


const LoginForm = () => {
	return (
		<div className="h-[92dvh] flex justify-center items-center">
			<div className="w-full max-w-sm max-h-full">
				<form className="shadow-[--primary] shadow-md border border-[--primary] rounded-3xl px-8 pt-6 pb-8 mb-4" onSubmit={handelSubmit}>
					<div className="w-full text-white mb-3 flex justify-between items-center">
						<div>
							<a href="/register" className="mx-1 text-[--primary] underline">Sign up </a>
							<span className="">/</span>
							<a href="/login" className="mx-1 underline">Sign in</a>
						</div>
						<h4 className="text-xl font-semibold">Student Login</h4>
					</div>
					<div className="mb-4">
						<label className="block text-white text-sm font-bold mb-2">
							Username
						</label>
						<input className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-[--text] leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
					</div>
					<div className="mb-6">
						<label className="block text-white text-sm font-bold mb-2">
							Password
						</label>
						<input className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-[--text] mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
					</div>
					<div className="flex items-center justify-between">
						<button className="bg-[--primary] hover:bg-[--primary-400] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
							Sign In
						</button>
						<a className="inline-block align-baseline font-bold text-sm text-[--primary] hover:text-[--primary-400]" href="#">
							Forgot Password?
						</a>
					</div>
				</form>
				<div id="notification" className="relative z-10 flex justify-center items-center"></div>
			</div>
		</div>
	)
}

export default LoginForm;