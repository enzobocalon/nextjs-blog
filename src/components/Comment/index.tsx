import IComment from '@/types/Comment';
import * as S from './styles';
import parseDate from '@/utils/parseDate';

import { MdMoreVert } from 'react-icons/md';
import Options from '../Options';
import { useCallback, useState } from 'react';
import { useSession } from 'next-auth/react';
import { AnimatePresence } from 'framer-motion';

interface Props {
  commentData: IComment
}

export default function Comment({commentData}: Props) {
	const {data: session} = useSession();
	const [openOptions, setOpenOptions] = useState(false);

	const handleDelete = useCallback(() => {
		console.log('asd');
	}, []);

	console.log('commentData', commentData);
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
				session?.id === commentData.author.id && (
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
