import * as S from './styles';
import placeholder from '../../assets/newsPlaceholder.jpg';
import IPost from '@/types/Post';
import parseDate from '@/utils/parseDate';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import CommentaryGroup from '../CommentaryGroup';
import { MdMoreVert } from 'react-icons/md';
import Options from '../Options';
import { useCallback, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast } from 'react-toastify';
interface IProps {
  post: IPost
}

export default function Post({post}: IProps) {
	const {data: session} = useSession();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const router = useRouter();
	const handleEdit = useCallback(() => {
		router.push(`/posts/create?edit=true&id=${post.id}`);
	}, [post.id, router]);

	const handleDelete = useCallback(async () => {
		try {
			const deletedPost = await axios.delete(`/api/posts/delete?id=${post.id}`);

			if (deletedPost.status === 201) {
				toast.success('Post deleted successfully');
				router.push('/');
			}
			return;
		} catch (e) {
			toast.error(e.response.data.message);
			return;
		}
	}, [post, router]);

	return (
		<S.Container>
			<S.HeaderContainer>
				{
					(session?.role === 'ADMIN' || (session?.role === 'AUTHOR' && post.author.id === session.id)) && (
						<S.PostActions>
							<MdMoreVert size={24} onClick={() => setIsMenuOpen(prev => !prev)}/>
							<AnimatePresence>
								{
									isMenuOpen && (
										<S.ActionsContainer>
											<Options onDelete={handleDelete} onEdit={handleEdit} isPost/>
										</S.ActionsContainer>
									)
								}
							</AnimatePresence>
						</S.PostActions>
					)
				}
				<S.ImageContainer>
					<img src={post.banner || placeholder.src} />
				</S.ImageContainer>
				<S.HeaderInfo>
					<p>{post.author.name}</p>
					<p>Published on {parseDate(post.createdAt)} {post.updatedAt !== post.createdAt && (
						<span>- Edited on {parseDate(post.updatedAt)}</span>
					)}</p>
					<h1>{post.title}</h1>
				</S.HeaderInfo>
			</S.HeaderContainer>
			<S.BodyContainer>
				<ReactMarkdown>
					{post.content}
				</ReactMarkdown>

				{
					post.allowComments ? (
						<CommentaryGroup postId={post.id}/>
					) : (
						<p style={{textAlign: 'center', marginTop: 16}}>Comments are disabled for this post</p>
					)
				}
			</S.BodyContainer>
		</S.Container>
	);
}
