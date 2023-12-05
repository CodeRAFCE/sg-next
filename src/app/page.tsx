import homeImg from "public/home.jpg";
import Hero from "@/components/hero";

export default function Home() {
	return (
		<>
			<Hero imgAlt={"CAR FACTORY IMAGE"} imgData={homeImg} title="Professional Cloud Hosting" />
		</>
	);
}
