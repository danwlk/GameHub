import { useState } from "react";
import Button from "./components/Button/Button";
import Like from "./components/Like/Like";

function App() {
	const [customer, setCustomer] = useState({
		name: "John",
		address: {
			city: "San Francisco",
			zipCode: 94111,
		},
	});

	const handleClick = () => {
		setCustomer({
			...customer,
			address: { ...customer.address, zipCode: 94112 },
		});
	};

	return (
		<div>
			{customer.name}
			<Button color="primary" onClick={handleClick}>
				hello world
			</Button>
			<Like onClick={() => console.log("clicked")} />
		</div>
	);
}

export default App;
