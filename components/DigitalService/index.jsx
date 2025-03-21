import {
	Carousel,
	CarouselControl,
	CarouselItem,
	CarouselNextButton,
	CarouselPrevButton,
	CarouselSlides,
} from "aspect-ui/Carousel";
import { TabContent, TabItem, TabList, Tabs } from "aspect-ui/Tabs";
import { Typography } from "aspect-ui/Typography";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Inter, Raleway } from "next/font/google";
import Button from "../Button";
import SlidesItem from "./Slides";
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

const SlideLists = [
	{
		title: "WordPress Website",
		sub: "Design & Development",
		image: {
			src: "/website-slide.svg",
			alt: "website-slide",
		},
	},
	{
		title: "Content Writing",
		sub: "For entire project",
		image: {
			src: "/content-slide.svg",
			alt: "content-slide",
		},
	},
	{
		title: "Monthly SEO",
		sub: "Rank #1 on google ",
		image: {
			src: "/seo-slide.svg",
			alt: "seo-slide",
		},
	},
	{
		title: "Social Media Post",
		sub: "Full Social kit",
		image: {
			src: "/logo-slide.svg",
			alt: "logo-slide",
		},
	},
	{
		title: "Google Ads",
		sub: "For entire project",
		image: {
			src: "/ads-slide.svg",
			alt: "ads-slide",
		},
	},
];

