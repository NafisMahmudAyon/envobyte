import React from "react";
import { cn } from "@/lib/utils";

const SliderItem = ({
	title,
	subtitle,
	image,
	className,
	imageClassName,
}) => {
	return (
		<div
			className={cn(
				"group relative flex flex-col min-w-[280px] bg-white/50 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-white/40",
				className
			)}>
			{image && (
				<div className="relative overflow-hidden h-[180px]">
					<img
						src={image}
						alt={title}
						className={cn(
							"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
							imageClassName
						)}
					/>
				</div>
			)}
			<div className="p-5 flex flex-col">
				<div className="mb-1">
					<span className="text-xs px-2 py-1 bg-black/5 rounded-full uppercase tracking-wider font-medium">
						{subtitle || "Featured"}
					</span>
				</div>
				<h3 className="mt-2 text-lg font-medium text-gray-800">{title}</h3>
			</div>
		</div>
	);
};

export default SliderItem;
