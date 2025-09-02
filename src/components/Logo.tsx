import { cn } from "../utils/cn";

interface LogoProps {
	size?: "xs" | "sm" | "md" | "lg" | "xl";
	className?: string;
}

export default function Logo({ size = "md", className }: LogoProps) {
	const sizeClasses = {
		xs: "text-xl sm:text-2xl",
		sm: "text-2xl sm:text-3xl lg:text-4xl",
		md: "text-3xl sm:text-4xl lg:text-5xl",
		lg: "text-4xl sm:text-5xl lg:text-6xl",
		xl: "text-5xl sm:text-7xl lg:text-8xl",
	};

	return (
		<h1 className={cn("font-black text-gray-900", sizeClasses[size], className)}>
			NATATAE{" "}
			<span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
				ME!
			</span>
		</h1>
	);
}