import { useCallback, useState, useMemo, useEffect } from 'react';
import * as S from './styles';
import 'easymde/dist/easymde.min.css';

import dynamic from 'next/dynamic';
import { Button } from '../Button';
import { Input } from '../Input';
import { toast } from 'react-toastify';
import axios from 'axios';
import IPost from '@/types/Post';
import { useRouter } from 'next/router';
import Loader from '../Loader';
const SimpleMdeEditor = dynamic(
	() => import('react-simplemde-editor'),
	{ ssr: false }
);

interface Props {
  post?: {
    body: IPost | null,
    error: string | null
  }
}

export default function PostBox({ post }: Props) {
	const [value, setValue] = useState(post?.body?.content ?? '');
	const [postTitle, setPostTitle] = useState(post?.body?.title ?? '');
	const [imageBanner, setImageBanner] = useState(post?.body?.banner ?? '');
	const [allowedComments, setAllowedComments] = useState(post?.body?.allowComments ?? true);

	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();


	const onChange = useCallback((value: string) => {
		setValue(value);
	}, []);


	const autofocusNoSpellcheckerOptions = useMemo(() => {
		return {
			autofocus: true,
			spellChecker: false,
		};
	}, []);

	async function createPost() {
		if (!postTitle || !value) {
			toast.error('Title or content cannot be empty');
			return;
		}

		try {
			setIsLoading(true);
			const createdPost = await axios.post('/api/posts/create', {
				title: postTitle,
				banner: imageBanner,
				allowComments: allowedComments,
				content: value
			});

			toast.success(createdPost.data.message || 'Post created successfully');
			router.push(`/posts/${createdPost.data.post.id}`);
		} catch (error) {
			toast.error(error.response.data.message);
		} finally {
			setIsLoading(false);
		}
	}

	async function editPost() {
		if (!postTitle || !value) {
			toast.error('Title or content cannot be empty');
			return;
		}

		try {
			if (!post || !post.body) throw new Error('Invalid Post');
			setIsLoading(true);
			const updatedPost = await axios.post(`/api/posts/edit?id=${post.body.id}`, {
				title: postTitle,
				banner: imageBanner,
				allowComments: allowedComments,
				content: value
			});

			toast.success(updatedPost.data.message || 'Post updated successfully');
			router.push(`/posts/${updatedPost.data.post.id}`);
		} catch (error) {
			toast.error(error.response.data.message);
		} finally {
			setIsLoading(false);
		}
	}

	function handleSubmit() {
		if (post) {
			if (post.error) {
				toast.error(post.error);
				return;
			}
			editPost();
			return;
		}
		createPost();
	}

	useEffect(() => {
		if (post?.error) {
			toast.error(post.error);
		}
	}, [post]);

	return (
		<S.Container>
			<h1>Create new Post</h1>
			<Input
				type="text"
				placeholder="Post title"
				value={postTitle}
				onChange={(e) => setPostTitle(e.target.value)} />
			<h2>Image Banner URL</h2>
			<Input
				type="text"
				placeholder="Banner"
				value={imageBanner}
				onChange={(e) => setImageBanner(e.target.value)}/>
			<SimpleMdeEditor
				value={value}
				onChange={onChange}
				options={autofocusNoSpellcheckerOptions} />
			<S.EditorFooter>
				<S.OptionsContainer>
					<strong>Options</strong>
					<S.Options>
						<S.Option>
							<input
								type='checkbox'
								name='allowComments'
								id='allowComments'
								checked={allowedComments}
								onChange={(e) => setAllowedComments(e.target.checked)}/>
							<label htmlFor='allowComments'>Allow Comments?</label>
						</S.Option>
					</S.Options>
				</S.OptionsContainer>
				<Button onClick={handleSubmit}>
					{
						isLoading ? (
							<Loader small/>
						) : 'Post'
					}
				</Button>
			</S.EditorFooter>
		</S.Container>
	);
}
