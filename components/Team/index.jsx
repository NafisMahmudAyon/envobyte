import { Typography } from "aspect-ui/Typography";
import { Inter, Raleway } from "next/font/google";
import Member from "./Member";
import Button from "../Button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
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

const teamData = [
	{
		photo: {
			src: "/team-1.png",
			alt: "team-1",
		},
		name: "Mr Anik",
		title: "Backend Developer",
	},
	{
		photo: {
			src: "/team-2.png",
			alt: "team-2",
		},
		name: "Mr Shahed",
		title: "Frontend Developer",
	},
	{
		photo: {
			src: "/team-3.png",
			alt: "team-3",
		},
		name: "Mr Mainul Islam",
		title: "SEO Expert",
	},
	{
		photo: {
			src: "/team-4.png",
			alt: "team-4",
		},
		name: "Mr Hasib",
		title: "Content Writer",
	},
];

const Team = () => {
	return (
		<div className="max-w-[1425px] mb-[120px] mx-auto">
			<div className="text-center mt-[80px] mb-[40px]">
				<Typography
					tagName="h4"
					className={`text-[#0C89FF] ${raleway.className} font-semibold text-[16px] leading-[24px] tracking-[24%] `}>
					EXPERIENCED TEAM
				</Typography>
				<Typography
					tagName="h2"
					className={`text-[#0A2C8C] ${inter.className} font-bold text-[30px] lgtext-[48px] leading-[48px] tracking-[2%] `}>
					Our Team Members
				</Typography>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 gap-2 lg:divide-white/30 lg:gap-0 lg:divide-x">
				{teamData.map((member, i) => (
					<Member key={i} {...member} />
				))}
			</div>
			<div className="flex justify-center gap-4 mt-[38px] mx-auto">
				<Button className="border border-[#4580FF] rounded-[1px] bg-transparent dark:bg-transparent disabled:bg-transparent hover:bg-[#FF693B] hover:border-[#FF693B] transition-all duration-200 ease-in-out disabled:border-[#4580ff] text-[#4580FF] hover:text-white disabled:text-[#4580ff] ">
					<ChevronLeftIcon />
				</Button>
				<Button className="border border-[#4580FF] rounded-[1px] bg-transparent dark:bg-transparent disabled:bg-transparent hover:bg-[#FF693B] hover:border-[#FF693B] transition-all duration-200 ease-in-out disabled:border-[#4580ff] text-[#4580FF] hover:text-white disabled:text-[#4580ff]">
					<ChevronRightIcon />
				</Button>
			</div>
		</div>
	);
};

export default Team;
