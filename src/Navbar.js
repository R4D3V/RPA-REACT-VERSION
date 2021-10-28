import React from 'react';

const Navbar = () => {
	return (
		<>
			<header>
				<h1>
					RPA <span className='clear'>MUSIC</span>
				</h1>
				<nav>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/aboutus'>
							About <span className='clear'>US</span>{' '}
						</a>
					</li>
					<li>
						<a href='/Contact'>Contact</a>
					</li>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
