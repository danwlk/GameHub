import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {
	const [showAlert, setShowAlert] = useState(false);

	return (
		<div>
			{showAlert && (
				<Alert onClose={() => setShowAlert(false)} warning="WARNING">
					this is an alert
				</Alert>
			)}
			<Button onClick={() => setShowAlert(true)} color="danger">
				my button
			</Button>

			<ListGroup
				items={["one", "two", "three", "four"]}
				heading="numbers"
				onSelectItem={(item) => console.log(item)}
			/>
		</div>
	);
}

export default App;
