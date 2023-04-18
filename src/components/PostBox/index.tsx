import { useCallback, useState, useMemo } from 'react';
import * as S from './styles';
import 'easymde/dist/easymde.min.css';

import dynamic from 'next/dynamic';
import { Button } from '../Button';
const SimpleMdeEditor = dynamic(
	() => import('react-simplemde-editor'),
	{ ssr: false }
);

export default function PostBox() {
	const [value, setValue] = useState('**Hello world!!!**');

	const onChange = useCallback((value: string) => {
		setValue(value);
	}, []);

	const autofocusNoSpellcheckerOptions = useMemo(() => {
		return {
			autofocus: true,
			spellChecker: false,
		};
	}, []);
	return (
		<S.Container>
			<h1>Create new Post</h1>
			<input type="text" placeholder="Post title" />
			<SimpleMdeEditor
				value={value}
				onChange={onChange}
				options={autofocusNoSpellcheckerOptions} />
			<S.EditorFooter>
				<S.OptionsContainer>
					<strong>Options</strong>
					<S.Options>
						<S.Option>
							<input type='checkbox' name='allowComments' id='allowComments'/>
							<label htmlFor='allowComments'>Allow Comments?</label>
						</S.Option>
					</S.Options>
				</S.OptionsContainer>
				<Button>
          Post
				</Button>
			</S.EditorFooter>
		</S.Container>
	);
}
