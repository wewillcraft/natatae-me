import LegalPageLayout from "../components/LegalPageLayout";

export default function CodeOfConductPage() {
	return (
		<LegalPageLayout
			title="Code of Conduct"
			description="Community guidelines for NATATAE ME! users and contributors."
			lastUpdated="September 2025"
		>
			<section className="space-y-6">
				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Our Pledge</h2>
					<p>
						We as members, contributors, and leaders pledge to make participation in NATATAE ME!
						a harassment-free experience for everyone, regardless of age, body size, visible or
						invisible disability, ethnicity, sex characteristics, gender identity and expression,
						level of experience, education, socio-economic status, nationality, personal appearance,
						race, religion, or sexual identity and orientation.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Our Standards</h2>
					<h3 className="text-xl font-semibold text-gray-800 mb-2">
						Examples of behavior that contributes to a positive environment:
					</h3>
					<ul className="list-disc list-inside space-y-2 mb-4">
						<li>Providing honest, helpful toilet reviews</li>
						<li>Respecting establishment owners while giving truthful feedback</li>
						<li>Being respectful of differing opinions and experiences</li>
						<li>Giving and gracefully accepting constructive feedback</li>
						<li>Focusing on what is best for the community</li>
						<li>Showing empathy towards other community members in emergency situations</li>
					</ul>

					<h3 className="text-xl font-semibold text-gray-800 mb-2">
						Examples of unacceptable behavior:
					</h3>
					<ul className="list-disc list-inside space-y-2">
						<li>Posting fake or malicious toilet locations</li>
						<li>Leaving false reviews to harm businesses</li>
						<li>Inappropriate photography in toilet facilities</li>
						<li>Trolling, insulting, or derogatory comments</li>
						<li>Public or private harassment</li>
						<li>Publishing others' private information without permission</li>
						<li>Other conduct which could reasonably be considered inappropriate</li>
					</ul>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Toilet Review Guidelines</h2>
					<ul className="list-disc list-inside space-y-2">
						<li>
							<strong>Be Honest:</strong> Share your genuine experience
						</li>
						<li>
							<strong>Be Specific:</strong> Mention cleanliness, amenities, and accessibility
						</li>
						<li>
							<strong>Be Fair:</strong> Consider that maintenance issues might be temporary
						</li>
						<li>
							<strong>Be Respectful:</strong> Avoid offensive language or unnecessary criticism
						</li>
						<li>
							<strong>Be Helpful:</strong> Include tips like best times to visit or payment requirements
						</li>
					</ul>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Photo Guidelines</h2>
					<ul className="list-disc list-inside space-y-2">
						<li>Only photograph empty facilities</li>
						<li>Focus on cleanliness and amenities</li>
						<li>Never photograph other people</li>
						<li>Respect privacy at all times</li>
						<li>No inappropriate or offensive content</li>
					</ul>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Enforcement Responsibilities</h2>
					<p className="mb-4">
						Community leaders are responsible for clarifying and enforcing our standards of acceptable
						behavior and will take appropriate and fair corrective action in response to any behavior
						that they deem inappropriate, threatening, offensive, or harmful.
					</p>
					<p>
						Community leaders have the right and responsibility to remove, edit, or reject reviews,
						comments, commits, code, wiki edits, issues, and other contributions that are not aligned
						with this Code of Conduct.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Reporting</h2>
					<p className="mb-4">
						Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to
						the community leaders responsible for enforcement through:
					</p>
					<ul className="list-disc list-inside space-y-2">
						<li>GitHub Issues (for code-related concerns)</li>
						<li>In-app reporting feature (for review/content concerns)</li>
						<li>Email: <a href="mailto:help@natatae.me" className="text-orange-600 hover:underline">help@natatae.me</a></li>
					</ul>
					<p className="mt-4">
						All complaints will be reviewed and investigated promptly and fairly. All community
						leaders are obligated to respect the privacy and security of the reporter.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Attribution</h2>
					<p>
						This Code of Conduct is adapted from the{" "}
						<a
							href="https://www.contributor-covenant.org/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-orange-600 hover:underline"
						>
							Contributor Covenant
						</a>
						, version 2.1, with additional guidelines specific to the NATATAE ME! community.
					</p>
				</div>
			</section>
		</LegalPageLayout>
	);
}
