import { Typography } from "aspect-ui/Typography";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Inter, Raleway } from "next/font/google";
import Button from "../Button";
import Card from "./Card";
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

const cardData = [
	{
		name: "Stephanie Powell",
		platform: "f",
		profile: {
			src: "/profile-1.png",
			alt: "profile-1",
		},
	},
	{
		name: "Brian Clark",
		platform: "u",
		profile: {
			src: "/profile-2.png",
			alt: "profile-2",
		},
	},
	{
		name: "Christopher White",
		platform: "u",
		profile: {
			src: "/profile-3.png",
			alt: "profile-3",
		},
	},
	{
		name: "Brian Clark",
		platform: "f",
		profile: {
			src: "/profile-2.png",
			alt: "profile-2",
		},
	},
	{
		name: "Christopher White",
		platform: "u",
		profile: {
			src: "/profile-3.png",
			alt: "profile-3",
		},
	},
	{
		name: "Stephanie Powell",
		platform: "f",
		profile: {
			src: "/profile-1.png",
			alt: "profile-1",
		},
	},
];

const Client = () => {
	return (
		<div>
			<div className="text-center mt-[80px] mb-[40px]">
				<Typography
					tagName="h4"
					className={`text-[#0C89FF] ${raleway.className} font-semibold text-[16px] leading-[24px] tracking-[24%] `}>
					CLIENT REVIEWS
				</Typography>
				<Typography
					tagName="h2"
					className={`text-[#001246] ${inter.className} font-bold text-[30px] lg:text-[48px] leading-[48px] tracking-[2%] `}>
					Our Proud Clients
				</Typography>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[984px] gap-[22px] px-4 mx-auto ">
				{cardData.map((data, i) => (
					<Card {...data} key={i} />
				))}
			</div>
			<div className="flex justify-center gap-4 mt-[38px] mb-[200px] mx-auto">
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

export default Client;
