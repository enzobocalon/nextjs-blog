import { useCallback, useState } from 'react';
import * as S from './styles';
import { Button } from '../Button';
import Comment from '../Comment';
import Modal from '../Modal';
import CreateComment from '../CreateComment';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';
import IComment from '@/types/Comment';
import Loader from '../Loader';

interface Props {
  postId: string;
}

export default function CommentaryGroup({ postId }: Props) {
	const [comments, setComments] = useState<IComment[] | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const { data: session } = useSession();

	async function handleComments() {
		try {
			setIsLoading(true);
			const data = await axios.get(`/api/comments/get?id=${postId}`);

			if (!data || !data.data) throw new Error();

			setComments(data.data);
		} catch (error) {
			toast.error(error.response.data.message || 'Failed to get comments');
		} finally {
			setIsLoading(false);
		}
	}

	const handleModal = useCallback(() => {
		setIsModalOpen(prev => !prev);
	}, []);

	return (
		<S.Container>
			{
				isLoading ? (
					<S.LoaderContainer>
						<Loader />
					</S.LoaderContainer>
				) : !comments ? (
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
						{
							comments.map((commentData: IComment) => (
								<Comment key={commentData.id} commentData={commentData}/>
							))
						}
					</>
				)
			}
		</S.Container>
	);
}
