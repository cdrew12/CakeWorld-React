import React, { Component } from 'react';
import Modal from 'react-modal';
import Cake from '../Cake/Cake';
import EditCakeForm from '../EditCakeForm/EditCakeForm';
import './CakeList.css';

const modalStyle = {
	content: {
		borderRadius: '5px',
		bottom: 'auto',
		height: '30%',
		left: '50%',
		padding: '2rem',
		position: 'fixed',
		right: 'auto',
		top: '10%',
		transform: 'translate(-50%)',
		width: '60%',
		maxWidth: '40rem',
		minHeight: '20rem',
		maxHeight: '50rem',
		border: '1px solid #333'
	}
};

class CakeList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editingCake: { title: '', image: '', src: '', visible: true, id: null },
			isModalOpen: this.props.isModalOpen,
			filteringResults: false,
		};
		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal = () => this.setState({ isModalOpen: true });
	afterOpenModal = () => f => f;
	closeModal = () => this.setState({ isModalOpen: false });

	onAddCakeClick = (e) => {
		e.preventDefault();
		this.openModal();
	}

	onEditCakeClick = (e, cake) => {
		e.preventDefault();
		this.setState({ editingCake: cake });
		this.openModal();
	}

	onSearchChanged = (e) => {
		if (!this.state.filteringResults) {
			const searchTerm = e.target.value;
			this.setState({ filteringResults: true });
			const newCakes = this.props.cakes.map((cake) => ({
				...cake,
				visible: (cake.title.toLowerCase().indexOf(searchTerm) > -1 || searchTerm === '')
			}));
			this.props.onCakesChange(newCakes);
			this.setState({ filteringResults: false });
		}
	}

	saveCake = (title, desc, image) => {
		const submittedCake = {
			title,
			desc,
			image,
			visible: true
		};
		const { cakes } = this.props;
		const { editingCake } = this.state;
		const newCakes = (editingCake.id !== null)
			? [
				...cakes.slice(0, editingCake.id),
				{ ...submittedCake, id: editingCake.id },
				...cakes.slice(editingCake.id + 1)
			]
			: [
				...this.props.cakes,
				{
					...submittedCake,
					id: this.props.cakes.length
				}
			];

		this.props.onCakesChange(newCakes);
		alert(`Your cake, ${submittedCake.title}, has been saved!`); // would not use alert in production
		this.setState({ editingCake: { title: '', image: '', src: '', visible: true, id: null } });
		this.closeModal();
	}

	render() {
		const { cakes } = this.props;
		const { isModalOpen, editingCake } = this.state;
		return (
			(!cakes.length) ?
				<div>No cakes provided</div> :
				<div>
					<div className='header-controls'>
						<div className='pure-g'>
							<div className='pure-u-1-2'>
								<a href='#' onClick={e => this.onAddCakeClick(e)}>
									<i className='fa fa-plus-square' aria-hidden='true' title='Add Cake'></i> Add your own cake!
								</a>
							</div>
							<div className='pure-u-1-2'>
								<i className='fa fa-search' aria-hidden='true' title='Search Cake'></i>
								&nbsp;<input type='text' className='search-cake' placeholder='Search for a cake'
								onChange={this.onSearchChanged} />
							</div>
						</div>
					</div>
					<div className='pure-g'>
						<ul>
							{cakes.map(
								(cake, i) => <Cake key={i} cake={cake} onEditClick={this.onEditCakeClick} />
							)}
						</ul>
					</div>
					{(!isModalOpen) ? null :
						<div className='pure-g'>
							<div className='pure-u-1-3'>
						<Modal isOpen={isModalOpen}
							contentLabel='Modal'
							onAfterOpen={this.afterOpenModal}
							onRequestClose={this.closeModal}
							style={modalStyle}
						>
							{(editingCake.id !== null) ? <h1>Edit Cake</h1> : <h1>Add Cake</h1>}
							<EditCakeForm cake={editingCake} onCancel={this.closeModal} onSaveCake={this.saveCake} />
						</Modal>
							</div>
						</div>
						}
				</div>
		);
	}
}

CakeList.PropTypes = {
	cakes: React.PropTypes.array.isRequired,
	isModalOpen: React.PropTypes.bool
};

export default CakeList;
