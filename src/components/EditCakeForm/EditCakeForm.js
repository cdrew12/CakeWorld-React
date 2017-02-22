import React, { Component } from 'react';

class EditCakeForm extends Component {
	constructor (props) {
		super();
		const { title, desc, image } = props.cake;
		this.state = {
			title,
			desc,
			image,
		};
	}

	onSubmit = (e) => {
		e.preventDefault();
		const { title, desc, image } = this.state;
		this.props.onSaveCake(title, desc, image);
	}

    onInputChange = (e, type) => this.setState({ [type]: e.target.value })

	render () {
		const { cake } = this.props;
		return (
			<form className='pure-form pure-form-aligned cake-form-edit' onSubmit={this.onSubmit}>
				<fieldset>
					<div className='pure-control-group'>
						<label htmlFor='title'>Cake Title</label>
						<input id='title' type='text' placeholder='Cake title' defaultValue={cake.title} onChange={e => this.onInputChange(e, 'title')} />
					</div>
					<div className='pure-control-group'>
						<label htmlFor='description'>Description</label>
						<input id='description' type='text' placeholder='Description' defaultValue={cake.desc} onChange={e => this.onInputChange(e, 'desc')} />
					</div>
					<div className='pure-control-group'>
						<label htmlFor='image'>Cake Photo</label>
						<input id='image' type='text' placeholder='Image URL' defaultValue={cake.image} onChange={e => this.onInputChange(e, 'image')} />
					</div>
					<div className='modal-controls'>
						<button onClick={this.props.onCancel} className='button-warning pure-button'>Cancel</button>&nbsp;
						<button type='submit' className='button-success pure-button'>Save</button>
					</div>
				</fieldset>
			</form>
		);
	}
}

EditCakeForm.PropTypes = {
	cakes: React.PropTypes.array.isRequired,
	onCancel: React.PropTypes.function,
	onSaveCake: React.PropTypes.function
};

export default EditCakeForm;
