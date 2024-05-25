'use client';
import axios from "axios";
import { useEffect, useState } from "react";
// import "../components/LoginForm"

const ApplicationFetch = () => {

	const [data, setData] = useState([]);
	let count = 0;
	let mcount = 0;

	useEffect(() => {

		const fetchdata = async () => {
			const res = await axios("/api/root/fetch/course")
			setData(res.data.output);
		}

		fetchdata();
	}, [])


	const handleSubmit = (ev) => {
		ev.preventDefault();
		const course_id = (ev.target.madar.value);
		const student_id = (sessionStorage.getItem("Id"));
		const app_status = "Pending";
		const alert_msg = document.getElementById('notification');
		alert_msg.classList.remove('hidden');

		if(student_id==null || course_id==null || student_id==undefined || course_id==undefined)
		{
			alert_msg.innerHTML = `
						<div class="fixed top-16 bg-red-100 w-full border border-red-400 text-red-700 px-4 py-3 rounded">
							<div class="flex justify-center items-center">
								<span class="text-3xl">No User found, please login.</span>
							</div>
						</div>
					`;
			setTimeout(function () { alert_msg.classList.toggle('hidden') }, 3000);
		}

		else
		{
			axios.post("/api/application/apply", {

				course_id: course_id,
				student_id: student_id,
				app_status: app_status
	
			})
				.then((response) => {
					if (response.status === 200) 
					{
	
						alert_msg.innerHTML = `
							<div class="fixed top-16 bg-green-100 w-full border border-green-400 text-green-700 px-4 py-3 rounded">
								<div class="flex justify-center items-center">
									<span class="text-3xl">Your Counselling Session Link will be provided shortly on your Email.</span>
								</div>
							</div>
						`;
						setTimeout(function () { alert_msg.classList.toggle('hidden') }, 3000);
					}
					else
					{
	
						alert_msg.innerHTML = `
							<div class="fixed top-16 bg-green-100 w-full border border-red-400 text-red-700 px-4 py-3 rounded">
								<div class="flex justify-center items-center">
									<span class="text-3xl">${response.data.message}</span>
								</div>
							</div>
						`;
						setTimeout(function () { alert_msg.classList.toggle('hidden') }, 3000);
					}	
				})
		}		
	}



	return (
		<div className="flex items-center justify-center flex-col">
			<div id="notification" className="relative z-10 flex justify-center items-center"></div>

			<h1 className="text-3xl md:text-4xl py-10">List of Universities</h1>
            <form onSubmit={handleSubmit}>
                <table className="w-[90dvw] hidden md:block">
                    <thead className="bg-red-800 text-white border border-red-800">
                        <tr>
                            <th className="p-3 text-left tracking-wide text-sm font-semibold">No.</th>
                            <th className="p-3 text-left tracking-wide text-sm font-semibold">Universities</th>
                            <th className="p-3 text-left tracking-wide text-sm font-semibold">Course Info</th>
                            <th className="p-3 text-left tracking-wide text-sm font-semibold">Course Fees</th>
                            <th className="p-3 text-left tracking-wide text-sm font-semibold">Admission Process</th>
                            <th className="p-3 text-left tracking-wide text-sm font-semibold">Ranking</th>
                            <th className="p-3 text-left tracking-wide text-sm font-semibold"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white text-black">
                        {
                            data.map((item) =>
                            (
                                <tr key={item.id} className="border-gray-400  border">
                                    <td className="p-3 text-left text-sm">
                                        <div className="px-6 py-4 text-3xl text-gray-900 font-medium ">
                                            {count = count + 1}
                                        </div>
                                    </td>
                                    <td className="p-3 text-left text-sm">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-col gap-0">
                                                <h1 className="flex flex-wrap text-2xl text-black font-bold">{item.UniversityID.University_Name}</h1>
                                                <h2 className="flex flex-wrap text-xl text-gray-700 font-bold">{item.UniversityID.University_Location}</h2>
                                            </div>
                                            <p className="flex flex-wrap text-gray-700 text-base">{item.UniversityID.University_Description}</p>
                                        </div>
                                    </td>
                                    <td className="p-3 text-left text-sm">
                                        <div className="flex flex-col">
                                            <h1 className="flex flex-wrap text-xl text-black font-bold">{item.Course_Name}</h1>
                                            <p className="flex flex-wrap text-gray-700 text-base">{item.Course_Description}</p>
                                        </div>
                                    </td>
                                    <td className="p-3 text-left text-sm">
                                        <div className="flex flex-col gap-2">
                                            <h1 className="text-2xl text-red-600">₹{item.Course_Fees}</h1>
                                            <p className="whitespace-nowrap text-base text-gray-700">Duration: {item.Course_Duration} Years</p>
                                        </div>
                                    </td>
                                    <td className="p-3 text-left">
                                            <div className="text-base text-gray-700 flex flex-wrap">
                                                {item.UniversityID.University_AdmissionProcess}
                                            </div>
                                    </td>
                                    <td className="p-3 text-left text-sm">
                                        <div className="font-large text-green-900 whitespace-nowrap text-3xl flex items-center justify-center">
                                            #{item.UniversityID.University_Ranking}
                                        </div>
                                    </td>
                                    <td className="p-6 text-left text-sm">
											<div className="px-6 py-4 text-xl text-gray-900 font-medium">
												<input id="madar" type="radio" name="madar" value={item.id} />
											</div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="fixed top-[90px] right-[80px] hidden md:block">
                    <button className="px-4 py-2 bg-red-800 text-white rounded-md" type="submit">Next</button>
                </div>
            </form>

			<form onSubmit={handleSubmit}>
				<div className="block md:hidden pt-[10dvh]">
					<button className="px-4 py-2 bg-red-800 text-white rounded-md" type="submit">Next</button>
				</div>

				<div key='table' className="w-[90dvw] flex md:hidden">
					<div key='innertable'>
						{
							data.map((item) =>
							(
								<div key={item.id} className="rounded-2xl mt-10 bg-white  flex flex-wrap text-left p-8">
									<div>
										<div className="font-large text-green-900 whitespace-nowrap text-xl text-right">
												#{item.UniversityID.University_Ranking}
										</div>
											
										<div className="flex gap-4 items-center justify-center">
											<div className="px-6 py-4 text-xl text-gray-900 font-medium">
												{mcount = mcount + 1}
											</div>
											<div className="px-6 py-4  text-gray-900 font-medium">
												<input id="madar" type="radio" name="madar" value={item.id} />
											</div>
										</div>

										<div className="flex flex-wrap gap-2">
											<h1 className="text-base text-red-600">Fees: ₹{item.Course_Fees}</h1>
											<p className="text-base text-yellow-600">Duration: {item.Course_Duration} Years</p>
										</div>

										<div className="flex flex-col gap-2">
											<div className="flex flex-col gap-2">
												<h1 className="flex flex-wrap text-xl text-black font-bold">{item.Course_Name}</h1>
												<h2 className="flex flex-wrap text-xl text-gray-700 font-bold">{item.UniversityID.University_Name}</h2>
											</div>
											<p className="flex flex-wrap text-gray-700 text-base">{item.Course_Description}</p>
										</div>
									</div>
								</div>
							))
						}
					</div>
				</div>

				
			</form>
			
		</div>
	);
}

export default ApplicationFetch;
