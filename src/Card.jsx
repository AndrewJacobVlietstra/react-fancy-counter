import { useEffect, useState } from "react";
import Count from "./Count";
import CountButton from "./CountButton";
import ButtonsContainer from "./ButtonsContainer";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
	const [count, setCount] = useState(0);
	const allButtons = [].slice.call(document.getElementsByTagName("button"));

	const handleSpaceBarKeyPress = (e) => {
		if (e.code === "Space") {
			allButtons.forEach((button) => button.blur());
			return setCount((prev) => prev + 1);
		}
		return;
	};

	useEffect(() => {
		if (count < 5) {
			window.addEventListener("keypress", handleSpaceBarKeyPress);
		}

		return () => window.removeEventListener("keypress", handleSpaceBarKeyPress);
	}, [count]);

	return (
		<div className={`card ${count === 5 && "card--limit"}`}>
			<Title count={count} />
			<Count count={count} />
			<ResetButton setCount={setCount} />
			<ButtonsContainer>
				<CountButton type="decrement" count={count} setCount={setCount} />
				<CountButton type="increment" count={count} setCount={setCount} />
			</ButtonsContainer>
		</div>
	);
}
