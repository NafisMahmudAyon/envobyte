"use client";
import { Carousel, CarouselItem, CarouselSlides } from "aspect-ui";
import { TabContent, TabItem, TabList, Tabs } from "aspect-ui/Tabs";
import { Typography } from "aspect-ui/Typography";
import autoPlay from "embla-carousel-autoplay";
import { Inter, Raleway } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import Button from "../Button";

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

const Portfolio = () => {
	const ids = ["website", "uiux", "seo", "logo", "banner", "ads"];
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % ids.length);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + ids.length) % ids.length);
	};
	return (
		<div className="relative z-10 px-4 lg:px-[53px] pt-[100px] pb-[80px] lg:pb-[148px] ">
			<div className="flex flex-col lg:flex-row justify-between lg:items-end">
				<div>
					<Typography
						tagName="h4"
						className={`text-[#0C89FF] ${raleway.className} font-semibold text-[16px] leading-[24px] tracking-[24%] `}>
						UI/UX PORTFOLIO
					</Typography>
					<Typography
						tagName="h2"
						className={`text-[#001246] ${inter.className} font-bold text-[30px] lg:text-[48px] leading-[48px] tracking-[2%] `}>
						Check Our Previous Work
					</Typography>
				</div>
				<Button
					className={`bg-[#FF693B] px-[40px] py-3.5 inline-flex min-w-[180px] min-h-[44px] justify-center rounded-sm shadow-[0px_1px_4px_rgba(25,33,61,0.08)] ${inter.className} text-[16px] leading-[20px] tracking-[0] text-white `}>
					All Portfolio
				</Button>
			</div>
			<Tabs defaultActive={ids[currentIndex]} className=" ">
				<TabList className="border-t border-t-white/26 mt-5 pt-5 mb-10 w-full overflow-auto">
					<TabItem
						id="website"
						className={`${inter.className} text-[16px] leading-[22px] bg-transparent dark:bg-transparent uppercase text-[#474747] hover:text-[#0C89FF] hover:bg-transparent dark:hover:bg-transparent pl-0 `}
						activeClassName="!text-[#0C89FF] font-bold bg-transparent dark:bg-transparent">
						Website
					</TabItem>
					<TabItem
						id="uiux"
						className={`${inter.className} text-[16px] leading-[22px] bg-transparent dark:bg-transparent uppercase hover:text-[#0C89FF] hover:bg-transparent dark:hover:bg-transparent text-[#474747]`}
						activeClassName="!text-[#0C89FF] font-bold bg-transparent dark:bg-transparent">
						UI/UX
					</TabItem>
					<TabItem
						id="seo"
						className={`${inter.className} text-[16px] leading-[22px] bg-transparent dark:bg-transparent uppercase hover:text-[#0C89FF] hover:bg-transparent dark:hover:bg-transparent text-[#474747]`}
						activeClassName="!text-[#0C89FF] font-bold bg-transparent dark:bg-transparent">
						SEO
					</TabItem>
					<TabItem
						id="logo"
						className={`${inter.className} text-[16px] leading-[22px] bg-transparent dark:bg-transparent uppercase hover:text-[#0C89FF] hover:bg-transparent dark:hover:bg-transparent text-[#474747]`}
						activeClassName="!text-[#0C89FF] font-bold bg-transparent dark:bg-transparent">
						Logo Design
					</TabItem>
					<TabItem
						id="banner"
						className={`${inter.className} text-[16px] leading-[22px] bg-transparent dark:bg-transparent uppercase hover:text-[#0C89FF] hover:bg-transparent dark:hover:bg-transparent text-[#474747]`}
						activeClassName="!text-[#0C89FF] font-bold bg-transparent dark:bg-transparent">
						Banner Design
					</TabItem>
					<TabItem
						id="ads"
						className={`${inter.className} text-[16px] leading-[22px] bg-transparent dark:bg-transparent uppercase hover:text-[#0C89FF] hover:bg-transparent dark:hover:bg-transparent text-[#474747]`}
						activeClassName="!text-[#0C89FF] font-bold bg-transparent dark:bg-transparent">
						Google Ads
					</TabItem>
				</TabList>
				<TabContent id="website">
					<Carousel
						options={{ loop: true, align: "start", duration: 300, gap: 32 }}
						plugins={[autoPlay()]}
						className="relative">
						<CarouselSlides>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-1.png"
									alt="portfolio-1"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-2.png"
									alt="portfolio-2"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-3.png"
									alt="portfolio-3"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-4.png"
									alt="portfolio-4"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-5.png"
									alt="portfolio-5"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-6.png"
									alt="portfolio-6"
									width={500}
									height={280}
								/>
							</CarouselItem>
						</CarouselSlides>
					</Carousel>
					<Carousel
						options={{ loop: true, duration: 300, gap: 32 }}
						plugins={[autoPlay()]}
						className="relative">
						<CarouselSlides>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-1.png"
									alt="portfolio-1"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-2.png"
									alt="portfolio-2"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-3.png"
									alt="portfolio-3"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-4.png"
									alt="portfolio-4"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-5.png"
									alt="portfolio-5"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-6.png"
									alt="portfolio-6"
									width={500}
									height={280}
								/>
							</CarouselItem>
						</CarouselSlides>
					</Carousel>
				</TabContent>
				<TabContent id="mobile">
					<Carousel
						options={{ loop: true, align: "start", duration: 300, gap: 32 }}
						plugins={[autoPlay()]}
						className="relative">
						<CarouselSlides>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-1.png"
									alt="portfolio-1"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-2.png"
									alt="portfolio-2"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-3.png"
									alt="portfolio-3"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-4.png"
									alt="portfolio-4"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-5.png"
									alt="portfolio-5"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-6.png"
									alt="portfolio-6"
									width={500}
									height={280}
								/>
							</CarouselItem>
						</CarouselSlides>
					</Carousel>
					<Carousel
						options={{ loop: true, duration: 300, gap: 32 }}
						plugins={[autoPlay()]}
						className="relative">
						<CarouselSlides>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-1.png"
									alt="portfolio-1"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-2.png"
									alt="portfolio-2"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-3.png"
									alt="portfolio-3"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-4.png"
									alt="portfolio-4"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-5.png"
									alt="portfolio-5"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-6.png"
									alt="portfolio-6"
									width={500}
									height={280}
								/>
							</CarouselItem>
						</CarouselSlides>
					</Carousel>
				</TabContent>
				<TabContent id="uiux">
					<Carousel
						options={{ loop: true, align: "start", duration: 300, gap: 32 }}
						plugins={[autoPlay()]}
						className="relative">
						<CarouselSlides>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-1.png"
									alt="portfolio-1"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-2.png"
									alt="portfolio-2"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-3.png"
									alt="portfolio-3"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-4.png"
									alt="portfolio-4"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-5.png"
									alt="portfolio-5"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-6.png"
									alt="portfolio-6"
									width={500}
									height={280}
								/>
							</CarouselItem>
						</CarouselSlides>
					</Carousel>
					<Carousel
						options={{ loop: true, duration: 300, gap: 32 }}
						plugins={[autoPlay()]}
						className="relative">
						<CarouselSlides>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-1.png"
									alt="portfolio-1"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-2.png"
									alt="portfolio-2"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-3.png"
									alt="portfolio-3"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-4.png"
									alt="portfolio-4"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-5.png"
									alt="portfolio-5"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-6.png"
									alt="portfolio-6"
									width={500}
									height={280}
								/>
							</CarouselItem>
						</CarouselSlides>
					</Carousel>
				</TabContent>
				<TabContent id="seo">
					<Carousel
						options={{ loop: true, align: "start", duration: 300, gap: 32 }}
						plugins={[autoPlay()]}
						className="relative">
						<CarouselSlides>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-1.png"
									alt="portfolio-1"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-2.png"
									alt="portfolio-2"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-3.png"
									alt="portfolio-3"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-4.png"
									alt="portfolio-4"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-5.png"
									alt="portfolio-5"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-6.png"
									alt="portfolio-6"
									width={500}
									height={280}
								/>
							</CarouselItem>
						</CarouselSlides>
					</Carousel>
					<Carousel
						options={{ loop: true, duration: 300, gap: 32 }}
						plugins={[autoPlay()]}
						className="relative">
						<CarouselSlides>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-1.png"
									alt="portfolio-1"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-2.png"
									alt="portfolio-2"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-3.png"
									alt="portfolio-3"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-4.png"
									alt="portfolio-4"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-5.png"
									alt="portfolio-5"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-6.png"
									alt="portfolio-6"
									width={500}
									height={280}
								/>
							</CarouselItem>
						</CarouselSlides>
					</Carousel>
				</TabContent>
				<TabContent id="logo">
					<Carousel
						options={{ loop: true, align: "start", duration: 300, gap: 32 }}
						plugins={[autoPlay()]}
						className="relative">
						<CarouselSlides>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-1.png"
									alt="portfolio-1"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-2.png"
									alt="portfolio-2"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-3.png"
									alt="portfolio-3"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-4.png"
									alt="portfolio-4"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-5.png"
									alt="portfolio-5"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-6.png"
									alt="portfolio-6"
									width={500}
									height={280}
								/>
							</CarouselItem>
						</CarouselSlides>
					</Carousel>
					<Carousel
						options={{ loop: true, duration: 300, gap: 32 }}
						plugins={[autoPlay()]}
						className="relative">
						<CarouselSlides>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-1.png"
									alt="portfolio-1"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-2.png"
									alt="portfolio-2"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-3.png"
									alt="portfolio-3"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-4.png"
									alt="portfolio-4"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-5.png"
									alt="portfolio-5"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-6.png"
									alt="portfolio-6"
									width={500}
									height={280}
								/>
							</CarouselItem>
						</CarouselSlides>
					</Carousel>
				</TabContent>
				<TabContent id="banner">
					<Carousel
						options={{ loop: true, align: "start", duration: 300, gap: 32 }}
						plugins={[autoPlay()]}
						className="relative">
						<CarouselSlides>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-1.png"
									alt="portfolio-1"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-2.png"
									alt="portfolio-2"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-3.png"
									alt="portfolio-3"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-4.png"
									alt="portfolio-4"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-5.png"
									alt="portfolio-5"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-6.png"
									alt="portfolio-6"
									width={500}
									height={280}
								/>
							</CarouselItem>
						</CarouselSlides>
					</Carousel>
					<Carousel
						options={{ loop: true, duration: 300, gap: 32 }}
						plugins={[autoPlay()]}
						className="relative">
						<CarouselSlides>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-1.png"
									alt="portfolio-1"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-2.png"
									alt="portfolio-2"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-3.png"
									alt="portfolio-3"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-4.png"
									alt="portfolio-4"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-5.png"
									alt="portfolio-5"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-6.png"
									alt="portfolio-6"
									width={500}
									height={280}
								/>
							</CarouselItem>
						</CarouselSlides>
					</Carousel>
				</TabContent>
				<TabContent id="ads">
					<Carousel
						options={{ loop: true, align: "start", duration: 300, gap: 32 }}
						plugins={[autoPlay()]}
						className="relative">
						<CarouselSlides>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-1.png"
									alt="portfolio-1"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-2.png"
									alt="portfolio-2"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-3.png"
									alt="portfolio-3"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-4.png"
									alt="portfolio-4"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-5.png"
									alt="portfolio-5"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-6.png"
									alt="portfolio-6"
									width={500}
									height={280}
								/>
							</CarouselItem>
						</CarouselSlides>
					</Carousel>
					<Carousel
						options={{ loop: true, duration: 300, gap: 32 }}
						plugins={[autoPlay()]}
						className="relative">
						<CarouselSlides>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-1.png"
									alt="portfolio-1"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-2.png"
									alt="portfolio-2"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-3.png"
									alt="portfolio-3"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-4.png"
									alt="portfolio-4"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-5.png"
									alt="portfolio-5"
									width={500}
									height={280}
								/>
							</CarouselItem>
							<CarouselItem className="flex-[0_0_48%] lg:flex-[0_0_22%]">
								<Image
									src="/portfolio-6.png"
									alt="portfolio-6"
									width={500}
									height={280}
								/>
							</CarouselItem>
						</CarouselSlides>
					</Carousel>
				</TabContent>
			</Tabs>
			{/* <div className="inline-flex gap-4 mx-auto">
				<Button
					className="border border-[#4580FF] rounded-[1px] bg-transparent dark:bg-transparent disabled:bg-transparent hover:bg-[#FF693B] hover:border-[#FF693B] transition-all duration-200 ease-in-out disabled:border-[#4580ff] text-[#4580FF] hover:text-white disabled:text-[#4580ff] "
					onClick={handlePrev}>
					<ChevronLeftIcon />
				</Button>
				<Button
					className="border border-[#4580FF] rounded-[1px] bg-transparent dark:bg-transparent disabled:bg-transparent hover:bg-[#FF693B] hover:border-[#FF693B] transition-all duration-200 ease-in-out disabled:border-[#4580ff] text-[#4580FF] hover:text-white disabled:text-[#4580ff]"
					onClick={handleNext}>
					<ChevronRightIcon />
				</Button>
			</div> */}
		</div>
	);
};

export default Portfolio;
