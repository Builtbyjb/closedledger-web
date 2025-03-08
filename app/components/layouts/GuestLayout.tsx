import GuestNavBar from "~/components/navbar/GuestNavBar";
import Footer from "../Footer";

export function GuestLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-[90%] py-8 mx-auto sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[55%]">
			<GuestNavBar />
			<div className="mt-16 mb-16">{children}</div>
			<Footer />
		</div>
	);
}
