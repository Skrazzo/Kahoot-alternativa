import { Sanctum } from "react-sanctum";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login.tsx";
import EnterCode from "./pages/EnterCode.tsx";

const sanctumConfig = {
	apiUrl: "http://127.0.0.1:8000/",
	csrfCookieRoute: "sanctum/csrf-cookie",
	signInRoute: "login",
	signOutRoute: "logout",
	userObjectRoute: "user",
};

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						// <Sanctum config={sanctumConfig}>
						// </Sanctum>
						<EnterCode />
					}
				/>
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}
