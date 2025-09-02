import Head from "next/head";
import Link from "next/link";
import type { ReactNode } from "react";
import Logo from "./Logo";
import Footer from "./Footer";

interface LegalPageLayoutProps {
	title: string;
	description?: string;
	children: ReactNode;
	lastUpdated?: string;
}

export default function LegalPageLayout({
	title,
	description,
	children,
	lastUpdated,
}: LegalPageLayoutProps) {
	return (
		<>
			<Head>
				<title>{title} - NATATAE ME!</title>
				<meta
					name="description"
					content={
						description ||
						`${title} for NATATAE ME! - The Philippines' crowd-sourced public toilet finder.`
					}
				/>
				
				{/* OpenGraph tags */}
				<meta property="og:title" content={`${title} - NATATAE ME!`} />
				<meta 
					property="og:description" 
					content={description || `${title} for NATATAE ME! - The Philippines' crowd-sourced public toilet finder.`} 
				/>
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://natatae.me/og.png" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:site_name" content="NATATAE ME!" />
				<meta property="og:locale" content="en_PH" />
				
				{/* Twitter Card tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={`${title} - NATATAE ME!`} />
				<meta 
					name="twitter:description" 
					content={description || `${title} for NATATAE ME! - The Philippines' crowd-sourced public toilet finder.`} 
				/>
				<meta name="twitter:image" content="https://natatae.me/og.png" />
			</Head>

			<main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
				{/* Header */}
				<header className="border-b border-gray-200 bg-white/80 backdrop-blur">
					<div className="mx-auto max-w-4xl px-4 py-4">
						<Link href="/" className="inline-block">
							<Logo size="sm" />
						</Link>
					</div>
				</header>

				{/* Content */}
				<div className="mx-auto max-w-4xl px-4 py-12">
					<div className="rounded-2xl bg-white p-8 shadow-lg">
						<h1 className="mb-6 text-4xl font-bold text-gray-900">{title}</h1>
						
						{lastUpdated && (
							<p className="mb-8 text-sm text-gray-500">
								Last updated: {lastUpdated}
							</p>
						)}

						<div className="prose prose-lg max-w-none text-gray-700">
							{children}
						</div>
					</div>

					{/* Back to Home */}
					<div className="mt-8 text-center">
						<Link
							href="/"
							className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
						>
							<span>←</span>
							<span>Back to Home</span>
						</Link>
					</div>
				</div>

				<Footer />
			</main>
		</>
	);
}