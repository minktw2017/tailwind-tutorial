import { useState, useEffect } from "react";
import Nav from "../componnents/Nav";
import Spring from "../componnents/Spring";
import useSceenSize from "../hooks/useScreenSize";

const Animation = () => {
	const screenSize = useSceenSize();
	const [screenWidth, setScreenWidth] = useState(0);

	useEffect(() => {
		setScreenWidth(screenSize.width);
	}, [screenSize]);
	return (
		<>
			<Nav />
			<div className={`w-[${screenWidth}px] bg-slate-500 m-4`}>123</div>
			<div
				className="
        w-full
        h-[calc(100vh-76px)]
        mx-auto
        flex
        justify-center
        items-center
        lg:max-w-[1200px]
        "
			>
				<Spring />
			</div>
		</>
	);
};

export default Animation;
