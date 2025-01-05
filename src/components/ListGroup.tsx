import { useState } from "react";

function ListGroup() {
	const items = [
		"New York",
		"San Francisco",
		"Los Angeles",
		"Chicago",
		"Houston",
		"Philadelphia",
		"Phoenix",
	];
	const [selectedIndex, setSelectedIndex] = useState(-1);

	const handleClick = (item: string, index: number) => {
		console.log(`clicked on ${item}`);
        setSelectedIndex(index);
	};

	return (
		<>
			<h1>List</h1>
			{items.length === 0 ? (
				<p>No items found</p>
			) : (
				<ul className="list-group">
					{items.map((item, index) => {
						return (
							<li
								key={index}
								className={
									selectedIndex === index
										? "list-group-item active"
										: "list-group-item"
								}
								onClick={() => handleClick(item, index)}
							>
								{item}
							</li>
						);
					})}
				</ul>
			)}
		</>
	);
}

export default ListGroup;
