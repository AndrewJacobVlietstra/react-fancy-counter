export default function Title({ count }) {
	return (
		<h1 className="title">
			{count === 5 ? (
				<span>
					Limit! Buy <b>Pro</b> For &gt;5
				</span>
			) : (
				<span>Fancy Counter</span>
			)}
		</h1>
	);
}
