import { Inter } from 'next/font/google';
import Image from 'next/image';
import React from 'react'

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-inter",
});

const AnsCard = ({title,sub,content,image}) => {
  return (
		<div className="group px-6 pt-10.5 pb-8 border border-gray-500/30 bg-white/74 hover:bg-[#0A2C8C] transition-colors duration-300 ease-in-out">
			<Image
				src={image.src}
				alt={image.alt}
				width={280}
				height={256}
				className="object-contain max-h-[256px] mx-auto mb-8"
			/>
			<div className="flex flex-col mt-4">
				<span
					className={`${inter.className} text-[#001246] group-hover:text-white font-semibold text-[30px] leading-[36px] mb-3 `}>
					{title}
				</span>
				<span
					className={`${inter.className} text-[#002AA3] group-hover:text-[#65B5FF] text-[16px] font-medium mb-5 `}>
					{sub}
				</span>
			</div>
			<p
				className={`${inter.className} text-[#424242] group-hover:text-white text-[16px] mb-7 `}>
				{content}
			</p>
		</div>
	);
}

export default AnsCard