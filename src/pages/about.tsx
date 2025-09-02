import LegalPageLayout from "../components/LegalPageLayout";

export default function AboutPage() {
	return (
		<LegalPageLayout
			title="About NATATAE ME!"
			description="Learn about NATATAE ME! The Philippines' crowd-sourced public toilet finder born from real emergencies."
			lastUpdated="September 2025"
		>
			<section className="space-y-6">
				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
					<p className="mb-4">
						NATATAE ME! was born from a universal Filipino experience - being stuck in traffic on EDSA,
						desperately searching for a clean CR, and finding nothing but "Out of Order" signs and
						questionable facilities that require a ₱200 minimum purchase.
					</p>
					<p className="mb-4">
						We've all been there. That moment when your morning coffee hits different, when the
						street food you ate starts a revolution in your stomach, or when you're with your kids
						and they suddenly announce "I can't hold it anymore!"
					</p>
					<p>
						That's why we built this - a bayanihan solution to a very human problem.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
					<p className="mb-4">
						To ensure that no Filipino ever has to suffer through a toilet emergency alone. We're
						building a community-driven platform where people help each other find clean, safe, and
						accessible comfort rooms across the Philippines.
					</p>
					<p>
						Because finding a clean CR shouldn't be harder than finding true love.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
					<ul className="list-disc list-inside space-y-2">
						<li>
							<strong>Find:</strong> Use our map to locate nearby toilets based on your current location
						</li>
						<li>
							<strong>Filter:</strong> Search for specific amenities like bidets, tissue, soap, or PWD access
						</li>
						<li>
							<strong>Review:</strong> Read honest reviews from fellow Filipinos who've been there
						</li>
						<li>
							<strong>Contribute:</strong> Add new toilets and reviews to help others in their time of need
						</li>
						<li>
							<strong>Emergency Mode:</strong> One tap to find the 3 nearest toilets when every second counts
						</li>
					</ul>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Why "NATATAE ME"?</h2>
					<p className="mb-4">
						The name comes from the Filipino expression "Natatae ako!" - that urgent declaration that
						needs no translation. We added "ME!" because this is personal. When nature calls, it's
						YOUR emergency, and we're here to help.
					</p>
					<p>
						Plus, let's be honest - it's memorable. You won't forget this site when you need it most.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Open Source & Community Driven</h2>
					<p className="mb-4">
						NATATAE ME! is proudly open source and licensed under AGPLv3. We believe that access to
						clean toilets is a basic human right, and the tools to find them should be free and open
						to all.
					</p>
					<p>
						Want to contribute? Check out our{" "}
						<a
							href="https://github.com/wewillcraft/natatae-me"
							target="_blank"
							rel="noopener noreferrer"
							className="text-orange-600 hover:underline"
						>
							GitHub repository
						</a>
						. Whether you code, design, write, or just have ideas - we welcome all contributions!
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
					<p>
						Have questions, suggestions, or found a bug? Reach out to us:
					</p>
					<ul className="list-disc list-inside space-y-2 mt-2">
						<li>
							GitHub Issues:{" "}
							<a
								href="https://github.com/wewillcraft/natatae-me/issues"
								target="_blank"
								rel="noopener noreferrer"
								className="text-orange-600 hover:underline"
							>
								Report bugs or request features
							</a>
						</li>
						<li>Email: <a href="mailto:help@natatae.me" className="text-orange-600 hover:underline">help@natatae.me</a></li>
					</ul>
				</div>
			</section>
		</LegalPageLayout>
	);
}
