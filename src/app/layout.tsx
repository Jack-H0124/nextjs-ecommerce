import "./globals.css";

import { Nunito } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Wrapper from "@/components/provider/Wrapper";

const nunito = Nunito({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
	title: "Gadget Galaxy | Home",
	description: "classy garments home page. classy garments landing page",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={nunito.className}>
			<body className="bg-background">
				<Wrapper>
					<main>{children}</main>
				</Wrapper>
			</body>
		</html>
	);
}
