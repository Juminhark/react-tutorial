import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
	return (
		<header>
			<img className="logo" src="../images/logo.svg" alt="logo" />
			<nav>
				<ul className="nav__links">
					<li>
						<Link className="nav__links" to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="nav__links" to="/about">
							About
						</Link>
					</li>
					<li>
						<Link className="nav__links" to="/MainConcept">
							MainConcept
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
