"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const speedToDuration = {
	slow: 20,
	medium: 15,
	fast: 10,
};

const InfiniteScroller = ({
	direction = "left",
	speed = "medium",
	children,
}) => {
	const scrollerRef = useRef(null);

	useEffect(() => {
		ensureSeamlessScrolling();
	}, []);

	const ensureSeamlessScrolling = () => {
		const scroller = scrollerRef.current;
		if (!scroller) return;

		const childrenArray = Array.from(scroller.children);
		const scrollerWidth = scroller.offsetWidth;
		let contentWidth = 0;

		childrenArray.forEach((child) => {
			contentWidth += child.offsetWidth;
		});

		while (contentWidth < scrollerWidth * 2) {
			childrenArray.forEach((child) => {
				const clone = child.cloneNode(true);
				clone.setAttribute("aria-hidden", "true");
				scroller.appendChild(clone);
				contentWidth += child.offsetWidth;
			});
		}
	};

	return (
		<div
			style={{
				overflow: "hidden",
				display: "flex",
				width: "100%",
				justifyContent: "center",
				maskImage:
					"linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
				WebkitMaskImage:
					"linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
			}}>
			<motion.div
				ref={scrollerRef}
				style={{
					display: "flex",
					flexWrap: "nowrap",
					gap: "1rem",
				}}
				animate={{
					x: direction === "left" ? "-100%" : "100%",
				}}
				transition={{
					duration: speedToDuration[speed],
					repeat: Infinity,
					ease: "linear",
				}}>
				{React.Children.map(children, (child, index) => (
					<div key={index}>{child}</div>
				))}
			</motion.div>
		</div>
	);
};

export default InfiniteScroller;
