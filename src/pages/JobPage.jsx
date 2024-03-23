import { useParams, useLoaderData } from "react-router-dom";

import Spinner from "../components/Spinner";
import { useState } from "react";

const JobPage = () => {
	const { id } = useParams();
	const job = useLoaderData();

	return <h1>{job.title}</h1>;
};

const jobLoader = async ({ params }) => {
	const res = await fetch(`/api/jobs/${params.id}`);
	const data = res.json();
	return data;
};

export { JobPage as default, jobLoader };

// const [job, setJob] = useState(null);

// useEffect(() => {
//     const fetchJob = async () => {
//         try {
//             const res = await fetch(`/api/jobs/${id}`);
//             const data = await res.json();
//             setJob(data);
//         } catch (error) {
//             console.log("Error fetching Job Data", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     fetchJob();
// }, []);
