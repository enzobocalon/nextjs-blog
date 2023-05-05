import { useState, useEffect, useRef } from 'react';
import { Button } from '../Button';
import * as S from './styles';

import { MdOutlineClose } from 'react-icons/md';
import Loader from '../Loader';
import { toast } from 'react-toastify';
import axios from 'axios';

interface Props {
  postId: string;
  handleModal: () => void;
}

export default function CreateComment({ postId, handleModal }: Props) {
	const [value, setValue] = useState('');
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const firstRender = useRef(true);

	async function createComment() {
		if (error) return;

		try {
			setIsLoading(true);
			const postComment = await axios.post(`/api/comments/create?id=${postId}`, {
				content: value
			});

			if (!postComment) throw new Error();

			toast.success('Comment created successfully');
		} catch (error) {
			toast.error(error.response.data.message || 'Error creating comment');
		} finally {
			setIsLoading(false);
			handleModal();
		}
	}

	useEffect(() => {
		// Should be working without the strict mode
		if (firstRender.current) {
			firstRender.current = false;
			setError('');
			return;
		}

		if (!value.length) {
			setError('Comment cannot be empty');
			return;
		}

		setError('');

	}, [value]);

	return (
		<S.Container>
			<S.Header>
				<h1>New Commentary</h1>
				<MdOutlineClose size={24} onClick={handleModal}/>
			</S.Header>

			<S.StyledTextarea
				placeholder='Your reply...'
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			{
				error && (
					<S.Error>{error}</S.Error>
				)
			}

			<Button onClick={createComment} disabled={isLoading}>{
				isLoading ? (
					<Loader />
				) : 'Submit'
			}</Button>

		</S.Container>
	);
}
