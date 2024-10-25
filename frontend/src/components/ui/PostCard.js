import React from 'react';
import '../../styles/PostCard.css';

export default function PostCard() {
	return (
		<div className='post-card'>
			{/* Frame ảnh */}
			<div className='post-card__frame'>
				<img
					className='post-card__image'
					alt='post'
					src='http://localhost:5050/public/images/posts/default-image.jpg'
				/>
			</div>

			{/* Content */}
			<div className='post-card__main'>
				{/* Header với avatar và thông tin */}
				<div className='post-card__header'>
					<div className='w-10 h-10 mr-3 flex-shrink-0'>
						<img
							className='w-full h-full object-cover rounded-full'
							alt='post'
							src='http://localhost:5050/public/images/posts/default-image.jpg'
						/>
					</div>
					<div>
						<div className='text-sm font-medium'>Admin</div>
						<div className='flex gap-3 text-gray-500'>
							<span className='text-sm'>T2 12 May, 2012</span>
							<span className='text-sm'>11:20</span>
						</div>
					</div>
				</div>

				{/* Body - thêm padding left và right */}
				<div className='post-card__body'>
					<h2 className='text-2xl font-semibold mb-2'>
						PLAYING WITH PATTERNS
					</h2>
					<p className='text-gray-600 text-sm'>
						Create a blog post subtitle that summarizes your post in
						a few short, punchy sentences...
					</p>
				</div>

				{/* Footer - thêm border top và padding */}
				<div className='post-card__footer'>
					<div className='flex items-center justify-between text-gray-500 text-sm'>
						<div className='flex items-center gap-4'>
							<span className='flex items-center gap-1'>
								<span>0</span> views
							</span>
							<span className='flex items-center gap-1'>
								<span>0</span> comments
							</span>
						</div>
						<div className='flex items-center gap-1'>
							<span>13</span>
							<svg
								className='w-4 h-4 text-red-500'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
