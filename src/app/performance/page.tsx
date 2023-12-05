import performanceImage from "public/performance.jpg";

import Hero from "../../components/hero";

export default function PerformancePage() {
	return (
		<div>
			<Hero
				imgAlt={"WIELDING IMAGE"}
				imgData={performanceImage}
				title="Blazing fast performance" 
			/>
		</div>
	);
}
