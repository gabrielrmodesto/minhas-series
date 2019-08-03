import React, { useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	Collapse,
	Nav,
	NavItem,
	NavLink,
	NavbarToggler
} from 'reactstrap';

function App() {
	const [open, setOpen] = useState(false);
	const toggle = () => {
		setOpen(!open)
	}
	return (
		<div>
			<Navbar color="light" light expand="md">
				<NavbarBrand>Minhas Series</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={open} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="/">Generos</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}

export default App;
