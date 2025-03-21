import { Avatar, AvatarImage } from "aspect-ui";
import { StarIcon } from "lucide-react";
import { Inter } from "next/font/google";
import { FiverrIcon, UpworkIcon } from "../Icons";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-inter",
});

const Card = ({ name, platform, profile }) => {
	return (
		<div className="flex flex-col rounded-lg p-2.5 px-6 pt-6 pb-[27px] relative border border-gray-400/30 ">
			<div className="flex mb-3">
				<StarIcon className="fill-[#4580FF] text-[#4580FF]" />
				<StarIcon className="fill-[#4580FF] text-[#4580FF]" />
				<StarIcon className="fill-[#4580FF] text-[#4580FF]" />
				<StarIcon className="fill-[#4580FF] text-[#4580FF]" />
				<StarIcon className="fill-[#4580FF] text-[#4580FF]" />
			</div>
			<p
				className={`text-balance text-[14px] leading-[22px] text-[#424242] mb-5 ${inter.className} `}>
				“Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien
				fusce egestas risus purus suspendisse turpis volutpat onare”
			</p>
			<div className="flex gap-2 items-center">
				<Avatar className="border">
					<AvatarImage src={profile.src} altText={profile.alt} />
				</Avatar>
				<div className="flex-1">
					<span
						className={`${inter.className} text-[#0A2C8C] font-medium text-[18px] leading-[24px] `}>
						{name}
					</span>
					<span className={`flex gap-1 `}>
						<span>{platform === "f" ? <FiverrIcon /> : <UpworkIcon />}</span>
						<p
							className={`${inter.className} text-[rgba(0,18,70,30%)] font-medium text-[14px] leading-[20px] `}>
							{platform === "f" ? "From fiverr" : "From upwork"}
						</p>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
