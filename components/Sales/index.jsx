import { Input } from "aspect-ui/Input";
import { Textarea } from "aspect-ui/Textarea";
import { Typography } from "aspect-ui/Typography";
import { ArrowRightIcon } from "lucide-react";
import { Inter } from "next/font/google";
import Button from "../Button";
import Link from "./Link";
import { LinkedInIcon, MailIcon, WhatsAppIcon } from "../Icons";
const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-inter",
});

const Sales = () => {
	return (
		<div className="max-w-[1106px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-[150px] px-4">
			<form className="flex flex-col items-start gap-[10px] p-[32px] border border-[rgba(255,228,237,15%)] bg-[rgba(10,44,140,20%)] backdrop-blur-[2.5px] shadow-[0px_1px_4px_rgba(25,33,61,0.08)] rounded-lg ">
				<div className="grid grid-cols-2 gap-8 w-full">
					<Input
						label="Name"
						icon={false}
						placeholder="Your Name"
						type="text"
						className={`px-4 pl-4 py-4.5 bg-transparent placeholder:text-white/50 border-[rgba(241,243,247,0.3)] shadow-[0px_1px_4px_rgba(25,33,61,0.08)] rounded-[6px] text-[14px] leading-[20px] ${inter.className} `}
						labelClassName={`text-white font-semibold text-[14px] leading-[20px] ${inter.className} `}
					/>
					<Input
						label="Email"
						icon={false}
						placeholder="support@envobyte.com"
						type="email"
						className={`px-4 pl-4 py-4.5 bg-transparent placeholder:text-white/50 border-[rgba(241,243,247,0.3)] shadow-[0px_1px_4px_rgba(25,33,61,0.08)] rounded-[6px] text-[14px] leading-[20px] ${inter.className} `}
						labelClassName={`text-white font-semibold text-[14px] leading-[20px] ${inter.className} `}
					/>
				</div>
				<div className="grid grid-cols-2 gap-8 mt-2 w-full">
					<Input
						label="Phone"
						icon={false}
						placeholder="+1 (667) 777 2477"
						type="tel"
						className={`px-4 pl-4 py-4.5 bg-transparent placeholder:text-white/50 border-[rgba(241,243,247,0.3)] shadow-[0px_1px_4px_rgba(25,33,61,0.08)] rounded-[6px] text-[14px] leading-[20px] ${inter.className} `}
						labelClassName={`text-white font-semibold text-[14px] leading-[20px] ${inter.className} `}
					/>
					<Input
						label="Company"
						icon={false}
						placeholder="Envobyte"
						type="text"
						className={`px-4 pl-4 py-4.5 bg-transparent placeholder:text-white/50 border-[rgba(241,243,247,0.3)] shadow-[0px_1px_4px_rgba(25,33,61,0.08)] rounded-[6px] text-[14px] leading-[20px] ${inter.className} `}
						labelClassName={`text-white font-semibold text-[14px] leading-[20px] ${inter.className} `}
					/>
				</div>
				<div className="w-full">
					<Textarea
						label="Message"
						placeholder="Type your message here..."
						className={`px-4 pl-4 py-4.5 bg-transparent placeholder:text-white/50  border-[rgba(241,243,247,0.3)] shadow-[0px_1px_4px_rgba(25,33,61,0.08)] rounded-[6px] text-[14px] leading-[20px] ${inter.className} `}
						labelClassName={`text-white font-semibold text-[14px] leading-[20px] ${inter.className} `}
						type="text"
					/>
				</div>
				<Button
					className={`px-4.5 py-3.5 rounded-[6px] inline-flex gap-[3px] bg-white/10 border border-[#f1f3f7]/30 font-semibold text-[14px] leading-[20px] text-white ${inter.className} `}>
					Send message <ArrowRightIcon />
				</Button>
			</form>
			<div>
				<Typography
					tagName="h2"
					className={`text-white ${inter.className} font-extrabold text-[48px] leading-[48px] tracking-[0%] text-pretty `}>
					Let us know what you think!
				</Typography>
				<Typography
					tagName="p"
					className={`text-white my-6 ${inter.className} text-[16px] leading-[24px] tracking-[0%] text-pretty `}>
					Got something on your mind? Share it with us! Drop a message, and
					we’ll respond quickly to assist you
				</Typography>
				<div className="text-white divide-y divide-[#f1f3f7]/15 space-y-3">
					<Link
						icon={<MailIcon />}
						title="Business"
						link="support@envobyte.com"
					/>
					<Link
						icon={<WhatsAppIcon />}
						title="Business"
						link="support@envobyte.com"
					/>
					<Link
						icon={<LinkedInIcon />}
						title="Business"
						link="support@envobyte.com"
					/>
				</div>
			</div>
		</div>
	);
};

export default Sales;
