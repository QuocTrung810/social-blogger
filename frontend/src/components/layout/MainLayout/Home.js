import React, { useState } from 'react';
import Banner from '../../ui/Banner';
import Modal from '../../ui/Modal';

export default function Home() {
	const [isShow, setIsShow] = useState(false);
	return (
		<>
			<Banner />
			<Modal
				isShow={isShow}
				setIsShow={setIsShow}
			/>
			<button onClick={() => setIsShow(!isShow)}>Show</button>
		</>
	);
}
