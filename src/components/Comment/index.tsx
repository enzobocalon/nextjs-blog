import IComment from '@/types/Comment';
import * as S from './styles';
import parseDate from '@/utils/parseDate';

interface Props {
  commentData: IComment
}

export default function Comment({commentData}: Props) {
	return (
		<S.Container>
			<S.Author>
				<strong>{commentData.author.name}</strong>
			</S.Author>
			<p>Published on {parseDate(commentData.createdAt)}</p>
			<S.CommentBody>
				{commentData.content}
			</S.CommentBody>
		</S.Container>
	);
}
