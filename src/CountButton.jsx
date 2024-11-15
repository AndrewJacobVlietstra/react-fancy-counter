import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, count, setCount }) {
	const locked = count === 5;

	const handleButtonCount = (e) => {
		if (type === "increment") {
			return setCount((prev) => {
				// UPPER LIMIT if count goes above 5, return 5
				const newCount = prev + 1;
				if (newCount > 5) {
					return 5;
				}
				return newCount;
			});
		}
		if (type === "decrement") {
			return setCount((prev) => {
				// LOWER LIMIT if count goes below 0, return 0
				const newCount = prev - 1;
				if (newCount < 0) {
					return 0;
				}
				return newCount;
			});
		}
		return;
	};

	return (
		<button disabled={locked} className="count-btn" onClick={handleButtonCount}>
			{type === "increment" ? (
				<PlusIcon className="count-btn-icon" />
			) : (
				<MinusIcon className="count-btn-icon" />
			)}
		</button>
	);
}
