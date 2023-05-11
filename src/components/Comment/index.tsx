import IComment from '@/types/Comment';
import * as S from './styles';
import parseDate from '@/utils/parseDate';

import { MdMoreVert } from 'react-icons/md';
import Options from '../Options';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { useSession } from 'next-auth/react';
import { AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';

interface Props {
  commentData: IComment
  setComments: Dispatch<SetStateAction<IComment[] | null>>
}

export default function Comment({commentData, setComments}: Props) {
	const { data: session } = useSession();
	const [openOptions, setOpenOptions] = useState(false);

	const handleDelete = useCallback(async () => {
		try {
			const data = await axios.delete(`/api/comments/delete?id=${commentData.id}`);

			if (!data || !data.data) throw new Error();

			setComments(prevComments => {
				if (prevComments) {
					return prevComments.filter(currentComment => currentComment.id !== commentData.id);
				}
				return prevComments;
			});
			toast.success('Comment deleted successfully');
		} catch (error) {
			toast.error(error.response.data.message || 'Failed to delete comment');
		}
	}, [commentData.id, setComments]);

	return (
		<S.Container>
			<S.Wrapper>
				<S.Author>
					<strong>{commentData.author.name}</strong>
				</S.Author>
				<p>Published on {parseDate(commentData.createdAt)}</p>
				<S.CommentBody>
					{commentData.content}
				</S.CommentBody>
			</S.Wrapper>
			{
				((session?.id === commentData.authorId) || (session?.role === 'ADMIN') || (session?.id === commentData.post.authorId)) && (
					<>
						<MdMoreVert onClick={() => setOpenOptions(prev => !prev)}/>
						<AnimatePresence>
							{
								openOptions && (
									<Options onDelete={handleDelete}/>
								)
							}
						</AnimatePresence>
					</>
				)
			}
		</S.Container>
	);
}
