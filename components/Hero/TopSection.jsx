import { NumberCounter } from "aspect-ui";
import { Typography } from "aspect-ui/Typography";
import { Inter, Raleway } from "next/font/google";
import Image from "next/image";
import Button from "../Button";
import Counter from "../Counter";
import { ClientIcon, GlobeIcon, LikeIcon, TeamIcon } from "../Icons";

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

const TopSection = () => {
	return (
		<div>
			<div className="text-center pt-[54px] lg:pt-[176px] flex gap-13 flex-col">
				<div>
					<Typography
						tagName="h1"
						className={`text-white ${raleway.className} font-extrabold text-[36px] lg:text-[75px] leading-[48px] lg:leading-[85px] tracking-[3.75px] `}>
						DIGITAL SERVICES
					</Typography>
					<Typography
						tagName="h3"
						className={`text-white ${raleway.className} font-extrabold text-[18px] lg:text-[25px] leading-[31px] tracking-[0] `}>
						BUILDING YOUR EMPIRE DIGITALLY
					</Typography>
				</div>
				<div className="flex flex-col lg:flex-row items-center justify-center gap-4">
					<Button
						className={`bg-[#FF693B] px-4.5 py-3.5 inline-flex min-w-[238px] min-h-[50px] justify-center rounded-sm shadow-[0px_1px_4px_rgba(25,33,61,0.08)] ${inter.className} font-semibold text-[16px] leading-[20px] tracking-[0] text-white uppercase `}>
						See Pricing
					</Button>
					<Button
						className={`border border-white px-4.5 py-3.5 inline-flex min-w-[238px] min-h-[50px] justify-center rounded-sm shadow-[0px_1px_4px_rgba(25,33,61,0.08)] ${inter.className} font-semibold text-[16px] leading-[20px] tracking-[0] text-white uppercase `}>
						Book an appointment
					</Button>
				</div>
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-4 max-w-[1234px] mt-[55px] gap[27px]  mx-auto ">
				<div className="px-8 py-3.5 relative after:content-[''] after:w-[1px] after:h-[48px] after:absolute after:top-1/2 after:translate-y-[-50%] after:bg-white after:right-0 ">
					<Counter
						icon={<GlobeIcon />}
						value={
							<>
								<NumberCounter
									end={2}
									duration={2000}
									className="text-inherit"
								/>
								k
							</>
						}
						title="Websites build"
					/>
				</div>
				<div className="px-8 py-3.5 relative after:content-[''] after:w-[1px] after:h-[48px] after:absolute after:top-1/2 after:translate-y-[-50%] lg:after:bg-white after:right-0 ">
					<Counter
						icon={<LikeIcon />}
						value={
							<>
								<NumberCounter
									end={97}
									duration={2000}
									className="text-inherit"
								/>
								%
							</>
						}
						title="Client satisfaction"
					/>
				</div>
				<div className="px-8 py-3.5 relative after:content-[''] after:w-[1px] after:h-[48px] after:absolute after:top-1/2 after:translate-y-[-50%] after:bg-white after:right-0 ">
					<Counter
						icon={<TeamIcon />}
						value={
							<>
								<NumberCounter
									end={25}
									duration={2000}
									className="text-inherit"
								/>
								+
							</>
						}
						title="Team members"
					/>
				</div>
				<div className="px-8 py-3.5 ">
					<Counter
						icon={<ClientIcon />}
						value={
							<>
								<NumberCounter
									end={500}
									duration={2000}
									className="text-inherit"
								/>
								+
							</>
						}
						title="Amazing clients"
					/>
				</div>
			</div>
			<div className="relative mt-[36px] lg:mt-[72px] px-4 lg:px-0">
				<Image
					src="/group-image.png"
					width={982}
					height={553}
					alt="Group Image"
					className="mx-auto lg:absolute z-10 left-1/2 lg:-translate-x-1/2"
				/>
			</div>
		</div>
	);
};

export default TopSection;
