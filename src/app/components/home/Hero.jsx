const HeroPage = () => {

	return (
		<>
			<section className="hero w-full h-[92dvh] flex flex-col justify-evenly items-center">
				<div className="bg-gradient-to-r from-[#d66751] to-[#a986e3] p-[2.5px] rounded-[40px]">
					<div className="overflow-visible w-[80dvw] md:w-[68dvw] h-[60dvh] bg-[#0a0413] p-4 flex flex-col justify-center items-center rounded-[40px]">
						<h1 className=" text-3xl md:text-7xl md:h-[20dvh] font-extrabold text-center leading-loose text-transparent bg-clip-text bg-gradient-to-r from-[#a986e3] to-[#d66751]">StudyWings</h1>
						<p className="w-4/5 text-base md:text-2xl text-center py-8 leading-relaxed">
							Let StudyWings help you find your dream university
							and unlock your full potential. Your passport to a global education.
						</p>
					</div>
				</div>
				<div className="calltoaction flex gap-8">
					<a href="#more">
						<button className="buttons border-2 hover:bg-transparent border-purple-400 hover:text-purple-400 bg-purple-400 text-black font-semibold px-6 py-3 rounded-full transition-all duration-500">Learn More</button>
					</a>
					<a href="/application">
						<button className="buttons bg-transparent hover:bg-purple-400 hover:text-black border-2 border-purple-400 text-purple-400 font-semibold px-6 py-3 rounded-full transition-all duration-500">Apply Now</button>
					</a>
				</div>
			</section>

			<section className="info w-full h-auto" id="more">
				<div className="py-4">
					<h1 className="text-2xl md:text-6xl font-semibold text-center my-8">Why StudyWings ?</h1>
					<div className="w-full flex flex-col md:flex-row justify-evenly mt-12 gap-4 p-4">
						<div className="info_block">Access to a wide range of academic programs and courses offered by universities and institutions worldwide.</div>
						<div className="info_block">Offer specialized programs or tracks tailored to specific industries, professions, or areas of interest, providing users with targeted education and training opportunities.</div>
						<div className="info_block">Provide Students with personalized student portals where they can access their profile info, documents and application status in one centralized location.</div>
					</div>
				</div>
				<h1 className="text-3xl md:text-6xl font-semibold text-center my-8">Features</h1>
				<div className="more_info">
					<div className="item-0 text-3xl text-black font-semibold flex flex-col items-center justify-center text-center px-[4rem]"><span className="text-xl md:text-5xl text-black font-bold">Unlock World Class Education:</span> <span className="text-base md:text-xl text-black font-medium">Your Journey Starts Overseas.</span></div>
					<div className="item-1 text-xl md:text-4xl text-black font-semibold flex items-center justify-center text-center px-[4rem]">User Friendly Environment</div>
					<div className="item-2 flex justify-center items-center">
						<div className="px-4 text-2xl md:text-4xl text-black font-bold">100K+ Users</div>
					</div>
					<div className="item-3 flex flex-col justify-center items-center gap-8">
						<div className="px-4 md:text-5xl text-black font-bold flex flex-col gap-2 items-center">100% <span>Satisfaction</span> <span>Forever</span></div>
					</div>
				</div>
			</section>
		</>
	)
}


export default HeroPage;