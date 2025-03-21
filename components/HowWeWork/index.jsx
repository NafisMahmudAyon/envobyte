import { Typography } from "aspect-ui/Typography";
import { Inter, Raleway } from "next/font/google";
import CircleText from "./CircleText";
import Button from "../Button";

const raleway = Raleway({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-raleway",
});

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-inter",
});

const HowToWork = () => {
	return (
		<div className="bg-[url(/how-we-work.png)] min-h-[1042px] w-full bg-center bg-cover pt-[100px] flex flex-col justify-center ">
			<div className="text-center  ">
				<Typography
					tagName="h4"
					className={`text-white ${raleway.className} font-semibold text-[20px] leading-[26px] tracking-[1px] `}>
					HOW WE WORK
				</Typography>
				<Typography
					tagName="h2"
					className={`text-white mt-[16px] lg:mt-[25px] ${raleway.className} font-extrabold text-[30px] lg:text-[45px] leading-[36px] lg:leading-[51px] tracking-[0%] `}>
					Our Process For Delivering <br />
					Results
				</Typography>
				<Typography
					tagName="p"
					className={`text-white mt-[15px] ${raleway.className} text-[16px] leading-[22px] tracking-[0%] text-pretty `}>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the <br />
					industry’s standard dummy text ever.
				</Typography>
			</div>
			<div className="lg:bg-[url(/wave-line.svg)] bg-center bg-no-repeat lg:w-[calc(100%-100px)] xl:w-[1246px] min-h-[242px] mx-auto z-10 mt-[80px] lg:mt-[150px] relative flex flex-wrap gap-2 px-2 items-center justify-center ">
				<CircleText
					number={"01."}
					text={"Make An Appointment"}
					className="lg:absolute xl:-top-20 -left-10 "
				/>
				<CircleText
					number={"02."}
					text={"Meet Our Team"}
					className="lg:absolute -bottom-20 left-1/4"
				/>
				<CircleText
					number={"03."}
					text={"Get Consultation"}
					className="lg:absolute -top-20 right-1/4"
				/>
				<CircleText
					number={"04."}
					text={"Start Project"}
					className="lg:absolute xl:-bottom-20 -right-10"
				/>
			</div>
			<Button
				className={`${inter.className} mt-[120px] mx-auto px-10 py-[14px] bg-[#FF693B] text-white text-[16px] rounded-sm text-center `}>
				Contact Now
			</Button>
		</div>
	);
};

export default HowToWork;
