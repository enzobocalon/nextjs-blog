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
	console.log(value);

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
			<SimpleMdeEditor
				value={value}
				onChange={onChange}
				options={autofocusNoSpellcheckerOptions} />
			<S.EditorFooter>
				<Button>
          Post
				</Button>
			</S.EditorFooter>
		</S.Container>
	);
}
