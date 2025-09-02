import LegalPageLayout from "../components/LegalPageLayout";

export default function ContactPage() {
	return (
		<LegalPageLayout
			title="Contact Us"
			description="Get in touch with the NATATAE ME! team."
			lastUpdated="September 2025"
		>
			<section className="space-y-6">
				<div>
					<p className="mb-4 text-lg">
						Have questions, suggestions, or found a bug? We'd love to hear from you!
						The NATATAE ME! team is committed to making the best toilet-finding experience
						for all Filipinos.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Ways to Reach Us</h2>

					<div className="space-y-6">
						<div className="border-l-4 border-orange-500 pl-4">
							<h3 className="text-xl font-semibold text-gray-800 mb-2">🐛 Report Issues</h3>
							<p className="mb-2">Found a bug or technical issue? Let us know on GitHub:</p>
							<a
								href="https://github.com/wewillcraft/natatae-me/issues"
								target="_blank"
								rel="noopener noreferrer"
								className="text-orange-600 hover:underline font-medium"
							>
								Submit an issue on GitHub →
							</a>
						</div>

						<div className="border-l-4 border-orange-500 pl-4">
							<h3 className="text-xl font-semibold text-gray-800 mb-2">📧 General Inquiries</h3>
							<p className="mb-2">For general questions, partnerships, or feedback:</p>
							<a
								href="mailto:help@natatae.me"
								className="text-orange-600 hover:underline font-medium"
							>
								help@natatae.me
							</a>
						</div>

						<div className="border-l-4 border-orange-500 pl-4">
							<h3 className="text-xl font-semibold text-gray-800 mb-2">📱 Social Media</h3>
							<p className="mb-3">Follow us for updates and toilet humor:</p>
							<div className="space-y-2">
								<div>
									<a
										href="https://www.facebook.com/saanpwedengtumae"
										target="_blank"
										rel="noopener noreferrer"
										className="text-orange-600 hover:underline font-medium"
									>
										Facebook: @saanpwedengtumae
									</a>
								</div>
								<div>
									<a
										href="https://www.instagram.com/saanpwedengtumae"
										target="_blank"
										rel="noopener noreferrer"
										className="text-orange-600 hover:underline font-medium"
									>
										Instagram: @saanpwedengtumae
									</a>
								</div>
							</div>
						</div>

						<div className="border-l-4 border-orange-500 pl-4">
							<h3 className="text-xl font-semibold text-gray-800 mb-2">💻 Contribute</h3>
							<p className="mb-2">Want to help improve NATATAE ME!? Check out our:</p>
							<a
								href="https://github.com/wewillcraft/natatae-me"
								target="_blank"
								rel="noopener noreferrer"
								className="text-orange-600 hover:underline font-medium"
							>
								GitHub Repository →
							</a>
						</div>
					</div>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">What We Need Help With</h2>
					<ul className="list-disc list-inside space-y-2">
						<li>🗺️ Adding new toilet locations</li>
						<li>⭐ Verifying and reviewing existing toilets</li>
						<li>📸 Uploading photos of toilet facilities</li>
						<li>🐛 Reporting bugs and issues</li>
						<li>💡 Suggesting new features</li>
						<li>🌐 Translating to other Filipino languages</li>
						<li>🤝 Business partnerships for toilet maintenance</li>
					</ul>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Response Time</h2>
					<p>
						We're a small team of volunteers passionate about solving the Philippines' CR crisis.
						We aim to respond to all inquiries within 48-72 hours, but please be patient during
						peak times or holidays. For urgent issues related to incorrect or dangerous toilet
						information, please mark your message as "URGENT" in the subject line.
					</p>
				</div>

				<div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
					<h3 className="text-lg font-semibold text-gray-800 mb-2">🚽 Join the Movement!</h3>
					<p>
						Every Filipino deserves access to clean, safe toilets. By contacting us with
						feedback, suggestions, or toilet locations, you're helping build a better
						Philippines, one CR at a time!
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">For Businesses</h2>
					<p className="mb-4">
						Are you a business owner who wants to list your clean toilets on NATATAE ME!?
						We'd love to partner with you! Benefits include:
					</p>
					<ul className="list-disc list-inside space-y-2 mb-4">
						<li>Increased foot traffic from grateful customers</li>
						<li>Positive reviews and ratings</li>
						<li>Recognition as a "CR-Friendly Establishment"</li>
						<li>Contributing to Filipino bayanihan spirit</li>
					</ul>
					<p>
						Contact us at <a href="mailto:help@natatae.me?subject=Business Partnership" className="text-orange-600 hover:underline">
							help@natatae.me
						</a> with "Business Partnership" in the subject line.
					</p>
				</div>
			</section>
		</LegalPageLayout>
	);
}
