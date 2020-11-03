import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
	// Setting up state
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: "",
		};
	}
	componentDidMount() {
		// console.log("check");
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => {
				this.setState({ robots: users });
			});
	}

	onSearchChange = (event) => {
		this.setState({
			searchField: event.target.value,
		});
		// console.log(event.target.value);
		// console.log(filteredRobots);
	};

	render() {
		const { robots, searchField } = this.state;
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});

		const robotsList = robots.length ? (
			<CardList robots={filteredRobots} />
		) : (
			<div className='tc'>Opps! Nothing to show!!!</div>
		);
		// console.log(filteredRobots);
		return (
			<div>
				<h1 className='f1 tc'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundary>{robotsList}</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}
export default App;
