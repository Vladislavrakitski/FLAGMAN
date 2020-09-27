import React from 'react';
import Logo from './Logo';
import Info from './Info';
import Footer from './Footer';
import Map from './Map';

import './index.scss';

export default () => {
	return (
		<>
			<Logo />
			<Info />
			<Map />
			<Footer />
		</>
	);
};
