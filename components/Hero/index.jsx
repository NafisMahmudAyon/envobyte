import Header from "../Header";
import TopSection from "./TopSection";

const Hero = () => {
	return (
		<div className="bg-[url(/hero-bg.svg)] bg-[#021452] bg-top  bg-no-repeat relative min-h-screen">
			{/* <Image
				src={HeroBG}
				alt="Picture of the author"
				className="absolute top-0 left-0 z-[-1]"
			/> */}
			<div className="max-w-[1902px] mx-auto">
				<Header />
				<TopSection />
			</div>
		</div>
	);
};

export default Hero;
