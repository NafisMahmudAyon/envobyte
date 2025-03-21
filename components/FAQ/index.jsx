import {
	Accordion,
	AccordionContent,
	AccordionHeader,
	AccordionItem,
} from "aspect-ui/Accordion";
import { Typography } from "aspect-ui/Typography";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-inter",
});

const accordionItems = [
	{
		title: "What​ Is Included​ In Your Web Development Service?",
		content:
			"We use modern technologies such​ as WordPress, HTML5,﻿ CSS3, JavaScript, PHP, and﻿ MySQL​ to ensure your website​ is scalable, secure, and responsive.",
	},
	{
		title: "What Technologies​ Do You Use For Web Development?",
		content:
			"We use modern technologies such​ as WordPress, HTML5,﻿ CSS3, JavaScript, PHP, and﻿ MySQL​ to ensure your website​ is scalable, secure, and responsive.",
	},
	{
		title: "What​ If​ I Need Ongoing Support﻿ After The Website​ Is Launched?",
		content:
			"We use modern technologies such​ as WordPress, HTML5,﻿ CSS3, JavaScript, PHP, and﻿ MySQL​ to ensure your website​ is scalable, secure, and responsive.",
	},
	{
		title: "Can​ I Customize​ My Website According​ To​ My Business Needs?",
		content:
			"We use modern technologies such​ as WordPress, HTML5,﻿ CSS3, JavaScript, PHP, and﻿ MySQL​ to ensure your website​ is scalable, secure, and responsive.",
	},
	{
		title: "Do You﻿ Offer Seo Services​ As Part​ Оf Your Web Development?",
		content:
			"We use modern technologies such​ as WordPress, HTML5,﻿ CSS3, JavaScript, PHP, and﻿ MySQL​ to ensure your website​ is scalable, secure, and responsive.",
	},
];

const FAQ = () => {
	return (
		<div>
			<div className="text-center mt-[80px] mb-[40px]">
				<Typography
					tagName="h2"
					className={`text-[#0A2C8C] ${inter.className} font-bold text-[30px] lg:text-[48px] leading[36px] lg:leading-[48px] tracking-[2%] `}>
					Frequently Asked Questions
				</Typography>
			</div>
			<Accordion
				className="space-y-4 max-w-[940px] mx-auto px-4"
				activeItem={["item-2"]}
				iconEnabled={true}
				iconPosition="right"
				activeIcon={<span className="text-red-600">-</span>}
				inactiveIcon={<span className="text-green-600">+</span>}
				headerClassName="bg-red-400">
				{accordionItems.map((item, index) => (
					<AccordionItem
						key={index}
						id={`item-${index + 1}`}
						className={`border-0 border-b rounded-none py-4 ${inter.className}  `}>
						<AccordionHeader
							reset={true}
							tagName="h1"
							activeIcon={<MinusIcon className="text-[#6D758F]" />}
							inactiveIcon={<PlusIcon className="text-[#6D758F]" />}
							activeHeaderClassName="!border-b-0 !border-0 text-[#0A2C8C] "
							headerClassName="flex bg-transparent py-0 !rounded-none font-semibold text-[24px] leading-[22px] text-[#6D758F] hover:bg-transparent ">
							<span className="mr-4 ">0{index + 1}</span>
							{item.title}
						</AccordionHeader>
						<AccordionContent className="border-t-0 py-0 pt-1 bg-transparent text-[24px] leading-[34px] pl-15 text-pretty">
							{item.content}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default FAQ;
