import { Typography } from "aspect-ui/Typography";
import { Inter, Raleway } from "next/font/google";
import AnsCard from "./AnsCard";
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

const ansCards = [
	{
		title: "Why Chose Envobyte",
		sub: "Experienced & trustworthy",
		content:
			"We’re experienced, trustworthy, and a team of experts in design, development, SEO, and more, delivering everything you need for success.",
		image: {
			src: "/chose-envobyte.svg",
			alt: "chose-envobyte",
		},
	},
	{
		title: "What’s Your Benefit",
		sub: "No hassle with best price",
		content:
			"A hassle-free process that saves you time, with everything you need in one seamless package at an incredibly attractive price.",
		image: {
			src: "/benefit-card.svg",
			alt: "benefit-card",
		},
	},
	{
		title: "What is Combo Offer",
		sub: "Get 9 services in one package",
		content:
			"You’re getting web design, development, content writing, social media kit, custom graphics, and business consultation—all in one combo package!",
		image: {
			src: "/combo-offer.svg",
			alt: "combo-offer",
		},
	},
];

const MoreDetails = () => {
	return (
		<div className="relative z-10 max-w-[1107px] mx-auto flex flex-col  ">
			<div className="text-center mt-[80px] mb-[40px]">
				<Typography
					tagName="h4"
					className={`text-[#0C89FF] ${raleway.className} font-semibold text-[16px] leading-[24px] tracking-[24%] `}>
					MORE DETAILS
				</Typography>
				<Typography
					tagName="h2"
					className={`text-[#0A2C8C] ${inter.className} font-bold text-[30px] lg:text-[48px] leading-[48px] tracking-[2%] `}>
					Get Your Answers
				</Typography>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 px-4">
				{ansCards.map((card, i) => (
					<AnsCard {...card} key={i} />
				))}
			</div>
			<Button
				className={`${inter.className} mt-9.5 mx-auto px-10 py-[14px] bg-[#FF693B] text-white text-[16px] rounded-sm text-center `}>
				See Pricing
			</Button>
		</div>
	);
};

export default MoreDetails;
