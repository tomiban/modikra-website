import { useState, useEffect } from "react";
import followIg from "../assets/img/follow-ig.png";

const Instagram = () => {
	const [feedIg, setFeedIg] = useState([]);
	const [profile, setProfile] = useState("");

	const urlGallery = `https://graph.instagram.com/me/media?fields=id,username,caption,media_url,thumbnail_url,permalink&limit=8&access_token=${
		import.meta.env.VITE_INSTAGRAM_KEY
	}`;

	const fetchGallery = async () => {
		try {
			const data = await fetch(urlGallery);
			const feedIg = await data.json();

			setFeedIg({ data: feedIg.data, username: feedIg.data[0].username });

			const slicedData =
				window.innerWidth <= 640 ? feedIg.data.slice(0, 4) : feedIg.data;

			setFeedIg({ data: slicedData, username: feedIg.data[0].username });
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchGallery()
	}, []);


	return (
		<section className='py-6 sm:py-8 sm:mt-16'>
			<div className='mx-auto max-w-4xl xl:px-4 md:container relative'>
				<div className='h-20 sm:h-32 absolute -left-4 -top-7 sm:-left-10 xl:-left-6 sm:-top-16'>
					<a
						href={`https://www.instagram.com/${feedIg.username}/`}
						target='_blank'>
						<img
							src={followIg}
							alt=''
							className='h-full w-full hover:brightness-90 transition-all duration-300'
						/>
					</a>
				</div>
				{feedIg.data && (
					<div
						className={`grid grid-cols-4 gap-2 items-center border border-sm border-gray-300 bg-gray-50 p-4 rounded-md`}>
						<div className={`col-span-4 pb-2 w-full`}>
							<div className='flex justify-end border-b-2 items-end'>
								<a
									href={`https://www.instagram.com/${feedIg.username}/`}
									target='_blank'>
									<h5 className='text-base sm:text-xl hover:text-indigo-500 transition-colors duration-200'>
										@{feedIg.username}
									</h5>
								</a>
							</div>
						</div>
						{feedIg.data.map((item) => (
							<div
								key={item.id}
								className='group relative w-full overflow-hidden rounded-lg col-span-2 sm:col-span-1 shadow-lg'>
								<a
									href={
										item.permalink ||
										`https://www.instagram.com/${feedIg.username}/`
									}
									target='_blank'
									rel='noopener noreferrer'>
									<div className='flex justify-center items-center h-60 w-full'>
										<img
											loading='lazy'
											src={item.thumbnail_url || item.media_url}
											alt={item.caption}
											className='w-full h-full object-cover transition duration-200 group-hover:scale-110 hover:brightness-50'
										/>
									</div>
								</a>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default Instagram;
