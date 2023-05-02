import { useState } from 'react';
import * as S from './styles';
import { Button } from '../Button';
import Comment from '../Comment';

interface Props {
  postId: string;
}

export default function CommentaryGroup({ postId }: Props) {
	const [comments, setComments] = useState<number[]>([]);

	async function handleComments() {
		console.log(postId);
		// temp
		setComments(prev => {
			return [
				...prev,
				1
			];
		});
	}

	return (
		<S.Container>
			{
				comments.length === 0 ? (
					<p className='load' onClick={handleComments}>Load comments</p>
				) : (
					<>
						<S.GroupHeader>
							<h1>Comments</h1>
							<Button>Create Comment</Button>
						</S.GroupHeader>
						<Comment />
					</>
				)
			}
		</S.Container>
	);
}
