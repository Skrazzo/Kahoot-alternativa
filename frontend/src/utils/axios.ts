import axios from "axios";
import Cookies from "js-cookie";

export async function getCSRFToken(): Promise<string> {
	try {
		const res: any = await axios.get("/sanctum/csrf-cookie");
		return Cookies.get("XSRF-TOKEN");
	} catch (error) {
		console.log(error);
		throw error;
	}
}
