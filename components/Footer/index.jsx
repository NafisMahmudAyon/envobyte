import { MailIcon } from "lucide-react";
import { Raleway, Roboto } from "next/font/google";
import {
	Envobyte,
	FBIcon,
	InstaIcon,
	LinkedIcon,
	PinIcon,
	TwitterIcon,
	WHAIcon,
} from "../Icons";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-roboto",
});
const raleway = Raleway({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-raleway",
});

const Footer = () => {
	return (
		<div className="text-white grid px-4 gap-4 md:grid-cols-2 lg:grid-cols-5 lg:px-[30px] mb-15 max-w-[1520px] mx-auto">
			<div>
				<Envobyte />
				<p
					className={`lg:max-w-[220px] text-pretty mt-4 text-justify ${roboto.className} text-[16px] leading-[24px] `}>
					We are an IT Company. We help businesses to bring ideas to life easily
					and affordably.
				</p>
			</div>
			<div>
				<h3
					className={`text-[18px] font-bold leading-[27px] ${raleway.className} `}>
					Company
				</h3>
				<ul className="mt-4">
					<li
						className={`text-justify ${roboto.className} text-[16px] leading-[24px]`}>
						About Us
					</li>
					<li
						className={`text-justify ${roboto.className} text-[16px] leading-[24px]`}>
						Privacy Policy
					</li>
					<li
						className={`text-justify ${roboto.className} text-[16px] leading-[24px]`}>
						Refund Policy
					</li>
				</ul>
			</div>
			<div>
				<h3
					className={`text-[18px] font-bold leading-[27px] ${raleway.className} `}>
					Learn More
				</h3>
				<ul className="mt-4">
					<li
						className={`text-justify ${roboto.className} text-[16px] leading-[24px]`}>
						Combo Offer
					</li>
					<li
						className={`text-justify ${roboto.className} text-[16px] leading-[24px]`}>
						Service Industries
					</li>
					<li
						className={`text-justify ${roboto.className} text-[16px] leading-[24px]`}>
						Envobyte Apps
					</li>
				</ul>
			</div>
			<div>
				<h3
					className={`text-[18px] font-bold leading-[27px] ${raleway.className} `}>
					Support
				</h3>
				<ul className="mt-4">
					<li
						className={`text-justify ${roboto.className} text-[16px] leading-[24px]`}>
						Contact Us
					</li>
					<li
						className={`text-justify ${roboto.className} text-[16px] leading-[24px]`}>
						FAQ
					</li>
					<li
						className={`text-justify ${roboto.className} text-[16px] leading-[24px]`}>
						Terms & Conditions
					</li>
				</ul>
			</div>
			<div>
				<h3
					className={`text-[18px] font-bold leading-[27px] ${raleway.className} `}>
					Get in Touch
				</h3>
				<ul className="mt-4 flex flex-col gap-1">
					<li
						className={`text-justify ${roboto.className} text-[16px] leading-[24px] flex gap-3`}>
						<MailIcon className="text-[#db844b]" /> support@envobyte.com
					</li>
					<li
						className={`text-justify ${roboto.className} text-[16px] leading-[24px] flex gap-3`}>
						<WHAIcon /> +1 (667) 777 2477
					</li>
				</ul>
				<div className="flex gap-4 mt-4 ">
					<FBIcon /> <LinkedIcon /> <InstaIcon /> <TwitterIcon />{" "}
					<PinIcon className="w-[31px]" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
