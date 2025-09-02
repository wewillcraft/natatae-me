import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-gray-900 px-4 py-12 text-white">
			<div className="mx-auto max-w-6xl">
				<p className="text-2xl mb-6 text-center">
					Made with ❤️ and 💩 by Filipinos, for Filipinos 🇵🇭
				</p>

				<div className="flex flex-col items-center gap-6">
					<div className="w-full">
						<nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-400 uppercase tracking-wider">
							<Link href="/about" className="hover:text-white transition-colors">
								About
							</Link>
							<Link href="/contact" className="hover:text-white transition-colors">
								Contact
							</Link>
							<Link href="/terms" className="hover:text-white transition-colors">
								Terms of Service
							</Link>
							<Link href="/privacy" className="hover:text-white transition-colors">
								Privacy Policy
							</Link>
							<Link href="/cookies" className="hover:text-white transition-colors">
								Cookie Policy
							</Link>
							<Link href="/disclaimer" className="hover:text-white transition-colors">
								Disclaimer
							</Link>
							<Link href="/code-of-conduct" className="hover:text-white transition-colors">
								Code of Conduct
							</Link>
						</nav>
					</div>

					<div className="flex items-center justify-center gap-3">
						{/* GitHub */}
						<Link
							href="https://github.com/wewillcraft/natatae-me"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-500 hover:text-gray-400 transition-colors"
							aria-label="GitHub"
						>
							<svg
								className="w-4 h-4"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
									clipRule="evenodd"
								/>
							</svg>
						</Link>

						{/* Instagram */}
						<Link
							href="https://instagram.com/saanpwedengtumae"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-500 hover:text-gray-400 transition-colors"
							aria-label="Instagram"
						>
							<svg
								className="w-4 h-4"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
							</svg>
						</Link>

						{/* Facebook */}
						<Link
							href="https://facebook.com/saanpwedengtumae"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-500 hover:text-gray-400 transition-colors"
							aria-label="Facebook"
						>
							<svg
								className="w-4 h-4"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
