"use client";
import Client from "@/components/Client";
import DigitalService from "@/components/DigitalService";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowToWork from "@/components/HowWeWork";
import MoreDetails from "@/components/MoreDetails";
import Portfolio from "@/components/Portfolio";
import Sales from "@/components/Sales";
import Team from "@/components/Team";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-roboto",
});

export default function Home() {
	return (
		<div className="">
			<div className="h-screen">
				<Hero />
				<DigitalService />
				<div className="bg-white relative">
					<div className="absolute top-[560px] w-full h-[744px] bg-[url(/bg-wave.svg)] bg-center bg-no-repeat bg-cover z-0"></div>
					<MoreDetails />
					<Portfolio />
				</div>
				<HowToWork />
				<div className="bg-white mb-[240px]">
					<Client />
					<Team />
					<FAQ />
				</div>
				<div className="bg-[url(/sales.svg)] bg-top bg-cover bg-no-repeat w-full lg:max-h-[1036px] pt-[100px] bg-[#021452]  ">
					<Sales />
					<Footer />
					<div
						className={`bg-[#021452] py-6 border-t border-t-white/10 text-center text-white text-[14px] leading-[21px] font-bold ${roboto.className}`}>
						@2025 - ENVOBYTE, All rights are reserved.
					</div>
					{/* <div className="h-[500px] w-full"></div> */}
				</div>
			</div>
		</div>
	);
}






