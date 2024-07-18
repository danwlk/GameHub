import Button from "./components/Button/Button";
import Like from "./components/Like/Like";

function App() {
	return (
		<div>
			<Button color="primary" onClick={() => {}}>
				hello world
			</Button>
			<Like onClick={() => console.log("clicked")} />
		</div>
	);
}

export default App;
