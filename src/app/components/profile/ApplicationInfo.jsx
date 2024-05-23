'use client';
import axios from "axios";
import React, { useEffect, useState } from "react";

const StudentInfo = () => {

	const [data, setData] = useState([]);

	const fetchinfo = async () => {

		const student_id = (sessionStorage.getItem("name"));

		const res = await axios.post("/api/application/student", {
			username: student_id
		})
		setData(res.data.output);
	}

	useEffect(() => {
		fetchinfo();
	}, []);


	return (
		<div className="w-[80dvw] flex justify-center">
			<div className="flex flex-col gap-4 justify-center items-center text-xl">
				<table className="w-full text-sm text-left rtl:text-right bg-[--background] shadow-[--primary] shadow-md">
					<thead className="text-l text-white uppercase bg-[--primary]">
						<tr>
							<th scope="col" className="px-6 py-3">
								University Name
							</th>
							<th scope="col" className="px-6 py-3">
								Location
							</th>
							<th scope="col" className="px-6 py-3">
								Course Name
							</th>
							<th scope="col" className="px-6 py-3">
								Duration
							</th>
							<th scope="col" className="px-6 py-3">
								Admission Process
							</th>
							<th scope="col" className="px-6 py-3">
								Status
							</th>
						</tr>
					</thead>
					<tbody>
						{

							data.map((item) =>
							(

								<tr class="bg-[--background] border-b text-white border-gray-700">
									<th scope="row" class="px-6 py-4">
										{item.University_Name}
									</th>
									<td class="px-6 py-4">
										{item.University_Location}
									</td>
									<td class="px-6 py-4">
										{item.Course_Name}
									</td>
									<td class="px-6 py-4">
										{item.Course_Duration} Years
									</td>
									<td class="px-6 py-4">
										{item.University_AdmissionProcess}
									</td>
									<td class="px-6 py-4 text-right">
										{item.Application_Status === "Accepted" ?
											(
												<span class="font-medium text-green-600 dark:text-green-500 hover:underline">{item.Application_Status}</span>
											)
											:
											(
												<span class="font-medium text-red-600 dark:text-red-500 hover:underline">{item.Application_Status}</span>
											)}
									</td>

								</tr>
							))
						}
					</tbody>

				</table>

			</div>
		</div>
	);
}

export default StudentInfo;