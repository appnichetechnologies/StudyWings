'use client';
import { useEffect, useState } from "react";
import axios from "axios";

const ProfilePanel = () => {

	const [res, setResponse] = useState([]);
	const [profile, setProfile] = useState([]);
	const [docus, setDocus] = useState([]);

	const fetchdata = async () => {
		try {
			const user = (sessionStorage.getItem("name"));
			const data = await axios.post("/api/student/profile", {
				username: user
			})
			setResponse(data.data.output);
			setProfile(data.data.output.Student_ProfilePic);

		}
		catch (error) {
			window.location.href = "/profile/add";
		}
	}

	const fetchdoc = async () => {
		try {
			const user = (sessionStorage.getItem("name"));
			const docs = await axios.post("/api/student/document", {
				username: user
			});
			setDocus(docs.data.output);
		}
		catch (error) {
			alert("No Documents Found");
			window.location.href="/profile/documents"
		}
	}

	useEffect(() => {
		fetchdata();
		fetchdoc();
	}, []);



	return (
		<div className="w-full h-auto my[3rem] flex justify-center items-center bg-[--background]">
			<div className="w-[90%] h-auto mx-auto my-[3rem] bg-[--background] flex gap-[3rem] flex-col justify-center items-center">
				<div className="w-full h-[30%] bg-[] text-[--text] flex justify-center items-center">
					<div className="w-[300px] h-[300px] flex justify-center items-center">
						<div id="profile" className="flex justify-center items-center ">
					
						{
							profile.map((items) =>
							(
								<img className="w-[400px] rounded-full border-black border" src={items.url} alt="this is image" />
							))
						}
						</div>

					</div>

					<div className="w-[50%] h-full p-8 ">
						<div id="thisitem" className="w-auto h-full px-8 flex justify-center bg-[--bg] p-8 rounded-xl">
							<div className="flex flex-col justify-center items-center gap-8 text-3xl">
								<div className="first text-center">{res.Student_FirstName} {res.Student_LastName}</div>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full shadow-[--primary] shadow-md border border-[--primary] rounded-3xl">
					<div id="thisitem" className="w-auto h-full px-16 flex m-4 rounded-xl">
						<div className="flex flex-col justify-center items-center gap-8 text-3xl">
							<h1>Documents</h1>
							{
								docus.map((items) =>
								(
									<div className="flex flex-col justify-center items-center">
										<div className="first text-center text-2xl">{items.Student_DocumentName}</div>
										{
											items.Student_Document.map((item) =>
											(
												<img className="w-[200px]" src={item.url} alt="Document" />									
											))
										}

									</div>
								))
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfilePanel;