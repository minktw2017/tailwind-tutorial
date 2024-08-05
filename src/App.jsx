import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Animation from "./page/Animation";
import Admin from "./page/Admin";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/animation" element={<Animation />} />
			<Route path="/admin" element={<Admin />} />
		</Routes>
	);
};

export default App;
