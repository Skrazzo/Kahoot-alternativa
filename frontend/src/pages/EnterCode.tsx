import { useEffect } from "react";
import axios from "axios";
import { getCSRFToken } from "../utils/axios.ts";

export default function EnterCode() {
	useEffect(async () => {
		const res = await axios.post("/login", {}, {
			headers: {
				"X-XSRF-TOKEN": await getCSRFToken(),
			},
		});
		console.log(res);
	}, []);

	return <div>EnterCode</div>;
}
