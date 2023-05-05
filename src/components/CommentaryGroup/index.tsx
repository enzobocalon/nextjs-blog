import { useCallback, useState } from 'react';
import * as S from './styles';
import { Button } from '../Button';
import Comment from '../Comment';
import Modal from '../Modal';
import CreateComment from '../CreateComment';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface Props {
  postId: string;
}

export default function CommentaryGroup({ postId }: Props) {
	const [comments, setComments] = useState<number[]>([]);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { data: session } = useSession();

	async function handleComments() {
		console.log(postId);

		setComments(prev => {
			return [
				...prev,
				1
			];
		});
	}

	const handleModal = useCallback(() => {
		setIsModalOpen(prev => !prev);
	}, []);

	return (
		<S.Container>
			{
				comments.length === 0 ? (
					<p className='load' onClick={handleComments}>Load comments</p>
				) : (
					<>
						<Modal open={isModalOpen}>
							<CreateComment postId={postId} handleModal={handleModal}/>
						</Modal>
						<S.GroupHeader>
							<h1>Comments</h1>
							{
								!session ? (
									<p>You must be <Link href={'/login'}>signed in</Link> to reply this post</p>
								) : (
									<Button onClick={() => setIsModalOpen((prev) => !prev)}>Create Comment</Button>
								)
							}
						</S.GroupHeader>
						<Comment />
					</>
				)
			}
		</S.Container>
	);
}
