import LegalPageLayout from "../components/LegalPageLayout";

export default function TermsOfServicePage() {
	return (
		<LegalPageLayout
			title="Terms of Service"
			description="Terms and conditions for using NATATAE ME! services."
			lastUpdated="September 2025"
		>
			<section className="space-y-6">
				<div>
					<p className="mb-4 text-lg">
						By accessing and using NATATAE ME! ("we," "us," "our," or the "Service"), you agree to be
						bound by these Terms of Service ("Terms"). If you disagree with any part of these terms,
						you may not access the Service.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
					<p>
						By using NATATAE ME!, you acknowledge that you have read, understood, and agree to be bound
						by these Terms and our Privacy Policy. These Terms apply to all visitors, users, and others
						who access or use the Service.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
					<p className="mb-4">
						NATATAE ME! is a crowd-sourced platform that helps users find public toilet facilities in
						the Philippines. The Service includes:
					</p>
					<ul className="list-disc list-inside space-y-2">
						<li>Location-based toilet finding</li>
						<li>User-generated reviews and ratings</li>
						<li>Photo uploads of facilities</li>
						<li>Emergency mode for urgent situations</li>
						<li>Community features and gamification</li>
					</ul>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
					<h3 className="text-xl font-semibold text-gray-800 mb-2">Account Creation</h3>
					<p className="mb-4">
						To access certain features, you may need to create an account. You agree to:
					</p>
					<ul className="list-disc list-inside space-y-2 mb-4">
						<li>Provide accurate, current, and complete information</li>
						<li>Maintain and update your information</li>
						<li>Keep your password secure and confidential</li>
						<li>Accept responsibility for all activities under your account</li>
						<li>Notify us immediately of any unauthorized use</li>
					</ul>

					<h3 className="text-xl font-semibold text-gray-800 mb-2">Account Termination</h3>
					<p>
						We reserve the right to suspend or terminate accounts that violate these Terms or our
						Code of Conduct, or for any other reason at our discretion.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Content</h2>
					<h3 className="text-xl font-semibold text-gray-800 mb-2">Content Ownership</h3>
					<p className="mb-4">
						You retain ownership of content you submit. However, by posting content, you grant us a
						worldwide, non-exclusive, royalty-free, perpetual, irrevocable license to use, display,
						reproduce, modify, and distribute your content in connection with the Service.
					</p>

					<h3 className="text-xl font-semibold text-gray-800 mb-2">Content Standards</h3>
					<p className="mb-4">You agree not to post content that:</p>
					<ul className="list-disc list-inside space-y-2">
						<li>Is false, misleading, or fraudulent</li>
						<li>Violates any laws or regulations</li>
						<li>Infringes on intellectual property rights</li>
						<li>Contains malware or harmful code</li>
						<li>Is obscene, offensive, or inappropriate</li>
						<li>Harasses, threatens, or harms others</li>
						<li>Violates privacy rights</li>
						<li>Promotes illegal activities</li>
					</ul>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">5. Acceptable Use</h2>
					<p className="mb-4">You agree NOT to:</p>
					<ul className="list-disc list-inside space-y-2">
						<li>Submit fake toilet locations or reviews</li>
						<li>Manipulate ratings or gaming systems</li>
						<li>Scrape or harvest data from the Service</li>
						<li>Use the Service for commercial purposes without permission</li>
						<li>Impersonate others or create fake accounts</li>
						<li>Interfere with or disrupt the Service</li>
						<li>Attempt to gain unauthorized access</li>
						<li>Use the Service to stalk or harass others</li>
						<li>Upload inappropriate photos in toilet facilities</li>
						<li>Violate the privacy of other users</li>
					</ul>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
					<p className="mb-4">
						The Service and its original content (excluding user content), features, and functionality
						are owned by NATATAE ME! and are protected by international copyright, trademark, and other
						intellectual property laws.
					</p>
					<p>
						The source code is available under the AGPLv3 license. You may use, modify, and distribute
						the code according to the terms of that license.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services</h2>
					<p>
						Our Service may contain links to third-party websites or services. We are not responsible
						for the content, privacy policies, or practices of any third-party sites or services. You
						acknowledge and agree that we shall not be liable for any damage or loss caused by your use
						of any third-party content or services.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimers</h2>
					<p className="mb-4">
						THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM
						ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
					</p>
					<ul className="list-disc list-inside space-y-2 mb-4">
						<li>Accuracy or reliability of toilet information</li>
						<li>Safety or cleanliness of facilities</li>
						<li>Availability or functionality of the Service</li>
						<li>Fitness for a particular purpose</li>
						<li>Non-infringement</li>
					</ul>
					<p className="font-semibold text-orange-600">
						USE OF THE SERVICE IS AT YOUR OWN RISK. WE ARE NOT RESPONSIBLE FOR ANY INCIDENTS, ACCIDENTS,
						OR EMBARRASSMENTS THAT MAY OCCUR WHILE USING TOILET FACILITIES FOUND THROUGH OUR SERVICE.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
					<p>
						TO THE MAXIMUM EXTENT PERMITTED BY LAW, NATATAE ME! SHALL NOT BE LIABLE FOR ANY INDIRECT,
						INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS
						OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE
						SERVICE.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
					<p>
						You agree to defend, indemnify, and hold harmless NATATAE ME! and its officers, directors,
						employees, and agents from any claims, liabilities, damages, losses, and expenses, including
						reasonable attorney's fees, arising out of or in any way connected with your access to or
						use of the Service, your violation of these Terms, or your violation of any rights of another.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">11. Privacy</h2>
					<p>
						Your use of the Service is also governed by our Privacy Policy. Please review our Privacy
						Policy, which also governs the Site and informs users of our data collection practices.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">12. Modifications to Service</h2>
					<p>
						We reserve the right to modify or discontinue the Service (or any part thereof) at any time,
						with or without notice. We shall not be liable to you or any third party for any modification,
						suspension, or discontinuance of the Service.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
					<p>
						We reserve the right to modify these Terms at any time. If we make material changes, we will
						notify users through the Service or by other means. Your continued use of the Service after
						changes constitutes acceptance of the modified Terms.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">14. Governing Law</h2>
					<p>
						These Terms shall be governed by and construed in accordance with the laws of the Republic
						of the Philippines, without regard to its conflict of law provisions. Any legal action or
						proceeding shall be brought exclusively in the courts located in the Philippines.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">15. Severability</h2>
					<p>
						If any provision of these Terms is held to be invalid or unenforceable, the remaining
						provisions shall continue in full force and effect.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">16. Entire Agreement</h2>
					<p>
						These Terms, together with our Privacy Policy and Code of Conduct, constitute the entire
						agreement between you and NATATAE ME! regarding the use of the Service.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">17. Contact Information</h2>
					<p className="mb-4">
						For questions about these Terms of Service, please contact us:
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
