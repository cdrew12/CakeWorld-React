// Stateless functional component
import React from 'react';
import './Cake.css';

const Cake = ({ cake, onEditClick }) => (
	<div className={`cake pure-u-1 pure-u-md-1-4 ${!cake.visible ? 'is-hidden' : ''}`}>
		<div className='pure-g'>
			<div className='pure-u-1 pure-u-md-1-1 cake-wrapper'>
				<div className='cake-details'>
					<div className='cake-title'>
						{cake.title}&nbsp;&nbsp;
						<a href='#' title='Edit Cake' onClick={e => onEditClick(e, cake)}>
							<i className='fa fa-pencil-square-o pointer' aria-hidden='true'></i>
						</a>
					</div>
					{cake.desc}
				</div>
				<br />
				<div className='pure-u-1 cake-img'>
					<img src={cake.image} className='pure-img' alt='a cake' />
				</div>
			</div>
		</div>
	</div>
);

Cake.PropTypes = {
	cake: React.PropTypes.object.isRequired,
	onEditClick: React.PropTypes.func.isRequired
};

export default Cake;
