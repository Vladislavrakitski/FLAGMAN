import React from 'react';
import { Map, Marker } from 'yandex-map-react';

export default () => {
	return (
		<div className='map'>
			<Map
				center={[53.930364, 30.309391]}
				zoom={11}
				width={'100%'}
				height={'300px'}>
				<Marker lat={53.926335} lon={30.269928} />
				<Marker lat={53.934392} lon={30.348854} />
			</Map>
		</div>
	);
};
