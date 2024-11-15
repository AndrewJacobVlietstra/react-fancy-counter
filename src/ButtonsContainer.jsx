import CountButton from "./CountButton";

export default function ButtonsContainer({ count, setCount }) {
	return (
		<div className="button-container">
			<CountButton type="decrement" count={count} setCount={setCount} />
			<CountButton type="increment" count={count} setCount={setCount} />
		</div>
	);
}
