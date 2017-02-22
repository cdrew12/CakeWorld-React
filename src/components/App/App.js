import React, { Component } from 'react';
import 'whatwg-fetch';
import CakeList from '../CakeList/CakeList';
import CakeLogo from '../../images/cakeslice.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cakes: [],
			isLoading: false,
			loadError: false
		};
	}

	componentDidMount() {
		this.setState({ loading: true });
		const { cakesDataURL } = this.props;
		// Fetch cakes, parse json, add id field to each cake, add to the state
		if (cakesDataURL) {
			fetch(cakesDataURL)
				.then(response => this.handleLoadError(response))
				.then(response => response.json())
				.then(json => json.map((cake, i) => Object.assign({}, { ...cake, visible: true, id: i })))
				.then(cakes => this.setState({ cakes, isLoading: false })
				);
		} else {
			this.setState({ loadError: true });
		}
	}

	handleLoadError(response) {
		if (!response.ok) {
			this.setState({ loadError: true });
			throw Error(response.statusText);
		}
		return response;
	}

	onCakesChange = (cakes) =>
		this.setState({ cakes })

	render() {
		const { cakes, isLoading, loadError } = this.state;
		return (
			<div className='app'>
				<div className='app-header'>
					<img src={CakeLogo} className='app-logo' alt='logo'/>
					<h2>Welcome to CakeWorld</h2>
				</div>
				<div className='cakeList-wrapper'>
					{
						isLoading
							? <div className='appStatus'>Downloading Cakes</div>
							: loadError ? <div className='appStatus'>Error Downloading Cakes - Please Check URL</div>
								: <CakeList cakes={ cakes } onCakesChange={this.onCakesChange} />
					}
				</div>
			</div>
		);
	}
}

App.PropTypes = {
	cakesDataURL: React.PropTypes.string
}

export default App;
