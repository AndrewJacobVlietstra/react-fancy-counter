import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ setCount }) {
	return (
		<button className="reset-btn">
			<ResetIcon className="reset-btn-icon" onClick={() => setCount(0)} />
		</button>
	);
}
