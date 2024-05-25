'use client';
import axios from "axios";
import React, { useEffect, useState } from "react";

const StudentInfo = () => {

	const [data, setData] = useState([]);

	const fetchinfo = async () => {
		try 
		{
			const student_id = (sessionStorage.getItem("name"));

			const res = await axios.post("/api/application/student", {
				username: student_id
			});
			setData(res.data.output);
		} 
		catch(error) 
		{
			setTimeout(function () 
			{ 
				alert("No Applications Found");
		 	}, 5000);
		}
		
	}

	useEffect(() => {
		fetchinfo();
	}, []);


	return (
		<div className="flex items-center justify-center flex-col">
			<h1 className="text-4xl py-10">Applications</h1>

			<table className="w-[90dvw] hidden md:block">
				<thead className="bg-[--primary] text-white border border-[--primary]">
					<tr>
						<th className="p-3 text-left tracking-wide text-sm font-semibold">University Name</th>
						<th className="p-3 text-left tracking-wide text-sm font-semibold">Location</th>
						<th className="p-3 text-left tracking-wide text-sm font-semibold">Course Name</th>
						<th className="p-3 text-left tracking-wide text-sm font-semibold">Duration</th>
						<th className="p-3 text-left tracking-wide text-sm font-semibold">Admission Process</th>
						<th className="p-3 text-left tracking-wide text-sm font-semibold">Status</th>
					</tr>
				</thead>
				<tbody>
					{
						data.map((item) =>
						(
							<tr key={item.id} className="border border-[--primary]">
								<td className="p-3 text-left text-sm">{item.CourseID.UniversityID.University_Name}</td>
								<td className="p-3 text-left text-sm">{item.CourseID.UniversityID.University_Location}</td>
								<td className="p-3 text-left text-sm">{item.CourseID.Course_Name}</td>
								<td className="p-3 text-left text-sm">{item.CourseID.Course_Duration} Years</td>
								<td className="p-3 text-left text-sm">{item.CourseID.UniversityID.University_AdmissionProcess}</td>
								<td className="p-3 text-left text-sm">
									{item.Application_Status === "Success" ?
										(
											<span className="p-1.5 text-xs font-bold uppercase tracking-wider bg-green-300 text-green-800  rounded-lg bg-opacity-80">{item.Application_Status}</span>
										)
										:
										(
											<span className="p-1.5 text-xs font-bold uppercase tracking-wider bg-red-300 text-red-800 rounded-lg bg-opacity-80">{item.Application_Status}</span>
										)}
								</td>

							</tr>
						))
					}
				</tbody>
			</table>

			<div key='table' className="w-[90dvw] flex md:hidden">
				<div key='innertable'>
					{
						data.map((item) =>
						(
							<>
								<div key={item.id} className="bg-[--background] shadow-lg shadow-[--primary] flex flex-col gap-2 items-center text-left p-8">
									<div key={item.CourseID.id} className="flex gap-4">
										<div className="font-bold underline flex flex-wrap">
											{item.CourseID.Course_Name}
										</div>
										<div>
											{item.Application_Status === "Success" ?
												(
													<span className="p-1.5 text-xs font-bold uppercase tracking-wider bg-green-300 text-green-800 rounded-lg bg-opacity-80">{item.Application_Status}</span>
												)
												:
												(
													<span className="p-1.5 text-xs font-bold uppercase tracking-wider bg-red-300 text-red-800  rounded-lg bg-opacity-80">{item.Application_Status}</span>
												)}
										</div>
									</div>
									<div key={item.CourseID.UniversityID.id}>
										<div className="text-base flex flex-wrap">
											{item.CourseID.UniversityID.University_Name}, {item.CourseID.UniversityID.University_Location}
										</div>
									</div>
									<div>
										<div className="w-full text-sm text-left text-gray-400 flex flex-wrap">
											{item.CourseID.UniversityID.University_AdmissionProcess}
										</div>
									</div>
									
								</div>
								
							</>
							
						))
					}
				</div>
			</div>
		</div>
	);
}

export default StudentInfo;