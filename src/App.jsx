import Hero from "./components/Hero";
import JobListings from "./components/JobListings";
import Navbar from "./components/Navbar";
import HomeCards from "./components/HomeCards";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<HomeCards /> {/* <!-- Developers and Employers --> */}
			<JobListings />
			<ViewAllJobs />
		</>
	);
};
export default App;
