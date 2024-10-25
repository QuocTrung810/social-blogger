import React from 'react';
import PostCard from './PostCard';
import '../../styles/PostList.css';

export default function PostList() {
	return (
		<div className='post-list'>
			<PostCard />
			<PostCard />
			<PostCard />
			<PostCard />
		</div>
	);
}
