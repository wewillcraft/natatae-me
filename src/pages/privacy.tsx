import LegalPageLayout from "../components/LegalPageLayout";

export default function PrivacyPolicyPage() {
	return (
		<LegalPageLayout
			title="Privacy Policy"
			description="How NATATAE ME! collects, uses, and protects your personal information."
			lastUpdated="September 2025"
		>
			<section className="space-y-6">
				<div>
					<p className="mb-4 text-lg">
						Your privacy is important to us. This Privacy Policy explains how NATATAE ME! ("we," "us,"
						or "our") collects, uses, and safeguards your information when you use our website and services.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>

					<h3 className="text-xl font-semibold text-gray-800 mb-2">Information You Provide</h3>
					<ul className="list-disc list-inside space-y-2 mb-4">
						<li><strong>Account Information:</strong> Username, email address, and password when you create an account</li>
						<li><strong>Profile Information:</strong> Display name, bio, and avatar (optional)</li>
						<li><strong>User Content:</strong> Toilet reviews, ratings, photos, and comments you submit</li>
						<li><strong>Location Data:</strong> Toilet locations you add to the platform</li>
					</ul>

					<h3 className="text-xl font-semibold text-gray-800 mb-2">Information Collected Automatically</h3>
					<ul className="list-disc list-inside space-y-2 mb-4">
						<li><strong>Location Information:</strong> Your current location (only when you grant permission)</li>
						<li><strong>Usage Data:</strong> Pages visited, features used, search queries</li>
						<li><strong>Device Information:</strong> Browser type, operating system, device type</li>
						<li><strong>Log Data:</strong> IP address, access times, referring URLs</li>
					</ul>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
					<p className="mb-4">We use the collected information to:</p>
					<ul className="list-disc list-inside space-y-2">
						<li>Provide and improve our toilet-finding services</li>
						<li>Show you nearby toilets based on your location</li>
						<li>Display your reviews and contributions to other users</li>
						<li>Send you notifications about toilet updates in your area (if enabled)</li>
						<li>Maintain and improve platform security</li>
						<li>Analyze usage patterns to enhance user experience</li>
						<li>Respond to your inquiries and support requests</li>
						<li>Comply with legal obligations</li>
					</ul>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Location Services</h2>
					<p className="mb-4">
						NATATAE ME! uses your location to provide core functionality:
					</p>
					<ul className="list-disc list-inside space-y-2 mb-4">
						<li>Finding toilets near your current position</li>
						<li>Calculating distances to toilet facilities</li>
						<li>Providing directions to selected toilets</li>
						<li>Enabling the "Emergency Mode" feature</li>
					</ul>
					<p className="mb-4">
						<strong>Important:</strong> Location access is optional but recommended for the best experience.
						You can:
					</p>
					<ul className="list-disc list-inside space-y-2">
						<li>Grant location access only while using the app</li>
						<li>Manually enter locations instead of using GPS</li>
						<li>Revoke location permissions at any time through your device settings</li>
					</ul>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
					<p className="mb-4">
						We share your information only in the following circumstances:
					</p>
					<ul className="list-disc list-inside space-y-2 mb-4">
						<li>
							<strong>Public Content:</strong> Reviews, ratings, and toilet locations you submit are
							visible to all users
						</li>
						<li>
							<strong>With Your Consent:</strong> When you explicitly agree to share information
						</li>
						<li>
							<strong>Legal Requirements:</strong> When required by law or to protect rights and safety
						</li>
						<li>
							<strong>Service Providers:</strong> With trusted third parties who help us operate our
							services (hosting, analytics, etc.)
						</li>
					</ul>
					<p>
						<strong>We DO NOT:</strong> Sell, rent, or trade your personal information to third parties
						for marketing purposes.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
					<p className="mb-4">
						We implement appropriate technical and organizational measures to protect your information:
					</p>
					<ul className="list-disc list-inside space-y-2">
						<li>Encryption of passwords and sensitive data</li>
						<li>Secure HTTPS connections</li>
						<li>Regular security audits and updates</li>
						<li>Limited access to personal information by authorized personnel only</li>
					</ul>
					<p className="mt-4">
						However, no method of transmission over the Internet is 100% secure. While we strive to
						protect your information, we cannot guarantee absolute security.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
					<p className="mb-4">You have the right to:</p>
					<ul className="list-disc list-inside space-y-2">
						<li><strong>Access:</strong> Request a copy of your personal information</li>
						<li><strong>Update:</strong> Correct or update your account information</li>
						<li><strong>Delete:</strong> Request deletion of your account and personal data</li>
						<li><strong>Opt-out:</strong> Unsubscribe from notifications and communications</li>
						<li><strong>Export:</strong> Download your data in a portable format</li>
						<li><strong>Restrict:</strong> Limit how we process your information</li>
					</ul>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
					<p>
						NATATAE ME! is not intended for children under 13. We do not knowingly collect personal
						information from children under 13. If you believe we have collected information from a
						child under 13, please contact us immediately, and we will take steps to delete such
						information.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
					<p className="mb-4">
						Our service may contain links to third-party websites or services. We are not responsible
						for the privacy practices of these third parties. We encourage you to review their privacy
						policies before providing any information.
					</p>
					<p className="mb-4">
						We may use the following third-party services:
					</p>
					<ul className="list-disc list-inside space-y-2">
						<li>Map providers (for displaying toilet locations)</li>
						<li>Cloud storage (for user-uploaded images)</li>
						<li>Analytics services (to understand usage patterns)</li>
						<li>Authentication providers (for secure login)</li>
					</ul>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
					<p>
						We retain your information for as long as necessary to provide our services and comply with
						legal obligations. When you delete your account, we will delete or anonymize your personal
						information, except where we are required to retain it by law. Public content (reviews,
						ratings) may be anonymized rather than deleted to maintain platform integrity.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
					<p>
						Your information may be transferred to and processed in countries other than the Philippines.
						By using NATATAE ME!, you consent to the transfer of your information to countries outside
						your country of residence, which may have different data protection rules.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
					<p>
						We may update this Privacy Policy from time to time. We will notify you of any changes by
						posting the new Privacy Policy on this page and updating the "Last Updated" date. Your
						continued use of NATATAE ME! after changes indicates your acceptance of the updated policy.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
					<p className="mb-4">
						If you have questions or concerns about this Privacy Policy or our data practices,
						please contact us:
					</p>
					<ul className="list-disc list-inside space-y-2">
						<li>
							GitHub:{" "}
							<a
								href="https://github.com/wewillcraft/natatae-me/issues"
								target="_blank"
								rel="noopener noreferrer"
								className="text-orange-600 hover:underline"
							>
								Submit an issue
							</a>
						</li>
						<li>Email: <a href="mailto:help@natatae.me" className="text-orange-600 hover:underline">help@natatae.me</a></li>
					</ul>
				</div>
			</section>
		</LegalPageLayout>
	);
}
