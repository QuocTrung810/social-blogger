import React, { useState } from 'react';
import Banner from '../../feature/Banner';
import Modal from '../../feature/Modal';
import PostList from '../../ui/PostList';

export default function Home() {
	const [isShow, setIsShow] = useState(false);
	return (
		<>
			<Banner />
			<PostList />
			<Modal
				isShow={isShow}
				setIsShow={setIsShow}
			/>
			<button onClick={() => setIsShow(!isShow)}>Show</button>
		</>
	);
}
