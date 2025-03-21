import Image from 'next/image';
import React from 'react'
import Button from '../Button';
import { Inter } from 'next/font/google';


const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-inter",
});


const SlidesItem = ({image,title,sub}) => {
  return (
		<div className="bg-[rgba(49,88,199,20%)]/72 border border-white/22 rounded-sm flex flex-col justify-between items-center p-[42px] ">
			<Image
				src={image.src}
				alt={image.alt}
				width={185}
				height={152}
				className="object-contain max-h-[152px]"
			/>
			<div className="flex flex-col text-white items-center mt-4">
				<span
					className={`${inter.className} font-semibold text-[24px] leading-[36px] `}>
					{title}
				</span>
				<span className={`${inter.className} text-[16px] `}>{sub}</span>
			</div>
			<div className="mt-[24px] flex items-center gap-2 ">
				<Button
					className={`${inter.className} px-10 py-[13px] bg-[#0c89ff] rounded-[30px] text-white text-[14px] `}>
					Portfolio
				</Button>
				<Button
					className={`${inter.className} px-10 py-[13px] border border-[#0c89ff] rounded-[30px] m-[-1px] text-[#0c89ff] text-[14px] box-border `}>
					Order
				</Button>
			</div>
		</div>
	);
}

export default SlidesItem;