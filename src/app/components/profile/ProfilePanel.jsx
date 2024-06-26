'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import { IoAddCircle } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";

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
		catch (error) 
		{
			setTimeout(function () 
			{ 
				alert("No Profile Found");
		 	}, 5000);
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
		catch (error) 
		{
            setTimeout(function () 
			{ 
				alert("No Documents Found");
		 	}, 5000);
		}
	}

	useEffect(() => {
		fetchdata();
		fetchdoc();
	}, []);



	return (
		<div className="w-full h-auto my[3rem] flex justify-center items-center bg-[--background]">
			<div className="w-[90%] h-auto mx-auto my-[3rem] bg-[--background] flex gap-[3rem] flex-col justify-center items-center">
				<div key='a1' className="w-full h-[30%] bg-[] text-[--text] flex flex-col justify-center items-center">
					<div className="flex flex-wrap gap-[8dvh] h-auto justify-center items-center">
						<a href="/profile/add">
							<FaUserEdit className="text-4xl text-[--primary]"/>
						</a>
					</div>
					<div className="flex flex-wrap justify-center items-center">
						<div className="w-[300px] h-[300px] flex justify-center items-center">
							<div key='profile' id="profile" className="flex justify-center items-center ">
						
							{
								profile.map((items) =>
								(
									<div key={items.id}>
										<img className="w-[200px] rounded-full border-black border" src={items.url} alt="this is image" />
									</div>
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
				</div>


				<div className="flex flex-wrap gap-[5dvh] justify-center items-center">
					<h1 className="text-4xl">Documents</h1>
					<a href="/profile/documents">
						<IoAddCircle className="text-5xl text-[--primary]"/>
					</a>
				</div>
				<div key='a2' className="w-full shadow-[--primary] shadow-md border border-[--primary] rounded-3xl">
					<div id="thisitem" className="w-auto h-full px-16 flex m-4 rounded-xl">
						<div className="flex flex-wrap justify-center items-center gap-8 text-3xl">
							{
								docus.map((items) =>
								(
									<div key={items.id} className="flex flex-col justify-center items-center">
										<div className="first text-center text-2xl">{items.Student_DocumentName}</div>
										{
											items.Student_Document.map((item) =>
											(
												<div key={item.id}>
													<img className="w-[90dvw]  md:w-[20dvw]" src={item.url} alt="Document" />									
												</div>
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