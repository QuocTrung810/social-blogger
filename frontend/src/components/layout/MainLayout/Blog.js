import React, { useState } from 'react';
import CreatePostModal from '../../form/PostUploadForm';

export default function Blog() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<div>
			<button
				onClick={() => setIsModalOpen(true)}
				className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'
			>
				Create New Post
			</button>

			<CreatePostModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</div>
	);
}
