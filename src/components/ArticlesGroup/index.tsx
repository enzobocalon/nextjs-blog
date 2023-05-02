import { useState, useCallback } from 'react';
import ReactPaginate from 'react-paginate';
import Article from '../Article';
import * as S from './styles';
import IPost from '@/types/Post';
import axios from 'axios';

import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { toast } from 'react-toastify';
import Loader from '../Loader';
import { useRouter } from 'next/router';

type Post = {
  fetchedPosts: IPost[];
  count: number
}

type PaginationEvent = {
  selected: number
}

export default function ArticlesGroup({fetchedPosts, count}: Post) {
	const [posts, setPosts] = useState<IPost[]>(fetchedPosts);
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handlePageChange = useCallback(async (event: PaginationEvent) => {
		setIsLoading(true);
		setCurrentPage(event.selected + 1);
		setPosts([]);
		try {
			const response = await axios.get(`http://localhost:3000/api/posts/get?page=${event.selected + 1}`);
			const page = response.data;

			setPosts(page.posts);
		} catch (error) {
			toast.error(error.response.data.message);
			setPosts([]);
		} finally {
			setIsLoading(false);
		}

	}, []);

	return (
		<S.Container>
			{
				isLoading && (
					<Loader />
				)
			}
			{

				posts.length > 0 ? (
					<>

						{
							posts.map((post: IPost, index: number) => (
								<Article
									post={post}
									major={index === 0 && currentPage === 1}
									key={post.id} />
							))
						}

						<ReactPaginate
							pageCount={Math.ceil(count/10)}
							nextLabel={<MdNavigateNext size={20}/>}
							previousLabel={<MdNavigateBefore size={20}/>}
							pageClassName='pagination-page'
							containerClassName='pagination'
							onPageChange={handlePageChange}
						/>
					</>
				) : (
					<>
						<div className="error">
							<h1>No posts found</h1>
							<h2>Try again later!</h2>
						</div>
					</>
				)
			}
		</S.Container>
	);
}
