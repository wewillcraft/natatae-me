import LegalPageLayout from "../components/LegalPageLayout";

export default function CookiePolicyPage() {
	return (
		<LegalPageLayout
			title="Cookie Policy"
			description="How NATATAE ME! uses cookies and similar technologies."
			lastUpdated="September 2025"
		>
			<section className="space-y-6">
				<div>
					<p className="mb-4 text-lg">
						This Cookie Policy explains how NATATAE ME! ("we," "us," or "our") uses cookies and similar
						technologies when you visit our website at natatae.me. It explains what these technologies
						are and why we use them, as well as your rights to control our use of them.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
					<p className="mb-4">
						Cookies are small text files that are placed on your device when you visit a website. They
						are widely used to make websites work more efficiently, provide information to website owners,
						and improve user experience.
					</p>
					<p>
						We also use similar technologies like local storage and session storage to store information
						locally on your device.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Why We Use Cookies</h2>
					<p className="mb-4">We use cookies and similar technologies for several purposes:</p>
					<ul className="list-disc list-inside space-y-2">
						<li>
							<strong>Essential:</strong> To make our Service work properly and securely
						</li>
						<li>
							<strong>Functional:</strong> To remember your preferences and settings
						</li>
						<li>
							<strong>Performance:</strong> To understand how you use our Service and improve it
						</li>
						<li>
							<strong>Location:</strong> To remember your last searched location for convenience
						</li>
					</ul>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>

					<h3 className="text-xl font-semibold text-gray-800 mb-2">Essential Cookies</h3>
					<p className="mb-4">
						These cookies are necessary for the website to function and cannot be switched off. They include:
					</p>
					<ul className="list-disc list-inside space-y-2 mb-4">
						<li><strong>Session cookies:</strong> Maintain your session while browsing</li>
						<li><strong>Authentication cookies:</strong> Keep you logged in securely</li>
						<li><strong>Security cookies:</strong> Help detect and prevent security threats</li>
					</ul>

					<h3 className="text-xl font-semibold text-gray-800 mb-2">Functional Cookies</h3>
					<p className="mb-4">
						These cookies enable enhanced functionality and personalization:
					</p>
					<ul className="list-disc list-inside space-y-2 mb-4">
						<li><strong>Language preferences:</strong> Remember your language choice</li>
						<li><strong>Filter preferences:</strong> Save your toilet search filters</li>
						<li><strong>Theme settings:</strong> Remember light/dark mode preference (if available)</li>
						<li><strong>Recent searches:</strong> Store your recent toilet searches</li>
					</ul>

					<h3 className="text-xl font-semibold text-gray-800 mb-2">Performance Cookies</h3>
					<p className="mb-4">
						These cookies help us understand how visitors interact with our website:
					</p>
					<ul className="list-disc list-inside space-y-2 mb-4">
						<li><strong>Analytics cookies:</strong> Track page views and user interactions</li>
						<li><strong>Error reporting:</strong> Help us identify and fix technical issues</li>
						<li><strong>Load balancing:</strong> Ensure optimal performance</li>
					</ul>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Local Storage</h2>
					<p className="mb-4">
						In addition to cookies, we use local storage to:
					</p>
					<ul className="list-disc list-inside space-y-2">
						<li>Cache toilet data for offline access (future feature)</li>
						<li>Store your draft reviews before submission</li>
						<li>Remember your last known location (with permission)</li>
						<li>Save your favorite toilets locally</li>
						<li>Store Emergency Mode preferences</li>
					</ul>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
					<p className="mb-4">
						We may use services from third parties that set their own cookies:
					</p>
					<ul className="list-disc list-inside space-y-2 mb-4">
						<li>
							<strong>Map providers:</strong> For displaying and interacting with maps
						</li>
						<li>
							<strong>Analytics services:</strong> To understand usage patterns
						</li>
						<li>
							<strong>Authentication providers:</strong> For secure login services
						</li>
						<li>
							<strong>Content delivery networks:</strong> For faster content loading
						</li>
					</ul>
					<p>
						These third parties have their own privacy policies and we have no control over their cookies.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Your Cookie Choices</h2>
					<p className="mb-4">You have several options for managing cookies:</p>

					<h3 className="text-xl font-semibold text-gray-800 mb-2">Browser Settings</h3>
					<p className="mb-4">
						Most browsers allow you to:
					</p>
					<ul className="list-disc list-inside space-y-2 mb-4">
						<li>View what cookies are stored and delete them individually</li>
						<li>Block third-party cookies</li>
						<li>Block all cookies from specific sites</li>
						<li>Block all cookies entirely</li>
						<li>Delete all cookies when you close your browser</li>
					</ul>

					<h3 className="text-xl font-semibold text-gray-800 mb-2">Our Cookie Settings</h3>
					<p className="mb-4">
						We provide options to control non-essential cookies through our cookie banner and settings
						page (when implemented).
					</p>

					<p className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
						<strong>Note:</strong> Blocking some cookies may impact your experience on our site. For
						example, you may need to re-enter your preferences each time you visit, or some features
						may not work properly.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Duration</h2>
					<p className="mb-4">Cookies can be either:</p>
					<ul className="list-disc list-inside space-y-2">
						<li>
							<strong>Session cookies:</strong> Deleted when you close your browser
						</li>
						<li>
							<strong>Persistent cookies:</strong> Remain for a set period or until manually deleted
						</li>
					</ul>
					<p className="mt-4">
						Our persistent cookies typically expire after 30 days, though some preference cookies may
						last up to 1 year.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Do Not Track</h2>
					<p>
						Some browsers offer a "Do Not Track" (DNT) setting. Currently, there is no industry standard
						for handling DNT signals, and our website does not respond differently to DNT signals. However,
						you can still manage cookies through your browser settings as described above.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
					<p>
						We may update this Cookie Policy from time to time to reflect changes in our practices or
						for legal, operational, or regulatory reasons. We will post any changes on this page and
						update the "Last Updated" date.
					</p>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">More Information</h2>
					<p className="mb-4">
						For more information about cookies and how to manage them, visit:
					</p>
					<ul className="list-disc list-inside space-y-2 mb-4">
						<li>
							<a
								href="https://www.allaboutcookies.org/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-orange-600 hover:underline"
							>
								All About Cookies
							</a>
						</li>
						<li>
							<a
								href="https://www.youronlinechoices.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-orange-600 hover:underline"
							>
								Your Online Choices
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
					<p className="mb-4">
						If you have questions about our use of cookies, please contact us:
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
