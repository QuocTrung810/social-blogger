import React, { useState } from 'react';
import PostList from '../../ui/PostList';
import CreatePostModal from '../../form/PostUploadForm';
import { FaPlus } from 'react-icons/fa';

export default function Blog() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<div>
			<PostList />
			<button
				onClick={() => setIsModalOpen(true)}
				className='fixed left-[80%] top-[85%] md:left-[85%] md:top-[85%] rounded-full p-4 bg-black text-white hover:bg-gray-300 hover:text-gray-600 transition-colors'
			>
				<FaPlus />
			</button>

			<CreatePostModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</div>
	);
}
