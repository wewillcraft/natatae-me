import LegalPageLayout from "../components/LegalPageLayout";

export default function DisclaimerPage() {
	return (
		<LegalPageLayout
			title="Disclaimer"
			description="Important disclaimers and limitations of liability for NATATAE ME!"
			lastUpdated="September 2025"
		>
			<section className="space-y-6">
				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">General Disclaimer</h2>
					<p className="mb-4">
						The information provided by NATATAE ME! ("we," "us," or "our") on natatae.me (the "Site")
						is for general informational purposes only. All information on the Site is provided in good
						faith, however we make no representation or warranty of any kind, express or implied,
						regarding the accuracy, adequacy, validity, reliability, availability, or completeness of
						any information on the Site.
					</p>
					<p className="mb-4">
						<strong className="text-orange-600">
							UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY
							KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED
							ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS
							SOLELY AT YOUR OWN RISK.
						</strong>
					</p>
					<p>
						This includes, but is not limited to, any accidents, health issues, or embarrassing
						situations that may occur while searching for or using toilet facilities.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">User-Generated Content</h2>
					<p className="mb-4">
						NATATAE ME! is a crowd-sourced platform. The toilet locations, reviews, ratings, and
						other information are primarily provided by users. We do not:
					</p>
					<ul className="list-disc list-inside space-y-2 mb-4">
						<li>Verify the accuracy of every toilet location or review</li>
						<li>Guarantee that listed toilets are currently operational</li>
						<li>Ensure that amenities mentioned in reviews are still available</li>
						<li>Confirm the cleanliness or safety of any facility</li>
						<li>Validate pricing information or operating hours</li>
					</ul>
					<p>
						Users should exercise their own judgment and verify information independently, especially
						in emergency situations.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Health and Safety</h2>
					<p className="mb-4">
						While we aim to help you find toilet facilities, we cannot guarantee:
					</p>
					<ul className="list-disc list-inside space-y-2 mb-4">
						<li>The hygiene or sanitation standards of any facility</li>
						<li>The safety of locations or surrounding areas</li>
						<li>Accessibility for persons with disabilities</li>
						<li>The presence of necessary amenities (tissue, soap, water, etc.)</li>
					</ul>
					<p>
						Always prioritize your health and safety. If a facility seems unsafe or unsanitary,
						trust your instincts and find an alternative.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Situations</h2>
					<p className="mb-4 font-semibold">
						The "Emergency Mode" feature is provided as a convenience tool only.
					</p>
					<p className="mb-4">
						We do not guarantee that:
					</p>
					<ul className="list-disc list-inside space-y-2 mb-4">
						<li>The nearest toilets shown are actually accessible or open</li>
						<li>You will reach the facility in time</li>
						<li>The facility will meet your specific needs</li>
						<li>GPS directions are accurate or optimal</li>
					</ul>
					<p>
						In genuine medical emergencies, please seek appropriate medical attention rather than
						relying solely on this app.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Establishments</h2>
					<p className="mb-4">
						NATATAE ME! is not affiliated with, endorsed by, or sponsored by any establishments
						listed on our platform unless explicitly stated. We do not:
					</p>
					<ul className="list-disc list-inside space-y-2">
						<li>Have control over establishment policies or practices</li>
						<li>Guarantee entry or access to private facilities</li>
						<li>Take responsibility for fees or requirements imposed by establishments</li>
						<li>Endorse or recommend specific establishments</li>
					</ul>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Limitations</h2>
					<p className="mb-4">
						We strive to maintain reliable service, but we cannot guarantee:
					</p>
					<ul className="list-disc list-inside space-y-2">
						<li>Continuous, uninterrupted access to the Site</li>
						<li>Accuracy of GPS or location services</li>
						<li>Compatibility with all devices or browsers</li>
						<li>Protection against data loss or corruption</li>
						<li>Real-time accuracy of toilet availability status</li>
					</ul>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Humor and Cultural Context</h2>
					<p>
						NATATAE ME! uses Filipino humor and expressions that may include toilet-related jokes
						and references. While we aim to keep content family-friendly, some users may find certain
						expressions or humor inappropriate. User discretion is advised.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Disclaimer</h2>
					<p>
						We reserve the right to modify this disclaimer at any time. Changes will be effective
						immediately upon posting to the Site. Your continued use of the Site following any changes
						indicates your acceptance of the modified disclaimer.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
					<p>
						If you have questions about this disclaimer, please contact us through our{" "}
						<a
							href="https://github.com/wewillcraft/natatae-me/issues"
							target="_blank"
							rel="noopener noreferrer"
							className="text-orange-600 hover:underline"
						>
							GitHub repository
						</a>
						.
					</p>
				</div>
			</section>
		</LegalPageLayout>
	);
}
