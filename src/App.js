import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
	return (
		<div className="App">
			{/* <Count></Count> */}
			<ExternalUsers></ExternalUsers>
		</div>
	);
}

function ExternalUsers() {
	const [users, setUsers] = useState([]);
	// useEffect(() => {},[]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			// .then((data) => console.log(data));
			.then((data) => setUsers(data));
	}, []);
	return (
		<div>
			<h2>Hello ExternalUsers</h2>
			<p>{users.length}</p>
			{users.map((user) => (
				<Users name={user.name} email={user.email}></Users>
			))}
		</div>
	);
}

function Users(props) {
	return (
		<div style={{ border: "3px solid red", margin: "20px" }}>
			<h2>Name: {props.name}</h2>
			<p>Email: {props.email}</p>
		</div>
	);
}

function Count() {
	const [count, setCount] = useState(0);

	// Simple Mode
	// const incriseCount = () => {
	// 	const newCount = count + 1;
	// 	setCount(newCount);
	// };

	// Shor-Cut Mode
	const incriseCount = () => {
		setCount(count + 1);
	};
	const decriseCount = () => {
		setCount(count - 1);
	};
	return (
		<div>
			<h2>Count: {count}</h2>
			<button onClick={incriseCount}>Incrise</button>
			<button onClick={decriseCount}>Decrise</button>
		</div>
	);
}
export default App;
