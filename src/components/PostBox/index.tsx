import { useCallback, useState, useMemo } from 'react';
import * as S from './styles';
import 'easymde/dist/easymde.min.css';

import dynamic from 'next/dynamic';
import { Button } from '../Button';
import { Input } from '../Input';
import { toast } from 'react-toastify';
const SimpleMdeEditor = dynamic(
	() => import('react-simplemde-editor'),
	{ ssr: false }
);

export default function PostBox() {
	const [value, setValue] = useState('**Hello world!!!**');
	const [postTitle, setPostTitle] = useState('');
	const [imageBanner, setImageBanner] = useState('');
	const [allowedComments, setAllowedComments] = useState(true);

	const onChange = useCallback((value: string) => {
		setValue(value);
	}, []);


	const autofocusNoSpellcheckerOptions = useMemo(() => {
		return {
			autofocus: true,
			spellChecker: false,
		};
	}, []);

	function createPost() {
		if (!postTitle || !value) {
			toast.error('Title or content cannot be empty');
			return;
		}

		// create request
	}

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
				<Button onClick={createPost}>
          Post
				</Button>
			</S.EditorFooter>
		</S.Container>
	);
}
