import { Inter } from 'next/font/google';
import React from 'react'
const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-inter",
});

const Counter = ({value,title,icon}) => {
  return (
		<div className="flex items-center gap-4">
			{icon}{" "}
			<span>
				<span
					className={`flex items-center gap-1 ${inter.className} text-[24px] font-semibold leading-8 text-white trim`}>
					{value}
				</span>
				<span
					className={`${inter.className} text-[16px] font-semibold leading-5.5 text-white `}>
					{title}
				</span>
			</span>
		</div>
	);
}

export default Counter