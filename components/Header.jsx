import { MenuIcon } from "lucide-react";
import { Inter } from "next/font/google";
import Button from "./Button";
import { Envobyte } from "./Icons";
import { useState } from "react";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-inter",
});
const Header = () => {
  const [open,setOpen] = useState(false)
	return (
		<div className="flex flex-wrap items-center justify-between px-10 py-4 relative">
			<Envobyte />
			
				<nav className="hidden lg:block">
					<ul
						className={`flex gap-10.5 ${inter.className} font-semibold text-[16px] leading-[22px] text-white flex-col lg:flex-row `}>
						<li className="text-[#FF693B]">Home</li>
						<li className="hover:text-[#FF693B] transition-colors duration-200 cursor-pointer">Service</li>
						<li className="hover:text-[#FF693B] transition-colors duration-200 cursor-pointer">Combo Sales</li>
						<li className="hover:text-[#FF693B] transition-colors duration-200 cursor-pointer">Portfolio</li>
						<li className="hover:text-[#FF693B] transition-colors duration-200 cursor-pointer">About Us</li>
						<li className="hover:text-[#FF693B] transition-colors duration-200 cursor-pointer">Blogs</li>
					</ul>
				</nav>
				<Button
					className={`${inter.className} px-10 py-[14px] bg-[#FF693B] text-white text-[14px] rounded-sm leading-[20px] text-center font-medium hidden lg:inline-block `}>
					See Pricing
				</Button>
			<MenuIcon
				className="text-white lg:hidden "
				onClick={() => {
					setOpen(!open);
				}}
			/>
			{open && (
				<div className=" absolute p-4 top-12 right-6 w-[320px] flex flex-col items-center rounded-lg bg-[#021452]/95 backdrop-blur-2xl shadow-2xl">
					<nav className="">
						<ul
							className={`flex gap-4 ${inter.className} font-semibold text-[16px] leading-[22px] text-white flex-col items-center lg:flex-row `}>
							<li className="text-[#FF693B]">Home</li>
							<li>Service</li>
							<li>Combo Sales</li>
							<li>Portfolio</li>
							<li>About Us</li>
							<li>Blogs</li>
						</ul>
					</nav>
					<Button
						className={`${inter.className} px-10 py-[14px] bg-[#FF693B] text-white text-[14px] rounded-sm leading-[20px] mt-10 text-center font-medium `}>
						See Pricing
					</Button>
				</div>
			)}
		</div>
	);
};

export default Header;
