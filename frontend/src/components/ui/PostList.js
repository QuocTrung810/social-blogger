import React, { useContext } from 'react';
import PostCard from './PostCard';
import '../../styles/PostList.css';
import { AppContext } from '../../context/AppContext';

export default function PostList({ number }) {
	const appContext = useContext(AppContext);
	return (
		<div className='post-list'>
			{number
				? appContext.posts.slice(0, number).map((post) => {
						return (
							<PostCard
								key={post._id}
								post={post}
							/>
						);
				  })
				: appContext.posts.map((post) => {
						return (
							<PostCard
								key={post._id}
								post={post}
							/>
						);
				  })}
		</div>
	);
}
