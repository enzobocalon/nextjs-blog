import Article from '../Article';
import * as S from './styles';

export default function ArticlesGroup() {
	return (
		<S.Container>
			<Article major/>
			<Article />
			<Article />
		</S.Container>
	);
}