const DigitalService = () => {
	return (
		<div className="bg-[url(/hero-next.svg)] pt-[60px] lg:pt-[400px] bg-top bg-cover bg-no-repeat relative md:pb-[200px] lg:h-[1123px] px-4 lg:px-[53px]">
			<div className="flex flex-col lg:flex-row justify-between lg:items-end">
				<div>
					<Typography
						tagName="h4"
						className={`text-org ${raleway.className} font-semibold text-[16px] leading-[24px] tracking-[24%] `}>
						DIGITAL SERVICES
					</Typography>
					<Typography
						tagName="h2"
						className={`text-white ${inter.className} font-bold text-[30px] lg:text-[48px] leading-[48px] tracking-[2%] `}>
						Check Our Available Services
					</Typography>
				</div>
				<Button
					className={`bg-[#FF693B] px-[40px] py-3.5 inline-flex min-w-[180px] min-h-[44px] justify-center rounded-sm shadow-[0px_1px_4px_rgba(25,33,61,0.08)] ${inter.className} text-[16px] leading-[20px] tracking-[0] text-white `}>
					All Services
				</Button>
			</div>
			<Tabs defaultActive="website" className=" ">
				<TabList className="border-t border-t-white/26 mt-5 pt-5 mb-10 w-full overflow-auto">
					<TabItem
						id="website"
						className={`${inter.className} text-[16px] leading-[22px] bg-transparent dark:bg-transparent uppercase text-white hover:text-[#0C89FF] hover:bg-transparent dark:hover:bg-transparent pl-0 `}
						activeClassName="!text-[#0C89FF] font-bold bg-transparent dark:bg-transparent">
						Website
					</TabItem>
					<TabItem
						id="uiux"
						className={`${inter.className} text-[16px] leading-[22px] bg-transparent dark:bg-transparent uppercase hover:text-[#0C89FF] hover:bg-transparent dark:hover:bg-transparent text-white`}
						activeClassName="!text-[#0C89FF] font-bold bg-transparent dark:bg-transparent">
						UI/UX
					</TabItem>
					<TabItem
						id="seo"
						className={`${inter.className} text-[16px] leading-[22px] bg-transparent dark:bg-transparent uppercase hover:text-[#0C89FF] hover:bg-transparent dark:hover:bg-transparent text-white`}
						activeClassName="!text-[#0C89FF] font-bold bg-transparent dark:bg-transparent">
						SEO
					</TabItem>
					<TabItem
						id="logo"
						className={`${inter.className} text-[16px] leading-[22px] bg-transparent dark:bg-transparent uppercase hover:text-[#0C89FF] hover:bg-transparent dark:hover:bg-transparent text-white`}
						activeClassName="!text-[#0C89FF] font-bold bg-transparent dark:bg-transparent">
						Logo Design
					</TabItem>
					<TabItem
						id="banner"
						className={`${inter.className} text-[16px] leading-[22px] bg-transparent dark:bg-transparent uppercase hover:text-[#0C89FF] hover:bg-transparent dark:hover:bg-transparent text-white`}
						activeClassName="!text-[#0C89FF] font-bold bg-transparent dark:bg-transparent">
						Banner Design
					</TabItem>
					<TabItem
						id="ads"
						className={`${inter.className} text-[16px] leading-[22px] bg-transparent dark:bg-transparent uppercase hover:text-[#0C89FF] hover:bg-transparent dark:hover:bg-transparent text-white`}
						activeClassName="!text-[#0C89FF] font-bold bg-transparent dark:bg-transparent">
						Google Ads
					</TabItem>
				</TabList>
				<TabContent id="website">
					<Carousel options={{ align: "start" }} className="relative">
						<CarouselSlides>
							{SlideLists.map((slide, i) => (
								<CarouselItem key={i} className="md:flex-[0_0_48%] lg:flex-[0_0_32%]">
									<SlidesItem {...slide} />
								</CarouselItem>
							))}
						</CarouselSlides>
						<CarouselControl className="z-50 top-full">
							<div className="inline-flex gap-4 mx-auto">
								<CarouselPrevButton className="border border-[#4580FF] rounded-[1px] bg-transparent dark:bg-transparent disabled:bg-transparent hover:bg-[#FF693B] hover:border-[#FF693B] transition-all duration-200 ease-in-out disabled:border-[#4580ff] text-[#4580FF] hover:text-white disabled:text-[#4580ff] ">
									<ChevronLeftIcon />
								</CarouselPrevButton>
								<CarouselNextButton className="border border-[#4580FF] rounded-[1px] bg-transparent dark:bg-transparent disabled:bg-transparent hover:bg-[#FF693B] hover:border-[#FF693B] transition-all duration-200 ease-in-out disabled:border-[#4580ff] text-[#4580FF] hover:text-white disabled:text-[#4580ff]">
									<ChevronRightIcon />
								</CarouselNextButton>
							</div>
						</CarouselControl>
					</Carousel>
				</TabContent>
				<TabContent id="uiux">
					<Carousel options={{ align: "start" }} className="relative">
						<CarouselSlides>
							{SlideLists.map((slide, i) => (
								<CarouselItem key={i} className="md:flex-[0_0_48%] lg:flex-[0_0_32%]">
									<SlidesItem {...slide} />
								</CarouselItem>
							))}
						</CarouselSlides>
						<CarouselControl className="z-50 top-full">
							<div className="inline-flex gap-4 mx-auto">
								<CarouselPrevButton className="border border-[#4580FF] rounded-[1px] bg-transparent dark:bg-transparent disabled:bg-transparent hover:bg-[#FF693B] hover:border-[#FF693B] transition-all duration-200 ease-in-out disabled:border-[#4580ff] text-[#4580FF] hover:text-white disabled:text-[#4580ff] ">
									<ChevronLeftIcon />
								</CarouselPrevButton>
								<CarouselNextButton className="border border-[#4580FF] rounded-[1px] bg-transparent dark:bg-transparent disabled:bg-transparent hover:bg-[#FF693B] hover:border-[#FF693B] transition-all duration-200 ease-in-out disabled:border-[#4580ff] text-[#4580FF] hover:text-white disabled:text-[#4580ff]">
									<ChevronRightIcon />
								</CarouselNextButton>
							</div>
						</CarouselControl>
					</Carousel>
				</TabContent>
				<TabContent id="seo">
					<Carousel options={{ align: "start" }} className="relative">
						<CarouselSlides>
							{SlideLists.map((slide, i) => (
								<CarouselItem key={i} className="md:flex-[0_0_48%] lg:flex-[0_0_32%]">
									<SlidesItem {...slide} />
								</CarouselItem>
							))}
						</CarouselSlides>
						<CarouselControl className="z-50 top-full">
							<div className="inline-flex gap-4 mx-auto">
								<CarouselPrevButton className="border border-[#4580FF] rounded-[1px] bg-transparent dark:bg-transparent disabled:bg-transparent hover:bg-[#FF693B] hover:border-[#FF693B] transition-all duration-200 ease-in-out disabled:border-[#4580ff] text-[#4580FF] hover:text-white disabled:text-[#4580ff] ">
									<ChevronLeftIcon />
								</CarouselPrevButton>
								<CarouselNextButton className="border border-[#4580FF] rounded-[1px] bg-transparent dark:bg-transparent disabled:bg-transparent hover:bg-[#FF693B] hover:border-[#FF693B] transition-all duration-200 ease-in-out disabled:border-[#4580ff] text-[#4580FF] hover:text-white disabled:text-[#4580ff]">
									<ChevronRightIcon />
								</CarouselNextButton>
							</div>
						</CarouselControl>
					</Carousel>
				</TabContent>
				<TabContent id="logo">
					<Carousel options={{ align: "start" }} className="relative">
						<CarouselSlides>
							{SlideLists.map((slide, i) => (
								<CarouselItem key={i} className="md:flex-[0_0_48%] lg:flex-[0_0_32%]">
									<SlidesItem {...slide} />
								</CarouselItem>
							))}
						</CarouselSlides>
						<CarouselControl className="z-50 top-full">
							<div className="inline-flex gap-4 mx-auto">
								<CarouselPrevButton className="border border-[#4580FF] rounded-[1px] bg-transparent dark:bg-transparent disabled:bg-transparent hover:bg-[#FF693B] hover:border-[#FF693B] transition-all duration-200 ease-in-out disabled:border-[#4580ff] text-[#4580FF] hover:text-white disabled:text-[#4580ff] ">
									<ChevronLeftIcon />
								</CarouselPrevButton>
								<CarouselNextButton className="border border-[#4580FF] rounded-[1px] bg-transparent dark:bg-transparent disabled:bg-transparent hover:bg-[#FF693B] hover:border-[#FF693B] transition-all duration-200 ease-in-out disabled:border-[#4580ff] text-[#4580FF] hover:text-white disabled:text-[#4580ff]">
									<ChevronRightIcon />
								</CarouselNextButton>
							</div>
						</CarouselControl>
					</Carousel>
				</TabContent>
				<TabContent id="banner">
					<Carousel options={{ align: "start" }} className="relative">
						<CarouselSlides>
							{SlideLists.map((slide, i) => (
								<CarouselItem key={i} className="md:flex-[0_0_48%] lg:flex-[0_0_32%]">
									<SlidesItem {...slide} />
								</CarouselItem>
							))}
						</CarouselSlides>
						<CarouselControl className="z-50 top-full">
							<div className="inline-flex gap-4 mx-auto">
								<CarouselPrevButton className="border border-[#4580FF] rounded-[1px] bg-transparent dark:bg-transparent disabled:bg-transparent hover:bg-[#FF693B] hover:border-[#FF693B] transition-all duration-200 ease-in-out disabled:border-[#4580ff] text-[#4580FF] hover:text-white disabled:text-[#4580ff] ">
									<ChevronLeftIcon />
								</CarouselPrevButton>
								<CarouselNextButton className="border border-[#4580FF] rounded-[1px] bg-transparent dark:bg-transparent disabled:bg-transparent hover:bg-[#FF693B] hover:border-[#FF693B] transition-all duration-200 ease-in-out disabled:border-[#4580ff] text-[#4580FF] hover:text-white disabled:text-[#4580ff]">
									<ChevronRightIcon />
								</CarouselNextButton>
							</div>
						</CarouselControl>
					</Carousel>
				</TabContent>
				<TabContent id="ads">
					<Carousel options={{ align: "start" }} className="relative">
						<CarouselSlides>
							{SlideLists.map((slide, i) => (
								<CarouselItem key={i} className="md:flex-[0_0_48%] lg:flex-[0_0_32%]">
									<SlidesItem {...slide} />
								</CarouselItem>
							))}
						</CarouselSlides>
						<CarouselControl className="z-50 top-full">
							<div className="inline-flex gap-4 mx-auto">
								<CarouselPrevButton className="border border-[#4580FF] rounded-[1px] bg-transparent dark:bg-transparent disabled:bg-transparent hover:bg-[#FF693B] hover:border-[#FF693B] transition-all duration-200 ease-in-out disabled:border-[#4580ff] text-[#4580FF] hover:text-white disabled:text-[#4580ff] ">
									<ChevronLeftIcon />
								</CarouselPrevButton>
								<CarouselNextButton className="border border-[#4580FF] rounded-[1px] bg-transparent dark:bg-transparent disabled:bg-transparent hover:bg-[#FF693B] hover:border-[#FF693B] transition-all duration-200 ease-in-out disabled:border-[#4580ff] text-[#4580FF] hover:text-white disabled:text-[#4580ff]">
									<ChevronRightIcon />
								</CarouselNextButton>
							</div>
						</CarouselControl>
					</Carousel>
				</TabContent>
			</Tabs>
			<h6
				className={`lg:right-[53px] right-1/2 translate-x-1/2 lg:translate-x-0 bottom-10 absolute inline-flex gap-2 items-center text-white font-medium text-[14px] leading-[20px] tracking-[3.72px] ${raleway.className} `}>
				Creative Solution{" "}
				<span className="w-15 h-0.5 bg-white inline-block"></span>
			</h6>
		</div>
	);
};

export default DigitalService;
