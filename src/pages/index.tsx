import Head from "next/head";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { annotate } from "rough-notation";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

interface FlyingPoop {
	id: number;
	x: number;
	y: number;
	size: number;
	duration: number;
	delay: number;
	direction: "left" | "right";
	rotation: number;
	scaleAnimation: "grow" | "shrink" | "pulse";
}

export default function Home() {
	const [poops, setPoops] = useState<FlyingPoop[]>([]);
	const emergencyRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		// Generate random flying poops
		const numberOfPoops = Math.floor(Math.random() * 8) + 12; // 12-20 poops
		const newPoops: FlyingPoop[] = [];

		for (let i = 0; i < numberOfPoops; i++) {
			const scaleOptions: ("grow" | "shrink" | "pulse")[] = [
				"grow",
				"shrink",
				"pulse",
			];
			const randomScale = scaleOptions[Math.floor(Math.random() * scaleOptions.length)] || "pulse";
			newPoops.push({
				id: i,
				x: Math.random() * 100, // Random x position (0-100%)
				y: Math.random() * 100, // Random y position (0-100%)
				size: Math.random() * 3 + 2, // Random size (2-5rem)
				duration: Math.random() * 20 + 15, // Random duration (15-35s)
				delay: Math.random() * 10, // Random delay (0-10s)
				direction: Math.random() > 0.5 ? "left" : "right",
				rotation: Math.random() * 360 - 180, // Random rotation (-180 to 180 degrees)
				scaleAnimation: randomScale,
			});
		}

		setPoops(newPoops);
	}, []);

	useEffect(() => {
		// Apply RoughNotation underline to "real emergencies"
		if (emergencyRef.current) {
			const annotation = annotate(emergencyRef.current, {
				type: 'underline',
				color: '#f97316', // orange-500
				strokeWidth: 3,
				padding: 2,
				iterations: 2,
				animationDuration: 800,
			});

			// Show the annotation after a small delay
			setTimeout(() => {
				annotation.show();
			}, 500);

			return () => {
				annotation.remove();
			};
		}
	}, []);

	return (
		<>
			<Head>
				<title>
					NATATAE ME! Real reviews from real Filipinos in real emergencies
				</title>
				<meta
					name="description"
					content="Find clean, safe, and accessible toilets anywhere in the Philippines. Because when nature calls, you shouldn't have to answer it in questionable places."
				/>
				<meta
					property="og:title"
					content="NATATAE ME! Real reviews from real Filipinos in real emergencies"
				/>
				<meta
					property="og:description"
					content="The Philippines' crowd-sourced public toilet finder. Real reviews from real Filipinos in real emergencies."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://natatae.me" />
				<meta property="og:image" content="https://natatae.me/og.png" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:site_name" content="NATATAE ME!" />
				<meta property="og:locale" content="en_PH" />

				{/* Twitter Card tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="NATATAE ME! Find Clean Toilets in the Philippines" />
				<meta name="twitter:description" content="The Philippines' crowd-sourced public toilet finder. Real reviews from real Filipinos in real emergencies." />
				<meta name="twitter:image" content="https://natatae.me/og.png" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</Head>

			<main className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-white">
				{/* Hero Section */}
				<section className="relative overflow-hidden px-4 py-16 lg:py-24">
					<div className="mx-auto max-w-7xl">
						<div className="text-center">
							{/* Emergency Badge */}
							<div className="mb-6 inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-800">
								<span className="mr-2 animate-pulse">🚨</span>
								EMERGENCY MODE AVAILABLE
								<span className="ml-2 animate-pulse">🚨</span>
							</div>

							{/* Main Title */}
							<Logo size="xl" className="mb-4" />

							{/* Tagline */}
							<p className="mx-auto mb-12 max-w-2xl text-xl text-gray-700 sm:text-2xl">
								Real reviews from real Filipinos in{" "}
								<span
									ref={emergencyRef}
									className="italic inline-block whitespace-nowrap"
								>
									real emergencies
								</span>
								.
							</p>

							{/* CTA Buttons */}
							<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
								<Link
									href="/map"
									className="group relative inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 font-bold text-lg text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
								>
									<span className="mr-2 text-2xl">🗺️</span>
									Find Toilets Near Me
									<span className="ml-2 transition-transform group-hover:translate-x-1">
										→
									</span>
								</Link>

								<Link
									href="/emergency"
									className="inline-flex items-center rounded-full border-2 border-red-500 bg-white px-8 py-4 font-bold text-lg text-red-600 shadow-lg transition-all hover:bg-red-50 hover:shadow-xl animate-pulse"
								>
									<span className="mr-2 text-2xl">😱</span>
									NATATAE MODE!
								</Link>
							</div>
						</div>
					</div>

					{/* Flying Poop Emojis Background */}
					<div className="pointer-events-none absolute inset-0 overflow-hidden">
						{poops.map((poop) => (
							<div
								key={poop.id}
								className="absolute"
								style={{
									left: `${poop.x}%`,
									top: `${poop.y}%`,
									fontSize: `${poop.size}rem`,
									transform: `rotate(${poop.rotation}deg)`,
									opacity: 0,
									animation: `
										${poop.direction === "left" ? "fly-left" : "fly-right"} ${poop.duration}s ${
										poop.delay
									}s infinite ease-in-out both,
										scale-${poop.scaleAnimation} ${poop.duration * 0.5}s ${
										poop.delay
									}s infinite ease-in-out
									`.trim(),
								}}
							>
								💩
							</div>
						))}
					</div>
				</section>

				{/* Features Section */}
				<section className="bg-gradient-to-b from-orange-50 to-yellow-50 px-4 py-8">
					<div className="mx-auto max-w-6xl">
						<h2 className="mb-8 text-center font-bold text-4xl text-gray-900">
							Features That'll Save Your{" "}
							<span className="text-orange-600">Ass</span>
						</h2>

						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
							{/* Feature 1 */}
							<div className="rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:scale-105">
								<div className="mb-4 text-4xl">🚨</div>
								<h3 className="mb-2 font-bold text-xl text-gray-900">
									Emergency Mode
								</h3>
								<p className="text-gray-600">
									One tap shows the 3 nearest toilets. No browsing, no reviews,
									just GO!
								</p>
							</div>

							{/* Feature 2 */}
							<div className="rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:scale-105">
								<div className="mb-4 text-4xl">⭐</div>
								<h3 className="mb-2 font-bold text-xl text-gray-900">
									Real Reviews
								</h3>
								<p className="text-gray-600">
									Honest ratings from your fellow Kubeta Testers who've been there, done that.
								</p>
							</div>

							{/* Feature 3 */}
							<div className="rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:scale-105">
								<div className="mb-4 text-4xl">🏷️</div>
								<h3 className="mb-2 font-bold text-xl text-gray-900">
									Smart Filipino Tags
								</h3>
								<p className="text-gray-600">
									Filter by essentials: Bidet, tabo, tissue, soap. Find exactly
									what you need!
								</p>
							</div>

							{/* Feature 4 */}
							<div className="rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:scale-105">
								<div className="mb-4 text-4xl">💰</div>
								<h3 className="mb-2 font-bold text-xl text-gray-900">
									Price Transparency
								</h3>
								<p className="text-gray-600">
									Know if it's free or ₱5-20. No surprises when you're already
									desperate!
								</p>
							</div>

							{/* Feature 5 */}
							<div className="rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:scale-105">
								<div className="mb-4 text-4xl">📍</div>
								<h3 className="mb-2 font-bold text-xl text-gray-900">
									Location-Based Search
								</h3>
								<p className="text-gray-600">
									Find the nearest CR based on your current location. Distance matters when every second counts!
								</p>
							</div>

							{/* Feature 6 */}
							<div className="rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:scale-105">
								<div className="mb-4 text-4xl">🏆</div>
								<h3 className="mb-2 font-bold text-xl text-gray-900">
									Gamification
								</h3>
								<p className="text-gray-600">
									Earn badges and become the Kubeta King! Help others while
									having fun.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="px-4 py-16">
					<div className="mx-auto max-w-4xl text-center">
						<h2 className="mb-3 font-bold text-3xl text-gray-900">
							Ready to be a Kubeta Tester?
						</h2>
						<p className="mb-6 text-gray-600 text-xl">
							Help us map every clean toilet in the Philippines!
						</p>

						<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
							<Link
								href="/signup"
								className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 font-bold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
							>
								<span className="mr-2">🚀</span>
								Get Started Now
							</Link>

							<Link
								href="/about"
								className="inline-flex items-center rounded-full border-2 border-gray-300 bg-white px-8 py-4 font-bold text-gray-700 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
							>
								<span className="mr-2">📖</span>
								Learn More
							</Link>
						</div>
					</div>
				</section>

				<Footer />
			</main>
		</>
	);
}
